'use server'

import OpenAI from 'openai'
import fs from 'fs/promises'
import path from 'path'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key',
})

async function getImageDataUrl(imagePath: string): Promise<string> {
  if (imagePath.startsWith('http') || imagePath.startsWith('https')) {
    return imagePath
  }

  // Remove leading slash if present to join correctly
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  const fullPath = path.join(process.cwd(), 'public', cleanPath)

  try {
    const imageBuffer = await fs.readFile(fullPath)
    const base64Image = imageBuffer.toString('base64')
    // Determine mime type based on extension
    const ext = path.extname(fullPath).toLowerCase()
    const mimeType = ext === '.png' ? 'image/png' : 'image/jpeg'
    return `data:${mimeType};base64,${base64Image}`
  } catch (error) {
    console.error(`Error reading image file: ${fullPath}`, error)
    // Fallback to placeholder if local file fails (e.g. in some environments)
    // or rethrow if strict. For now, let's log and return the path which might fail API validation but is safer than crashing.
    return imagePath
  }
}

export async function generateBabyDog(userDogImage: string, partnerDogImage: string) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      // Simulate delay for mock
      await new Promise(resolve => setTimeout(resolve, 3000))
      return {
        success: true,
        imageUrl: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=800&q=80' // A cute puppy
      }
    }

    const userImageUrl = await getImageDataUrl(userDogImage)
    const partnerImageUrl = await getImageDataUrl(partnerDogImage)

    // Step 1: Analyze the parents to get a description for the baby
    const descriptionResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "These are two dogs. Describe what a cute puppy would look like if these two dogs had a baby. Focus on visual traits like coat color, ear shape, and size. Keep the description concise and suitable for an image generation prompt. Ensure that the image generation prompt makes the output image very realistic and not cartoon/animated at all." },
            {
              type: "image_url",
              image_url: {
                "url": userImageUrl,
              },
            },
            {
              type: "image_url",
              image_url: {
                "url": partnerImageUrl,
              },
            },
          ],
        },
      ],
    });    const description = descriptionResponse.choices[0].message.content || "A cute mixed breed puppy";

    // Step 2: Generate the baby dog image
    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: `A photo of a cute puppy: ${description}. High quality, realistic.`,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = imageResponse.data?.[0]?.url;
    if (!imageUrl) throw new Error("No image generated");

    return { success: true, imageUrl }

  } catch (error) {
    console.error('Error generating baby dog:', error)
    return { success: false, error: 'Failed to generate image' }
  }
}

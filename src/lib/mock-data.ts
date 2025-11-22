export const MOCK_USER_ID = 'mock-user-123'
export const MOCK_DOG_ID = 'mock-dog-123'

export const MOCK_DOGS = [
  {
    id: 'dog-1',
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
    bio: 'Loves tennis balls and long walks on the beach. Looking for a playdate!',
    photos: ['https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'],
    user_id: 'user-2'
  },
  {
    id: 'dog-2',
    name: 'Luna',
    breed: 'Husky',
    age: 2,
    bio: 'Very vocal and loves to run. Need someone who can keep up!',
    photos: ['https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80'],
    user_id: 'user-3'
  },
  {
    id: 'dog-3',
    name: 'Scooby Doo',
    breed: 'Great Dane',
    age: 7,
    bio: 'Ruh-roh! Looking for snacks and solving mysteries.',
    photos: ['/scooby.jpg'],
    user_id: 'user-scooby'
  },
  {
    id: 'dog-4',
    name: 'Daisy',
    breed: 'Beagle',
    age: 1,
    bio: 'Everything smells amazing! Let\'s go sniff some trees together.',
    photos: ['https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80'],
    user_id: 'user-5'
  },
  {
    id: 'dog-5',
    name: 'Max',
    breed: 'German Shepherd',
    age: 5,
    bio: 'Loyal and protective. Looking for a smart partner in crime.',
    photos: ['https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80'],
    user_id: 'user-6'
  }
]

export const MOCK_MY_DOG = {
    id: MOCK_DOG_ID,
    user_id: MOCK_USER_ID,
    name: 'Snoopy',
    breed: 'Beagle',
    age: 8,
    size: 'Medium',
    personality: 'World-class napper & philosopher',
    bio: 'World-class napper, backyard explorer, and part-time philosopher. I love making new friends, sharing treats, and wagging my tail like there\'s no tomorrow. If you\'re looking for a happy, easygoing buddy who\'s always up for fun… you\'ve found him. 🐶',
    photos: ['/snoopy.jpeg'],
    hobbies: [
        'Chasing balls at top speed',
        'Sniffing absolutely everything',
        'Judging squirrels (politely)',
        'Exploring new parks',
        'Random zoomies',
        'Dramatic naps in sunbeams'
    ],
    favoriteTreat: 'Peanut butter bones',
    lookingFor: [
        'Play buddies, chill hangout pals, and adventure partners who don\'t judge me for barking at leaves and shadows. Must appreciate good cuddles and snack breaks.'
    ],
    funFact: 'My tail wags at 200 wags per minute when I meet new friends. Side effects may include excessive joy.',
    tags: ['napper', 'explorer', 'philosopher', 'friendly', 'easygoing', 'adventurous'],
    gallery: {
        photos: [
            { url: '/snoopy/snoopy1.webp', caption: 'My weekend adventure face 😎' },
            { url: '/snoopy/snoopy2.heic', caption: 'Guess who\'s the goodest boy? 👀' },
            { url: '/snoopy/snoopy3.heic', caption: 'Catching sunshine, catching vibes ☀️' },
            { url: '/snoopy/snoopy4.heic', caption: 'Outfit of the day? Always fabulous.' },
            { url: '/snoopy/snoopy5.heic', caption: 'Smiles powered by treats and belly rubs 💛' },
            { url: '/snoopy/snoopy6.webp', caption: 'Ready for zoomies in 3… 2… 1… 🚀' }
        ],
        videos: [
            { url: '/snoopy/snoopyvid1.mp4', caption: 'Snoopy Speed: Zoomies Edition' },
            { url: '/snoopy/snoopyvid2.mp4', caption: 'Warning: Tail wag overload 🐕💥' },
            { url: '/snoopy/snoopyvid3.mp4', caption: 'Caught on camera: Maximum cuteness achieved' }
        ]
    }
}

export const MOCK_MATCHES = [
    {
        id: 'match-1',
        dog_a: MOCK_MY_DOG,
        dog_b: MOCK_DOGS[0]
    },
    {
        id: 'match-scooby',
        dog_a: MOCK_MY_DOG,
        dog_b: MOCK_DOGS[2] // Scooby
    }
]

export const MOCK_MESSAGES = [
    {
        id: 'msg-1',
        match_id: 'match-1',
        sender_id: 'user-2',
        content: 'Woof! (Hi!)',
        created_at: new Date().toISOString()
    },
    {
        id: 'msg-2',
        match_id: 'match-1',
        sender_id: MOCK_USER_ID,
        content: 'Bork bork! (Hey there!)',
        created_at: new Date().toISOString()
    }
]

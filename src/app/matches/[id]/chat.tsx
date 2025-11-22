'use client'
import { useState, useEffect, useRef } from 'react'
import { Send } from 'lucide-react'
import Script from 'next/script'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'agent-id': string };
        }
    }
}

export function Chat({ matchId, userId, initialMessages, isScooby }: { matchId: string, userId: string, initialMessages: any[], isScooby: boolean }) {
    const [messages, setMessages] = useState(initialMessages)
    const [newMessage, setNewMessage] = useState('')
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim()) return

        const content = newMessage
        setNewMessage('') 
        
        const newMsg = {
            id: Date.now().toString(),
            match_id: matchId,
            sender_id: userId,
            content,
            created_at: new Date().toISOString()
        }
        setMessages(prev => [...prev, newMsg])

        if (!isScooby) {
            // Mock reply for other dogs
            setTimeout(() => {
                const replyMsg = {
                    id: (Date.now() + 1).toString(),
                    match_id: matchId,
                    sender_id: 'other-user',
                    content: 'Woof woof! (That sounds great!)',
                    created_at: new Date().toISOString()
                }
                setMessages(prev => [...prev, replyMsg])
            }, 1500)
        } else {
             // Mock reply for Scooby
             setTimeout(() => {
                const replyMsg = {
                    id: (Date.now() + 1).toString(),
                    match_id: matchId,
                    sender_id: 'other-user', // Scooby's owner
                    content: 'Ruh-roh! Thanks for the message!',
                    created_at: new Date().toISOString()
                }
                setMessages(prev => [...prev, replyMsg])
            }, 1500)
        }
    }

    if (isScooby) {
        // Scooby behaves like normal text chat now
        // We can add custom reply logic here if needed, but UI should be standard chat
    }

    return (
        <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-pink-50/30">
                {messages.map((msg) => {
                    const isMe = msg.sender_id === userId
                    return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${isMe ? 'bg-pink-500 text-white rounded-br-none shadow-md shadow-pink-200' : 'bg-white text-gray-800 shadow-sm border border-pink-100 rounded-bl-none'}`}>
                                {msg.content}
                            </div>
                        </div>
                    )
                })}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendMessage} className="p-4 bg-white border-t border-pink-100 flex gap-2 shrink-0 shadow-lg shadow-pink-100/50">
                <input 
                    type="text" 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..." 
                    className="flex-1 rounded-full border-pink-200 border px-4 py-2 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-gray-800 placeholder-pink-300 transition-all"
                />
                <button type="submit" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 active:scale-95 transition-all shadow-md shadow-pink-200 cursor-pointer">
                    <Send size={20} />
                </button>
            </form>
        </>
    )
}

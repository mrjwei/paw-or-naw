export const MOCK_USER_ID = 'mock-user-123'
export const MOCK_DOG_ID = 'mock-dog-123'

export const MOCK_DOGS = [
  {
    id: 'dog-1',
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
    bio: 'Loves tennis balls and long walks on the beach. Looking for a playdate!',
    photos: ['/golden1.avif'],
    user_id: 'user-2'
  },
  {
    id: 'dog-2',
    name: 'Luna',
    breed: 'Husky',
    age: 2,
    bio: 'Very vocal and loves to run. Need someone who can keep up!',
    photos: ['/husky1.avif'],
    user_id: 'user-3'
  },
  {
    id: 'dog-3',
    name: 'Scooby Doo',
    breed: 'Great Dane',
    age: 7,
    bio: 'Ruh-roh! Looking for snacks and solving mysteries.',
    photos: ['/doo1.jpg'], 
    user_id: 'user-scooby'
  },
  {
    id: 'dog-4',
    name: 'Daisy',
    breed: 'Pug',
    age: 1,
    bio: 'Everything smells amazing! Let\'s go sniff some trees together.',
    photos: ['/pug1.avif'],
    user_id: 'user-5'
  },
  {
    id: 'dog-5',
    name: 'Max',
    breed: 'Golden Retriever',
    age: 5,
    bio: 'Loyal and protective. Looking for a smart partner in crime.',
    photos: ['/golden2.avif'],
    user_id: 'user-6'
  }
]

export const MOCK_MY_DOG = {
    id: MOCK_DOG_ID,
    user_id: MOCK_USER_ID,
    name: 'Snoopy',
    breed: 'Beagle',
    age: 8,
    bio: 'Writer, pilot, and Joe Cool.',
    photos: ['/snoopy1.webp']
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

export const MOCK_COMMENTS = [
    {
        id: 'comment-1',
        from_dog: MOCK_DOGS[1], // Luna
        message: 'Your profile looks pawsome! 🐾',
        created_at: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
    },
    {
        id: 'comment-2',
        from_dog: MOCK_DOGS[3], // Daisy
        message: 'Would love to go on a walk together!',
        created_at: new Date(Date.now() - 7200000).toISOString() // 2 hours ago
    }
]

export const MOCK_LIKES = [
    {
        id: 'like-1',
        dog: MOCK_DOGS[1] // Luna
    },
    {
        id: 'like-2',
        dog: MOCK_DOGS[3] // Daisy
    },
    {
        id: 'like-3',
        dog: MOCK_DOGS[4] // Max
    }
]

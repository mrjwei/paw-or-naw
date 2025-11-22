export const MOCK_USER_ID = 'mock-user-123'
export const MOCK_DOG_ID = 'mock-dog-123'

export const MOCK_DOGS = [
  {
    id: 'dog-1',
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
    size: 'Large',
    favoriteTreat: 'Tennis ball-shaped cookies',
    bio: 'Loves tennis balls and long walks on the beach. Looking for a playdate!',
    photos: ['/golden1.avif', '/golden2.avif', '/golden3.avif'],
    user_id: 'user-2'
  },
  {
    id: 'dog-2',
    name: 'Luna',
    breed: 'Husky',
    age: 2,
    size: 'Large',
    favoriteTreat: 'Frozen salmon bites',
    bio: 'Very vocal and loves to run. Need someone who can keep up!',
    photos: ['/husky1.avif', '/husky2.avif', '/husky3.avif'],
    user_id: 'user-3'
  },
  {
    id: 'dog-3',
    name: 'Scooby Doo',
    breed: 'Great Dane',
    age: 7,
    size: 'Extra Large',
    favoriteTreat: 'Scooby Snacks',
    bio: 'Ruh-roh! Looking for snacks and solving mysteries.',
    photos: ['/doo1.jpg', '/doo1.jpg', '/doo1.jpg'],
    user_id: 'user-scooby'
  },
  {
    id: 'dog-4',
    name: 'Daisy',
    breed: 'Pug',
    age: 1,
    size: 'Small',
    favoriteTreat: 'Bacon strips',
    bio: 'Everything smells amazing! Let\'s go sniff some trees together.',
    photos: ['/pug1.avif', '/pug2.avif', '/pug3.avif'],
    user_id: 'user-5'
  },
  {
    id: 'dog-5',
    name: 'Max',
    breed: 'Golden Retriever',
    age: 5,
    size: 'Large',
    favoriteTreat: 'Beef jerky',
    bio: 'Loyal and protective. Looking for a smart partner in crime.',
    photos: ['/golden4.avif', '/golden5.avif', '/golden6.avif'],
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
    photos: ['/snoopy1.webp'],
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

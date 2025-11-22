export interface GalleryPhoto {
  url: string;
  caption: string;
}

export interface GalleryVideo {
  url: string;
  caption: string;
}

export interface Dog {
  id: string;
  user_id: string;
  name: string;
  breed: string;
  age: number;
  size: string;
  bio: string;
  photos: string[];
  favoriteTreat?: string;
  personality?: string;
  hobbies?: string[];
  lookingFor?: string[];
  funFact?: string;
  tags?: string[];
  gallery?: {
    photos: GalleryPhoto[];
    videos: GalleryVideo[];
  };
}

export interface Match {
  id: string;
  dog_a: Dog;
  dog_b: Dog;
}

export interface Message {
  id: string;
  match_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

export interface Comment {
  id: string;
  from_dog: Dog;
  message: string;
  created_at: string;
}

export interface Like {
  id: string;
  dog: Dog;
}

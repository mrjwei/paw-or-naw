"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface CurrentDogContextType {
  currentDogMatchId: string | null;
  setCurrentDogMatchId: (id: string | null) => void;
}

const CurrentDogContext = createContext<CurrentDogContextType | undefined>(undefined);

export function CurrentDogProvider({ children }: { children: ReactNode }) {
  const [currentDogMatchId, setCurrentDogMatchId] = useState<string | null>(null);

  return (
    <CurrentDogContext.Provider value={{ currentDogMatchId, setCurrentDogMatchId }}>
      {children}
    </CurrentDogContext.Provider>
  );
}

export function useCurrentDog() {
  const context = useContext(CurrentDogContext);
  if (context === undefined) {
    throw new Error('useCurrentDog must be used within a CurrentDogProvider');
  }
  return context;
}

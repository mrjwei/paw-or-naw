import Image from "next/image";

interface IconProps {
  className?: string;
  filled?: boolean;
}

export function ProfileIcon({ className, filled = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/dog_profile.png"
        alt="Dog Profile"
        width={24}
        height={24}
        className={`rounded-full object-cover transition-all duration-200 ${
          filled 
            ? "ring-2 ring-current ring-offset-1" 
            : "opacity-60 grayscale"
        }`}
        style={{ width: '24px', height: '24px' }}
      />
    </div>
  );
}

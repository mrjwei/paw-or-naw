interface IconProps {
  className?: string;
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.5 17.5C24.5 18.163 24.2366 18.7989 23.7678 19.2678C23.2989 19.7366 22.663 20 22 20H8.5L3.5 25V6C3.5 5.33696 3.76339 4.70107 4.23223 4.23223C4.70107 3.76339 5.33696 3.5 6 3.5H22C22.663 3.5 23.2989 3.76339 23.7678 4.23223C24.2366 4.70107 24.5 5.33696 24.5 6V17.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

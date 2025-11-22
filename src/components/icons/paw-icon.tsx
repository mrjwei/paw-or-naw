interface IconProps {
  className?: string;
  filled?: boolean;
}

export function PawIcon({ className, filled = false }: IconProps) {
  if (filled) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Main pad */}
        <ellipse cx="12" cy="16" rx="4.5" ry="3.5" fill="currentColor" />
        {/* Top left toe */}
        <ellipse cx="6.5" cy="9" rx="2" ry="2.5" fill="currentColor" />
        {/* Top middle-left toe */}
        <ellipse cx="10" cy="6.5" rx="2" ry="2.5" fill="currentColor" />
        {/* Top middle-right toe */}
        <ellipse cx="14" cy="6.5" rx="2" ry="2.5" fill="currentColor" />
        {/* Top right toe */}
        <ellipse cx="17.5" cy="9" rx="2" ry="2.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main pad */}
      <ellipse
        cx="12"
        cy="16"
        rx="4.5"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top left toe */}
      <ellipse
        cx="6.5"
        cy="9"
        rx="2"
        ry="2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top middle-left toe */}
      <ellipse
        cx="10"
        cy="6.5"
        rx="2"
        ry="2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top middle-right toe */}
      <ellipse
        cx="14"
        cy="6.5"
        rx="2"
        ry="2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top right toe */}
      <ellipse
        cx="17.5"
        cy="9"
        rx="2"
        ry="2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

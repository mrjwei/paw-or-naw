"use client";

import { usePathname, useRouter } from "next/navigation";
import { HomeIcon } from "./icons/home-icon";
import { HeartIcon } from "./icons/heart-icon";
import { ChatIcon } from "./icons/chat-icon";
import { PawIcon } from "./icons/paw-icon";
import { ProfileIcon } from "./icons/profile-icon";

interface NavItemProps {
  icon: "home" | "heart" | "paw" | "profile";
  label: string;
  href: string;
  badge?: number;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, isActive, onClick, badge }: NavItemProps) {
  const iconMap = {
    home: HomeIcon,
    heart: HeartIcon,
    paw: PawIcon,
    profile: ProfileIcon,
  };

  const colorMap = {
    home: "text-[#FF6B6B]",
    heart: "text-[#EC4899]",
    paw: "text-[#8B5CF6]",
    profile: "text-[#10B981]",
  };

  const Icon = iconMap[icon];
  const activeColor = colorMap[icon];

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center relative tap-target group"
      aria-label={label}
    >
      <div className="relative transition-transform duration-100 ease-out group-active:scale-95">
        <Icon
          className={`transition-colors duration-200 ${
            isActive ? activeColor : "text-[#9CA3AF]"
          }`}
          filled={isActive}
        />
        {badge !== undefined && badge > 0 && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
        )}
      </div>
      <span
        className={`text-[10px] font-medium mt-1 transition-colors duration-200 ${
          isActive ? activeColor : "text-[#9CA3AF]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

interface CenterButtonProps {
  onClick: () => void;
}

function CenterButton({ onClick }: CenterButtonProps) {
  return (
    <div className="flex flex-col items-center justify-start -mt-4">
      <button
        onClick={onClick}
        className="center-button w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB347] to-[#FF8C42] 
                   shadow-[0_4px_12px_rgba(255,140,66,0.35)] 
                   border-4 border-white 
                   flex items-center justify-center
                   transition-all duration-150 ease-out
                   active:scale-92 active:shadow-[0_2px_8px_rgba(255,140,66,0.4)]
                   animate-float"
        aria-label="Talk"
      >
        <ChatIcon className="text-white" />
      </button>
      <span className="text-[11px] font-semibold text-[#FF8C42] mt-2">
        Talk
      </span>
    </div>
  );
}

export function FooterNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems: Array<{
    icon: "home" | "heart" | "paw" | "profile";
    label: string;
    href: string;
    badge?: number;
  }> = [
    { icon: "home", label: "Home", href: "/" },
    { icon: "heart", label: "Likes", href: "/likes", badge: 0 },
    { icon: "paw", label: "Matches", href: "/matches", badge: 0 },
    { icon: "profile", label: "Profile", href: "/profile" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <footer className="footer-nav fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-[#F0F0F0] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] rounded-t-[20px] pb-safe z-50">
      <nav className="h-full px-4 flex items-center justify-around">
        <NavItem
          {...navItems[0]}
          isActive={pathname === navItems[0].href}
          onClick={() => handleNavigation(navItems[0].href)}
        />
        <NavItem
          {...navItems[1]}
          isActive={pathname === navItems[1].href}
          onClick={() => handleNavigation(navItems[1].href)}
        />
        <CenterButton onClick={() => handleNavigation("/matches")} />
        <NavItem
          {...navItems[2]}
          isActive={pathname === navItems[2].href}
          onClick={() => handleNavigation(navItems[2].href)}
        />
        <NavItem
          {...navItems[3]}
          isActive={pathname === navItems[3].href}
          onClick={() => handleNavigation(navItems[3].href)}
        />
      </nav>
    </footer>
  );
}

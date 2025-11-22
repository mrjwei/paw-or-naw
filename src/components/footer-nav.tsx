"use client";

import { usePathname, useRouter } from "next/navigation";
import { HomeIcon } from "./icons/home-icon";
import { HeartIcon } from "./icons/heart-icon";
import { ChatIcon } from "./icons/chat-icon";
import { PawIcon } from "./icons/paw-icon";
import { ProfileIcon } from "./icons/profile-icon";
import { useCurrentDog } from "@/lib/current-dog-context";

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
    home: "text-[#EC4899]",
    heart: "text-[#EC4899]",
    paw: "text-[#EC4899]",
    profile: "text-[#EC4899]",
  };

  const Icon = iconMap[icon];
  const activeColor = colorMap[icon];

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center relative tap-target group w-14 cursor-pointer"
      aria-label={label}
    >
      <div className="relative transition-all duration-300 ease-out group-active:scale-90 group-hover:-translate-y-1">
        <Icon
          className={`transition-colors duration-300 w-6 h-6 ${
            isActive ? activeColor : "text-[#9CA3AF] group-hover:text-[#F472B6]"
          }`}
          filled={isActive}
        />
        {badge !== undefined && badge > 0 && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#EC4899] rounded-full animate-bounce" />
        )}
      </div>
      <span
        className={`text-[10px] font-medium mt-1 transition-all duration-300 ${
          isActive ? activeColor : "text-[#9CA3AF] group-hover:text-[#F472B6]"
        }`}
      >
        {label}
      </span>
      {isActive && (
        <div className="absolute -bottom-2 w-1 h-1 bg-[#EC4899] rounded-full" />
      )}
    </button>
  );
}

interface CenterButtonProps {
  onClick: () => void;
}

function CenterButton({ onClick }: CenterButtonProps) {
  return (
    <div className="flex flex-col items-center justify-start -mt-6 relative z-10">
      <button
        onClick={onClick}
        className="center-button w-14 h-14 rounded-full bg-gradient-to-br from-[#EC4899] to-[#DB2777] 
                   shadow-[0_4px_12px_rgba(236,72,153,0.35)] 
                   border-4 border-white 
                   flex items-center justify-center
                   transition-all duration-300 ease-out
                   hover:scale-110 hover:shadow-[0_6px_16px_rgba(236,72,153,0.4)]
                   active:scale-95 active:shadow-[0_2px_8px_rgba(236,72,153,0.4)]
                   group cursor-pointer"
        aria-label="Message"
      >
        <ChatIcon className="text-white w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
      </button>
      <span className="text-[11px] font-semibold text-[#EC4899] mt-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Message
      </span>
    </div>
  );
}

export function FooterNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentDogMatchId } = useCurrentDog();

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

  const handleMessageClick = () => {
    if (currentDogMatchId) {
      // Navigate to direct chat with the current dog
      router.push(`/matches/${currentDogMatchId}`);
    } else {
      // Fallback to general chat/messages page
      router.push("/chat");
    }
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
        <CenterButton onClick={handleMessageClick} />
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

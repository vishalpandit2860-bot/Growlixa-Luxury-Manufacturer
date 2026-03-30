import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/data/siteConfig";

const socials = [
  { Icon: FaInstagram, url: siteConfig.social.instagram, color: "#E4405F", label: "Instagram" },
  { Icon: FaFacebook, url: siteConfig.social.facebook, color: "#1877F2", label: "Facebook" },
  { Icon: FaLinkedin, url: siteConfig.social.linkedin, color: "#0A66C2", label: "LinkedIn" },
  { Icon: FaXTwitter, url: siteConfig.social.twitter, color: "#fff", label: "X (Twitter)" },
  { Icon: FaYoutube, url: siteConfig.social.youtube, color: "#FF0000", label: "YouTube" },
];

interface SocialIconsProps {
  size?: number;
  circleSize?: string;
  className?: string;
}

const SocialIcons = ({ size = 18, circleSize = "w-[42px] h-[42px]", className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ Icon, url, color, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${circleSize} rounded-full border border-border/50 flex items-center justify-center text-silver/60 transition-all duration-300 hover:border-transparent hover:-translate-y-0.5`}
          style={{ ["--hover-bg" as string]: color }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = color;
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLElement).style.color = "";
          }}
          aria-label={label}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

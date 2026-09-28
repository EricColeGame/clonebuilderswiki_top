export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Clone Builders Wiki",
  shortName: "Clone Builders",
  logoText: "CB",
  tagline: "Building Guides, Clone Mechanics & Sandbox Tips",
  description: "Your ultimate guide to Clone Builders on Roblox! Explore clone building mechanics, construction tips, build ideas, controls, updates, and community information for creating better structures.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://clonebuilderswiki.top",
  supportEmail: "support@clonebuilderswiki.top",
  gameUrl: "https://www.roblox.com/games/98456203230140/CLONE-BUILDERS",
  heroVideoId: "16mBB-KKPWA", // How to Play Clone Builders Roblox Full Guide (gameplay tutorial)
  social: {
    // 00基础信息.md lists official Discord / Reddit / Trailer as 待补充. To avoid fabricating
    // "Official Discord" style links, these point at verified, reachable Clone Builders entries:
    //   1) Synoptic Interactive (developer) official Roblox Group (verified 200)
    //   2) YouTube gameplay video search for the game
    discord: "https://www.roblox.com/communities/2713252/Synoptic-Interactive",
    youtube: "https://www.youtube.com/results?search_query=Clone+Builders+Roblox+gameplay",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};

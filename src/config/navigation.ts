import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

// Navigation is intentionally emptied for the new site; content types will be
// rebuilt in a later part.
export const NAVIGATION_CONFIG = [] as NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

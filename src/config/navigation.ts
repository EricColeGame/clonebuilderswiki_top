import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Blocks,
  TrendingUp,
  Gamepad2,
  Package,
  Ticket,
  Map,
  Users,
} from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// Navigation categories mirror the keyword clusters in 关键词.json and the
// article directories under content/<locale>/. Each item carries both `key`
// (translation key) and `path` (URL slug); consumers read item.path for links
// and item.key for translated labels, so both fields must stay in sync.
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Blocks, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "modes", path: "/modes", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

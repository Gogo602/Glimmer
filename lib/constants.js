

import { LayoutDashboard, Settings, Users, CreditCard } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiAiGenerate, RiAiGenerateText, RiSave2Fill} from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";







export const USER_NAV_ITEMS = [
  { label: "Overview", href: "/user/dashboard", icon: MdDashboard },
  { label: "Generate Banner", href: "/user/generate-banner", icon: RiAiGenerate },
  { label: "Generate Bio", href: "/user/generate-bio", icon: RiAiGenerateText },
  { label: "Saved Designs", href: "/user/saved-designs", icon: RiSave2Fill },
  { label: "Profile", href: "/user/profile", icon: FaUserEdit },
  { label: "Settings", href: "/user/settings", icon: IoMdSettings },
  { label: "Logout", href: "/user/logout", icon: RiLogoutCircleFill },
];

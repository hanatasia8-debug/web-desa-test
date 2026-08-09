import React from "react";
import {
  Search,
  SearchX,
  X,
  Menu,
  Home,
  MapPin,
  Store,
  Newspaper,
  Calendar,
  Clock,
  Filter,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Edit3,
  Trash2,
  Plus,
  PlusCircle,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Info,
  AlertTriangle,
  AlertCircle,
  Upload,
  Download,
  Share2,
  Phone,
  Mail,
  Link as LinkIcon,
  RefreshCw,
  User,
  UserPlus,
  Users,
  Settings,
  LayoutDashboard,
  Network,
  UserCheck,
  LogOut,
  Send,
  Bookmark,
  Target,
  Flag,
  Image as ImageIcon,
  ImagePlus,
  FileImage,
  Map as MapIcon,
  Layers,
  Star,
  Lock,
  Shield,
  Sparkles,
  GraduationCap,
  Building2,
  Building,
  Landmark,
  Leaf,
  Sprout,
  Trees,
  Fish,
  Mountain,
  Theater,
  Wrench,
  Package,
  ShoppingBag,
  Camera,
  MessageSquare,
  Globe,
  Contact,
  ExternalLink,
  Navigation,
  TrendingUp,
  HeartPulse,
  FileEdit,
  HelpCircle,
  LucideProps,
} from "lucide-react";
import { cn } from "@/shared/utils/cn";

interface IconProps {
  /** Icon name ligature, e.g. "search", "storefront", "calendar_today". */
  name: string;
  className?: string;
  /** Kept for backwards compatibility with legacy Material Symbols filled prop. */
  filled?: boolean;
}

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  // Navigation & Directional
  search: Search,
  search_off: SearchX,
  close: X,
  cancel: X,
  clear: X,
  menu: Menu,
  home: Home,
  chevron_right: ChevronRight,
  chevron_left: ChevronLeft,
  arrow_back: ArrowLeft,
  arrow_forward: ArrowRight,
  arrow_right_alt: ArrowRight,
  expand_more: ChevronDown,
  keyboard_arrow_down: ChevronDown,
  expand_less: ChevronUp,
  keyboard_arrow_up: ChevronUp,
  open_in_new: ExternalLink,
  directions: Navigation,

  // Action & Edit
  edit: Edit3,
  edit_note: Edit3,
  edit_square: FileEdit,
  delete: Trash2,
  delete_forever: Trash2,
  add: Plus,
  plus: Plus,
  add_circle: PlusCircle,
  check: Check,
  check_circle: CheckCircle2,
  task_alt: CheckCircle2,
  verified: CheckCircle2,
  assignment_turned_in: ClipboardCheck,
  send: Send,
  upload: Upload,
  upload_file: Upload,
  download: Download,
  share: Share2,
  link: LinkIcon,
  sync: RefreshCw,
  refresh: RefreshCw,
  save: FileEdit,

  bookmark: Bookmark,
  target: Target,
  flag: Flag,
  eco: Leaf,
  insights: TrendingUp,

  // Media & View
  visibility: Eye,
  eye: Eye,
  visibility_off: EyeOff,
  image: ImageIcon,
  add_a_photo: Camera,
  add_photo_alternate: ImagePlus,
  collections: FileImage,
  newspaper: Newspaper,
  article: Newspaper,

  // Location & Places
  location_on: MapPin,
  pin_drop: MapPin,
  place: MapPin,
  map: MapIcon,
  storefront: Store,
  store: Store,
  layers: Layers,
  location_city: Landmark,
  account_balance: Landmark,

  // Potensi Categories
  agriculture: Sprout,
  pertanian: Sprout,
  forest: Trees,
  perkebunan: Trees,
  park: Trees,
  pets: HeartPulse,
  peternakan: HeartPulse,
  set_meal: Fish,
  perikanan: Fish,
  landscape: Mountain,
  pariwisata: Mountain,
  theater_comedy: Theater,
  kebudayaan: Theater,
  handyman: Wrench,
  kerajinan: Wrench,
  inventory_2: Package,
  shopping_bag: ShoppingBag,

  // Categories & Buildings
  ibadah: Building,
  mosque: Building,
  kantor_desa: Building2,
  kesehatan: HeartPulse,
  medical_services: HeartPulse,
  pemerintahan: Building2,
  pendidikan: GraduationCap,
  school: GraduationCap,
  wisata: Sparkles,

  // Info & Status
  info: Info,
  info_outline: Info,
  warning: AlertTriangle,
  gavel: AlertTriangle,
  error: AlertCircle,
  star: Star,
  lock: Lock,
  shield: Shield,

  // People & User
  user: User,
  person: User,
  account_circle: User,
  person_add: UserPlus,
  group: Users,
  groups: Users,
  people: Users,
  family_restroom: Users,
  assignment_ind: UserCheck,

  // Communication & Social
  chat: MessageSquare,
  message: MessageSquare,
  phone: Phone,
  call: Phone,
  email: Mail,
  mail: Mail,
  contact_mail: Contact,
  language: Globe,

  // Date & Time
  calendar_today: Calendar,
  event: Calendar,
  schedule: Clock,
  clock: Clock,

  // System & Admin
  filter_list: Filter,
  tune: Settings,
  settings: Settings,
  dashboard: LayoutDashboard,
  schema: Network,
  logout: LogOut,
};

/**
 * High-performance Lucide React Icon wrapper.
 * Replaces Material Symbols Webfont with lightweight inline SVGs.
 */
export function Icon({ name, className, filled = false }: IconProps) {
  const IconComponent = ICON_MAP[name] || HelpCircle;

  return (
    <IconComponent
      className={cn(
        "inline-block shrink-0 transition-colors",
        filled && "fill-current",
        className,
      )}
      aria-hidden="true"
    />
  );
}

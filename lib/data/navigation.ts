import type { LucideIcon } from 'lucide-react'
import { BookOpen, BriefcaseBusiness, Home, Mail, UserRound } from 'lucide-react'

export type NavItem = {
  href: string
  label: string
  terminal: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', terminal: 'cd /', icon: Home },
  { href: '/about', label: 'About', terminal: 'open /about', icon: UserRound },
  { href: '/projects', label: 'Projects', terminal: 'open /projects', icon: BriefcaseBusiness },
  { href: '/blog', label: 'Blog', terminal: 'open /blog', icon: BookOpen },
  { href: '/contact', label: 'Contact', terminal: 'open /contact', icon: Mail },
]

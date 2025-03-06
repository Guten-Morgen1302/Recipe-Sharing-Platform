"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <span className="text-purple-600">Flavor</span>
            <span className="text-pink-500">Fusion</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/flavors">Flavors</NavLink>
            <NavLink href="/recipes">Recipes</NavLink>
            <NavLink href="/flavor-lab">Flavor Lab</NavLink>
            <NavLink href="/community">Community</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search flavors..."
                className="w-[200px] md:w-[300px] bg-purple-50 border-purple-200 focus:border-purple-500"
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white md:hidden"
        >
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
              <span className="text-purple-600">Flavor</span>
              <span className="text-pink-500">Fusion</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="px-4 py-6">
            <MobileNavLink href="/flavors" onClick={() => setIsMenuOpen(false)}>
              Flavors
            </MobileNavLink>
            <MobileNavLink href="/recipes" onClick={() => setIsMenuOpen(false)}>
              Recipes
            </MobileNavLink>
            <MobileNavLink href="/flavor-lab" onClick={() => setIsMenuOpen(false)}>
              Flavor Lab
            </MobileNavLink>
            <MobileNavLink href="/community" onClick={() => setIsMenuOpen(false)}>
              Community
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 border-b border-gray-100"
    >
      {children}
    </Link>
  )
}


"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navigator() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="hidden md:block">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact-us">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="md:hidden">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-white hover:text-[#778DA9]"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-[#0D1B2A] border-[#415A77]"
          >
            <DropdownMenuItem asChild>
              <Link
                href="/"
                className="w-full text-white hover:text-[#778DA9] hover:bg-[#1B263B] focus:text-[#778DA9] focus:bg-[#1B263B]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/services"
                className="w-full text-white hover:text-[#778DA9] hover:bg-[#1B263B] focus:text-[#778DA9] focus:bg-[#1B263B]"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/about"
                className="w-full text-white hover:text-[#778DA9] hover:bg-[#1B263B] focus:text-[#778DA9] focus:bg-[#1B263B]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/contact-us"
                className="w-full text-white hover:text-[#778DA9] hover:bg-[#1B263B] focus:text-[#778DA9] focus:bg-[#1B263B]"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Fragment>
  );
}

"use client";

import { ModeToggle } from "@repo/design-system/components/mode-toggle";
import { Button } from "@repo/design-system/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/design-system/components/ui/navigation-menu";
import { env } from "@repo/env";
import { Menu, MoveRight, X } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
//@ts-ignore
import Logo from "@/public/blog/favicon.png";

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "Features",
          href: "/features",
        },
        {
          title: "Use Cases",
          href: "/use-cases",
        },
        {
          title: "Integrations",
          href: "/integrations",
        },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
      description: "",
    },
    {
      title: "Docs",
      href: env.NEXT_PUBLIC_DOCS_URL,
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b bg-background">
      <div className="container relative mx-auto flex min-h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Logo"
            width={24}
            height={24}
            className="dark:invert"
          />
          <p className="whitespace-nowrap font-semibold">datamizu</p>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex flex-row justify-center gap-4">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.href ? (
                  <NavigationMenuLink asChild>
                    <Button variant="ghost" asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  </NavigationMenuLink>
                ) : (
                  <>
                    <NavigationMenuTrigger className="font-medium text-sm">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                      <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
                        <div className="flex h-full flex-col justify-between">
                          <div className="flex flex-col">
                            <p className="text-base">{item.title}</p>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                          <Button size="sm" className="mt-10" asChild>
                            <Link href="/contact">Book a call today</Link>
                          </Button>
                        </div>
                        <div className="flex h-full flex-col justify-end text-sm">
                          {item.items?.map((subItem) => (
                            <NavigationMenuLink
                              href={subItem.href}
                              key={subItem.title}
                              className="flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted"
                            >
                              <span>{subItem.title}</span>
                              <MoveRight className="h-4 w-4 text-muted-foreground" />
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden lg:inline-flex">
            Join waitlist
          </Button>
          <ModeToggle />
          <Button variant="ghost" className="lg:hidden" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 flex w-full flex-col gap-8 border-t bg-background py-4 shadow-lg lg:hidden">
            {navigationItems.map((item) => (
              <div key={item.title} className="px-4">
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between"
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="h-4 w-4 stroke-1 text-muted-foreground" />
                    </Link>
                  ) : (
                    <p className="text-lg">{item.title}</p>
                  )}
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="flex items-center justify-between"
                    >
                      <span className="text-muted-foreground">
                        {subItem.title}
                      </span>
                      <MoveRight className="h-4 w-4 stroke-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="px-4">
              <Button variant="default" className="w-full">
                Join waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
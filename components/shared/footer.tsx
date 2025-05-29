import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const links = [
  { name: "Facebook", href: "#", icon: <Facebook /> },
  { name: "Instagram", href: "#", icon: <Instagram /> },
  { name: "Youtube", href: "#", icon: <Youtube /> },
];

export function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <img src="./logo-text.png" alt="logo" className="w-18" />
              </Link>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Discrod</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex gap-4 flex-row justify-center">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()}  All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

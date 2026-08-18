// components/Footer.tsx

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ],
  Services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "UI/UX Design", href: "/services/ui-ux" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
    { name: "SEO", href: "/services/seo" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Your<span className="text-blue-600">Brand</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              We build modern, scalable and user-friendly digital experiences
              that help businesses grow and succeed.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>hello@yourbrand.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900">
                {title}
              </h3>

              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-gray-500 transition-colors hover:text-blue-600"
            >
              <Facebook className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-500 transition-colors hover:text-pink-600"
            >
              <Instagram className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-500 transition-colors hover:text-sky-500"
            >
              <Twitter className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 transition-colors hover:text-blue-700"
            >
              <Linkedin className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              aria-label="GitHub"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
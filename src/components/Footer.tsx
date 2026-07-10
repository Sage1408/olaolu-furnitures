import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-brown-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brown-50 flex items-center justify-center">
                <span className="text-brown-800 font-bold text-sm">OF</span>
              </div>
              <span className="font-semibold text-lg text-brown-50">
                Ola-Olu <span className="text-brown-400">Furnitures</span>
              </span>
            </div>
            <p className="text-brown-400 text-sm leading-relaxed">
              Crafting quality furniture that transforms your space into a home.
              Every piece tells a story of craftsmanship and care.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brown-50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brown-400 hover:text-brown-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brown-50 mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-brown-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+234 805 536 5673</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>aoluwaseun386@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brown-500">
            &copy; {new Date().getFullYear()} Ola-Olu Furnitures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto bg-base-300 py-10 px-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Name */}
        <div>
          <Link href="/" className="text-pink-500 text-2xl font-bold">
            Prodfy
          </Link>
          <p className="mt-3 text-sm leading-relaxed">
            Discover smart, high-quality products designed to make your daily
            life easier. From modern solutions to user-friendly experiences,
            Prodfy brings innovation and reliability in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-4 text-sm">
            <li>
              <Link href="/products" className="hover:text-blue-600">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-600">
                Login
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
            Resources
          </h3>
          <ul className="space-y-2 mt-4 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Product Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                Buying Guides
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                Product Support
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                All Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
            Community
          </h3>
          <ul className="space-y-2 mt-4 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600">
                User Community
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                Customer Reviews
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                Help & Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-4 border-gray-500/30 text-center">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          © 2025 Prodfy | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

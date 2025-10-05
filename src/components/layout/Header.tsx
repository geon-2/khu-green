'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl">🌱</div>
            <span className="text-2xl font-bold text-primary">쿠그린</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              홈
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary transition-colors font-medium">
              상품
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              소개
            </Link>
            <Link href="/cart" className="relative">
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
                <span className="flex items-center space-x-1">
                  <span>🛒</span>
                  <span>장바구니</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                홈
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                상품
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                소개
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                🛒 장바구니
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

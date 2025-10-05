'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-primary-light/10 to-white shadow-lg sticky top-0 z-50 border-b-2 border-primary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl group-hover:scale-110 transition-transform">🌱</div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                쿠그린
              </span>
              <span className="text-xs text-gray-600 -mt-1">♻️ Eco-Friendly</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
              <span>🏠</span>
              <span>홈</span>
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
              <span>🛍️</span>
              <span>상품</span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
              <span>💚</span>
              <span>소개</span>
            </Link>
            <Link href="/cart" className="relative">
              <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg">
                <span className="flex items-center space-x-2">
                  <span className="text-lg">🛒</span>
                  <span className="font-semibold">장바구니</span>
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

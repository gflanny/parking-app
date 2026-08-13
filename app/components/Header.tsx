'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '首页', href: '/' },
    { label: '定制案例', href: '/cases' },
    { label: '产品中心', href: '/products' },
    { label: '关于我们', href: '/about' },
    { label: '联系我们', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-primary font-bold text-lg hidden sm:block">
                智能停车决策平台
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#step-guide"
              className="bg-cta hover:bg-cta-dark text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              🚀 获取方案
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-secondary hover:text-primary p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-text-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#step-guide"
              className="block mt-3 bg-cta hover:bg-cta-dark text-white px-4 py-2 rounded-lg font-medium text-sm text-center transition-colors"
            >
              🚀 获取方案
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

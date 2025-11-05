import React, { useState } from 'react';
import { Menu, Scale, Search, User, Bell, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import MobileMenu from '../ui/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isEnglish = (typeof document !== 'undefined' && typeof navigator !== 'undefined')
    ? ((document.documentElement.lang || '').toLowerCase().startsWith('en') || navigator.language.toLowerCase().startsWith('en'))
    : false;

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Recherche IA', href: '/search' },
    { name: 'Générateur', href: '/generator' },
    { name: 'Avocats', href: '/lawyers' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <Scale className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-600">Law Just</span>
              <span className="text-xs text-secondary-500">Plateforme juridique</span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button size="sm" onClick={() => (window.location.href = '/assistant')}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Assistance IA
            </Button>
            <Button variant="outline" size="sm" onClick={() => (window.location.href = '/login')}>
              <User className="h-4 w-4 mr-2" />
              {isEnglish ? 'Login' : 'Connexion'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;

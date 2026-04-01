import React from 'react';
import { X, Scale, User, Bell, Home, FileText, Users } from 'lucide-react';
import { Button } from './Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const isEnglish = (typeof document !== 'undefined' && typeof navigator !== 'undefined')
    ? ((document.documentElement.lang || '').toLowerCase().startsWith('en') || navigator.language.toLowerCase().startsWith('en'))
    : false;
  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Générateur', href: '/generator', icon: FileText },
    { name: 'Avocats', href: '/lawyers', icon: Users },
    { name: 'Services', href: '/Services' },
    { name: 'A propos', href: '/about' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-secondary-200">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary-600">Law Just</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  onClick={onClose}
                >
                  <Home  className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="px-6 py-4 border-t border-secondary-200 space-y-3">
            <Button variant="outline" className="w-full justify-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button className="w-full justify-center" onClick={() => (window.location.href = '/login')}>
              <User className="h-4 w-4 mr-2" />
              {isEnglish ? 'Login' : 'Connexion'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

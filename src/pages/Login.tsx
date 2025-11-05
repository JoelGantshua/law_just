import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const isEnglish = (typeof document !== 'undefined' && typeof navigator !== 'undefined')
    ? ((document.documentElement.lang || '').toLowerCase().startsWith('en') || navigator.language.toLowerCase().startsWith('en'))
    : false;

  const handleLogin = (role: 'user' | 'admin') => {
    localStorage.setItem('role', role);
    navigate(role === 'admin' ? '/dashboard/admin' : '/dashboard/user');
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-12">
      <div className="container max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>{isEnglish ? 'Login' : 'Connexion'}</CardTitle>
            <CardDescription>{isEnglish ? 'Choose an account type to continue' : 'Choisissez un type de compte pour continuer'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-xl font-semibold">{isEnglish ? 'User' : 'Utilisateur'}</div>
                  <p className="text-secondary-600">{isEnglish ? 'Access to user dashboard' : 'Accès au tableau de bord utilisateur'}</p>
                  <Button onClick={() => handleLogin('user')} className="w-full">{isEnglish ? 'Login' : 'Se connecter'}</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-xl font-semibold">{isEnglish ? 'Administrator' : 'Administrateur'}</div>
                  <p className="text-secondary-600">{isEnglish ? 'Manage users and the system' : 'Gérer les utilisateurs et le système'}</p>
                  <Button variant="outline" onClick={() => handleLogin('admin')} className="w-full">{isEnglish ? 'Login' : 'Se connecter'}</Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center text-sm text-secondary-500">
              {isEnglish ? 'Tip: this login is local-only for demo purposes.' : 'Astuce: cette connexion est fictive (locale) pour la démo.'}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;



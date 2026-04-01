import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (role: 'user' | 'lawyer' | 'admin') => {
    // stocker le rôle
    localStorage.setItem('role', role);

    // redirection intelligente
    switch (role) {
      case 'admin':
        navigate('/dashboard/admin');
        break;
      case 'lawyer':
        navigate('/dashboard/lawyer');
        break;
      default:
        navigate('/dashboard/user');
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-12">
      <div className="container max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Connexion</CardTitle>
            <CardDescription>
              Choisissez votre type de compte
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* USER */}
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-xl font-semibold">Utilisateur</div>
                  <p className="text-secondary-600">
                    Accès au tableau de bord utilisateur
                  </p>
                  <Button onClick={() => handleLogin('user')} className="w-full">
                    Se connecter
                  </Button>
                </CardContent>
              </Card>

              {/* LAWYER */}
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-xl font-semibold">Avocat</div>
                  <p className="text-secondary-600">
                    Gérer clients et dossiers
                  </p>
                  <Button variant="outline" onClick={() => handleLogin('lawyer')} className="w-full">
                    Se connecter
                  </Button>
                </CardContent>
              </Card>

              {/* ADMIN */}
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-xl font-semibold">Admin</div>
                  <p className="text-secondary-600">
                    Gestion de la plateforme
                  </p>
                  <Button variant="outline" onClick={() => handleLogin('admin')} className="w-full">
                    Se connecter
                  </Button>
                </CardContent>
              </Card>

            </div>

            <div className="mt-6 text-center text-sm text-secondary-500">
              Mode démo (localStorage)
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
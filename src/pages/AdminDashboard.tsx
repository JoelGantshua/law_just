import React, { useState } from 'react';
import { Users, Shield, BarChart3, Settings, Database, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'system' | 'settings'>('overview');

  const systemStats = [
    { label: 'Utilisateurs', value: '1,248', icon: Users },
    { label: 'Admins', value: '6', icon: Shield },
    { label: 'Requêtes/Jour', value: '8,423', icon: BarChart3 },
    { label: 'Incidents', value: '0', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">Tableau de bord Administrateur</h1>
          <p className="text-secondary-600">Surveillez l'activité, gérez les utilisateurs et les paramètres système</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4 space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-3 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-primary-100 text-primary-700' : 'text-secondary-700 hover:bg-secondary-100'}`}
                >
                  Vue d'ensemble
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-3 py-2 rounded-lg ${activeTab === 'users' ? 'bg-primary-100 text-primary-700' : 'text-secondary-700 hover:bg-secondary-100'}`}
                >
                  Utilisateurs
                </button>
                <button
                  onClick={() => setActiveTab('system')}
                  className={`w-full text-left px-3 py-2 rounded-lg ${activeTab === 'system' ? 'bg-primary-100 text-primary-700' : 'text-secondary-700 hover:bg-secondary-100'}`}
                >
                  Système
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-3 py-2 rounded-lg ${activeTab === 'settings' ? 'bg-primary-100 text-primary-700' : 'text-secondary-700 hover:bg-secondary-100'}`}
                >
                  Paramètres
                </button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-8">
            {activeTab === 'overview' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {systemStats.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-secondary-600 mb-1">{s.label}</p>
                              <p className="text-2xl font-bold text-secondary-900">{s.value}</p>
                            </div>
                            <div className="p-3 rounded-lg bg-secondary-50">
                              <Icon className="h-6 w-6 text-primary-600" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Activité récente</CardTitle>
                      <CardDescription>Dernières actions d'administration</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5 w-5 text-primary-600" />
                          <span>Rôle mis à jour pour l'utilisateur #532</span>
                        </div>
                        <span className="text-sm text-secondary-500">il y a 2h</span>
                      </div>
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Database className="h-5 w-5 text-success-600" />
                          <span>Index de recherche régénéré</span>
                        </div>
                        <span className="text-sm text-secondary-500">hier</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Actions rapides</CardTitle>
                      <CardDescription>Outils d'administration</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Button variant="outline" className="h-12"><Users className="h-4 w-4 mr-2" />Gérer les utilisateurs</Button>
                      <Button variant="outline" className="h-12"><Shield className="h-4 w-4 mr-2" />Rôles & Accès</Button>
                      <Button variant="outline" className="h-12"><Database className="h-4 w-4 mr-2" />Maintenance</Button>
                      <Button variant="outline" className="h-12"><Settings className="h-4 w-4 mr-2" />Paramètres</Button>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {activeTab === 'users' && (
              <Card>
                <CardHeader>
                  <CardTitle>Gestion des utilisateurs</CardTitle>
                  <CardDescription>Créer, suspendre, attribuer des rôles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-secondary-600">Liste fictive pour l'instant. À connecter plus tard.</div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'system' && (
              <Card>
                <CardHeader>
                  <CardTitle>État du système</CardTitle>
                  <CardDescription>Services, bases de données, files</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 border rounded-lg flex items-center justify-between"><span>API principale</span><span className="px-2 py-1 rounded bg-success-100 text-success-700 text-sm">Opérationnel</span></div>
                  <div className="p-4 border rounded-lg flex items-center justify-between"><span>Moteur IA</span><span className="px-2 py-1 rounded bg-success-100 text-success-700 text-sm">Opérationnel</span></div>
                  <div className="p-4 border rounded-lg flex items-center justify-between"><span>Base de données</span><span className="px-2 py-1 rounded bg-success-100 text-success-700 text-sm">Opérationnel</span></div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'settings' && (
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres</CardTitle>
                  <CardDescription>Configurations de sécurité et d'application</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="mr-3">Exporter la configuration</Button>
                  <Button>Enregistrer</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;



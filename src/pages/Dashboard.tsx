import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  Search, 
  Clock, 
  Download, 
  Plus, 
  Bell, 
  Settings,
  BarChart3,
  Calendar,
  MessageSquare,
  Shield,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'documents', name: 'Mes documents', icon: FileText },
    { id: 'searches', name: 'Recherches', icon: Search },
    { id: 'assistance', name: 'Assistance', icon: MessageSquare },
    { id: 'profile', name: 'Profil', icon: User },
  ];

  const recentDocuments = [
    {
      id: 1,
      title: 'Plainte pour harcèlement',
      type: 'Plainte',
      status: 'Généré',
      date: '2024-01-15',
      size: '2.3 MB',
    },
    {
      id: 2,
      title: 'Recours gracieux - Permis',
      type: 'Recours',
      status: 'En cours',
      date: '2024-01-12',
      size: '1.8 MB',
    },
    {
      id: 3,
      title: 'Main courante - Vol',
      type: 'Main courante',
      status: 'Finalisé',
      date: '2024-01-10',
      size: '1.2 MB',
    },
  ];

  const recentSearches = [
    {
      id: 1,
      query: 'harcèlement moral travail',
      results: 15,
      date: '2024-01-15',
    },
    {
      id: 2,
      query: 'article 1382 code civil',
      results: 8,
      date: '2024-01-14',
    },
    {
      id: 3,
      query: 'droit du travail licenciement',
      results: 23,
      date: '2024-01-13',
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Document prêt',
      message: 'Votre plainte pour harcèlement a été générée avec succès.',
      type: 'success',
      date: '2024-01-15',
      read: false,
    },
    {
      id: 2,
      title: 'Nouvelle jurisprudence',
      message: 'Une nouvelle décision concernant le harcèlement moral est disponible.',
      type: 'info',
      date: '2024-01-14',
      read: true,
    },
    {
      id: 3,
      title: 'Rappel de rendez-vous',
      message: 'Votre consultation avec Me. Dupont est prévue demain à 14h.',
      type: 'warning',
      date: '2024-01-13',
      read: false,
    },
  ];

  const stats = [
    { label: 'Documents créés', value: '12', icon: FileText, color: 'text-primary-600' },
    { label: 'Recherches effectuées', value: '47', icon: Search, color: 'text-success-600' },
    { label: 'Heures économisées', value: '24', icon: Clock, color: 'text-warning-600' },
    { label: 'Score de satisfaction', value: '4.8/5', icon: Star, color: 'text-accent-600' },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-secondary-50`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Documents récents</span>
              <Button variant="ghost" size="sm">
                Voir tout
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-50 rounded-lg">
                      <FileText className="h-4 w-4 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900">{doc.title}</p>
                      <p className="text-sm text-secondary-500">{doc.type} • {doc.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      doc.status === 'Finalisé' ? 'bg-success-100 text-success-800' :
                      doc.status === 'En cours' ? 'bg-warning-100 text-warning-800' :
                      'bg-primary-100 text-primary-800'
                    }`}>
                      {doc.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Searches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recherches récentes</span>
              <Button variant="ghost" size="sm">
                Voir tout
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSearches.map((search) => (
                <div key={search.id} className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-success-50 rounded-lg">
                      <Search className="h-4 w-4 text-success-600" />
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900">{search.query}</p>
                      <p className="text-sm text-secondary-500">{search.results} résultats • {search.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Relancer
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
          <CardDescription>
            Accédez rapidement aux fonctionnalités les plus utilisées
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Plus className="h-6 w-6" />
              <span>Nouveau document</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Search className="h-6 w-6" />
              <span>Recherche IA</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <MessageSquare className="h-6 w-6" />
              <span>Assistance</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-secondary-900">Mes documents</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau document
        </Button>
      </div>
      
      <div className="grid gap-4">
        {recentDocuments.map((doc) => (
          <Card key={doc.id} hover>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <FileText className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">{doc.title}</h3>
                    <p className="text-secondary-600">{doc.type} • Créé le {doc.date} • {doc.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    doc.status === 'Finalisé' ? 'bg-success-100 text-success-800' :
                    doc.status === 'En cours' ? 'bg-warning-100 text-warning-800' :
                    'bg-primary-100 text-primary-800'
                  }`}>
                    {doc.status}
                  </span>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-secondary-900">Notifications</h2>
        <Button variant="ghost" size="sm">
          Marquer tout comme lu
        </Button>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={!notification.read ? 'border-primary-200 bg-primary-50' : ''}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${
                  notification.type === 'success' ? 'bg-success-100' :
                  notification.type === 'warning' ? 'bg-warning-100' :
                  'bg-primary-100'
                }`}>
                  <Bell className={`h-5 w-5 ${
                    notification.type === 'success' ? 'text-success-600' :
                    notification.type === 'warning' ? 'text-warning-600' :
                    'text-primary-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary-900 mb-1">{notification.title}</h3>
                  <p className="text-secondary-600 mb-2">{notification.message}</p>
                  <p className="text-sm text-secondary-500">{notification.date}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Tableau de bord
          </h1>
          <p className="text-xl text-secondary-600">
            Gérez vos documents, recherches et assistance juridique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-secondary-600 hover:bg-secondary-100'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{tab.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'documents' && renderDocuments()}
            {activeTab === 'assistance' && renderNotifications()}
            {activeTab === 'searches' && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Historique des recherches
                </h3>
                <p className="text-secondary-600">
                  Vos recherches récentes apparaîtront ici
                </p>
              </div>
            )}
            {activeTab === 'profile' && (
              <div className="text-center py-12">
                <User className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Gestion du profil
                </h3>
                <p className="text-secondary-600">
                  Modifiez vos informations personnelles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

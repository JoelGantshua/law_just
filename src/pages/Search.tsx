import React, { useState } from 'react';
import { Search, Filter, BookOpen, FileText, Scale, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
 

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchResults, setSearchResults] = useState([]);
  
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();


  const categories = [
    { id: 'all', name: 'Tout', icon: Search },
    { id: 'civil', name: 'Droit civil', icon: BookOpen },
    { id: 'penal', name: 'Droit pénal', icon: Scale },
    { id: 'travail', name: 'Droit du travail', icon: FileText },
    { id: 'commerce', name: 'Droit commercial', icon: BookOpen },
  ];

  const mockResults = [
    {
      id: 1,
      title: 'Article 1382 du Code civil - Responsabilité délictuelle',
      category: 'civil',
      type: 'article',
      content: 'Tout fait quelconque de l\'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.',
      relevance: 95,
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Jurisprudence - Harcèlement moral au travail',
      category: 'travail',
      type: 'jurisprudence',
      content: 'Le harcèlement moral se caractérise par des agissements répétés qui ont pour objet ou pour effet une dégradation des conditions de travail...',
      relevance: 88,
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'Article 222-33 du Code pénal - Harcèlement sexuel',
      category: 'penal',
      type: 'article',
      content: 'Le fait de harceler autrui par des propos ou comportements à connotation sexuelle est puni de deux ans d\'emprisonnement...',
      relevance: 92,
      date: '2024-01-12',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = normalize(searchQuery);
    if (!q) {
      setSearchResults([]);
      return;
    }
    let terms = q.split(' ').filter(Boolean);
    // Aliases simples pour améliorer le rappel
    const aliases: Record<string, string[]> = {
      'droit du travail': ['travail'],
      'code penal': ['penal'],
      'code pénal': ['penal'],
      'code civil': ['civil']
    };
    Object.entries(aliases).forEach(([key, vals]) => {
      if (q.includes(key)) {
        vals.forEach(v => terms.push(v));
      }
    });
    // Regrouper le contenu à matcher
    const filtered = mockResults
      .filter(r => (selectedCategory === 'all' ? true : r.category === selectedCategory))
      .filter(r => {
        const blob = normalize(`${r.title} ${r.content} ${r.type} ${r.category}`);
        // Au moins un terme doit matcher pour remonter un résultat
        return terms.some(term => blob.includes(term));
      });
    setSearchResults(filtered);
  };
 

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Search;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-primary-100 text-primary-800';
      case 'jurisprudence':
        return 'bg-success-100 text-success-800';
      case 'doctrine':
        return 'bg-warning-100 text-warning-800';
      default:
        return 'bg-secondary-100 text-secondary-800';
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Recherche juridique IA
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl">
            Recherchez dans notre base de données juridique avec l'intelligence artificielle. 
            Obtenez des explications claires et des références précises.
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                <Input
                  type="text"
                  placeholder="Recherchez un article, une jurisprudence, un concept juridique..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-lg"
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </Button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <Button type="submit" size="lg" className="px-8">
                  Rechercher
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres avancés
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-secondary-900">
                Résultats de recherche ({searchResults.length})
              </h2>
              <div className="text-sm text-secondary-500">
                Triés par pertinence
              </div>
            </div>

            <div className="grid gap-6">
              {searchResults.map((result) => {
                const CategoryIcon = getCategoryIcon(result.category);
                return (
                  <Card key={result.id} hover>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary-50 rounded-lg">
                            <CategoryIcon className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                              {result.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-secondary-500">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                                {result.type === 'article' ? 'Article' : 
                                 result.type === 'jurisprudence' ? 'Jurisprudence' : 'Doctrine'}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {result.date}
                              </span>
                              <span className="flex items-center">
                                <span className="w-2 h-2 bg-success-500 rounded-full mr-2"></span>
                                {result.relevance}% de pertinence
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-secondary-600 mb-4 leading-relaxed">
                        {result.content}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          Voir le détail
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            Explication IA
                          </Button>
                          <Button variant="ghost" size="sm">
                            Sauvegarder
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        

        {/* No Results State */}
        {searchQuery && searchResults.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-secondary-600 mb-6">
                Essayez avec d'autres mots-clés ou utilisez des termes plus généraux.
              </p>
              <Button variant="outline">
                Nouvelle recherche
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quick Access */}
        {!searchQuery && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-6">
              Accès rapide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hover>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                    Code civil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Accès direct aux articles du Code civil français
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card hover>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-5 w-5 text-primary-600 mr-2" />
                    Code pénal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Consultation du Code pénal et de la jurisprudence
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card hover>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-primary-600 mr-2" />
                    Droit du travail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Textes et jurisprudence en droit du travail
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

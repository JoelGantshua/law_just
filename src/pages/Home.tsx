import React from 'react';
import { Search, Scale, Users, Shield, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const Home: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Recherche IA',
      description: 'Recherche intelligente dans la jurisprudence et les textes de loi avec explications simplifiées.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Scale,
      title: 'Base de données',
      description: 'Accès complet aux codes juridiques français et à la jurisprudence récente.',
      color: 'text-success-600',
      bgColor: 'bg-success-50',
    },
    {
      icon: Users,
      title: 'Assistance victimes',
      description: 'Support personnalisé et accompagnement dans vos démarches juridiques.',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
    },
    {
      icon: Shield,
      title: 'Générateur de plaintes',
      description: 'Génération automatique de documents juridiques personnalisés.',
      color: 'text-warning-600',
      bgColor: 'bg-warning-50',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Articles de loi indexés' },
    { number: '5,000+', label: 'Utilisateurs actifs' },
    { number: '95%', label: 'Satisfaction client' },
    { number: '24/7', label: 'Support disponible' },
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Victime de harcèlement',
      content: 'Law Just m\'a aidée à comprendre mes droits et à déposer ma plainte en toute simplicité.',
      rating: 5,
    },
    {
      name: 'Jean Martin',
      role: 'Avocat',
      content: 'Une plateforme innovante qui facilite la recherche juridique et améliore l\'efficacité.',
      rating: 5,
    },
    {
      name: 'Sophie Laurent',
      role: 'Étudiante en droit',
      content: 'L\'outil de recherche IA est exceptionnel pour comprendre les textes complexes.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="py-20 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
                Votre <span className="text-primary-600">partenaire juridique</span> moderne
              </h1>
              <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Accédez facilement au droit français avec notre IA juridique, 
                générez vos documents et trouvez l'assistance dont vous avez besoin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Découvrir nos services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nos services innovants
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Des outils modernes pour simplifier l'accès au droit français
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Trois étapes simples pour accéder à vos droits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Recherchez</h3>
              <p className="text-secondary-600">
                Utilisez notre moteur de recherche IA pour trouver les informations juridiques pertinentes.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Générez</h3>
              <p className="text-secondary-600">
                Créez automatiquement vos documents juridiques personnalisés.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Agissez</h3>
              <p className="text-secondary-600">
                Obtenez l'assistance nécessaire et agissez en toute confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Des témoignages authentiques de notre communauté
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à simplifier votre accès au droit ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez des milliers d'utilisateurs qui font confiance à Law Just
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary-600">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { Search, Scale, Users, Shield, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);

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
      description: 'Accès complet aux codes juridiques et à la jurisprudence récente.',
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
      content: 'Law Just m\'a aidée à comprendre mes droits et à déposer ma plainte facilement.',
      rating: 5,
    },
    {
      name: 'Jean Martin',
      role: 'Avocat',
      content: 'Une plateforme innovante qui améliore la productivité juridique.',
      rating: 5,
    },
    {
      name: 'Sophie Laurent',
      role: 'Étudiante en droit',
      content: 'L’outil IA est excellent pour comprendre les textes complexes.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center">
        
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/images/3.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Votre <span className="text-primary-400">partenaire juridique</span>
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
            Accédez facilement au droit grâce à notre intelligence artificielle,
            générez vos documents juridiques et trouvez un avocat en quelques clics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button
              size="lg"
              className="text-lg px-8 bg-primary-600 hover:bg-primary-700"
              onClick={() => setShowRegistration(true)}
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-black"
              onClick={() => navigate('/services')}
            >
              Découvrir nos services
            </Button>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nos services innovants
            </h2>
            <p className="text-xl text-secondary-600">
              Des outils modernes pour simplifier l'accès au droit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à simplifier votre accès au droit ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'utilisateurs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary-600"
              onClick={() => navigate('/register/user')}
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary-600"
              onClick={() => navigate('/about')}
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ce que disent nos utilisateurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic mb-4">"{t.content}"</p>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
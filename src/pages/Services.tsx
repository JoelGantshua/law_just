import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Search, Scale, Users, Shield, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Recherche IA juridique',
      description: 'Analyse automatique des lois, jurisprudences et précédents avec explications claires.',
      icon: Search,
    },
    {
      title: 'Générateur de documents',
      description: 'Création de plaintes, contrats et recours conformes aux standards juridiques.',
      icon: Shield,
    },
    {
      title: 'Assistance personnalisée',
      description: 'Accompagnement étape par étape dans vos démarches juridiques.',
      icon: Users,
    },
    {
      title: 'Outils pour avocats',
      description: 'Gestion des dossiers, clients et documents dans un dashboard sécurisé.',
      icon: Scale,
    },
    {
      title: 'Formation & ressources',
      description: 'Guides pratiques et contenus pour comprendre vos droits.',
      icon: MessageSquare,
    },
  ];

  const benefits = [
    'Plateforme sécurisée et conforme RGPD',
    'Analyse IA rapide (moins de 48h)',
    'Interface simple et intuitive',
    'Accès international',
  ];

  const faqs = [
    {
      question: 'Qui peut utiliser la plateforme ?',
      answer: 'Particuliers, entreprises et avocats.'
    },
    {
      question: 'Les documents sont-ils valables ?',
      answer: 'Oui, ils respectent les standards juridiques et peuvent être utilisés officiellement.'
    },
    {
      question: 'Mes données sont-elles protégées ?',
      answer: 'Toutes les données sont chiffrées et sécurisées.'
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">

      {/* HERO PRO */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900">
              Des services juridiques modernes
            </h1>

            <p className="text-lg text-secondary-600 mb-6">
              Law Just combine intelligence artificielle et expertise humaine 
              pour simplifier l’accès au droit et accélérer vos démarches.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => navigate('/register/user')}>
                Commencer
              </Button>

              <Button variant="outline" onClick={() => navigate('/register/lawyer')}>
                Espace avocat
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src="src/assets/images/Law.jpg"
              alt="Legal services"
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="container">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Ce que nous proposons
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Une suite complète d’outils pour gérer vos problématiques juridiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Card key={i} className="hover:shadow-lg transition">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* BENEFITS (important pour crédibilité) */}
      <section className="py-16 bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Pourquoi choisir Law Just ?
            </h2>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
              alt="Trust"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* USERS VS LAWYERS */}
      <section className="py-20">
        <div className="container">

          <h2 className="text-3xl font-bold text-center mb-12">
            Une solution pour tous
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card>
              <CardHeader>
                <CardTitle>Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-600 mb-4">
                  Déposez vos dossiers, générez vos documents et obtenez de l’aide rapidement.
                </p>
                <Button onClick={() => navigate('/register/user')}>
                  Créer un compte
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avocats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-600 mb-4">
                  Gérez vos clients et accédez à des outils puissants pour gagner du temps.
                </p>
                <Button variant="outline" onClick={() => navigate('/register/lawyer')}>
                  Rejoindre
                </Button>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">

          <h2 className="text-3xl font-bold text-center mb-10">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardContent>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-secondary-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Passez à l’action maintenant
        </h2>

        <p className="mb-6">
          Accédez à vos droits plus rapidement avec Law Just
        </p>

        <Button size="lg" variant="secondary">
          Commencer gratuitement
          <ArrowRight className="ml-2" />
        </Button>
      </section>

    </div>
  );
};

export default Services;
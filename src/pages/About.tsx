import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Users, Scale, Shield, Star, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: 'Me. Alice Dupont',
      role: 'Fondatrice & Avocate',
      description: 'Expertise en droit du travail et assistance aux particuliers.',
      icon: Users
    },
    {
      name: 'Me. Julien Martin',
      role: 'Responsable Juridique',
      description: 'Spécialiste en droit civil et procédure légale.',
      icon: Shield
    },
    {
      name: 'Sophie Laurent',
      role: 'Lead Développeuse',
      description: 'Création d’outils IA pour simplifier l’accès au droit.',
      icon: Star
    }
  ];

  const whyChooseUs = [
    {
      title: 'Accessibilité',
      description: 'Accédez à l’information juridique 24/7.',
      icon: Scale
    },
    {
      title: 'Efficacité',
      description: 'Gagnez du temps avec nos outils IA.',
      icon: Shield
    },
    {
      title: 'Satisfaction',
      description: 'Support réactif et personnalisé.',
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-50">

      {/* HERO PRO */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900">
              À propos de Law Just
            </h1>

            <p className="text-lg text-secondary-600 mb-6">
              Notre mission est de rendre le droit accessible à tous grâce à 
              l’intelligence artificielle et des services juridiques simplifiés.
            </p>

            <Button size="lg" variant="outline">
              Découvrir nos services
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
              alt="Justice"
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
          <p className="text-secondary-600 mb-4">
            Simplifier l’accès aux services juridiques et rendre le droit compréhensible.
          </p>
          <p className="text-secondary-600">
            Nous combinons expertise juridique et technologie pour une expérience efficace.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Notre équipe</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => {
              const Icon = member.icon;
              return (
                <Card key={i}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                      <Icon className="text-primary-600" />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-10">Pourquoi nous choisir ?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i}>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-600" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à commencer ?
        </h2>

        <p className="mb-6">
          Rejoignez une plateforme juridique moderne
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline" onClick={() => navigate('/register/user')}>
            Créer un compte
          </Button>

          <Button variant="outline" onClick={() => navigate('/register/lawyer')}>
            Espace avocat
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;
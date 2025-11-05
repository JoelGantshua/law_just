import React, { useEffect, useState } from 'react';
import { Shield, FileText, Users, CheckCircle2, ArrowRight, Phone, Mail, Calendar, Briefcase, Scale, Gavel, UserCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import ToastContainer from '../components/ui/ToastContainer';
import { useToast } from '../hooks/useToast';

const LawyersPage: React.FC = () => {
  const { toasts, success, error, removeToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Notre Cabinet - Spécialistes du traitement des plaintes';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.type || !form.message) {
      error('Champs requis manquants', 'Veuillez compléter tous les champs.');
      return;
    }
    setSubmitting(true);
    // Simule un envoi; à brancher avec un backend ou service email
    await new Promise(res => setTimeout(res, 600));
    setSubmitting(false);
    success('Demande envoyée', 'Nous revenons vers vous sous 24 à 48h.');
    setForm({ name: '', email: '', type: '', message: '' });
  };

  const expertise = [
    { icon: Briefcase, title: 'Droit des affaires', desc: 'Litiges commerciaux, impayés, contrats' },
    { icon: Scale, title: 'Droit de la consommation', desc: 'Conflits e-commerce, pratiques commerciales' },
    { icon: FileText, title: 'Droit du travail', desc: 'Licenciement, harcèlement, heures sup.' },
    { icon: Users, title: 'Droit de la famille', desc: 'Divorce, garde, pension alimentaire' },
  ];

  const process = [
    { icon: Mail, title: 'Réception', desc: 'Formulaire sécurisé' },
    { icon: Shield, title: 'Analyse', desc: 'Expertise sous 48h' },
    { icon: Gavel, title: 'Action', desc: 'Rédaction et envoi' },
    { icon: UserCheck, title: 'Suivi', desc: 'Accompagnement complet' },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      <div className="container py-10 space-y-16">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-4">Notre Expertise au Service de Vos Litiges</h1>
            <p className="text-secondary-600 text-lg mb-6">Découvrez notre approche unique : analyse rigoureuse, stratégie adaptée et suivi personnalisé de chaque plainte.</p>
            <Button size="lg" className="px-8">
              Analyse Gratuite de Votre Dossier
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="mt-4 text-secondary-500 text-sm flex items-center"><Phone className="h-4 w-4 mr-2" /> +33 1 23 45 67 89</div>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-[url('https://images.unsplash.com/photo-1555375771-14b2f1df1b37?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center h-72" />
          </div>
        </section>

        {/* NOTRE VISION */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Notre mission</CardTitle>
              <CardDescription>Simplifier et professionnaliser le dépôt de plaintes</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary-700">Nous structurons votre dossier pour maximiser l’impact juridique et accélérer le traitement.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notre différence</CardTitle>
              <CardDescription>Expertise juridique + processus structuré</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary-700">Une méthode éprouvée mêlant analyse, stratégie écrite et délais maîtrisés.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notre promesse</CardTitle>
              <CardDescription>Transparence, efficacité, résultats concrets</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary-700">Suivi clair, devis transparents, indicateurs de progression à chaque étape.</CardContent>
          </Card>
        </section>

        {/* PROCESSUS */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Notre processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <Card key={i}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="font-semibold text-secondary-900">{p.title}</div>
                    <div className="text-secondary-600 text-sm">{p.desc}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ÉQUIPE */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Notre équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i} hover>
                <CardContent className="p-0">
                  <div className="h-48 bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="p-5">
                    <div className="text-lg font-semibold text-secondary-900 mb-1">Me. Dupont {i}</div>
                    <div className="text-secondary-600 mb-3">+ de 10 ans en litiges</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs rounded bg-primary-100 text-primary-800">Membre Barreau</span>
                      <span className="px-2 py-1 text-xs rounded bg-success-100 text-success-800">Assurance RC Pro</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">Contact direct</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* DOMAINES D'EXPERTISE */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((e, idx) => {
              const Icon = e.icon;
              return (
                <Card key={idx}>
                  <CardContent className="p-5 flex items-start space-x-3">
                    <Icon className="h-5 w-5 text-primary-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-secondary-900">{e.title}</div>
                      <div className="text-secondary-600 text-sm">{e.desc}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* GARANTIES & SOCIAL PROOF */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Garanties & preuves sociales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3"><Shield className="h-5 w-5 text-primary-600" /><div className="font-semibold">Confiance & conformité</div></div>
                <div className="text-secondary-600">Processus sécurisés, confidentialité, RGPD, chiffrement des données.</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3"><CheckCircle2 className="h-5 w-5 text-success-600" /><div className="font-semibold">Résultats mesurables</div></div>
                <div className="text-secondary-600">Taux de résolution élevé, délais optimisés, satisfaction client.</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3"><Users className="h-5 w-5 text-primary-600" /><div className="font-semibold">Témoignages</div></div>
                <div className="text-secondary-600 italic">“Cabinet réactif, clair et efficace. Mon dossier a été traité rapidement.”</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA + FORMULAIRE */}
        <section className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-secondary-900 mb-2">Votre Litige Mérite Notre Expertise</h2>
            <p className="text-secondary-600 mb-4">Expliquez-nous votre situation — nous analysons votre dossier et revenons vers vous sous 48h.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Nom complet" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Input placeholder="Type de litige (affaires, consommation, travail, famille)" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} />
              <Textarea placeholder="Votre message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} />
              <div className="flex items-center space-x-3">
                <Button type="submit" disabled={submitting}>{submitting ? 'Envoi…' : 'Envoyer ma demande'}</Button>
                <Button variant="outline" type="button" onClick={() => window.open('https://calendly.com/', '_blank')}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Prendre rendez-vous en ligne
                </Button>
              </div>
            </form>
            <div className="mt-4 text-secondary-600 flex items-center"><Phone className="h-4 w-4 mr-2" /> +33 1 23 45 67 89</div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-secondary-200 text-secondary-900">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pourquoi nous faire confiance ?</h3>
              <p className="text-secondary-700 mb-4">Un accompagnement réactif, structuré et orienté résultats pour vos litiges.</p>
              <div className="text-secondary-700 text-sm leading-relaxed mb-6 space-y-2">
                <p>Nous transformons votre situation en un dossier juridique solide, argumenté et opérationnel, prêt à être engagé rapidement.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Analyse personnalisée de votre dossier et objectifs</li>
                  <li>Stratégie écrite claire avec étapes et délais</li>
                  <li>Documents juridiques précis, conformes et exploitables</li>
                  <li>Canaux de communication ouverts et réponses rapides</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-secondary-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-900">1 200+</div>
                  <div className="text-sm text-secondary-600">Dossiers traités</div>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-900">48h</div>
                  <div className="text-sm text-secondary-600">Analyse moyenne</div>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-900">4,8/5</div>
                  <div className="text-sm text-secondary-600">Satisfaction</div>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-secondary-900">
                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-success-600" /> Processus sécurisé et confidentiel</div>
                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-success-600" /> Rédactions juridiques de qualité</div>
                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-success-600" /> Suivi clair de votre dossier</div>
              </div>

              <div className="bg-secondary-50 rounded-lg p-4">
                <div className="text-sm text-secondary-700 mb-2">Disponibilités</div>
                <div className="flex items-center justify-between">
                  <div className="text-secondary-900 font-medium">Lun - Ven</div>
                  <div className="text-secondary-700">09:00 - 18:30</div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-secondary-900 font-medium flex items-center"><Phone className="h-4 w-4 mr-2" /> +33 1 23 45 67 89</div>
                  <Button size="sm" variant="outline" className="text-primary-700" onClick={() => window.open('https://calendly.com/', '_blank')}>
                    <Calendar className="h-4 w-4 mr-2" /> Réserver
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LawyersPage;



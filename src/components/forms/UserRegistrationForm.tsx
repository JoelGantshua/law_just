import React, { useState } from 'react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

const UserRegistrationForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    country: '',
    postalCode: '',
    birthDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email !== form.confirmEmail) {
      alert("Les emails ne correspondent pas");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    console.log('User:', form);
    alert('Compte créé (simulation)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50 py-12">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Créer un compte utilisateur
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NOM */}
            <div className="flex gap-4">
              <input
                placeholder="Prénom"
                className="input"
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <input
                placeholder="Nom"
                className="input"
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>

            {/* EMAIL */}
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="input"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="email"
                placeholder="Confirmer Email"
                className="input"
                onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
              />
            </div>

            {/* PHONE */}
            <input
              placeholder="Téléphone"
              className="input"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            {/* PASSWORD */}
            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Mot de passe"
                className="input"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <input
                type="password"
                placeholder="Confirmer mot de passe"
                className="input"
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              />
            </div>

            {/* LOCALISATION */}
            <div className="flex gap-4">
              <input
                placeholder="Ville"
                className="input"
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
              <input
                placeholder="Pays"
                className="input"
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />
            </div>

            <input
              placeholder="Code postal"
              className="input"
              onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
            />

            {/* DATE NAISSANCE */}
            <input
              type="date"
              className="input"
              onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
            />

            {/* GOOGLE */}
            <Button
              type="button"
              variant="outline"
              className="w-full mt-2"
              onClick={() => alert("Connexion Google (à intégrer plus tard)")}
            >
              Se connecter avec Google
            </Button>

            {/* SUBMIT */}
            <Button className="w-full mt-4">
              Créer mon compte
            </Button>

            {/* LOGIN */}
            <p className="text-center text-sm text-secondary-600 mt-4">
              Déjà un compte ?{' '}
              <span
                className="text-primary-600 cursor-pointer"
                onClick={() => (window.location.href = '/login')}
              >
                Se connecter
              </span>
            </p>

          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserRegistrationForm;
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { useState } from 'react'; // Added missing import

interface LawyerRegistrationFormProps {
  onClose: () => void;
}

const LawyerRegistrationForm: React.FC<LawyerRegistrationFormProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    barAssociation: '',
    licenseNumber: '',
    experience: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Lawyer:', form);
    console.log('Files:', files);

    onClose(); // Call onClose after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50 py-12">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Inscription Avocat
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

            {/* EMAIL + PHONE */}
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email professionnel"
                className="input"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                placeholder="Téléphone"
                className="input"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

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

            {/* INFOS AVOCAT */}
            <input
              placeholder="Barreau (ex: Paris)"
              className="input"
              onChange={(e) => setForm({ ...form, barAssociation: e.target.value })}
            />

            <input
              placeholder="Numéro de licence"
              className="input"
              onChange={(e) => setForm({ ...form, licenseNumber: e.target.value })}
            />

            <input
              placeholder="Années d'expérience"
              className="input"
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />

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

            {/* UPLOAD DOCUMENTS */}
            <div>
              <label className="text-sm text-secondary-600 mb-2 block">
                Documents justificatifs (Carte professionnelle, diplôme...)
              </label>

              <div className="border-2 border-dashed p-6 rounded-lg text-center">
                <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
            </div>

            {/* SUBMIT */}
            <Button className="w-full mt-4">
              Soumettre ma candidature
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LawyerRegistrationForm;
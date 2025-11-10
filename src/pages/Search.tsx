import React, { useMemo, useState } from 'react';

type ResultItem = {
  title: string;
  description: string;
  link: string;
};

const PRIMARY = '#2c3e50';
const SECONDARY = '#3498db';

const predefinedSuggestions = [
  'Code civil',
  'Code du travail',
  'Code pénal',
  'Droit des contrats',
  'Droit de la propriété intellectuelle',
  'Droit des sociétés',
  'Droit administratif',
  'Droit constitutionnel',
  'Droit fiscal',
  "Droit de l'environnement",
  'Droit de la consommation',
  'Droit international',
  'Droit européen',
  'Droit des affaires',
  'Droit de la famille'
];

const baseResults: ResultItem[] = [
  {
    title: 'Code civil',
    description:
      "Le Code civil français, souvent appelé Code Napoléon, regroupe les lois relatives au droit civil français, c'est-à-dire l'ensemble des règles qui déterminent le statut des personnes, celui des biens et celui des relations entre les personnes privées.",
    link: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006070721'
  },
  {
    title: 'Code du travail',
    description:
      "Le Code du travail français regroupe l'ensemble des textes législatifs et réglementaires applicables en matière de droit du travail, notamment les relations individuelles et collectives de travail, l'emploi et la formation professionnelle.",
    link: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006072050'
  },
  {
    title: 'Code pénal',
    description:
      "Le Code pénal français est le texte qui fixe l'ensemble des infractions et des peines applicables en France. Il distingue trois catégories d'infractions : les contraventions, les délits et les crimes.",
    link: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006070719'
  },
  {
    title: 'Code de commerce',
    description:
      'Le Code de commerce français regroupe les textes législatifs et réglementaires relatifs au droit commercial, notamment les actes de commerce, les commerçants, les sociétés commerciales et les procédures collectives.',
    link: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000005634379'
  },
  {
    title: 'Code de la consommation',
    description:
      'Le Code de la consommation français regroupe les textes législatifs et réglementaires relatifs à la protection des consommateurs, notamment les pratiques commerciales, la publicité, les contrats de consommation et le crédit à la consommation.',
    link: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006069565'
  },
  {
    title: "Code de l'environnement",
    description:
      "Le Code de l'environnement français regroupe les textes législatifs et réglementaires relatifs à la protection de l'environnement, notamment la biodiversité, l'eau, les déchets, les installations classées et l'évaluation environnementale.",
    link: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006074220'
  }
];

const normalize = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = useMemo(() => {
    if (query.trim().length < 2) return [];
    const nq = normalize(query.trim());
    return predefinedSuggestions.filter(s => normalize(s).includes(nq));
  }, [query]);

  const performSearch = (q: string) => {
    setShowSuggestions(false);
    setLoading(true);
    setResults([]);

    setTimeout(() => {
      const nq = normalize(q);
      const filtered = baseResults.filter(
        r => normalize(r.title).includes(nq) || normalize(r.description).includes(nq)
      );
      setResults(filtered);
      setLoading(false);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) performSearch(q);
  };

  return (
    <div style={{ backgroundColor: '#f5f7fa' }}>
      <div
        style={{
          background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
          color: '#fff',
          padding: '2rem 0',
          textAlign: 'center',
          borderRadius: '0 0 20px 20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            Recherche IA - Documents Législatifs
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            Trouvez rapidement des documents juridiques et législatifs
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
        <div
          className="search-container"
          style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="search-box" style={{ display: 'flex', marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Rechercher des documents législatifs..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  border: '2px solid #ddd',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
                  fontSize: '1.1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: SECONDARY,
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0 8px 8px 0',
                  padding: '0 25px',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                Rechercher
              </button>
            </div>
          </form>

          {showSuggestions && filteredSuggestions.length > 0 && (
            <div
              className="suggestions-container"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                borderRadius: '0 0 8px 8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 10,
                maxHeight: 300,
                overflowY: 'auto'
              }}
            >
              {filteredSuggestions.map((s) => (
                <div
                  key={s}
                  className="suggestion-item"
                  style={{
                    padding: '12px 20px',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setQuery(s);
                    setShowSuggestions(false);
                    performSearch(s);
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          )}

          <p className="info-text" style={{ textAlign: 'center', color: '#7f8c8d', marginTop: '1rem', fontStyle: 'italic' }}>
            Commencez à taper pour obtenir des suggestions de recherche
          </p>
        </div>

        {loading && (
          <div className="loading" style={{ textAlign: 'center', padding: '2rem' }}>
            <div
              className="spinner"
              style={{
                border: '4px solid rgba(0,0,0,0.1)',
                borderLeftColor: SECONDARY,
                borderRadius: '50%',
                width: 40,
                height: 40,
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1rem'
              }}
            />
            <p>Recherche en cours...</p>
          </div>
        )}

        {!loading && results.length === 0 && query.trim() !== '' && (
          <div className="no-results" style={{ textAlign: 'center', padding: '2rem', color: '#7f8c8d' }}>
            <h3>Aucun résultat trouvé</h3>
            <p>Essayez avec d'autres termes de recherche</p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="results-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {results.map((r) => (
              <div
                key={r.title}
                className="result-card"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <div className="card-header" style={{ backgroundColor: PRIMARY, color: '#fff', padding: 15 }}>
                  <h3>{r.title}</h3>
                </div>
                <div className="card-body" style={{ padding: 15 }}>
                  <p>{r.description}</p>
                </div>
                <div className="card-footer" style={{ padding: 15, backgroundColor: '#f8f9fa', borderTop: '1px solid #eee' }}>
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noreferrer"
                    className="document-link"
                    style={{
                      display: 'inline-block',
                      backgroundColor: SECONDARY,
                      color: '#fff',
                      padding: '8px 15px',
                      borderRadius: 4,
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                  >
                    Voir le document
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default SearchPage;


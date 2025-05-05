import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Panorama des technologies IHM"
        description="Découvrez les principales catégories d'interfaces qui façonnent notre quotidien numérique et les innovations qui définissent l'avenir de nos interactions."
        badge="INNOVATION"
        highlightedText="technologies"
      />

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto flex-grow">
        <h1 className="text-3xl font-bold mb-2">
          Panorama des technologies IHM
        </h1>
        <div className="h-1 w-20 bg-blue-600 mb-8"></div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed">
            L'Interface Homme-Machine (IHM) regroupe un vaste ensemble de
            technologies permettant l'interaction entre les humains et les
            systèmes informatiques. Découvrez les principales catégories
            d'interfaces qui façonnent notre quotidien numérique et les
            innovations qui définissent l'avenir de nos interactions.
          </p>
        </div>

        {/* Interface Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Interfaces tactiles */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
                alt="Interfaces tactiles"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">
                Interfaces tactiles
              </h2>
              <p className="text-gray-600 mb-4">
                Interaction directe avec l'écran, gestes multi-touch, retour
                haptique.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-1">
                <li>Smartphones, tablettes, bornes interactives</li>
                <li>Gestes : tap, swipe, pinch</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="https://www.fujielectric.fr/technologies/ecran-ihm-tactile-industriel-interface-homme-machine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span>En savoir plus</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Interfaces vocales */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
                alt="Interfaces vocales"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">
                Interfaces vocales
              </h2>
              <p className="text-gray-600 mb-4">
                Contrôle par la voix, assistants vocaux, synthèse et
                reconnaissance vocale.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-1">
                <li>Domotique, accessibilité, mobilité</li>
                <li>Ex : Siri, Alexa, Google Assistant</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="https://www.usabilis.com/voice-user-interface-vui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span>En savoir plus</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Interfaces gestuelles */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Interfaces gestuelles"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">
                Interfaces gestuelles
              </h2>
              <p className="text-gray-600 mb-4">
                Contrôle par mouvements du corps ou des mains, sans contact
                physique.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-1">
                <li>Jeux vidéo, présentations, santé</li>
                <li>Ex : Kinect, Leap Motion</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="http://perso.ec-lyon.fr/bertrand.david/ihm-ecl/IHM-multimodales-2005.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span>En savoir plus</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Technologies Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Autres technologies émergentes
          </h2>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Réalité augmentée et virtuelle
                </h3>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  La réalité augmentée (RA) et la réalité virtuelle (RV)
                  transforment radicalement notre manière d'interagir avec
                  l'information numérique, en superposant des éléments virtuels
                  au monde réel ou en nous immergeant complètement dans des
                  environnements virtuels.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Applications RA</strong> - Navigation, éducation,
                    maintenance industrielle
                  </li>
                  <li>
                    <strong>Applications RV</strong> - Formation, thérapie,
                    divertissement
                  </li>
                  <li>
                    <strong>Dispositifs</strong> - Casques, lunettes
                    intelligentes, smartphones
                  </li>
                </ul>
                <Link
                  href="https://www.futura-sciences.com/tech/questions-reponses/multimedia-realite-virtuelle-realite-augmentee-difference-1962/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-600 font-medium hover:underline"
                >
                  <span>Explorer ces technologies</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Interfaces cérébrales
                </h3>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  Les interfaces cerveau-ordinateur (BCI) permettent une
                  communication directe entre le cerveau et un système
                  informatique, sans nécessiter d'activité musculaire. Cette
                  technologie révolutionnaire ouvre des possibilités inédites
                  pour l'accessibilité et l'augmentation des capacités humaines.
                </p>
                <h4 className="font-semibold mb-2">
                  Applications actuelles et futures :
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Assistance pour personnes paralysées</li>
                  <li>Contrôle de prothèses avancées</li>
                  <li>Expériences immersives en jeu vidéo</li>
                  <li>Monitoring cognitif et médical</li>
                </ul>
                <Link
                  href="https://www.frcneurodon.org/informer-sur-la-recherche/actus/de-nouveaux-progres-dans-le-developpement-des-interfaces-cerveau-machine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Découvrir les avancées →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Future Trends */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tendances futures</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Interfaces multimodales
              </h3>
              <p className="text-gray-600 mb-4">
                Combinaison de plusieurs modalités d'interaction (voix, geste,
                toucher) pour une expérience plus naturelle et contextuelle. Ces
                interfaces adaptatives s'ajustent aux préférences de
                l'utilisateur et à son environnement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Intelligence artificielle et IHM
              </h3>
              <p className="text-gray-600 mb-4">
                L'IA transforme les interfaces en les rendant plus prédictives,
                personnalisées et autonomes. Les systèmes apprennent les
                préférences des utilisateurs et anticipent leurs besoins pour
                une expérience plus fluide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Informatique ubiquitaire
              </h3>
              <p className="text-gray-600 mb-4">
                Intégration transparente de la technologie dans l'environnement
                quotidien, rendant l'interaction avec les systèmes informatiques
                aussi naturelle que possible, sans interfaces visibles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Interfaces haptiques avancées
              </h3>
              <p className="text-gray-600 mb-4">
                Développement de retours tactiles sophistiqués permettant de
                "sentir" les objets virtuels, avec des applications en médecine,
                formation, design et divertissement immersif.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

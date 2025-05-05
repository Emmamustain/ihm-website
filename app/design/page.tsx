import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Design et Ergonomie"
        description="Principes fondamentaux et meilleures pratiques pour concevoir des interfaces centrées sur l'utilisateur."
        badge="PRINCIPES"
        highlightedText="Design"
      />

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto flex-grow">
        <h1 className="text-3xl font-bold mb-2">Design et Ergonomie</h1>
        <div className="h-1 w-20 bg-blue-600 mb-8"></div>

        {/* Design Principles Cards Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Principes fondamentaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Ergonomie cognitive */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=400&q=80"
                  alt="Ergonomie cognitive"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Ergonomie cognitive
                </h3>
                <p className="text-gray-600 mb-4">
                  Adaptation des interfaces aux capacités et limites cognitives
                  humaines.
                </p>
                <Link
                  href="/design/cognitive"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Explorer{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2: Design visuel */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                  alt="Design visuel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Design visuel
                </h3>
                <p className="text-gray-600 mb-4">
                  Principes esthétiques et leur impact sur l'expérience
                  utilisateur.
                </p>
                <Link
                  href="/design/visual"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Explorer{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Ergonomie physique */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                  alt="Ergonomie physique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Ergonomie physique
                </h3>
                <p className="text-gray-600 mb-4">
                  Adaptation des interfaces aux capacités motrices et
                  contraintes physiques.
                </p>
                <Link
                  href="/design/physical"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Explorer{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 4: Design émotionnel */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                  alt="Design émotionnel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Design émotionnel
                </h3>
                <p className="text-gray-600 mb-4">
                  Créer des interfaces qui suscitent des émotions positives et
                  mémorables.
                </p>
                <Link
                  href="/design/emotional"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Explorer{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 5: Design d'interaction */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
                  alt="Design d'interaction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Design d'interaction
                </h3>
                <p className="text-gray-600 mb-4">
                  Conception des comportements et des flux d'interaction
                  utilisateur.
                </p>
                <Link
                  href="/design/interaction"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Explorer{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 6: Micro-interactions */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Micro-interactions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Micro-interactions
                </h3>
                <p className="text-gray-600 mb-4">
                  Petits moments interactifs qui améliorent l'expérience
                  utilisateur.
                </p>
                <Link
                  href="/design/micro-interactions"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Explorer{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines and Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Guides et bonnes pratiques
          </h2>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Principes de Gestalt
                </h3>
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/G.png"
                    alt="Principles de Gestalt"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  Les principes de Gestalt expliquent comment l'esprit humain
                  organise naturellement les éléments visuels. Ces principes
                  sont fondamentaux pour le design d'interface.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Proximité</strong> - Les éléments proches sont
                    perçus comme liés
                  </li>
                  <li>
                    <strong>Similarité</strong> - Les éléments semblables sont
                    regroupés
                  </li>
                  <li>
                    <strong>Continuité</strong> - L'œil suit naturellement les
                    lignes et les courbes
                  </li>
                  <li>
                    <strong>Fermeture</strong> - L'esprit complète les formes
                    incomplètes
                  </li>
                  <li>
                    <strong>Figure/fond</strong> - Distinction entre le sujet et
                    l'arrière-plan
                  </li>
                </ul>
                <Link
                  href="https://www.toptal.com/designers/ui/gestalt-principles-of-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-600 font-medium hover:underline"
                >
                  Approfondir ces principes
                  <svg
                    className="ml-1 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Loi de Fitts
                </h3>
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/F.png"
                    alt="Loi de Fitts"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  La loi de Fitts est un modèle prédictif du mouvement humain
                  qui aide à concevoir des interfaces plus efficaces. Elle
                  stipule que le temps nécessaire pour atteindre une cible
                  dépend de la distance et de la taille de la cible.
                </p>
                <h4 className="font-semibold mb-2">Applications pratiques :</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Placer les éléments importants dans les zones faciles
                    d'accès
                  </li>
                  <li>Agrandir les cibles fréquemment utilisées</li>
                  <li>Réduire les distances pour les actions courantes</li>
                  <li>
                    Ancrer les menus aux bords de l'écran pour faciliter l'accès
                  </li>
                </ul>
                <Link
                  href="https://www.nngroup.com/articles/fitts-law/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-600 font-medium hover:underline"
                >
                  Explorer les implications
                  <svg
                    className="ml-1 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Design Systems */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Systèmes de design</h2>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Qu'est-ce qu'un système de design ?
            </h3>
            <p className="text-gray-700 mb-4">
              Un système de design est un ensemble de standards pour gérer le
              design à l'échelle avec des patterns réutilisables et des
              principes partagés. Il aide les équipes à créer des produits
              cohérents et de qualité.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-700 mb-2">Composants</h4>
                <p className="text-gray-600">
                  Éléments d'interface réutilisables avec des comportements et
                  styles définis
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-700 mb-2">
                  Design tokens
                </h4>
                <p className="text-gray-600">
                  Variables qui stockent les valeurs visuelles comme les
                  couleurs et les espaces
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-700 mb-2">
                  Documentation
                </h4>
                <p className="text-gray-600">
                  Guides d'utilisation et principes pour l'application cohérente
                  du système
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Exemples populaires
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Material Design (Google)</strong> - Design basé sur
                    le papier avec des animations
                  </li>
                  <li>
                    <strong>Human Interface Guidelines (Apple)</strong> -
                    Principes pour créer des interfaces iOS/macOS
                  </li>
                  <li>
                    <strong>Fluent Design (Microsoft)</strong> - Système pour
                    unifier les expériences Windows
                  </li>
                  <li>
                    <strong>Carbon Design System (IBM)</strong> - Approche
                    open-source pour produits d'entreprise
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Avantages
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Cohérence</strong> - Expérience utilisateur unifiée
                    à travers les plateformes
                  </li>
                  <li>
                    <strong>Efficacité</strong> - Développement plus rapide avec
                    des éléments réutilisables
                  </li>
                  <li>
                    <strong>Évolutivité</strong> - Facilite l'extension et la
                    maintenance des produits
                  </li>
                  <li>
                    <strong>Collaboration</strong> - Langage commun entre
                    designers et développeurs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tools and Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Outils et ressources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-3">
                Outils de design
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>InVision Studio</li>
                <li>Axure RP</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-3">
                Tests d'utilisabilité
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>UserTesting</li>
                <li>Hotjar</li>
                <li>Optimal Workshop</li>
                <li>Lookback</li>
                <li>Maze</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-3">
                Systèmes de design
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Storybook</li>
                <li>Zeroheight</li>
                <li>InVision DSM</li>
                <li>Lingo</li>
                <li>Supernova</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-3">
                Ressources gratuites
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>UI Patterns</li>
                <li>Nielsen Norman Group</li>
                <li>A List Apart</li>
                <li>Smashing Magazine</li>
                <li>UX Collective</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Appliquez ces principes à vos projets
            </h2>
            <p className="mb-6">
              Transformez votre approche du design en intégrant les principes
              d'ergonomie et les bonnes pratiques de conception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/exemples"
                className="inline-block px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Voir des exemples concrets
              </Link>
              <Link
                href="/ressources"
                className="inline-block px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Télécharger des ressources
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
                  alt="Charge cognitive"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Réduire la charge cognitive
                </h3>
                <p className="text-gray-600 mb-4">
                  Techniques pour simplifier les interfaces et faciliter la
                  prise de décision des utilisateurs.
                </p>
                <Link
                  href="/articles/cognitive-load"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Lire l'article{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                  alt="Théorie des couleurs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Théorie des couleurs en UX
                </h3>
                <p className="text-gray-600 mb-4">
                  Comment utiliser les couleurs de manière stratégique pour
                  guider l'attention et communiquer efficacement.
                </p>
                <Link
                  href="/articles/color-theory"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Lire l'article{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                  alt="Typographie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Typographie et lisibilité
                </h3>
                <p className="text-gray-600 mb-4">
                  Principes de typographie pour améliorer la lisibilité et la
                  hiérarchie visuelle dans vos interfaces.
                </p>
                <Link
                  href="/articles/typography"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Lire l'article{" "}
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
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

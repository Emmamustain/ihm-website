import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Panorama des concepts clés</h1>
        <div className="h-1 w-20 bg-blue-600 mb-8"></div>

        {/* Concept Cards Grid - Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* Card 1: Principes de conception */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-44 w-full">
              <Image
                src="/images/principles.jpg"
                alt="Principes de conception"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Principes de conception
              </h3>
              <p className="text-gray-600 mb-4">
                Visibilité, feedback, cohérence, prévention d'erreurs,
                affordance...
              </p>
              <Link
                href="/concepts/principles"
                className="inline-flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Modèles mentaux */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-44 w-full flex items-center justify-start p-4 bg-green-50">
              <Image
                src="/images/mental-model.jpg"
                alt="Modèles mentaux"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-green-700 font-medium">
                Modèles mentaux
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Modèles mentaux
              </h3>
              <p className="text-gray-600 mb-4">
                Comprendre comment les utilisateurs perçoivent et utilisent une
                interface.
              </p>
              <Link
                href="/concepts/mental-models"
                className="inline-flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Patterns de design */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-44 w-full">
              <Image
                src="/images/design-patterns.jpg"
                alt="Patterns de design"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Patterns de design
              </h3>
              <p className="text-gray-600 mb-4">
                Solutions éprouvées pour des problèmes récurrents d'interface.
              </p>
              <Link
                href="/concepts/design-patterns"
                className="inline-flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 4: Accessibilité */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-44 w-full">
              <Image
                src="/images/accessibility.jpg"
                alt="Accessibilité"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Accessibilité
              </h3>
              <p className="text-gray-600 mb-4">
                Créer des interfaces utilisables par tous, quelles que soient
                les capacités.
              </p>
              <Link
                href="/concepts/accessibility"
                className="inline-flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 5: Évaluation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-44 w-full">
              <Image
                src="/images/evaluation.jpg"
                alt="Évaluation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Évaluation
              </h3>
              <p className="text-gray-600 mb-4">
                Mesurer l'utilisabilité et la satisfaction utilisateur.
              </p>
              <Link
                href="/concepts/evaluation"
                className="inline-flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 6: Futur de l'IHM */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-44 w-full flex items-center justify-start p-4 bg-green-50">
              <Image
                src="/images/future-ihm.jpg"
                alt="Futur IHM"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-green-700 font-medium">Futur IHM</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Futur de l'IHM
              </h3>
              <p className="text-gray-600 mb-4">
                Interfaces neurales, IA, réalité étendue, multimodalité...
              </p>
              <Link
                href="/concepts/future"
                className="inline-flex items-center gap-1 text-gray-800 hover:text-blue-700 font-medium"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Concept Sections */}
        <section className="mb-20">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4" id="principles">
              Principes de conception
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                Les principes de conception d'interface utilisateur constituent
                la base fondamentale pour créer des expériences intuitives et
                efficaces. Ils guident les concepteurs dans leurs décisions et
                assurent une cohérence globale.
              </p>
              <h3 className="text-lg font-semibold mb-2">Points clés :</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Visibilité :</strong> Rendre visibles les éléments
                  importants et les actions possibles
                </li>
                <li>
                  <strong>Feedback :</strong> Informer l'utilisateur sur les
                  résultats de ses actions
                </li>
                <li>
                  <strong>Cohérence :</strong> Maintenir une logique dans la
                  présentation et le fonctionnement
                </li>
                <li>
                  <strong>Prévention d'erreurs :</strong> Empêcher l'utilisateur
                  de commettre des erreurs
                </li>
                <li>
                  <strong>Affordance :</strong> Suggérer visuellement comment
                  interagir avec les éléments
                </li>
              </ul>
              <p>
                Ces principes, combinés avec une bonne compréhension des
                utilisateurs, permettent de créer des interfaces qui requièrent
                moins d'effort cognitif et offrent une expérience plus agréable.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4" id="mental-models">
              Modèles mentaux
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                Les modèles mentaux représentent la façon dont les utilisateurs
                comprennent et perçoivent le fonctionnement d'un système. Ils
                influencent directement comment les personnes interagissent avec
                une interface.
              </p>
              <h3 className="text-lg font-semibold mb-2">Points clés :</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Représentation interne :</strong> Comment
                  l'utilisateur se représente mentalement le système
                </li>
                <li>
                  <strong>Expériences antérieures :</strong> Influence des
                  interactions précédentes sur les attentes
                </li>
                <li>
                  <strong>Métaphores :</strong> Utilisation d'analogies avec le
                  monde réel pour faciliter la compréhension
                </li>
                <li>
                  <strong>Modèle conceptuel :</strong> Comment le designer
                  souhaite que l'utilisateur comprenne le système
                </li>
              </ul>
              <p>
                Aligner le modèle mental de l'utilisateur avec le modèle
                conceptuel du designer est essentiel pour créer des interfaces
                intuitives et faciles à apprendre.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4" id="design-patterns">
              Patterns de design
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                Les patterns de design sont des solutions éprouvées à des
                problèmes récurrents de conception d'interface. Ils offrent des
                modèles réutilisables qui facilitent l'apprentissage et
                l'utilisation.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Exemples courants :
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Navigation :</strong> Menus hamburger, onglets, fil
                  d'Ariane
                </li>
                <li>
                  <strong>Formulaires :</strong> Validation inline, étapes
                  progressives, auto-complétion
                </li>
                <li>
                  <strong>Présentation :</strong> Accordéons, carousels, cartes
                </li>
                <li>
                  <strong>Feedback :</strong> Toasts, barres de progression,
                  animations de transition
                </li>
              </ul>
              <p>
                L'utilisation de patterns familiers réduit la charge cognitive
                des utilisateurs et leur permet de se concentrer sur leurs
                objectifs plutôt que sur l'apprentissage de l'interface.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4" id="accessibility">
              Accessibilité
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                L'accessibilité garantit que les interfaces peuvent être
                utilisées par tous, y compris les personnes ayant des handicaps
                visuels, auditifs, moteurs ou cognitifs.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Principes fondamentaux :
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Perceptibilité :</strong> Contenu présenté de façon à
                  être perçu par tous les utilisateurs
                </li>
                <li>
                  <strong>Opérabilité :</strong> Interface utilisable par
                  différents moyens (clavier, souris, voix)
                </li>
                <li>
                  <strong>Compréhensibilité :</strong> Contenu et fonctionnement
                  clairs et prévisibles
                </li>
                <li>
                  <strong>Robustesse :</strong> Compatibilité avec les
                  technologies d'assistance
                </li>
              </ul>
              <p>
                Une interface accessible bénéficie à tous les utilisateurs, pas
                seulement à ceux ayant des handicaps, en offrant une expérience
                plus flexible et adaptable.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4" id="evaluation">
              Évaluation
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                L'évaluation des interfaces utilisateur permet de mesurer leur
                efficacité, leur efficience et la satisfaction qu'elles
                procurent, afin d'identifier les problèmes et d'améliorer
                l'expérience.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Méthodes d'évaluation :
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Tests utilisateurs :</strong> Observation directe des
                  utilisateurs accomplissant des tâches
                </li>
                <li>
                  <strong>Évaluation heuristique :</strong> Analyse par des
                  experts selon des principes établis
                </li>
                <li>
                  <strong>Analyse des parcours :</strong> Étude des chemins
                  empruntés par les utilisateurs
                </li>
                <li>
                  <strong>Questionnaires standardisés :</strong> SUS, QUIS, UEQ
                  pour mesurer la satisfaction
                </li>
              </ul>
              <p>
                Une démarche d'évaluation continue, tout au long du cycle de
                développement, permet d'identifier rapidement les problèmes et
                d'améliorer itérativement l'expérience utilisateur.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4" id="future">
              Futur de l'IHM
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                Le futur de l'interaction homme-machine explore de nouvelles
                façons d'interagir avec les systèmes, en s'appuyant sur les
                progrès technologiques et une meilleure compréhension des
                comportements humains.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Tendances émergentes :
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Interfaces neurales :</strong> Interaction directe par
                  la pensée via des capteurs cérébraux
                </li>
                <li>
                  <strong>Intelligence artificielle :</strong> Interfaces
                  adaptatives qui anticipent les besoins
                </li>
                <li>
                  <strong>Réalité étendue :</strong> Fusion des mondes physique
                  et numérique (AR, VR, MR)
                </li>
                <li>
                  <strong>Interfaces multimodales :</strong> Combinaison de la
                  voix, des gestes, du regard et du toucher
                </li>
              </ul>
              <p>
                Ces technologies promettent des interactions plus naturelles et
                intuitives, réduisant la distance entre l'intention de
                l'utilisateur et les actions du système.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-2">Articles connexes</h2>
          <div className="h-1 w-20 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 mb-8">
            Approfondissez vos connaissances avec ces ressources
            complémentaires.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Principes de Jakob Nielsen
              </h3>
              <p className="text-gray-600 mb-4">
                Les 10 heuristiques d'utilisabilité qui ont révolutionné la
                conception d'interfaces utilisateur.
              </p>
              <Link
                href="/articles/nielsen-principles"
                className="inline-block px-4 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Lire l'article
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Modèles mentaux en pratique
              </h3>
              <p className="text-gray-600 mb-4">
                Comment identifier et utiliser les modèles mentaux des
                utilisateurs pour créer des interfaces plus intuitives.
              </p>
              <Link
                href="/articles/mental-models-practice"
                className="inline-block px-4 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Lire l'article
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Évolution des interfaces
              </h3>
              <p className="text-gray-600 mb-4">
                Histoire complète de l'évolution des interfaces, des cartes
                perforées aux interfaces neurales.
              </p>
              <Link
                href="/articles/interface-evolution"
                className="inline-block px-4 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Lire l'article
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 text-white p-10 rounded-lg text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à explorer les technologies de l'IHM ?
          </h2>
          <p className="mb-6">
            Découvrez comment les concepts fondamentaux s'appliquent aux
            interfaces d'aujourd'hui et de demain.
          </p>
          <Link
            href="/technologies"
            className="inline-block px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            Explorer les technologies
          </Link>
        </section>

        {/* Newsletter Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Restez informé</h2>
          <div className="h-1 w-20 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir les derniers
            articles, conseils et actualités sur l'interface homme-machine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              S'abonner
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

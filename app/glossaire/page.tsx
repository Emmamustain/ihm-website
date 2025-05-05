"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Image from "next/image";
import { Search } from "lucide-react";

export default function GlossairePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Alphabet array for navigation
  const alphabet = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Glossary data
  const glossaryItems = [
    {
      letter: "#",
      terms: [
        {
          term: "# (Hashtag)",
          definitions: [
            {
              title: "# (Hashtag)",
              description:
                "Mot-clé précédé du symbole #, utilisé principalement sur les réseaux sociaux pour catégoriser du contenu et le rendre facilement trouvable.",
            },
            {
              title: "# (Dièse en programmation)",
              description:
                "Utilisé dans certains langages pour marquer un commentaire. Exemple : en Python, # Ceci est un commentaire.",
            },
            {
              title: "#RRGGBB (Code hexadécimal)",
              description:
                "Représentation d'une couleur en HTML/CSS, précédée du symbole #.",
            },
            {
              title: "#ID (Sélecteur CSS)",
              description:
                "En CSS, symbole utilisé pour cibler un élément HTML par son attribut id.",
            },
          ],
        },
      ],
    },
    {
      letter: "A",
      terms: [
        {
          term: "Accessibilité",
          definitions: [
            {
              title: "Accessibilité",
              description:
                "Conception de produits, d'appareils, de services ou d'environnements qui peuvent être utilisés par des personnes ayant un large éventail de capacités. Dans le contexte des interfaces, cela implique de permettre à tous les utilisateurs, y compris ceux ayant des handicaps, d'interagir efficacement avec les systèmes.",
            },
          ],
        },
        {
          term: "Affordance",
          definitions: [
            {
              title: "Affordance",
              description:
                "Qualité d'un objet qui suggère intuitivement son utilisation. Dans le design d'interface, les affordances sont des indices visuels qui indiquent comment interagir avec un élément (ex: un bouton qui semble pressable).",
            },
          ],
        },
        {
          term: "API (Application Programming Interface)",
          definitions: [
            {
              title: "API (Application Programming Interface)",
              description:
                "Ensemble de définitions, de protocoles et d'outils permettant à différents logiciels de communiquer entre eux. Dans le contexte de l'IHM, les API sont souvent utilisées pour connecter l'interface utilisateur aux fonctionnalités sous-jacentes.",
            },
          ],
        },
        {
          term: "Avatar",
          definitions: [
            {
              title: "Avatar",
              description:
                "Représentation graphique d'un utilisateur dans un environnement numérique ou virtuel. Les avatars peuvent être des photos de profil, des personnages 3D ou des icônes, et jouent un rôle important dans l'expérience utilisateur des réseaux sociaux et des jeux.",
            },
          ],
        },
      ],
    },
    {
      letter: "B",
      terms: [
        {
          term: "Breadcrumb (Fil d'Ariane)",
          definitions: [
            {
              title: "Breadcrumb (Fil d'Ariane)",
              description:
                "Élément de navigation qui montre le chemin parcouru par l'utilisateur dans la hiérarchie d'un site web, permettant de comprendre sa position actuelle et de revenir facilement aux niveaux supérieurs.",
            },
          ],
        },
        {
          term: "Backend",
          definitions: [
            {
              title: "Backend",
              description:
                "Partie d'une application qui gère le traitement des données, la logique métier et l'interaction avec les bases de données, invisible pour l'utilisateur mais essentielle au fonctionnement de l'interface utilisateur (frontend).",
            },
          ],
        },
      ],
    },
    {
      letter: "C",
      terms: [
        {
          term: "Conception centrée utilisateur",
          definitions: [
            {
              title: "Conception centrée utilisateur",
              description:
                "Approche de conception qui place les besoins, les attentes et les limites des utilisateurs finaux au centre du processus de développement d'un produit ou d'une interface.",
            },
          ],
        },
        {
          term: "CSS (Cascading Style Sheets)",
          definitions: [
            {
              title: "CSS (Cascading Style Sheets)",
              description:
                "Langage informatique utilisé pour décrire la présentation d'un document écrit en HTML ou XML. Le CSS permet de styliser les éléments d'interface et de définir leur apparence visuelle.",
            },
          ],
        },
        {
          term: "Card Sorting",
          definitions: [
            {
              title: "Card Sorting",
              description:
                "Technique de recherche utilisateur où les participants regroupent et organisent des sujets en catégories qui leur semblent logiques. Utilisée pour créer ou améliorer l'architecture de l'information d'un site ou d'une application.",
            },
          ],
        },
        {
          term: "Charge cognitive",
          definitions: [
            {
              title: "Charge cognitive",
              description:
                "Quantité d'effort mental nécessaire pour utiliser un système. Une bonne interface utilisateur minimise la charge cognitive en présentant l'information de manière claire et en réduisant les étapes nécessaires pour accomplir une tâche.",
            },
          ],
        },
      ],
    },
    {
      letter: "D",
      terms: [
        {
          term: "Dark Pattern",
          definitions: [
            {
              title: "Dark Pattern",
              description:
                "Techniques de conception trompeuses utilisées dans les interfaces pour inciter les utilisateurs à faire des choix qu'ils n'auraient pas faits autrement, souvent au profit de l'entreprise plutôt que de l'utilisateur.",
            },
          ],
        },
        {
          term: "Design Responsive",
          definitions: [
            {
              title: "Design Responsive",
              description:
                "Approche de conception qui vise à offrir une expérience de visualisation optimale sur une variété d'appareils et de tailles d'écran, du mobile au desktop.",
            },
          ],
        },
        {
          term: "DOM (Document Object Model)",
          definitions: [
            {
              title: "DOM (Document Object Model)",
              description:
                "Représentation en mémoire d'un document structuré (comme HTML) qui permet aux programmes d'accéder et de modifier la structure, le contenu et le style du document. Fondamental pour la création d'interfaces web interactives.",
            },
          ],
        },
      ],
    },
    {
      letter: "E",
      terms: [
        {
          term: "Ergonomie",
          definitions: [
            {
              title: "Ergonomie",
              description:
                "Science qui étudie l'interaction entre les humains et les autres éléments d'un système, avec l'objectif d'optimiser le bien-être humain et la performance globale du système.",
            },
          ],
        },
        {
          term: "Expérience Utilisateur (UX)",
          definitions: [
            {
              title: "Expérience Utilisateur (UX)",
              description:
                "Ensemble des perceptions, émotions et réactions d'une personne résultant de l'utilisation d'un produit, système ou service. L'UX englobe tous les aspects de l'interaction de l'utilisateur avec le produit, incluant l'interface, les graphismes, la conception industrielle, l'ergonomie et le manuel d'utilisation.",
            },
          ],
        },
        {
          term: "Eye-tracking",
          definitions: [
            {
              title: "Eye-tracking",
              description:
                "Technique qui mesure où et comment une personne regarde, utilisée en recherche UX pour comprendre comment les utilisateurs interagissent visuellement avec une interface, quels éléments attirent leur attention et lesquels sont ignorés.",
            },
          ],
        },
      ],
    },
    {
      letter: "F",
      terms: [
        {
          term: "Feedback",
          definitions: [
            {
              title: "Feedback",
              description:
                "Réponse ou réaction du système à une action de l'utilisateur, qui peut être visuelle, sonore ou haptique. Un feedback efficace informe l'utilisateur que son action a été reconnue, qu'elle est en cours de traitement ou qu'elle a été complétée.",
            },
          ],
        },
        {
          term: "Frontend",
          definitions: [
            {
              title: "Frontend",
              description:
                "Partie d'une application avec laquelle l'utilisateur interagit directement. Elle comprend tous les éléments visuels, les animations et les comportements interactifs d'une interface.",
            },
          ],
        },
        {
          term: "Flat Design",
          definitions: [
            {
              title: "Flat Design",
              description:
                "Style de design minimaliste qui évite les éléments décoratifs comme les ombres, textures et dégradés, en faveur d'une approche épurée mettant l'accent sur la typographie, les couleurs vives et les formes simples.",
            },
          ],
        },
      ],
    },
    {
      letter: "G",
      terms: [
        {
          term: "Gestalt (Principes de)",
          definitions: [
            {
              title: "Gestalt (Principes de)",
              description:
                "Ensemble de lois psychologiques expliquant comment l'esprit humain perçoit et organise les éléments visuels. Ces principes (proximité, similarité, continuité, fermeture, figure/fond) sont fondamentaux en design d'interface pour créer des compositions visuelles cohérentes et intuitives.",
            },
          ],
        },
        {
          term: "GUI (Graphical User Interface)",
          definitions: [
            {
              title: "GUI (Graphical User Interface)",
              description:
                "Type d'interface qui permet aux utilisateurs d'interagir avec les dispositifs électroniques via des éléments graphiques comme des icônes, des boutons et des menus, plutôt que par des commandes textuelles.",
            },
          ],
        },
      ],
    },
    {
      letter: "H",
      terms: [
        {
          term: "Heuristiques de Nielsen",
          definitions: [
            {
              title: "Heuristiques de Nielsen",
              description:
                "Ensemble de 10 principes généraux pour la conception d'interfaces, développé par Jakob Nielsen. Ces heuristiques, comme la visibilité de l'état du système ou la prévention des erreurs, sont largement utilisées pour l'évaluation de l'utilisabilité.",
            },
          ],
        },
        {
          term: "HTML (HyperText Markup Language)",
          definitions: [
            {
              title: "HTML (HyperText Markup Language)",
              description:
                "Langage de balisage standard utilisé pour créer et structurer le contenu des pages web. HTML définit la structure sémantique du contenu, comme les paragraphes, les listes, les images et les liens hypertextes.",
            },
          ],
        },
        {
          term: "Hamburger Menu",
          definitions: [
            {
              title: "Hamburger Menu",
              description:
                "Icône de navigation composée de trois lignes horizontales parallèles, ressemblant à un hamburger, qui signale généralement un menu caché. Très répandu sur les interfaces mobiles pour économiser de l'espace, mais parfois critiqué pour son manque de visibilité.",
            },
          ],
        },
      ],
    },
    {
      letter: "I",
      terms: [
        {
          term: "IHM (Interface Homme-Machine)",
          definitions: [
            {
              title: "IHM (Interface Homme-Machine)",
              description:
                "Domaine d'étude qui se concentre sur la conception et l'utilisation de technologies informatiques, en mettant l'accent sur les interfaces entre les humains (utilisateurs) et les ordinateurs. L'IHM combine des aspects d'ingénierie, de design, de psychologie cognitive et d'ergonomie.",
            },
          ],
        },
        {
          term: "Icône",
          definitions: [
            {
              title: "Icône",
              description:
                "Symbole visuel qui représente une action, un objet ou un concept dans une interface. Les bonnes icônes sont immédiatement reconnaissables et compréhensibles par les utilisateurs, réduisant ainsi le besoin d'explications textuelles.",
            },
          ],
        },
        {
          term: "Interaction design",
          definitions: [
            {
              title: "Interaction design",
              description:
                "Discipline du design qui se concentre sur la création d'expériences interactives, étudiant comment les utilisateurs interagissent avec les systèmes et comment concevoir ces interactions pour qu'elles soient intuitives, efficaces et satisfaisantes.",
            },
          ],
        },
      ],
    },
    {
      letter: "J",
      terms: [
        {
          term: "JavaScript",
          definitions: [
            {
              title: "JavaScript",
              description:
                "Langage de programmation qui permet d'implémenter des fonctionnalités complexes sur les pages web, comme les mises à jour de contenu dynamiques, les animations, les cartes interactives et bien plus. C'est une technologie clé pour créer des interfaces web interactives.",
            },
          ],
        },
      ],
    },
    {
      letter: "K",
      terms: [
        {
          term: "Kiosque interactif",
          definitions: [
            {
              title: "Kiosque interactif",
              description:
                "Terminal informatique public avec une interface tactile permettant aux utilisateurs d'accéder à des informations ou des services spécifiques. Les kiosques sont conçus pour être utilisés par des personnes sans formation préalable, ce qui nécessite une attention particulière à l'intuitivité de l'interface.",
            },
          ],
        },
      ],
    },
    {
      letter: "L",
      terms: [
        {
          term: "Loi de Fitts",
          definitions: [
            {
              title: "Loi de Fitts",
              description:
                "Modèle prédictif du mouvement humain qui aide à concevoir des interfaces plus efficaces. Il stipule que le temps nécessaire pour atteindre une cible dépend de la distance et de la taille de la cible. En design d'interface, cela implique que les boutons importants devraient être plus grands et/ou plus proches de l'utilisateur.",
            },
          ],
        },
        {
          term: "Low-fidelity prototype",
          definitions: [
            {
              title: "Low-fidelity prototype",
              description:
                "Version simplifiée et approximative d'une interface, souvent créée rapidement à la main (croquis) ou avec des outils basiques. Ces prototypes permettent de tester et d'itérer sur des concepts de base avant d'investir dans des développements plus détaillés.",
            },
          ],
        },
      ],
    },
    {
      letter: "M",
      terms: [
        {
          term: "Material Design",
          definitions: [
            {
              title: "Material Design",
              description:
                "Langage de design développé par Google qui combine les principes classiques du bon design avec l'innovation et les possibilités offertes par la technologie et la science. Il se caractérise par l'utilisation de grilles, d'animations, de transitions et de profondeurs pour créer des interfaces utilisateur cohérentes et intuitives.",
            },
          ],
        },
        {
          term: "Modèle mental",
          definitions: [
            {
              title: "Modèle mental",
              description:
                "Représentation interne qu'une personne se fait du fonctionnement d'un système basée sur ses expériences, ses connaissances et ses attentes. Les interfaces efficaces s'alignent avec les modèles mentaux existants des utilisateurs ou facilitent la création de nouveaux modèles cohérents.",
            },
          ],
        },
        {
          term: "Mobile-first",
          definitions: [
            {
              title: "Mobile-first",
              description:
                "Approche de conception qui priorise la conception pour les appareils mobiles avant d'adapter pour les écrans plus grands comme les tablettes et les ordinateurs. Cette stratégie aide à se concentrer sur les fonctionnalités essentielles et à garantir une expérience utilisateur optimale sur tous les appareils.",
            },
          ],
        },
      ],
    },
    {
      letter: "N",
      terms: [
        {
          term: "Navigation",
          definitions: [
            {
              title: "Navigation",
              description:
                "Ensemble des mécanismes et des éléments d'interface qui permettent aux utilisateurs de se déplacer dans un système numérique, de trouver du contenu et de comprendre leur emplacement actuel. Une navigation bien conçue est essentielle pour l'utilisabilité d'un site ou d'une application.",
            },
          ],
        },
        {
          term: "NUI (Natural User Interface)",
          definitions: [
            {
              title: "NUI (Natural User Interface)",
              description:
                "Type d'interface qui permet aux utilisateurs d'interagir avec un système de manière naturelle et intuitive, souvent sans nécessiter d'apprentissage significatif. Les exemples incluent les interfaces tactiles, vocales, gestuelles et les interfaces basées sur le suivi des mouvements.",
            },
          ],
        },
      ],
    },
    {
      letter: "P",
      terms: [
        {
          term: "Persona",
          definitions: [
            {
              title: "Persona",
              description:
                "Personnage fictif créé pour représenter un groupe d'utilisateurs cibles partageant des caractéristiques, des comportements et des objectifs similaires. Les personas aident les équipes de conception à mieux comprendre et à prendre en compte les besoins des utilisateurs réels tout au long du processus de conception.",
            },
          ],
        },
        {
          term: "Parcours utilisateur",
          definitions: [
            {
              title: "Parcours utilisateur",
              description:
                "Représentation visuelle ou narrative de la séquence d'étapes qu'un utilisateur suit pour accomplir un objectif spécifique en utilisant un produit ou un service. Le parcours utilisateur aide à identifier les points de friction et les opportunités d'amélioration de l'expérience.",
            },
          ],
        },
        {
          term: "Progressive Disclosure",
          definitions: [
            {
              title: "Progressive Disclosure",
              description:
                "Technique de design qui consiste à présenter uniquement les informations et les options essentielles à l'utilisateur dans un premier temps, puis à révéler progressivement des informations ou des fonctionnalités plus complexes lorsque nécessaire. Cette approche réduit la charge cognitive et simplifie l'interface.",
            },
          ],
        },
      ],
    },
    {
      letter: "R",
      terms: [
        {
          term: "Responsive Web Design",
          definitions: [
            {
              title: "Responsive Web Design",
              description:
                "Approche de conception qui rend les pages web fonctionnelles et visuellement adaptées à tous les appareils et toutes les tailles d'écran, du smartphone au grand écran d'ordinateur. Cette méthode utilise principalement les CSS media queries pour adapter la mise en page.",
            },
          ],
        },
        {
          term: "Recherche utilisateur",
          definitions: [
            {
              title: "Recherche utilisateur",
              description:
                "Processus systématique visant à comprendre les comportements, les besoins et les motivations des utilisateurs à travers diverses méthodes comme les entretiens, les observations et les tests d'utilisabilité. La recherche utilisateur alimente et guide le processus de conception.",
            },
          ],
        },
      ],
    },
    {
      letter: "S",
      terms: [
        {
          term: "Skeuomorphisme",
          definitions: [
            {
              title: "Skeuomorphisme",
              description:
                "Style de design qui imite l'apparence d'objets réels dans les interfaces numériques. Par exemple, une application de notes qui ressemble à un carnet en papier, ou une corbeille qui ressemble à une vraie poubelle. Ce style est utilisé pour créer des associations familières qui aident les utilisateurs à comprendre les fonctionnalités.",
            },
          ],
        },
        {
          term: "Système de design",
          definitions: [
            {
              title: "Système de design",
              description:
                "Collection de composants réutilisables, guidés par des standards clairs, qui peuvent être assemblés pour construire n'importe quelle application. Un système de design complet comprend des éléments UI, des principes, une documentation et parfois du code, assurant cohérence et efficacité dans la création de produits numériques.",
            },
          ],
        },
      ],
    },
    {
      letter: "T",
      terms: [
        {
          term: "Test d'utilisabilité",
          definitions: [
            {
              title: "Test d'utilisabilité",
              description:
                "Méthode d'évaluation qui mesure la facilité d'utilisation d'un produit en observant des utilisateurs représentatifs accomplir des tâches spécifiques. Les tests d'utilisabilité permettent d'identifier les problèmes concrets rencontrés par les utilisateurs et de valider que le produit répond à leurs besoins.",
            },
          ],
        },
        {
          term: "Touch Target",
          definitions: [
            {
              title: "Touch Target",
              description:
                "Zone interactive sur laquelle un utilisateur peut appuyer ou cliquer pour déclencher une action dans une interface. Pour assurer une bonne utilisabilité sur les appareils tactiles, les touch targets doivent être suffisamment grands (généralement au moins 44×44 pixels) et suffisamment espacés pour éviter les erreurs de saisie.",
            },
          ],
        },
      ],
    },
    {
      letter: "U",
      terms: [
        {
          term: "Utilisabilité",
          definitions: [
            {
              title: "Utilisabilité",
              description:
                "Mesure de l'efficacité, de l'efficience et de la satisfaction avec lesquelles des utilisateurs spécifiques peuvent atteindre des objectifs spécifiques dans un environnement particulier. Une bonne utilisabilité se traduit par des interfaces faciles à apprendre, efficaces à utiliser et agréables.",
            },
          ],
        },
        {
          term: "UI (User Interface)",
          definitions: [
            {
              title: "UI (User Interface)",
              description:
                "Point de contact entre un utilisateur et un système numérique. L'UI comprend tous les éléments visuels, auditifs et haptiques avec lesquels l'utilisateur interagit, comme les boutons, les menus, les icônes, les sons de notification, etc.",
            },
          ],
        },
        {
          term: "UX (User Experience)",
          definitions: [
            {
              title: "UX (User Experience)",
              description:
                "Ensemble des perceptions et des réactions d'une personne résultant de l'utilisation réelle ou anticipée d'un produit, d'un système ou d'un service. L'UX englobe tous les aspects de l'interaction de l'utilisateur avec l'entreprise, ses services et ses produits.",
            },
          ],
        },
      ],
    },
    {
      letter: "V",
      terms: [
        {
          term: "VUI (Voice User Interface)",
          definitions: [
            {
              title: "VUI (Voice User Interface)",
              description:
                "Interface qui permet aux utilisateurs d'interagir avec un système par la voix plutôt que par des méthodes tactiles ou visuelles. Les assistants vocaux comme Siri, Alexa et Google Assistant sont des exemples populaires de VUI, qui présentent des défis de conception uniques comme la reconnaissance d'intentions et le feedback non visuel.",
            },
          ],
        },
      ],
    },
    {
      letter: "W",
      terms: [
        {
          term: "Wireframe",
          definitions: [
            {
              title: "Wireframe",
              description:
                "Représentation visuelle basique de la structure et de la mise en page d'une interface, montrant l'emplacement des éléments sans détails visuels comme les couleurs, les images ou la typographie. Les wireframes servent de plan pour le design et permettent de se concentrer sur la fonctionnalité et l'architecture de l'information avant l'esthétique.",
            },
          ],
        },
        {
          term: "WCAG (Web Content Accessibility Guidelines)",
          definitions: [
            {
              title: "WCAG (Web Content Accessibility Guidelines)",
              description:
                "Ensemble de recommandations internationales pour rendre le contenu web plus accessible aux personnes handicapées, y compris les déficiences visuelles, auditives, physiques, cognitives et neurologiques. Ces lignes directrices sont organisées autour de quatre principes : perceptible, utilisable, compréhensible et robuste.",
            },
          ],
        },
      ],
    },
    {
      letter: "Z",
      terms: [
        {
          term: "Z-pattern",
          definitions: [
            {
              title: "Z-pattern",
              description:
                "Modèle de balayage visuel en forme de Z que les utilisateurs suivent naturellement lors de la lecture d'une page web. Dans les cultures occidentales (lecture de gauche à droite), les yeux tendent à parcourir le haut de la page de gauche à droite, puis en diagonale vers le bas à gauche, et à nouveau de gauche à droite au bas de la page. Les concepteurs placent souvent les éléments importants le long de ce chemin.",
            },
          ],
        },
      ],
    },
  ];

  // Filter items based on search query
  const filteredItems = searchQuery
    ? glossaryItems
        .map((section) => ({
          letter: section.letter,
          terms: section.terms.filter(
            (term) =>
              term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
              term.definitions.some((def) =>
                def.description
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
          ),
        }))
        .filter((section) => section.terms.length > 0)
    : glossaryItems;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main Content with blue gradient background */}
      <div className="bg-[#e9f1f9] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          {/* Page Title and Illustration */}
          <div className="flex flex-col items-center mb-8">
            <div className="mb-4">
              <Image
                src="/images/glosaireimage.png"
                alt="Illustration glossaire"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Glossaire</h1>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl w-full mb-8 relative">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Que recherchez-vous ?"
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Alphabet Navigation */}
          <div className="w-full flex justify-center mb-6 overflow-x-auto">
            <div className="flex space-x-4">
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glossary Content */}
      <main className="flex-grow py-8 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map(
              (section) =>
                section.terms.length > 0 && (
                  <div
                    key={section.letter}
                    id={section.letter}
                    className="mb-16"
                  >
                    <h2 className="text-6xl font-bold text-gray-800 mb-8">
                      {section.letter}
                    </h2>

                    {section.terms.map((term) => (
                      <div key={term.term} className="mb-8">
                        <h3
                          id={term.term.replace(/\s+/g, "-").toLowerCase()}
                          className="text-xl font-bold text-gray-800 mb-2"
                        >
                          {term.term}
                        </h3>

                        {term.definitions.map((def, index) => (
                          <div key={index} className="ml-0 mb-4">
                            {term.definitions.length > 1 && (
                              <h4 className="font-semibold text-gray-700 mb-1">
                                {def.title}
                              </h4>
                            )}
                            <p className="text-gray-600">{def.description}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )
            )
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600">
                Aucun résultat trouvé pour "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

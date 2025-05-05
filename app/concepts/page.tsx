"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import {
  BookOpen,
  Brain,
  Layers,
  Accessibility,
  BarChart3,
  Rocket,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
  Plus,
  Minus,
} from "lucide-react";

// Define the concept type
type Concept = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  points: {
    title: string;
    description: string;
  }[];
  animation?: boolean;
  externalLink?: string;
  externalLabel?: string;
};

export default function ConceptsPage() {
  // State for expandable sections
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "principles"
  );

  // Function to toggle expanded concept
  const toggleConcept = (id: string) => {
    if (expandedConcept === id) {
      setExpandedConcept(null);
    } else {
      setExpandedConcept(id);
    }
  };

  // Function to toggle expanded section
  const toggleSection = (id: string) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  // Concepts data
  const concepts: Concept[] = [
    {
      id: "principles",
      title: "Principes de conception",
      description:
        "Les règles fondamentales qui guident la création d'interfaces faciles à comprendre, cohérentes et agréables à utiliser.",
      icon: BookOpen,
      color: "blue",
      points: [
        {
          title: "Visibilité",
          description:
            "Rendre visibles les éléments importants et les actions possibles",
        },
        {
          title: "Feedback",
          description:
            "Informer l'utilisateur sur les résultats de ses actions",
        },
        {
          title: "Cohérence",
          description:
            "Maintenir une logique dans la présentation et le fonctionnement",
        },
        {
          title: "Prévention d'erreurs",
          description: "Empêcher l'utilisateur de commettre des erreurs",
        },
        {
          title: "Affordance",
          description:
            "Suggérer visuellement comment interagir avec les éléments",
        },
      ],
      externalLink:
        "https://www.nngroup.com/articles/ten-usability-heuristics/",
      externalLabel: "En savoir plus sur les principes de conception (NNG)",
    },
    {
      id: "mental-models",
      title: "Modèles mentaux",
      description:
        "La façon dont les utilisateurs imaginent le fonctionnement d'un système, influençant leurs attentes et leurs actions.",
      icon: Brain,
      color: "green",
      points: [
        {
          title: "Représentation interne",
          description:
            "Comment l'utilisateur se représente mentalement le système",
        },
        {
          title: "Expériences antérieures",
          description:
            "Influence des interactions précédentes sur les attentes",
        },
        {
          title: "Métaphores",
          description:
            "Utilisation d'analogies avec le monde réel pour faciliter la compréhension",
        },
        {
          title: "Modèle conceptuel",
          description:
            "Comment le designer souhaite que l'utilisateur comprenne le système",
        },
      ],
      animation: true,
      externalLink: "https://www.nngroup.com/articles/mental-models/",
      externalLabel: "En savoir plus sur les modèles mentaux (NNG)",
    },
    {
      id: "design-patterns",
      title: "Patterns de design",
      description:
        "Des solutions réutilisables pour résoudre des problèmes courants de conception et rendre les interfaces plus efficaces.",
      icon: Layers,
      color: "purple",
      points: [
        {
          title: "Navigation",
          description: "Menus hamburger, onglets, fil d'Ariane",
        },
        {
          title: "Formulaires",
          description:
            "Validation inline, étapes progressives, auto-complétion",
        },
        {
          title: "Présentation",
          description: "Accordéons, carousels, cartes",
        },
        {
          title: "Feedback",
          description:
            "Toasts, barres de progression, animations de transition",
        },
      ],
      externalLink: "https://ui-patterns.com/",
      externalLabel: "En savoir plus sur les design patterns (UI Patterns)",
    },
    {
      id: "accessibility",
      title: "Accessibilité",
      description:
        "L'ensemble des pratiques visant à rendre les interfaces utilisables par tous, y compris les personnes en situation de handicap.",
      icon: Accessibility,
      color: "amber",
      points: [
        {
          title: "Perceptibilité",
          description:
            "Contenu présenté de façon à être perçu par tous les utilisateurs",
        },
        {
          title: "Opérabilité",
          description:
            "Interface utilisable par différents moyens (clavier, souris, voix)",
        },
        {
          title: "Compréhensibilité",
          description: "Contenu et fonctionnement clairs et prévisibles",
        },
        {
          title: "Robustesse",
          description: "Compatibilité avec les technologies d'assistance",
        },
      ],
      externalLink: "https://developer.mozilla.org/fr/docs/Web/Accessibility",
      externalLabel: "En savoir plus sur l'accessibilité (MDN)",
    },
    {
      id: "evaluation",
      title: "Évaluation",
      description:
        "Les méthodes pour tester et mesurer la qualité, l'utilisabilité et la satisfaction des utilisateurs face à une interface.",
      icon: BarChart3,
      color: "red",
      points: [
        {
          title: "Tests utilisateurs",
          description:
            "Observation directe des utilisateurs accomplissant des tâches",
        },
        {
          title: "Évaluation heuristique",
          description: "Analyse par des experts selon des principes établis",
        },
        {
          title: "Analyse des parcours",
          description: "Étude des chemins empruntés par les utilisateurs",
        },
        {
          title: "Questionnaires standardisés",
          description: "SUS, QUIS, UEQ pour mesurer la satisfaction",
        },
      ],
      externalLink: "https://www.nngroup.com/articles/usability-testing-101/",
      externalLabel: "En savoir plus sur l'évaluation (NNG)",
    },
    {
      id: "future",
      title: "Futur de l'IHM",
      description:
        "Les innovations et tendances qui transformeront nos interactions avec les technologies dans les années à venir.",
      icon: Rocket,
      color: "indigo",
      points: [
        {
          title: "Interfaces neurales",
          description:
            "Interaction directe par la pensée via des capteurs cérébraux",
        },
        {
          title: "Intelligence artificielle",
          description: "Interfaces adaptatives qui anticipent les besoins",
        },
        {
          title: "Réalité étendue",
          description: "Fusion des mondes physique et numérique (AR, VR, MR)",
        },
        {
          title: "Interfaces multimodales",
          description:
            "Combinaison de la voix, des gestes, du regard et du toucher",
        },
      ],
      animation: true,
      externalLink:
        "https://www.interaction-design.org/literature/topics/human-computer-interaction",
      externalLabel:
        "En savoir plus sur le futur de l'IHM (Interaction Design Foundation)",
    },
  ];

  // Define color classes
  const colorClasses = {
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-100",
      dark: "bg-blue-600",
      text: "text-blue-700",
      border: "border-blue-200",
      hover: "hover:bg-blue-100",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    green: {
      light: "bg-green-50",
      medium: "bg-green-100",
      dark: "bg-green-600",
      text: "text-green-700",
      border: "border-green-200",
      hover: "hover:bg-green-100",
      button: "bg-green-600 hover:bg-green-700",
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-100",
      dark: "bg-purple-600",
      text: "text-purple-700",
      border: "border-purple-200",
      hover: "hover:bg-purple-100",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    amber: {
      light: "bg-amber-50",
      medium: "bg-amber-100",
      dark: "bg-amber-600",
      text: "text-amber-700",
      border: "border-amber-200",
      hover: "hover:bg-amber-100",
      button: "bg-amber-600 hover:bg-amber-700",
    },
    red: {
      light: "bg-red-50",
      medium: "bg-red-100",
      dark: "bg-red-600",
      text: "text-red-700",
      border: "border-red-200",
      hover: "hover:bg-red-100",
      button: "bg-red-600 hover:bg-red-700",
    },
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-100",
      dark: "bg-indigo-600",
      text: "text-indigo-700",
      border: "border-indigo-200",
      hover: "hover:bg-indigo-100",
      button: "bg-indigo-600 hover:bg-indigo-700",
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Concepts Clés en Interface Homme-Machine"
        description="Découvrez les principes fondamentaux qui gouvernent la conception d'interfaces et façonnent nos interactions numériques quotidiennes."
        badge="EXPLORATION"
        highlightedText="Clés"
      >
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {concepts.map((concept, index) => (
            <a
              key={concept.id}
              href={`#${concept.id}`}
              className={`px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-full transition-all border border-gray-200 shadow-sm hover:shadow transform hover:-translate-y-0.5 relative z-${
                10 + index
              }`}
            >
              {concept.title}
            </a>
          ))}
        </div>
      </HeroSection>

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto flex-grow">
        {/* Interactive Concept Cards */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Explorer les concepts interactifs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {concepts.map((concept) => {
              const IconComponent = concept.icon;
              const colors =
                colorClasses[concept.color as keyof typeof colorClasses];
              const isExpanded = expandedConcept === concept.id;

              const conceptImages: Record<string, string> = {
                principles:
                  "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=400&q=80",
                "mental-models":
                  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
                "design-patterns":
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
                accessibility:
                  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                evaluation:
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
                future:
                  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
              };

              return (
                <div
                  key={concept.id}
                  id={concept.id}
                  className={`relative rounded-xl overflow-hidden shadow-md border ${
                    colors.border
                  } transition-all duration-300 ${
                    isExpanded
                      ? "scale-105 z-10"
                      : "hover:shadow-lg hover:-translate-y-1"
                  } bg-white`}
                >
                  {/* Image en haut, titre sur l'image */}
                  <div className="h-32 relative flex items-center justify-center">
                    <img
                      src={conceptImages[concept.id]}
                      alt={concept.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="relative w-full flex items-center justify-center h-full">
                      <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg text-center w-full px-2">
                        {concept.title}
                      </h3>
                    </div>
                  </div>
                  {/* Contenu bas sur fond coloré - ensure full width and correct background */}
                  <div
                    className={`${colors.light} p-6 cursor-pointer w-full`}
                    onClick={() => toggleConcept(concept.id)}
                  >
                    <p className="text-gray-600 mb-3">{concept.description}</p>
                    {!isExpanded && (
                      <div className="flex items-center text-sm font-medium mt-2">
                        <span className={colors.text}>
                          Cliquez pour en savoir plus
                        </span>
                        <ChevronRight className={`h-4 w-4 ${colors.text}`} />
                      </div>
                    )}
                    {isExpanded && (
                      <div className="flex justify-end mt-4">
                        <a
                          href={concept.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg ${colors.button} transition-colors`}
                        >
                          {concept.externalLabel || "SAVOIR EN DÉTAILS"}{" "}
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed Concept Sections with toggles */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Approfondissement des concepts clés
          </h2>

          <div className="space-y-6">
            {concepts.map((concept) => {
              const IconComponent = concept.icon;
              const colors =
                colorClasses[concept.color as keyof typeof colorClasses];
              const isExpanded = expandedSection === concept.id;

              return (
                <div
                  key={concept.id}
                  className={`border rounded-xl overflow-hidden shadow-sm ${colors.border} transition-all duration-300`}
                >
                  <div
                    className={`flex items-center justify-between p-4 ${colors.light} cursor-pointer`}
                    onClick={() => toggleSection(concept.id)}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                      <h3 className={`text-xl font-semibold ${colors.text}`}>
                        {concept.title}
                      </h3>
                    </div>
                    <button>
                      {isExpanded ? (
                        <Minus size={20} className="text-gray-600" />
                      ) : (
                        <Plus size={20} className="text-gray-600" />
                      )}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className={`${colors.light} p-6`}>
                      <p className="text-gray-600 mb-3">
                        {concept.description}
                      </p>
                      <div className="flex justify-end mt-4">
                        <a
                          href={concept.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg ${colors.button} transition-colors`}
                        >
                          {concept.externalLabel || "SAVOIR EN DÉTAILS"}{" "}
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Articles Section - Improved */}
        <section className="py-10 mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Articles connexes
              </h2>
              <p className="text-gray-600">
                Approfondir vos connaissances avec ces ressources
                complémentaires
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all">
              <div className="h-40 relative flex items-end">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  alt="Principes de Jakob Nielsen"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative p-6 flex items-end w-full">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg w-full">
                    Principes de Jakob Nielsen
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Les 10 heuristiques d'utilisabilité qui ont révolutionné la
                  conception d'interfaces utilisateur.
                </p>
                <a
                  href="https://www.interaction-design.org/literature/topics/heuristic-evaluation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all">
              <div className="h-40 relative flex items-end">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Modèles mentaux en pratique"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative p-6 flex items-end w-full">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg w-full">
                    Modèles mentaux en pratique
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Comment identifier et utiliser les modèles mentaux des
                  utilisateurs pour créer des interfaces plus intuitives.
                </p>
                <a
                  href="https://www.interaction-design.org/literature/topics/mental-models"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 font-medium hover:underline"
                >
                  Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all">
              <div className="h-40 relative flex items-end">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                  alt="Évolution des interfaces"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative p-6 flex items-end w-full">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg w-full">
                    Évolution des interfaces
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Histoire complète de l'évolution des interfaces, des cartes
                  perforées aux interfaces neurales.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/History_of_human%E2%80%93computer_interaction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-medium hover:underline"
                >
                  Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

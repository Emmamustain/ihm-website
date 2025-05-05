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
        "Les fondements pour créer des interfaces intuitives et efficaces",
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
    },
    {
      id: "mental-models",
      title: "Modèles mentaux",
      description:
        "Comment les utilisateurs comprennent et perçoivent le fonctionnement d'un système",
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
    },
    {
      id: "design-patterns",
      title: "Patterns de design",
      description:
        "Solutions éprouvées à des problèmes récurrents de conception d'interface",
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
    },
    {
      id: "accessibility",
      title: "Accessibilité",
      description:
        "Créer des interfaces utilisables par tous, quelles que soient les capacités",
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
    },
    {
      id: "evaluation",
      title: "Évaluation",
      description:
        "Mesurer l'efficacité, l'efficience et la satisfaction procurée par les interfaces",
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
    },
    {
      id: "future",
      title: "Futur de l'IHM",
      description: "Les innovations qui façonnent l'avenir des interfaces",
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
                  }`}
                >
                  <div
                    className={`${colors.light} p-6 cursor-pointer`}
                    onClick={() => toggleConcept(concept.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`${colors.medium} p-2 rounded-lg`}>
                          <IconComponent className={`h-6 w-6 ${colors.text}`} />
                        </div>
                        <h3 className={`text-xl font-bold ${colors.text}`}>
                          {concept.title}
                        </h3>
                      </div>
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        aria-label={isExpanded ? "Réduire" : "Développer"}
                      >
                        {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                      </button>
                    </div>

                    <p className="text-gray-600 mb-3">{concept.description}</p>

                    {isExpanded && (
                      <div className="mt-4 space-y-3">
                        {concept.points.map((point, index) => (
                          <div key={index} className="flex gap-3 items-start">
                            <div className="mt-1">
                              <CheckCircle2
                                className={`h-5 w-5 ${colors.text}`}
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {point.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        ))}
                        <div className="pt-3 mt-2">
                          <Link
                            href={`/concepts/${concept.id}`}
                            className={`inline-flex items-center gap-1 px-4 py-2 text-white rounded-lg ${colors.button} transition-colors`}
                          >
                            Explorer en détail <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    )}

                    {!isExpanded && (
                      <div className="flex items-center text-sm font-medium mt-2">
                        <span className={colors.text}>
                          Cliquez pour en savoir plus
                        </span>
                        <ChevronRight className={`h-4 w-4 ${colors.text}`} />
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
                    <div className="p-6 bg-white">
                      <div className="max-w-3xl mx-auto">
                        <p className="text-gray-700 mb-6">
                          {concept.description} - Les principes détaillés
                          ci-dessous vous aideront à comprendre les fondements
                          et applications pratiques de ce concept en IHM.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {concept.points.map((point, index) => (
                            <div
                              key={index}
                              className={`p-4 rounded-lg ${colors.light} flex gap-4`}
                            >
                              <div
                                className={`p-2 h-fit rounded-full ${colors.medium} flex items-center justify-center`}
                              >
                                <span className="font-bold text-sm">
                                  {index + 1}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-bold mb-2">
                                  {point.title}
                                </h4>
                                <p className="text-gray-700">
                                  {point.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 flex justify-end">
                          <Link
                            href={`/concepts/${concept.id}`}
                            className={`inline-flex items-center gap-2 px-6 py-2 text-white rounded-lg ${colors.button} transition-colors`}
                          >
                            Dossier complet <ArrowRight size={16} />
                          </Link>
                        </div>
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
              <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-500 relative p-6 flex items-end">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <h3 className="relative text-xl font-bold text-white">
                  Principes de Jakob Nielsen
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Les 10 heuristiques d'utilisabilité qui ont révolutionné la
                  conception d'interfaces utilisateur.
                </p>
                <Link
                  href="/articles/nielsen-principles"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all">
              <div className="h-40 bg-gradient-to-r from-green-600 to-green-500 relative p-6 flex items-end">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <h3 className="relative text-xl font-bold text-white">
                  Modèles mentaux en pratique
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Comment identifier et utiliser les modèles mentaux des
                  utilisateurs pour créer des interfaces plus intuitives.
                </p>
                <Link
                  href="/articles/mental-models-practice"
                  className="inline-flex items-center text-green-600 font-medium hover:underline"
                >
                  Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all">
              <div className="h-40 bg-gradient-to-r from-indigo-600 to-indigo-500 relative p-6 flex items-end">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <h3 className="relative text-xl font-bold text-white">
                  Évolution des interfaces
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Histoire complète de l'évolution des interfaces, des cartes
                  perforées aux interfaces neurales.
                </p>
                <Link
                  href="/articles/interface-evolution"
                  className="inline-flex items-center text-indigo-600 font-medium hover:underline"
                >
                  Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

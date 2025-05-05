"use client";

import Image from "next/image";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import {
  BookOpen,
  PenTool,
  Lightbulb,
  RefreshCw,
  Users,
  BookMarked,
  Zap,
} from "lucide-react";

export default function APropos() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="À propos de notre organisation"
        description="Découvrez notre mission, notre équipe et nos valeurs."
        badge="À PROPOS"
        highlightedText="organisation"
      />

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Qui sommes-nous ?
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - Notre mission */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 h-36 relative overflow-hidden rounded-md">
              <Image
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80"
                alt="Mission IHM"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Notre mission
            </h2>
            <p className="text-gray-600 mb-4">
              Promouvoir l&apos;excellence en IHM pour un numérique plus
              accessible et intuitif.
            </p>
            <a
              href="#mission"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Découvrir <span className="ml-1">→</span>
            </a>
          </div>

          {/* Card 2 - Notre équipe */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 h-36 relative overflow-hidden rounded-md">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
                alt="Notre équipe"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Notre équipe
            </h2>
            <p className="text-gray-600 mb-4">
              Des experts passionnés en UX, design, recherche et développement.
            </p>
            <a
              href="#equipe"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Découvrir <span className="ml-1">→</span>
            </a>
          </div>

          {/* Card 3 - Nos valeurs */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 h-36 relative overflow-hidden rounded-md">
              <Image
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Nos valeurs"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Nos valeurs
            </h2>
            <p className="text-gray-600 mb-4">
              Accessibilité, innovation responsable, simplicité, amélioration
              continue.
            </p>
            <a
              href="#valeurs"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Découvrir <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Mission Section */}
        <section id="mission" className="pb-12 pt-16 border-t">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-2">
                Notre <span className="text-blue-600">mission</span>
              </h2>
              <p className="text-gray-500 mb-6">
                Promouvoir l&apos;excellence en matière d&apos;interfaces
                homme-machine pour un monde numérique plus accessible et
                intuitif.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 italic">
                <p>
                  « Nous croyons que des interfaces bien conçues améliorent la
                  vie quotidienne et permettent une meilleure adoption des
                  technologies par tous. »
                </p>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <BookMarked className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Partager des connaissances
                  </h3>
                </div>
                <p className="text-gray-600">
                  Diffuser des informations approfondies sur les principes de
                  l&apos;IHM et les bonnes pratiques de conception.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Présenter les innovations
                  </h3>
                </div>
                <p className="text-gray-600">
                  Explorer les technologies émergentes qui façonnent
                  l&apos;avenir des interfaces homme-machine.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Analyser des exemples
                  </h3>
                </div>
                <p className="text-gray-600">
                  Étudier des cas concrets d&apos;interfaces réussies et en
                  tirer des enseignements pratiques.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Former la relève</h3>
                </div>
                <p className="text-gray-600">
                  Contribuer à l&apos;éducation de la prochaine génération de
                  concepteurs d&apos;interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe Section */}
        <section id="equipe" className="py-12 border-t">
          <h2 className="text-2xl font-bold mb-2">
            Notre <span className="text-blue-600">équipe</span>
          </h2>
          <p className="text-gray-500 mb-10">
            Des experts passionnés en UX, design, recherche et développement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
                  alt="Jean Dupont"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Jean Dupont</h3>
                <p className="text-blue-600 mb-3">Directeur Général</p>
                <p className="text-gray-600 mb-4">
                  Expert en UX avec 15 ans d&apos;expérience dans le design
                  d&apos;interfaces innovantes
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
                  alt="Marie Laurent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Marie Laurent</h3>
                <p className="text-blue-600 mb-3">Directrice Design</p>
                <p className="text-gray-600 mb-4">
                  Spécialiste en design d&apos;expérience utilisateur et
                  interfaces accessibles
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
                  alt="Thomas Martin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Thomas Martin</h3>
                <p className="text-blue-600 mb-3">Responsable Innovation</p>
                <p className="text-gray-600 mb-4">
                  Expert en technologies émergentes et interfaces du futur
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section id="valeurs" className="py-12 border-t">
          <h2 className="text-2xl font-bold mb-2">
            Nos <span className="text-blue-600">valeurs</span>
          </h2>
          <p className="text-gray-500 mb-10">
            Les principes qui guident notre action au quotidien
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="bg-blue-50 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">
                Accessibilité
              </h3>
              <p className="text-gray-600 text-center">
                Des interfaces conçues pour tous, sans exclusion
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                Recherche constante de solutions créatives et efficaces
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="bg-blue-50 p-3 rounded-full">
                  <PenTool className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Simplicité</h3>
              <p className="text-gray-600 text-center">
                Des interfaces intuitives et faciles à utiliser
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="bg-blue-50 p-3 rounded-full">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">
                Amélioration continue
              </h3>
              <p className="text-gray-600 text-center">
                Apprentissage constant et évolution permanente
              </p>
            </div>
          </div>

          <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">
              Prêt à nous rejoindre ?
            </h3>
            <p className="text-center mb-8">
              Découvrez nos opportunités de carrière et nos programmes de
              formation.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="#"
                className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Nos formations
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

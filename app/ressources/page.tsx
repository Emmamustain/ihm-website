import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import {
  BookOpen,
  Newspaper,
  GraduationCap,
  ArrowRight,
  Filter,
  ChevronDown,
  Search,
} from "lucide-react";

export default function RessourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Bibliothèque de Ressources"
        description="Découvrez notre collection de ressources pour approfondir vos connaissances en conception d'interfaces."
        badge="DOCUMENTATION"
        highlightedText="Ressources"
      />

      {/* Advanced Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center mb-6">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-800">
              Filtrer les ressources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {/* Resource Type Filter */}
            <div className="relative">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Type de ressource
              </label>
              <div className="relative">
                <select
                  id="type"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-sm"
                >
                  <option value="">Tous les types</option>
                  <option value="livres">Livres</option>
                  <option value="articles">Articles</option>
                  <option value="cours">Cours</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Catégorie
              </label>
              <div className="relative">
                <select
                  id="category"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-sm"
                >
                  <option value="">Toutes les catégories</option>
                  <option value="mobiles">Applications Mobiles</option>
                  <option value="web">Web</option>
                  <option value="arvr">AR/VR</option>
                  <option value="vocal">Vocal</option>
                  <option value="tactile">Tactile</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Date Filter */}
            <div className="relative">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date de publication
              </label>
              <div className="relative">
                <select
                  id="date"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-sm"
                >
                  <option value="">Toutes les dates</option>
                  <option value="recent">Dernier mois</option>
                  <option value="3months">Derniers 3 mois</option>
                  <option value="year">Dernière année</option>
                  <option value="older">Plus ancien</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Author Filter */}
            <div className="relative">
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Auteur
              </label>
              <div className="relative">
                <select
                  id="author"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-sm"
                >
                  <option value="">Tous les auteurs</option>
                  <option value="jean-dupont">Jean Dupont</option>
                  <option value="marie-laurent">Marie Laurent</option>
                  <option value="sophie-bernard">Sophie Bernard</option>
                  <option value="thomas-martin">Thomas Martin</option>
                  <option value="julie-moreau">Julie Moreau</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Recherche
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  placeholder="Rechercher..."
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Appliquer les filtres
            </button>
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Books */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-green-600 p-2 bg-green-100 rounded-full mr-3">
                    <BookOpen className="h-6 w-6" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Livres</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Une sélection d&apos;ouvrages sur les fondamentaux de la
                  conception d&apos;interfaces et l&apos;expérience utilisateur.
                </p>
                <Link
                  href="/ressources/livres"
                  className="flex items-center text-blue-600 font-medium"
                >
                  Découvrir les livres
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="bg-blue-50 px-6 py-4">
                <p className="text-sm text-gray-600">42 livres disponibles</p>
              </div>
            </div>

            {/* Articles */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-gray-600 p-2 bg-gray-100 rounded-full mr-3">
                    <Newspaper className="h-6 w-6" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Articles</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Des articles de fond sur les dernières tendances et pratiques
                  en matière de design d&apos;interfaces.
                </p>
                <Link
                  href="/ressources/articles"
                  className="flex items-center text-blue-600 font-medium"
                >
                  Parcourir les articles
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="bg-blue-50 px-6 py-4">
                <p className="text-sm text-gray-600">
                  128 articles disponibles
                </p>
              </div>
            </div>

            {/* Courses */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-blue-600 p-2 bg-blue-100 rounded-full mr-3">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Cours</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Des formations structurées pour apprendre à votre rythme les
                  principes et techniques de l&apos;IHM.
                </p>
                <Link
                  href="/ressources/cours"
                  className="flex items-center text-blue-600 font-medium"
                >
                  Explorer les cours
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="bg-blue-50 px-6 py-4">
                <p className="text-sm text-gray-600">36 cours disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ressources populaires
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les ressources les plus consultées par notre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="mb-4 h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-blue-700/30" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  Livre
                </span>
                <h3 className="font-bold text-gray-800 mt-2 mb-1">
                  Design d'interfaces et expérience utilisateur
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Une approche complète des principes de conception centrée sur
                  l'utilisateur...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">12 juin 2023</span>
                  <a
                    href="/ressources/livres/design-interfaces"
                    className="text-blue-600 text-sm font-medium inline-flex items-center"
                  >
                    Consulter <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="mb-4 h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-600/10 flex items-center justify-center">
                  <Newspaper className="h-16 w-16 text-green-700/30" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  Article
                </span>
                <h3 className="font-bold text-gray-800 mt-2 mb-1">
                  L'avenir des interfaces conversationnelles
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comment les assistants vocaux et chatbots transforment notre
                  façon d'interagir...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    3 septembre 2023
                  </span>
                  <a
                    href="/ressources/articles/interfaces-conversationnelles"
                    className="text-blue-600 text-sm font-medium inline-flex items-center"
                  >
                    Consulter <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="mb-4 h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/10 flex items-center justify-center">
                  <GraduationCap className="h-16 w-16 text-purple-700/30" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                  Cours
                </span>
                <h3 className="font-bold text-gray-800 mt-2 mb-1">
                  Fondamentaux de l'UX Design
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Formation complète sur les principes et méthodes de conception
                  d'expérience utilisateur...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">17 juillet 2023</span>
                  <a
                    href="/ressources/cours/fondamentaux-ux"
                    className="text-blue-600 text-sm font-medium inline-flex items-center"
                  >
                    Consulter <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="mb-4 h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-600/10 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-yellow-700/30" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                  Livre
                </span>
                <h3 className="font-bold text-gray-800 mt-2 mb-1">
                  Psychologie des interfaces utilisateur
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprendre les aspects cognitifs et émotionnels de
                  l'interaction homme-machine...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">8 août 2023</span>
                  <a
                    href="/ressources/livres/psychologie-interfaces"
                    className="text-blue-600 text-sm font-medium inline-flex items-center"
                  >
                    Consulter <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resource 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="mb-4 h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600/10 flex items-center justify-center">
                  <Newspaper className="h-16 w-16 text-red-700/30" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                  Article
                </span>
                <h3 className="font-bold text-gray-800 mt-2 mb-1">
                  Accessibilité web : bonnes pratiques
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comment concevoir des interfaces inclusives pour tous les
                  utilisateurs...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">21 octobre 2023</span>
                  <a
                    href="/ressources/articles/accessibilite-web"
                    className="text-blue-600 text-sm font-medium inline-flex items-center"
                  >
                    Consulter <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resource 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="mb-4 h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/10 flex items-center justify-center">
                  <GraduationCap className="h-16 w-16 text-indigo-700/30" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                  Cours
                </span>
                <h3 className="font-bold text-gray-800 mt-2 mb-1">
                  Design systems : création et gestion
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Apprendre à construire et maintenir un système de design
                  cohérent et évolutif...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">5 novembre 2023</span>
                  <a
                    href="/ressources/cours/design-systems"
                    className="text-blue-600 text-sm font-medium inline-flex items-center"
                  >
                    Consulter <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import {
  Smile,
  Image as ImageIcon,
  Link as LinkIcon,
  Search,
  X,
  MessageSquare,
  Eye,
} from "lucide-react";

export default function CommunautePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-7xl mx-auto flex-grow w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Community Section */}
          <div className="lg:w-3/4">
            {/* Community Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
              {/* Community Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <div className="text-orange-400 text-2xl">👨‍👩‍👧‍👦</div>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      Communauté
                    </h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
                        <Search className="h-5 w-5 text-gray-400 mr-2" />
                        <input
                          type="text"
                          placeholder="Rechercher..."
                          className="outline-none text-sm border-none bg-transparent"
                        />
                      </div>
                    </div>
                    <button className="h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="space-y-4 text-gray-700">
                    <p className="font-medium">Bonjour à tous !🎉</p>

                    <p>
                      Je suis ravi de partager avec vous une nouvelle
                      passionnante. À partir de la semaine prochaine, nous
                      lancerons une nouvelle série sur notre blog dédiée aux
                      avancées récentes en Interface Homme-Machine (IHM). 📝
                    </p>

                    <p>
                      Préparez-vous à découvrir des articles enrichissants, des
                      entretiens avec des experts et des conseils précieux qui
                      vous aideront à mieux comprendre et concevoir des
                      interfaces utilisateurs intuitives et accessibles. 🧠
                    </p>

                    <p>
                      Vos retours ont toujours été notre force motrice, alors
                      n'hésitez pas à partager vos réflexions et suggestions
                      dans les commentaires. Construisons ensemble l'avenir de
                      l'IHM ! 🌈✨
                    </p>

                    <p>Restez connectés pour plus de mises à jour ! 📱</p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex items-center gap-2 flex-wrap">
                    <div className="text-sm text-gray-500">
                      Ajouter des tags :
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      interface-utilisateur
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      expérience-utilisateur
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      ergonomie
                    </span>
                    <button className="px-3 py-1 border border-red-300 text-red-500 rounded-full text-sm flex items-center gap-1">
                      <span>+</span> Ajouter Tag
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex gap-4">
                      <button className="text-gray-500">
                        <Smile className="h-6 w-6" />
                      </button>
                      <button className="text-gray-500">
                        <ImageIcon className="h-6 w-6" />
                      </button>
                      <button className="text-gray-500">
                        <LinkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                      Partager
                    </button>
                  </div>
                </div>
              </div>

              {/* Post Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button className="px-8 py-4 text-red-500 border-b-2 border-red-500 font-medium flex items-center">
                    <span className="mr-2">📝</span> Publication
                  </button>
                  <button className="px-8 py-4 text-gray-500 hover:text-gray-800 flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" /> Discussion
                  </button>
                  <button className="px-8 py-4 text-gray-500 hover:text-gray-800 flex items-center">
                    <span className="mr-2">🔗</span> Ressources
                  </button>
                  <button className="px-8 py-4 text-gray-500 hover:text-gray-800 flex items-center">
                    <span className="mr-2">📢</span> Annonces
                  </button>
                </div>
              </div>

              {/* Post Example */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/images/communaute/avatar.jpg"
                      alt="Avatar utilisateur"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Par : Marie Durand</span>
                      <span className="text-sm text-gray-500">
                        Depuis 2 jours
                      </span>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  L'importance de l'accessibilité dans la conception
                  d'interfaces
                </h2>

                <p className="text-gray-600 mb-6">
                  L'accessibilité numérique est un aspect fondamental de l'IHM
                  souvent négligé. En suivant les principes de conception
                  universelle, nous pouvons créer des interfaces qui
                  fonctionnent pour tous les utilisateurs, quelles que soient
                  leurs capacités, ce qui élargit notre audience et améliore
                  l'expérience globale.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    accessibilité
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    conception-inclusive
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    bonnes-pratiques
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm text-gray-500">
                    + 2 Tags de plus
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="flex items-center mr-4">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>28 Réponses</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>875 Vues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:w-1/4">
            {/* Featured Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                Sujets phares de la semaine 🔥
              </h2>

              <div className="space-y-6 mt-4">
                <div>
                  <p className="text-gray-600 text-sm">
                    Comment les interfaces tactiles ont-elles transformé notre
                    interaction avec les appareils numériques ? Partagez vos
                    réflexions et expériences.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 font-medium flex items-center mt-2 hover:text-gray-900"
                  >
                    Détails <span className="ml-1">→</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">
                    L'impact de l'intelligence artificielle sur la conception
                    d'interfaces utilisateur : opportunités et défis pour les
                    designers IHM.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 font-medium flex items-center mt-2 hover:text-gray-900"
                  >
                    Détails <span className="ml-1">→</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">
                    Recommandez et discutez d'un livre ou article marquant sur
                    l'ergonomie des interfaces.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 font-medium flex items-center mt-2 hover:text-gray-900"
                  >
                    Détails <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recommended Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Sujets recommandés
              </h2>

              <Link
                href="#"
                className="text-sm text-orange-500 font-medium flex items-center mt-4 hover:text-orange-600"
              >
                Voir plus <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

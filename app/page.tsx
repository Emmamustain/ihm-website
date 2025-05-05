import Image from "next/image";
import { Play, ChevronRight, Lightbulb, Zap, Users } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Interface Homme Machine"
        description="Explorer le monde de l'IHM, où l'interaction entre l'humain et la machine prend vie, et découvrez les principes, techniques et enjeux qui façonnent les interfaces d'aujourd'hui."
        badge="BIENVENUE"
        highlightedText="Homme Machine"
      >
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/concepts"
            className="px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg flex items-center gap-2"
          >
            Explorer les concepts
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href="/technologies"
            className="px-5 py-3 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition shadow-sm hover:shadow flex items-center gap-2"
          >
            Découvrir les technologies
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </HeroSection>

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto flex-grow">
        {/* Video Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 shadow-xl">
          <Link
            href="https://www.youtube.com/watch?v=BgX2eVMG8F8"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block"
          >
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group">
              <Image
                src="/images/vid.png"
                alt="Vidéo explicatif sur l'interface Homme machine"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm rounded-full p-5 transition-all group-hover:scale-110 shadow-lg">
                  <Play className="h-10 w-10 text-white" fill="white" />
                </div>
                <div className="mt-auto max-w-2xl">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                    Présentation
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    Comprendre l'Interface Homme-Machine
                  </h3>
                  <p className="text-white/90 mt-2">
                    Découvrez les fondements de l&apos;IHM et comment elle
                    façonne notre interaction quotidienne avec la technologie
                    dans cette vidéo explicative.
                  </p>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  3:45
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Concepts Fondamentaux
            </h3>
            <p className="text-gray-600 mb-4">
              Découvrez les principes théoriques qui définissent
              l&apos;interaction entre l&apos;humain et la machine.
            </p>
            <Link
              href="/concepts"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              En savoir plus
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Technologies Émergentes
            </h3>
            <p className="text-gray-600 mb-4">
              Explorez les innovations technologiques qui transforment notre
              façon d'interagir avec les machines.
            </p>
            <Link
              href="/technologies"
              className="text-purple-600 hover:text-purple-800 inline-flex items-center"
            >
              En savoir plus
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Design Centré Utilisateur
            </h3>
            <p className="text-gray-600 mb-4">
              Apprenez comment concevoir des interfaces intuitives qui répondent
              aux besoins des utilisateurs.
            </p>
            <Link
              href="/design"
              className="text-green-600 hover:text-green-800 inline-flex items-center"
            >
              En savoir plus
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Welcome Text with Style */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bienvenue sur notre plateforme IHM
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Bienvenue sur notre site dédié à l&apos;
              <span className="text-blue-600 font-medium">
                Interaction Homme-Machine (IHM)
              </span>
              .
            </p>

            <p>
              Explorer le monde de l&apos;IHM, c&apos;est découvrir comment les
              humains interagissent avec les machines au quotidien, à travers
              des interfaces intuitives, accessibles et efficaces.
            </p>

            <p>
              Que vous soyez étudiant, passionné de design, ou curieux des
              technologies, ce site vous guidera à travers les principes, les
              outils et les bonnes pratiques pour concevoir des interfaces
              centrées sur l&apos;utilisateur.
            </p>

            <div className="pt-4 border-t border-gray-100 mt-6">
              <Link
                href="/ressources"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition shadow-sm"
              >
                Explorer nos ressources
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

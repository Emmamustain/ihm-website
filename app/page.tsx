import Image from "next/image";
import { Play } from "lucide-react";
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
      />

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-4xl mx-auto flex-grow">
        {/* Video Section */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-04%20at%2012.53.40%E2%80%AFPM-5cqP0TlStqo0L4gyQLqbtyCD3Dub3F.png"
              alt="Vidéo explicatif sur l'interface Homme machine"
              fill
              className="object-cover"
            /> */}
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-6">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-3">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-semibold text-amber-600">
                  Vidéo explicatif
                </h3>
                <p className="text-white text-sm mt-2">
                  Explorer le monde de l&apos;IHM, où l&apos;interaction entre
                  l&apos;humain et la machine prend vie, et découvrez les
                  principes, techniques et enjeux qui façonnent les interfaces
                  d&apos;aujourd&apos;hui.
                </p>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                1:08
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Bienvenue sur notre site dédié à l&apos;Interaction Homme-Machine
            (IHM).
          </p>

          <p>
            Explorer le monde de l&apos;IHM, c&apos;est découvrir comment les
            humains interagissent avec les machines au quotidien, à travers des
            interfaces intuitives, accessibles et efficaces.
          </p>

          <p>
            Que vous soyez étudiant, passionné de design, ou curieux des
            technologies, ce site vous guidera à travers les principes, les
            outils et les bonnes pratiques pour concevoir des interfaces
            centrées sur l&apos;utilisateur.
          </p>
        </div>
      </main>
    </div>
  );
}

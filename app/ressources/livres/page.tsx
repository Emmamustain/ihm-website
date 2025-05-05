"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { toast } from "sonner";
import {
  BookOpen,
  MoreHorizontal,
  BookmarkPlus,
  ChevronDown,
  Filter,
} from "lucide-react";

export default function LivresPage() {
  // Sample books data (in a real app, this would come from an API or database)
  const books = [
    {
      id: 1,
      title: "Design d'interfaces : Les fondamentaux de l'UX/UI",
      author: "Jean Dupont",
      date: "21-03-2022",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/books/design-systems.jpg",
      description:
        "Ce livre explore les principes fondamentaux de la conception d'interfaces utilisateur. Il présente les meilleures pratiques pour créer des expériences intuitives et accessibles, avec un focus particulier sur les tests utilisateurs et la conception centrée sur l'humain.",
    },
    {
      id: 2,
      title: "L'ergonomie cognitive appliquée aux interfaces",
      author: "Marie Laurent",
      date: "15-06-2021",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/books/design-systems.jpg",
      description:
        "Une exploration approfondie de l'ergonomie cognitive et de son application aux interfaces utilisateur. Ce livre analyse comment les utilisateurs perçoivent, comprennent et traitent l'information, et comment concevoir des interfaces qui réduisent la charge cognitive.",
    },
    {
      id: 3,
      title: "Conception multimodale : Interfaces du futur",
      author: "Thomas Martin",
      date: "10-09-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/books/design-systems.jpg",
      description:
        "Ce livre présente les concepts avancés de la conception d'interfaces multimodales, intégrant la voix, les gestes et les interfaces tactiles. Il offre des perspectives sur l'évolution des interfaces homme-machine dans un monde de plus en plus connecté.",
    },
    {
      id: 4,
      title: "Accessibilité numérique : Concevoir pour tous",
      author: "Sophie Legrand",
      date: "05-01-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/books/design-systems.jpg",
      description:
        "Guide complet sur la conception d'interfaces accessibles. Ce livre explore les normes WCAG, les technologies d'assistance et les méthodologies pour tester et améliorer l'accessibilité des interfaces numériques pour tous les utilisateurs.",
    },
    {
      id: 5,
      title: "Design Systems : Cohérence et évolutivité",
      author: "Alexandre Petit",
      date: "18-11-2022",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/books/design-systems.jpg",
      description:
        "Ce livre présente les concepts fondamentaux des systèmes de design et leur importance pour créer des interfaces cohérentes et évolutives. Il couvre la création, l'implémentation et la maintenance de design systems pour des produits numériques à grande échelle.",
    },
    {
      id: 6,
      title: "L'influence des émotions sur l'expérience utilisateur",
      author: "Claire Dubois",
      date: "30-04-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/books/design-systems.jpg",
      description:
        "Une analyse du rôle des émotions dans la conception d'interfaces utilisateur. Ce livre explore comment les émotions influencent la prise de décision, la perception et l'engagement, et comment les designers peuvent créer des expériences utilisateur émotionnellement satisfaisantes.",
    },
  ];

  const handleSaveBook = (title: string) => {
    toast.success(`Le livre "${title}" a été bien sauvegardé`, {
      position: "bottom-right",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-7xl mx-auto flex-grow w-full">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center mb-3">
            <span className="text-green-600 mr-3">
              <BookOpen className="h-7 w-7" />
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Livres
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-4xl">
            Ces ouvrages vous permettront de comprendre les fondements
            théoriques et les bonnes pratiques pour concevoir des expériences
            utilisateur efficaces et intuitives
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Book Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="text-xl font-bold text-white mb-1 line-clamp-2">
                    {book.title}
                  </h2>
                </div>
              </div>

              {/* Book Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border-2 border-white shadow-sm">
                    <Image
                      src={book.authorAvatar}
                      alt={book.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-800 font-semibold">
                      {book.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      Publié le {book.date}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow line-clamp-4">
                  {book.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm">
                      <BookOpen className="h-4 w-4 mr-2" /> Consulter
                    </button>
                    <button
                      onClick={() => handleSaveBook(book.title)}
                      className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 hover:text-gray-900 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors"
                    >
                      <BookmarkPlus className="h-4 w-4 mr-2" /> Sauvegarder
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-gray-700 transition-colors hover:bg-gray-100 p-2 rounded-full">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { toast } from "sonner";
import {
  Newspaper,
  MoreHorizontal,
  BookmarkPlus,
  ChevronDown,
  Filter,
} from "lucide-react";

export default function ArticlesPage() {
  // Sample articles data (in a real app, this would come from an API or database)
  const articles = [
    {
      id: 1,
      title:
        "Les principes de Nielsen dans la conception d'interfaces modernes",
      author: "Sophie Bernard",
      date: "12-05-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/articles/ux-design.jpg",
      description:
        "Cet article explore comment les 10 principes heuristiques de Nielsen restent pertinents dans la conception d'interfaces modernes. Il analyse des exemples concrets d'applications et propose des recommandations pour améliorer l'expérience utilisateur.",
    },
    {
      id: 2,
      title: "L'impact de la loi de Fitts sur les interfaces tactiles",
      author: "Marc Leroy",
      date: "04-11-2022",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/articles/ux-design.jpg",
      description:
        "Une analyse approfondie de la loi de Fitts et de son application dans la conception d'interfaces tactiles. Comment optimiser le placement des éléments interactifs pour améliorer l'efficacité et réduire les erreurs des utilisateurs.",
    },
    {
      id: 3,
      title: "Design d'interfaces adaptatives : au-delà du responsive",
      author: "Julie Moreau",
      date: "23-02-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/articles/ux-design.jpg",
      description:
        "Cet article explore les techniques avancées de conception d'interfaces qui vont au-delà du responsive design traditionnel, en s'adaptant au contexte d'utilisation, aux préférences de l'utilisateur et à ses comportements passés.",
    },
    {
      id: 4,
      title: "L'importance du feedback visuel dans les interfaces utilisateur",
      author: "Antoine Dubois",
      date: "17-07-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/articles/ux-design.jpg",
      description:
        "Comment le feedback visuel immédiat influence la perception des utilisateurs et améliore l'utilisabilité. Cet article présente des techniques efficaces pour intégrer des retours visuels subtils mais significatifs dans vos interfaces.",
    },
    {
      id: 5,
      title: "Conception pour l'accessibilité cognitive : au-delà du WCAG",
      author: "Émilie Laurent",
      date: "09-04-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/articles/ux-design.jpg",
      description:
        "Cet article explique comment concevoir des interfaces accessibles pour les personnes ayant des déficits cognitifs. Il va au-delà des recommandations WCAG standard pour proposer des approches innovantes favorisant la compréhension et l'engagement.",
    },
    {
      id: 6,
      title: "Les dark patterns : comment les identifier et les éviter",
      author: "Thomas Martin",
      date: "28-01-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/articles/ux-design.jpg",
      description:
        "Une analyse critique des dark patterns couramment utilisés dans les interfaces numériques. Cet article explique comment ces pratiques trompeuses affectent les utilisateurs et propose des alternatives éthiques pour atteindre vos objectifs business.",
    },
  ];

  const handleSaveArticle = (title: string) => {
    toast.success(`L'article "${title}" a été bien sauvegardé`, {
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
            <span className="text-gray-600 mr-3">
              <Newspaper className="h-7 w-7" />
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Articles
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-4xl">
            Des articles utiles et à jour pour explorer les tendances et bonnes
            pratiques en design d'interfaces
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Article Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="text-xl font-bold text-white mb-1 line-clamp-2">
                    {article.title}
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border-2 border-white shadow-sm">
                    <Image
                      src={article.authorAvatar}
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-800 font-semibold">
                      {article.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      Publié le {article.date}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow line-clamp-4">
                  {article.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm">
                      <Newspaper className="h-4 w-4 mr-2" /> Lire l'article
                    </button>
                    <button
                      onClick={() => handleSaveArticle(article.title)}
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

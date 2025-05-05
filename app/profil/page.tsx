"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Newspaper,
  GraduationCap,
  LogOut,
  Bookmark,
  Bell,
  Clock,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/header";
import { toast } from "sonner";

// Define types for our data
type ItemType = "course" | "book" | "article";

interface SavedItem {
  id: number;
  title: string;
  date: string;
  type: ItemType;
}

interface SavedItemsState {
  courses: SavedItem[];
  books: SavedItem[];
  articles: SavedItem[];
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  summary: string;
  url: string;
}

export default function UserProfilePage() {
  // Mock data for saved items
  const [savedItems, setSavedItems] = useState<SavedItemsState>({
    courses: [
      {
        id: 1,
        title: "Introduction aux principes fondamentaux de l'IHM",
        date: "15-01-2023",
        type: "course",
      },
      {
        id: 2,
        title:
          "Prototypage d'interfaces : des wireframes aux maquettes interactives",
        date: "22-03-2023",
        type: "course",
      },
    ],
    books: [
      {
        id: 1,
        title: "Design d'interfaces : Les fondamentaux de l'UX/UI",
        date: "21-03-2022",
        type: "book",
      },
    ],
    articles: [
      {
        id: 1,
        title:
          "Les principes de Nielsen dans la conception d'interfaces modernes",
        date: "12-05-2023",
        type: "article",
      },
      {
        id: 2,
        title: "L'impact de la loi de Fitts sur les interfaces tactiles",
        date: "04-11-2022",
        type: "article",
      },
    ],
  });

  // Mock data for news
  const news: NewsItem[] = [
    {
      id: 1,
      title: "Nouvelle avancée en interface cerveau-machine",
      date: "12 avril 2023",
      source: "Science Daily",
      summary:
        "Des chercheurs ont développé une nouvelle interface cerveau-machine permettant de contrôler un ordinateur par la pensée avec une précision inédite.",
      url: "https://www.sciencedaily.com/",
    },
    {
      id: 2,
      title:
        "Apple dévoile son casque Vision Pro avec une nouvelle interface utilisateur",
      date: "5 juin 2023",
      source: "TechCrunch",
      summary:
        "Apple a présenté son nouveau casque de réalité mixte avec une interface révolutionnaire contrôlée par les yeux, les mains et la voix.",
      url: "https://techcrunch.com/",
    },
    {
      id: 3,
      title: "Conférence internationale sur l'IHM : appel à contributions",
      date: "20 mars 2023",
      source: "ACM SIGCHI",
      summary:
        "La conférence annuelle sur l'interaction homme-machine lance son appel à contributions pour l'édition 2024.",
      url: "https://sigchi.org/",
    },
  ];

  const handleRemoveItem = (id: number, type: ItemType) => {
    setSavedItems((prev) => {
      const key = `${type}s` as keyof SavedItemsState;
      return {
        ...prev,
        [key]: prev[key].filter((item) => item.id !== id),
      };
    });

    toast.success(`L'élément a été retiré de vos favoris`, {
      position: "bottom-right",
      duration: 3000,
    });
  };

  const handleLogout = () => {
    // In a real app, this would handle the logout process
    toast.success("Vous avez été déconnecté", {
      position: "bottom-right",
      duration: 3000,
    });
  };

  // Function to get icon based on item type
  const getItemIcon = (type: ItemType) => {
    switch (type) {
      case "course":
        return <GraduationCap className="h-5 w-5 text-blue-600" />;
      case "book":
        return <BookOpen className="h-5 w-5 text-green-600" />;
      case "article":
        return <Newspaper className="h-5 w-5 text-purple-600" />;
      default:
        return <Bookmark className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 pt-8">
        <div className="max-w-7xl mx-auto">
          {/* User Profile Info */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                AS
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Amina Said</h1>
                <p className="text-sm text-gray-500">amina.said@example.com</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Déconnexion</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Saved Items Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <Bookmark className="mr-2 h-5 w-5 text-blue-600" />
                    Mes contenus sauvegardés
                  </h2>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200">
                  <div className="flex">
                    <button className="px-6 py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
                      Tous
                    </button>
                    <button className="px-6 py-4 text-gray-500 hover:text-gray-700">
                      Cours
                    </button>
                    <button className="px-6 py-4 text-gray-500 hover:text-gray-700">
                      Livres
                    </button>
                    <button className="px-6 py-4 text-gray-500 hover:text-gray-700">
                      Articles
                    </button>
                  </div>
                </div>

                {/* Saved Items List */}
                <div className="divide-y divide-gray-200">
                  {/* Courses */}
                  {savedItems.courses.map((course) => (
                    <div
                      key={`course-${course.id}`}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            {getItemIcon(course.type)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {course.title}
                            </h3>
                            <div className="flex items-center mt-1">
                              <Clock className="h-3.5 w-3.5 text-gray-400 mr-1" />
                              <span className="text-xs text-gray-500">
                                Sauvegardé le {course.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Link
                            href="https://www.youtube.com/watch?v=SISAtevAJmI&t=1s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Voir
                          </Link>
                          <button
                            onClick={() =>
                              handleRemoveItem(course.id, "course")
                            }
                            className="text-gray-400 hover:text-red-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Books */}
                  {savedItems.books.map((book) => (
                    <div
                      key={`book-${book.id}`}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            {getItemIcon(book.type)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {book.title}
                            </h3>
                            <div className="flex items-center mt-1">
                              <Clock className="h-3.5 w-3.5 text-gray-400 mr-1" />
                              <span className="text-xs text-gray-500">
                                Sauvegardé le {book.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Link
                            href="https://www.wiley.com/en-us/Interaction%2BDesign%3A%2BBeyond%2BHuman-Computer%2BInteraction%2C%2B6th%2BEdition-p-9781119901099"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Voir
                          </Link>
                          <button
                            onClick={() => handleRemoveItem(book.id, "book")}
                            className="text-gray-400 hover:text-red-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Articles */}
                  {savedItems.articles.map((article) => (
                    <div
                      key={`article-${article.id}`}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            {getItemIcon(article.type)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {article.title}
                            </h3>
                            <div className="flex items-center mt-1">
                              <Clock className="h-3.5 w-3.5 text-gray-400 mr-1" />
                              <span className="text-xs text-gray-500">
                                Sauvegardé le {article.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Link
                            href="https://www.tandfonline.com/toc/hihc20/current"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Voir
                          </Link>
                          <button
                            onClick={() =>
                              handleRemoveItem(article.id, "article")
                            }
                            className="text-gray-400 hover:text-red-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Empty state */}
                  {savedItems.courses.length === 0 &&
                    savedItems.books.length === 0 &&
                    savedItems.articles.length === 0 && (
                      <div className="p-8 text-center">
                        <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          Aucun contenu sauvegardé
                        </h3>
                        <p className="text-gray-500">
                          Vous n'avez pas encore sauvegardé de contenu.
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* News Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-blue-600" />
                    Actualités IHM
                  </h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {news.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs text-gray-500 mb-2">
                        {item.date} • {item.source}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.summary}
                      </p>
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                      >
                        Lire l'article complet
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

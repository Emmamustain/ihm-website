"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { toast } from "sonner";
import {
  GraduationCap,
  MoreHorizontal,
  BookmarkPlus,
  Play,
  ChevronDown,
  Filter,
} from "lucide-react";

export default function CoursPage() {
  // Sample courses data (in a real app, this would come from an API or database)
  const courses = [
    {
      id: 1,
      title: "Introduction aux principes fondamentaux de l'IHM",
      author: "Dr. Pierre Dupont",
      date: "15-01-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/courses/ihm-course.jpg",
      description:
        "Ce cours présente les principes fondamentaux de l'interaction homme-machine. Vous découvrirez les théories cognitives, les modèles mentaux et les heuristiques qui guident la conception d'interfaces intuitives et efficaces.",
    },
    {
      id: 2,
      title:
        "Prototypage d'interfaces : des wireframes aux maquettes interactives",
      author: "Marie Laurent",
      date: "22-03-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/courses/ihm-course.jpg",
      description:
        "Apprenez à créer des prototypes d'interfaces, des simples wireframes jusqu'aux maquettes hautement interactives. Ce cours couvre les outils et méthodologies essentiels pour visualiser et tester vos concepts avant le développement.",
    },
    {
      id: 3,
      title: "Évaluation de l'utilisabilité : méthodes et techniques",
      author: "Thomas Moreau",
      date: "09-05-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/courses/ihm-course.jpg",
      description:
        "Ce cours explore les différentes méthodes d'évaluation de l'utilisabilité des interfaces. Vous apprendrez à concevoir des tests utilisateurs, à réaliser des évaluations heuristiques et à interpréter les données pour améliorer vos interfaces.",
    },
    {
      id: 4,
      title: "Conception d'interfaces adaptatives et responsives",
      author: "Julie Martin",
      date: "17-07-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/courses/ihm-course.jpg",
      description:
        "Découvrez comment concevoir des interfaces qui s'adaptent à différents dispositifs et contextes d'utilisation. Ce cours couvre les principes du responsive design et les techniques avancées pour créer des expériences cohérentes sur tous les écrans.",
    },
    {
      id: 5,
      title: "Accessibilité numérique : normes et implémentation",
      author: "Alexandre Petit",
      date: "05-09-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/courses/ihm-course.jpg",
      description:
        "Ce cours approfondi sur l'accessibilité numérique vous enseigne comment concevoir des interfaces utilisables par tous, y compris les personnes en situation de handicap. Découvrez les normes WCAG, les technologies d'assistance et les pratiques de développement inclusives.",
    },
    {
      id: 6,
      title: "Visualisation de données pour interfaces interactives",
      author: "Sophie Legrand",
      date: "12-11-2023",
      authorAvatar: "/images/avatars/avatar-1.jpg",
      coverImage: "/images/courses/ihm-course.jpg",
      description:
        "Apprenez à présenter des données complexes de manière claire et interactive. Ce cours couvre les principes de la visualisation de données, les types de graphiques appropriés et les techniques pour créer des tableaux de bord efficaces et compréhensibles.",
    },
  ];

  const handleSaveCourse = (title: string) => {
    toast.success(`Le cours "${title}" a été bien sauvegardé`, {
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
            <span className="text-blue-600 mr-3">
              <GraduationCap className="h-7 w-7" />
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Cours
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-4xl">
            Des cours et tutoriels accessibles pour apprendre l&apos;IHM à votre
            rythme, du niveau débutant à avancé
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Course Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={course.coverImage}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    Cours
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="text-xl font-bold text-white mb-1 line-clamp-2">
                    {course.title}
                  </h2>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border-2 border-white shadow-sm">
                    <Image
                      src={course.authorAvatar}
                      alt={course.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-800 font-semibold">
                      {course.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      Publié le {course.date}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow line-clamp-4">
                  {course.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm">
                      <Play className="h-4 w-4 mr-2" /> Démarrer le cours
                    </button>
                    <button
                      onClick={() => handleSaveCourse(course.title)}
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

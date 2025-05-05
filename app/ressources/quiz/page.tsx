"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  RefreshCw,
  Trophy,
  ArrowRight,
  Timer,
  HelpCircle,
} from "lucide-react";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import { toast } from "sonner";

type Answer = {
  text: string;
  isCorrect: boolean;
  explanation?: string;
};

type Question = {
  id: number;
  question: string;
  answers: Answer[];
  image?: string;
  category: "basic" | "intermediate" | "advanced";
  points: number;
};

export default function QuizPage() {
  const [questions] = useState<Question[]>([
    {
      id: 1,
      question:
        "Quel principe de conception d'interface stipule que l'utilisateur doit pouvoir identifier l'état du système à tout moment ?",
      answers: [
        {
          text: "La rétroaction (feedback)",
          isCorrect: true,
          explanation:
            "La rétroaction signifie que l'interface doit informer l'utilisateur de ce qui se passe en temps réel.",
        },
        {
          text: "L'affordance",
          isCorrect: false,
          explanation:
            "L'affordance concerne la perception intuitive des possibilités d'utilisation d'un objet.",
        },
        {
          text: "La cohérence",
          isCorrect: false,
          explanation:
            "La cohérence concerne l'uniformité des éléments dans une interface.",
        },
        {
          text: "La simplicité",
          isCorrect: false,
          explanation:
            "La simplicité concerne la réduction de la complexité d'une interface.",
        },
      ],
      category: "basic",
      points: 10,
    },
    {
      id: 2,
      question:
        "Quelle loi stipule que le temps nécessaire pour atteindre une cible est proportionnel à la distance et inversement proportionnel à la taille de la cible ?",
      answers: [
        {
          text: "Loi de Hick",
          isCorrect: false,
          explanation:
            "La loi de Hick concerne le temps nécessaire pour prendre une décision en fonction du nombre d'options disponibles.",
        },
        {
          text: "Loi de Fitts",
          isCorrect: true,
          explanation:
            "La loi de Fitts modélise le temps nécessaire pour atteindre une cible en fonction de sa distance et de sa taille.",
        },
        {
          text: "Loi de Miller",
          isCorrect: false,
          explanation:
            "La loi de Miller concerne la capacité de la mémoire de travail (7±2 éléments).",
        },
        {
          text: "Loi de Gestalt",
          isCorrect: false,
          explanation:
            "Les lois de Gestalt concernent la perception visuelle des formes.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      category: "intermediate",
      points: 15,
    },
    {
      id: 3,
      question:
        "Quelle technique d'évaluation d'interface implique l'observation directe des utilisateurs accomplissant des tâches réelles ?",
      answers: [
        {
          text: "Test A/B",
          isCorrect: false,
          explanation:
            "Le test A/B compare deux versions d'une interface pour déterminer laquelle est la plus performante.",
        },
        {
          text: "Évaluation heuristique",
          isCorrect: false,
          explanation:
            "L'évaluation heuristique est réalisée par des experts qui évaluent l'interface selon des critères spécifiques.",
        },
        {
          text: "Analyse des logs",
          isCorrect: false,
          explanation:
            "L'analyse des logs examine les données d'utilisation collectées automatiquement.",
        },
        {
          text: "Test d'utilisabilité",
          isCorrect: true,
          explanation:
            "Le test d'utilisabilité observe directement les utilisateurs réels utilisant l'interface.",
        },
      ],
      category: "intermediate",
      points: 15,
    },
    {
      id: 4,
      question:
        "Quel modèle théorique décrit les étapes mentales qu'un utilisateur suit pour accomplir une tâche ?",
      answers: [
        {
          text: "Modèle mental",
          isCorrect: false,
          explanation:
            "Le modèle mental représente la compréhension qu'un utilisateur a d'un système.",
        },
        {
          text: "Modèle de processeur humain",
          isCorrect: false,
          explanation:
            "Le modèle de processeur humain décrit les capacités cognitives de l'être humain.",
        },
        {
          text: "Modèle GOMS",
          isCorrect: true,
          explanation:
            "Le modèle GOMS (Goals, Operators, Methods, Selection rules) décrit les étapes mentales pour accomplir une tâche.",
        },
        {
          text: "Modèle de Norman",
          isCorrect: false,
          explanation:
            "Le modèle de Norman décrit les étapes d'interaction entre l'utilisateur et le système.",
        },
      ],
      category: "advanced",
      points: 20,
    },
    {
      id: 5,
      question:
        "Quel type d'interface utilise des commandes vocales comme principal moyen d'interaction ?",
      answers: [
        {
          text: "GUI (Graphical User Interface)",
          isCorrect: false,
          explanation:
            "Les GUI utilisent des éléments graphiques comme principal moyen d'interaction.",
        },
        {
          text: "TUI (Tangible User Interface)",
          isCorrect: false,
          explanation: "Les TUI utilisent des objets physiques manipulables.",
        },
        {
          text: "VUI (Voice User Interface)",
          isCorrect: true,
          explanation:
            "Les VUI utilisent les commandes vocales comme principal moyen d'interaction.",
        },
        {
          text: "NUI (Natural User Interface)",
          isCorrect: false,
          explanation:
            "Les NUI cherchent à rendre l'interaction aussi naturelle que possible via différents moyens.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
      category: "basic",
      points: 10,
    },
    {
      id: 6,
      question:
        "Quelle approche de conception place l'utilisateur au centre du processus de développement ?",
      answers: [
        {
          text: "Design centré sur la technologie",
          isCorrect: false,
          explanation:
            "Cette approche privilégie les possibilités techniques plutôt que les besoins utilisateurs.",
        },
        {
          text: "Design centré sur l'utilisateur (UCD)",
          isCorrect: true,
          explanation:
            "UCD implique les utilisateurs tout au long du processus de conception.",
        },
        {
          text: "Design orienté données",
          isCorrect: false,
          explanation:
            "Cette approche se base principalement sur l'analyse des données pour guider la conception.",
        },
        {
          text: "Design minimaliste",
          isCorrect: false,
          explanation:
            "Cette approche se concentre sur la simplicité visuelle plutôt que sur l'utilisateur.",
        },
      ],
      category: "basic",
      points: 10,
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(null);
    }
  }, [timeLeft, timerActive, showResult]);

  const handleAnswer = (answerIndex: number | null) => {
    setTimerActive(false);
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (
      answerIndex !== null &&
      questions[currentQuestionIndex].answers[answerIndex].isCorrect
    ) {
      setScore(score + questions[currentQuestionIndex].points);
      toast.success(
        "Bonne réponse ! +" +
          questions[currentQuestionIndex].points +
          " points",
        {
          position: "bottom-right",
          duration: 2000,
        }
      );
    } else {
      toast.error("Ce n'est pas la bonne réponse", {
        position: "bottom-right",
        duration: 2000,
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
      setTimerActive(true);
      setShowHint(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
    setScore(0);
    setTimeLeft(30);
    setTimerActive(true);
    setShowHint(false);
  };

  const renderResultScreen = () => {
    const percentage = Math.round(
      (score / questions.reduce((acc, q) => acc + q.points, 0)) * 100
    );
    let message = "";
    let emoji = "";

    if (percentage >= 80) {
      message = "Bravo, vous êtes un expert en IHM !";
      emoji = "🏆";
    } else if (percentage >= 60) {
      message = "Bien joué ! Vous avez de bonnes connaissances en IHM.";
      emoji = "🎓";
    } else if (percentage >= 40) {
      message = "Pas mal ! Continuez à apprendre sur l'IHM.";
      emoji = "📚";
    } else {
      message =
        "C'est un début ! Découvrez nos ressources pour approfondir vos connaissances.";
      emoji = "🌱";
    }

    return (
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Quiz terminé !
        </h2>
        <div className="text-5xl font-bold mb-4 text-blue-600">
          {score} points
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-xl text-gray-700 mb-6">{message}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <RefreshCw className="h-5 w-5" />
            Recommencer le quiz
          </button>
          <Link
            href="/ressources"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            Explorer plus de ressources
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  };

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.answers.findIndex(
    (a) => a.isCorrect
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Quiz IHM Interactif"
        description="Testez vos connaissances sur l'Interface Homme-Machine avec notre quiz ludique et éducatif."
        badge="CHALLENGE"
        highlightedText="IHM Interactif"
      />

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 max-w-6xl mx-auto">
        {!quizCompleted ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Quiz Progress */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-gray-500">
                  Question {currentQuestionIndex + 1}/{questions.length}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  Score: {score} pts
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (currentQuestionIndex / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Timer */}
            <div className="px-6 py-2 flex items-center gap-2">
              <Timer className="h-4 w-4 text-gray-500" />
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-100 ${
                    timeLeft < 10 ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{
                    width: `${(timeLeft / 30) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {timeLeft}s
              </span>
            </div>

            {/* Question */}
            <div className="p-6">
              <div className="flex items-start gap-2 mb-6">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-1">
                  {currentQuestion.category === "basic"
                    ? "Débutant"
                    : currentQuestion.category === "intermediate"
                    ? "Intermédiaire"
                    : "Avancé"}
                </div>
                <div className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-1">
                  {currentQuestion.points} points
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {currentQuestion.question}
              </h3>

              {currentQuestion.image && (
                <div className="relative h-52 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={currentQuestion.image}
                    alt="Question illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Answers */}
              <div className="space-y-3 mb-6">
                {currentQuestion.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedAnswer === index
                        ? answer.isCorrect
                          ? "bg-green-50 border-green-300"
                          : "bg-red-50 border-red-300"
                        : showResult && index === correctAnswerIndex
                        ? "bg-green-50 border-green-300"
                        : "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{answer.text}</span>
                      {showResult && (
                        <span>
                          {index === correctAnswerIndex ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-5 w-5 text-red-500" />
                          ) : null}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Hint and Help */}
              <div className="mb-6">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <HelpCircle className="h-4 w-4" />
                  {showHint ? "Masquer l'indice" : "Afficher un indice"}
                </button>
                {showHint && (
                  <div className="mt-2 text-sm text-gray-600 p-3 bg-blue-50 rounded-lg">
                    {currentQuestion.category === "basic"
                      ? "Conseil : Pensez aux principes fondamentaux de l'IHM que tout concepteur devrait connaître."
                      : currentQuestion.category === "intermediate"
                      ? "Conseil : Rappelez-vous des méthodes et lois scientifiques qui gouvernent l'interaction homme-machine."
                      : "Conseil : Réfléchissez aux modèles théoriques avancés qui expliquent le comportement cognitif des utilisateurs."}
                  </div>
                )}
              </div>

              {/* Explanation */}
              {showResult && selectedAnswer !== null && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    currentQuestion.answers[selectedAnswer].isCorrect
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p className="text-sm">
                    {currentQuestion.answers[selectedAnswer].explanation}
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between">
                <div></div>
                {showResult ? (
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    {currentQuestionIndex < questions.length - 1 ? (
                      <>
                        Question suivante
                        <ArrowRight className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Voir les résultats
                        <Trophy className="h-4 w-4" />
                      </>
                    )}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          renderResultScreen()
        )}
      </main>
    </div>
  );
}

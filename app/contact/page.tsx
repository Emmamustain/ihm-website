"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Calendar,
  CheckCircle,
  Info,
} from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    topic: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Veuillez fournir un email valide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    if (!formData.topic) {
      newErrors.topic = "Veuillez sélectionner un sujet";
    }

    if (!agreedToTerms) {
      newErrors.terms = "Vous devez accepter les conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Veuillez corriger les erreurs dans le formulaire", {
        position: "bottom-right",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Votre message a été envoyé avec succès !", {
        position: "bottom-right",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "", topic: "" });
      setAgreedToTerms(false);
      setSaveInfo(false);
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.", {
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Contactez-nous"
        description="Nous serions ravis d'échanger avec vous pour répondre à vos questions ou explorer des opportunités de collaboration."
        badge="CONTACT"
        highlightedText="Contactez"
      />

      {/* Main Content */}
      <main className="py-12 px-4 sm:px-6 flex-grow">
        <div className="max-w-6xl mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            {/* Card Header */}
            <div className="border-b px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-800">
                Formulaire de Contact
              </h1>
            </div>

            {/* Information Notice */}
            <div className="bg-blue-50 p-4 mx-6 my-4 rounded-lg flex items-start gap-3">
              <div className="text-blue-700 mt-0.5">
                <Info size={18} />
              </div>
              <div>
                <p className="text-sm text-blue-800">
                  Nous collectons vos informations uniquement pour répondre à
                  votre demande. Toutes les données personnelles sont stockées
                  de manière sécurisée et utilisées conformément à notre
                  politique de confidentialité.
                </p>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jean Dupont"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votreemail@exemple.com"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Topic Dropdown */}
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.topic ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors bg-white`}
                  >
                    <option value="" disabled>
                      Sélectionnez un sujet
                    </option>
                    <option value="collaboration">Collaboration</option>
                    <option value="question">Question technique</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Autre</option>
                  </select>
                  {errors.topic && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <span className="mr-1">⚠️</span> {errors.topic}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Détaillez votre demande ici..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <span className="mr-1">⚠️</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        checked={saveInfo}
                        onChange={() => setSaveInfo(!saveInfo)}
                        className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-600">
                        Mémoriser mes informations pour faciliter mes prochains
                        contacts
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={() => {
                          setAgreedToTerms(!agreedToTerms);
                          if (errors.terms) {
                            setErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors.terms;
                              return newErrors;
                            });
                          }
                        }}
                        className={`focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded ${
                          errors.terms ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className={`${
                          errors.terms ? "text-red-500" : "text-gray-600"
                        }`}
                      >
                        Je confirme que les informations fournies sont exactes
                        et j'accepte la{" "}
                        <a href="#" className="text-purple-600 hover:underline">
                          Politique de Confidentialité
                        </a>
                        .
                      </label>
                      {errors.terms && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <span className="mr-1">⚠️</span> {errors.terms}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#6c63ff] hover:bg-[#5a52e0] text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm flex items-center justify-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <span>Envoyer</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                À Propos de Moi
              </h2>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    Bonjour, je suis Amina Benelhadj Said, chercheuse en
                    Interaction Homme-Machine et designer UX avec plus de 8 ans
                    d'expérience dans la création d'expériences numériques
                    intuitives.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Mon travail se concentre sur la conception d'interfaces
                    accessibles et la réalisation de recherches utilisateurs
                    pour améliorer la façon dont les gens interagissent avec la
                    technologie. Je m'intéresse particulièrement aux
                    technologies émergentes comme la RA/RV et à la façon dont
                    elles peuvent améliorer les capacités humaines.
                  </p>
                  <p className="text-gray-700">
                    Je suis titulaire d'un doctorat en Interaction Homme-Machine
                    de l'Université Stanford et j'ai publié de nombreux articles
                    sur les méthodologies de conception d'expérience
                    utilisateur.
                  </p>
                </div>

                <div className="md:w-1/3">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Me Suivre
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-[#6c63ff] transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-[#6c63ff] transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-[#6c63ff] transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span>Twitter</span>
                      </a>
                      <a
                        href="mailto:contact@example.com"
                        className="flex items-center gap-3 text-gray-700 hover:text-[#6c63ff] transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Email</span>
                      </a>
                      <div className="pt-3 mt-3 border-t border-gray-200">
                        <a
                          href="https://blog.example.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#6c63ff] hover:text-[#5a52e0] font-medium"
                        >
                          <span>Visitez mon blog</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

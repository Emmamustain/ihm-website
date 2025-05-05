import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#151F33] text-white pt-16 pb-8">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            Restez <span className="text-blue-500">informé</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir les derniers
            articles, conseils et actualités sur l'interface homme-machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 bg-white/10 border border-gray-700 rounded-md px-4 py-2 text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 font-medium">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold">
                <span className="text-blue-500">IHM</span>Expert
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-700">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-400 hover:text-white"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/concepts"
                  className="text-gray-400 hover:text-white"
                >
                  Concepts
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies"
                  className="text-gray-400 hover:text-white"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/design" className="text-gray-400 hover:text-white">
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="/exemples"
                  className="text-gray-400 hover:text-white"
                >
                  Exemples
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-700">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/technologies/tactiles"
                  className="text-gray-400 hover:text-white"
                >
                  Interfaces tactiles
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/vocales"
                  className="text-gray-400 hover:text-white"
                >
                  Interfaces vocales
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/gestuelles"
                  className="text-gray-400 hover:text-white"
                >
                  Interfaces gestuelles
                </Link>
              </li>
              <li>
                <Link href="/livres" className="text-gray-400 hover:text-white">
                  Livres recommandés
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-white"
                >
                  Articles/Vidéos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Legal */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube size={20} />
            </Link>
          </div>
          <div className="text-gray-400 text-sm">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <span className="mx-2">•</span>
            <span>
              © {new Date().getFullYear()} IHM Expert. Tous droits réservés.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

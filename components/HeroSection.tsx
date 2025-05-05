"use client";

import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  badge?: string;
  highlightedText?: string;
  children?: ReactNode;
}

export default function HeroSection({
  title,
  description,
  badge = "EXPLORATION",
  highlightedText,
  children,
}: HeroSectionProps) {
  const titleParts = highlightedText ? title.split(highlightedText) : [title];

  return (
    <section className="bg-[#e9f1f9] text-gray-800 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute left-1/3 -bottom-24 w-80 h-80 bg-blue-300 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-indigo-200 rounded-full opacity-30 blur-2xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
          {/* 3D layered elements */}
          {badge && (
            <div className="inline-block relative">
              <div className="absolute inset-1 bg-blue-200 rounded-full blur-sm transform -rotate-3"></div>
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 relative shadow-sm">
                {badge}
              </div>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            {highlightedText ? (
              <>
                <span className="text-gray-800 drop-shadow-sm">
                  {titleParts[0]}
                </span>
                <span className="text-blue-700 relative">
                  <span className="absolute -inset-1 bg-blue-700 opacity-10 blur-sm rounded-lg transform -rotate-1"></span>
                  <span className="relative">{highlightedText}</span>
                </span>
                {titleParts.length > 1 && (
                  <span className="text-gray-800 drop-shadow-sm">
                    {titleParts[1]}
                  </span>
                )}
              </>
            ) : (
              <span className="text-gray-800 drop-shadow-sm">{title}</span>
            )}
          </h1>

          <div className="absolute -right-4 top-1/3 w-20 h-20 bg-yellow-200 rounded-full opacity-20 blur-xl hidden md:block"></div>

          <p className="text-xl text-gray-600 mb-8 relative">{description}</p>

          {children}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen md:pt-20 flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/herobanner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 mb-6">
            🚀 AI-Powered Finance
          </span>

          <h1 className="text-5xl md:text-xl lg:text-6xl font-bold leading-tight text-white">
            Manage Your Finances
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              with AI-Powered Intelligence
            </span>
          </h1>

          <p className="mt-5 text-sm text-gray-300 max-w-xl leading-relaxed">
            Take control of your money with smart AI-driven insights,
            automated budgeting, expense tracking, and personalized
            recommendations that help you make better financial decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
              >
                Get Started Free
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-gray-300 text-sm">
            <span>✓ AI Budgeting</span>
            <span>✓ Expense Tracking</span>
            <span>✓ Smart Insights</span>
            <span>✓ Financial Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
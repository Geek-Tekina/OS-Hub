"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Github, Heart, Search, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
              Open Source Programs Guide
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Your comprehensive resource for discovering, contributing, and growing in the world of open source programs and initiatives.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Link href="/guide">
                <Button size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Programs
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <Card key={program.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <program.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm">
                    Learn More
                  </Button>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{program.stars}k</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Open Source Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Open Source?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Open Source Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of developers contributing to open source projects worldwide.</p>
          <Link href="/guide">
            <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

const featuredPrograms = [
  {
    title: "Google Summer of Code",
    description: "A global program focused on bringing more student developers into open source software development.",
    icon: BookOpen,
    stars: 12
  },
  {
    title: "Hacktoberfest",
    description: "DigitalOcean's annual event that encourages people to contribute to open source throughout October.",
    icon: Heart,
    stars: 8
  },
  {
    title: "MLH Fellowship",
    description: "A remote internship alternative for aspiring software engineers, focused on open source projects.",
    icon: Github,
    stars: 6
  }
];

const benefits = [
  {
    title: "Learn & Grow",
    description: "Gain real-world experience by working on production projects used by millions.",
    icon: BookOpen
  },
  {
    title: "Build Network",
    description: "Connect with mentors and like-minded developers from around the world.",
    icon: Heart
  },
  {
    title: "Make Impact",
    description: "Contribute to projects that make a difference in people's lives.",
    icon: Github
  }
];
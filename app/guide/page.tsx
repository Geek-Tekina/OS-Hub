"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Globe,
  Heart,
  Users,
  Code,
  Gift,
  BookOpen,
  Trophy,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Google Summer of Code",
    description:
      "A global program that matches students with open source, free software and technology-related organizations to write code and get paid for it.",
    timeline: "March - September",
    stipend: "$1500 - $3300",
    icon: Code,
    link: "/programs/gsoc",
    tags: ["Students", "Coding", "Mentorship"],
  },
  {
    title: "Outreachy",
    description:
      "Provides internships in open source and open science to people subject to systemic bias and impacted by underrepresentation in the technical industry.",
    timeline: "December - March & May - August",
    stipend: "$6,000",
    icon: Heart,
    link: "/programs/outreachy",
    tags: ["Diversity", "Internship", "Remote"],
  },
  {
    title: "Hacktoberfest",
    description:
      "A month-long celebration of open source software run by DigitalOcean, encouraging meaningful contributions to open source projects.",
    timeline: "October",
    stipend: "Swag rewards",
    icon: Gift,
    link: "/programs/hacktoberfest",
    tags: ["Beginners", "Open Source", "Swag"],
  },
  {
    title: "MLH Fellowship",
    description:
      "A remote internship alternative for aspiring software engineers, working with open source maintainers to build and maintain their projects.",
    timeline: "Year-round (12-week sessions)",
    stipend: "$5,000",
    icon: Users,
    link: "/programs/mlh-fellowship",
    tags: ["Students", "Remote", "Fellowship"],
  },
  {
    title: "Season of KDE",
    description:
      "Annual program offering students the opportunity to contribute to KDE community projects.",
    timeline: "January - March",
    stipend: "Certificate",
    icon: Globe,
    link: "/programs/season-of-kde",
    tags: ["KDE", "Open Source", "Students"],
  },
  {
    title: "LFX Mentorship",
    description:
      "Linux Foundation mentorship program connecting experienced open source developers with mentees.",
    timeline: "Year-round",
    stipend: "$3000 - $6600",
    icon: BookOpen,
    link: "/programs/lfx-mentorship",
    tags: ["Linux", "Mentorship", "Open Source"],
  },
  {
    title: "Google Season of Docs",
    description:
      "Program connecting open source projects with technical writers to improve documentation.",
    timeline: "March - November",
    stipend: "Project-based",
    icon: Trophy,
    link: "/programs/season-of-docs",
    tags: ["Documentation", "Technical Writing"],
  },
  {
    title: "GSOC of FOSSASIA",
    description:
      "Mentorship program focused on introducing new developers to FOSS projects in Asia.",
    timeline: "June - August",
    stipend: "$1500",
    icon: Rocket,
    link: "/programs/fossasia",
    tags: ["FOSS", "Asia", "Students"],
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Open Source Programs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-muted-foreground sm:mt-4">
            Discover opportunities to contribute, learn, and grow in the open
            source community
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{program.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Gift className="h-4 w-4" />
                  <span>{program.stipend}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={program.link} className="mt-auto">
                  {/* link to add  */}
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

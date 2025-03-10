import { notFound } from "next/navigation";
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
  Bot,
  Book,
  Paintbrush,
  ChefHat,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export async function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }));
}
// Sample data; replace with your actual data source
const programs = [
  {
    id: "GSOC",
    title: "Google Summer of Code",
    description:
      "Google Summer of Code (GSoC) is a global program focused on bringing more student developers into open source software development. Participants work on a programming project for an open-source organization while being mentored by experienced developers. The program provides a great opportunity for students to gain real-world software development experience and contribute to impactful projects.",
    timeline: "Applications open in March, Coding phase from May to September",
    stipend: "Ranges between $1,500 - $3,300 depending on location",
    icon: Code,
    link: "/programs/gsoc",
    tags: ["Students", "Open Source", "Software Development", "Mentorship"],
  },
  {
    id: "Outreachy",
    title: "Outreachy",
    description:
      "Outreachy provides remote, paid internships in open source and open science for individuals who have been historically underrepresented in the tech industry. The program offers valuable experience in software development, UX design, documentation, data science, and other technical areas, helping participants build a strong portfolio and gain mentorship from industry professionals.",
    timeline: "Two cycles: December - March & May - August",
    stipend: "$6,000 for a three-month internship",
    icon: Heart,
    link: "/programs/outreachy",
    tags: ["Diversity", "Remote Work", "Internship", "Software Development"],
  },
  {
    id: "Hacktoberfest",
    title: "Hacktoberfest",
    description:
      "Hacktoberfest is a month-long celebration of open-source software organized by DigitalOcean, GitHub, and other partners. Participants contribute to open-source projects by submitting pull requests to repositories on GitHub. Contributors who make the required number of contributions receive exclusive swag, such as T-shirts and stickers, or the option to plant a tree in their name.",
    timeline: "Entire month of October",
    stipend: "Swag rewards (T-shirts, stickers) or a tree donation option",
    icon: Gift,
    link: "/programs/hacktoberfest",
    tags: ["Beginners", "Open Source", "Community", "Swag", "GitHub"],
  },
  {
    id: "MLHFellowship",
    title: "MLH Fellowship",
    description:
      "Major League Hacking (MLH) Fellowship is a remote program that provides an alternative to traditional internships. It connects aspiring software engineers with open-source projects, where they collaborate with maintainers and peers on meaningful contributions. The program offers three different tracks: Open Source, Software Engineering, and the Production Engineering track in collaboration with Meta.",
    timeline: "Year-round, divided into 12-week cohorts",
    stipend: "$5,000 for successful completion",
    icon: Users,
    link: "/programs/mlh-fellowship",
    tags: [
      "Students",
      "Remote Internship",
      "Open Source",
      "Software Engineering",
    ],
  },
  {
    id: "SeasonOfKDE",
    title: "Season of KDE",
    description:
      "Season of KDE is an annual open-source development program where students work on KDE community projects under mentorship. The program is similar to GSoC but specifically for KDE. Participants gain hands-on experience contributing to one of the largest open-source desktop environments while working on features, bug fixes, and documentation.",
    timeline: "Typically runs from January to March",
    stipend: "Certificate upon successful completion",
    icon: Globe,
    link: "/programs/season-of-kde",
    tags: ["KDE", "Open Source", "Students", "Mentorship"],
  },
  {
    id: "LFXMentorship",
    title: "LFX Mentorship",
    description:
      "The Linux Foundation (LFX) Mentorship program is designed to help aspiring open-source developers gain experience by working alongside experienced maintainers on Linux Foundation projects. The program supports mentorship in cloud computing, networking, blockchain, and other advanced technologies.",
    timeline: "Multiple sessions year-round",
    stipend: "$3,000 - $6,600 based on project complexity",
    icon: BookOpen,
    link: "/programs/lfx-mentorship",
    tags: ["Linux", "Cloud Computing", "Blockchain", "Open Source"],
  },
  {
    id: "SeasonOfDocs",
    title: "Google Season of Docs",
    description:
      "Google Season of Docs connects open-source organizations with experienced technical writers to improve project documentation. The program aims to make open-source projects more accessible by creating high-quality guides, tutorials, and documentation, making it easier for developers to contribute.",
    timeline: "March - November",
    stipend: "Project-based funding model",
    icon: Trophy,
    link: "/programs/season-of-docs",
    tags: ["Documentation", "Technical Writing", "Open Source"],
  },
  {
    id: "FOSSASIA",
    title: "GSOC of FOSSASIA",
    description:
      "The FOSSASIA mentorship program is an initiative that introduces new developers to free and open-source software (FOSS) projects in Asia. Participants work on projects under experienced mentors, developing skills in software engineering, DevOps, and AI/ML technologies.",
    timeline: "Runs from June to August",
    stipend: "$1,500 depending on project scope",
    icon: Rocket,
    link: "/programs/fossasia",
    tags: ["FOSS", "Asia", "Mentorship", "AI/ML"],
  },
  {
    id: "GoogleCodeIn",
    title: "Google Code-in",
    description:
      "Google Code-in is an annual global contest designed to introduce pre-university students (ages 13-17) to open-source software development. Participants complete small tasks related to coding, documentation, outreach, and design under the guidance of open-source organizations.",
    timeline: "Typically runs from November - January",
    stipend: "Certificates, T-shirts, and prizes",
    icon: Code,
    link: "/programs/google-code-in",
    tags: ["Pre-university", "Coding", "Contest", "Beginners"],
  },
  {
    id: "RailsGirlsSummerOfCode",
    title: "Rails Girls Summer of Code",
    description:
      "Rails Girls Summer of Code is a global fellowship program that helps bring more diversity into the open-source community. The program provides financial support to women and non-binary individuals to work on open-source projects for three months, supported by dedicated mentors and coaches.",
    timeline: "July - September",
    stipend: "€1,500 per month",
    icon: Heart,
    link: "/programs/rails-girls-summer-of-code",
    tags: ["Diversity", "Ruby on Rails", "Fellowship"],
  },
  {
    id: "LinuxFoundationTrainingScholarships",
    title: "The Linux Foundation Training (LiFT) Scholarships",
    description:
      "The LiFT scholarships from the Linux Foundation provide free access to training courses for individuals who show a strong interest in Linux and open-source technologies but lack the financial resources. The program covers different categories such as sysadmin, cloud computing, and application development.",
    timeline: "Applications open annually",
    stipend: "Full access to Linux Foundation training courses",
    icon: Laptop,
    link: "/programs/linux-foundation-training-scholarships",
    tags: ["Linux", "Training", "Scholarship", "Cloud Computing"],
  },
];

export default function GuideDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const program = programs.find((p) => p.id === params.id);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-16 px-6 flex justify-center">
      <div className="max-w-3xl w-full">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <program.icon className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">{program.title}</h1>
            </div>

            <p className="text-muted-foreground mb-4">{program.description}</p>

            <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
              <Calendar className="h-5 w-5" />
              <span>{program.timeline}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Gift className="h-5 w-5 text-primary" />
              <span>{program.stipend}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {program.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full transition-colors hover:bg-primary hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/guide">
              <Button variant="outline" className="w-full">
                Back to Guide
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

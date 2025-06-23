import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <header className="text-center mb-12">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Rakibul Hasan
        </motion.h1>
        <p className="text-lg text-gray-600">Software Engineer | Researcher | AI Enthusiast</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:rakibul@example.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/rakibul" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/rakibul" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card>
          <CardContent className="p-4 text-gray-700">
            I am a passionate developer with experience in full-stack development, research, and AI. I enjoy building intuitive user interfaces and solving challenging problems.
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Skin Lesion Detection</h3>
              <p>Research project focusing on AI-based diagnosis using CNN across diverse skin types.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">C++ Student Management System</h3>
              <p>A desktop application for student info management with file I/O and search functionalities.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Languages: C++, Python, JavaScript</li>
          <li>Frameworks: React, Next.js, Tailwind CSS</li>
          <li>Tools: Git, Docker, Figma</li>
          <li>Domains: Machine Learning, Web Dev, Software Engineering</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Rakibul Hasan. All rights reserved.
      </footer>
    </div>
  );
}

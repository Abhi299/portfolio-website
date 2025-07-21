"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Cube Grid Generator",
    description: "A tool for generating 3D cube grids",
    video: "/cube-grid-maker.mp4",
    github: "https://github.com/Abhi299/Cube-Grid-Maker",
  },
  {
    id: 2,
    title: "Endless Runner",
    description: "An endless runner game.",
    video: "/runaway.mp4",
    github: "",
  },
  {
    id: 3,
    title: "Rocket Lander",
    description: "A challenging rocket landing game with realistic physics.",
    video: "/rocket-lander.mp4",
    github: "",
  },
  {
    id: 4,
    title: "Lunar Lander",
    description:
      "A realistic lunar landing simulation game with randomly generated terrain.",
    video: "/lunar-lander.mp4",
    github: "",
  },
  {
    id: 5,
    title: "Asteroid",
    description:
      "A space-themed game based on the classic Asteroids game made by Atari in 1979.",
    video: "/asteroid.mp4",
    github: "",
  },
  {
    id: 6,
    title: "Running Man",
    description:
      "A simple running game with a character that runs from an enemy, made for practicing animation and collision detection, using animations from Mixamo.",
    video: "/running-man.mp4",
    github: "",
  },
  {
    id: 7,
    title: "Dodgy",
    description:
      "A fast-paced dodging game where players must avoid incoming obstacles.",
    video: "/dodgy.mp4",
    github: "",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
          >
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full absolute inset-0 transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  LayoutTemplate,
  Rocket,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Business Apps",
    description:
      "Modern, responsive web apps and mobile-first app experiences for brands, startups, and businesses.",
    icon: Smartphone,
  },
  {
    title: "Custom UI Design",
    description:
      "Premium layouts with clean structure, strong branding, and conversion-focused app interfaces.",
    icon: LayoutTemplate,
  },
  {
    title: "Fast Development",
    description:
      "Built with performance, smooth animations, mobile support, and scalable app architecture.",
    icon: Rocket,
  },
  {
    title: "Professional Delivery",
    description:
      "Reliable workflow from idea to launch with direct communication and quick revisions.",
    icon: ShieldCheck,
  },
];

const stats = [
  { label: "App Style", value: "Premium" },
  { label: "Build Quality", value: "Professional" },
  { label: "Client Focus", value: "High" },
  { label: "Support", value: "Direct" },
];

export default function DarkSyntaxLandingPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.6]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 -z-20 bg-black" />

      <motion.video
        style={{ y, opacity }}
        className="fixed inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </motion.video>

      <div className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-[2px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-[0.2em] text-white">
                DARK-SYNTAX
              </h1>
              <p className="text-xs text-white/60">Professional App Builder</p>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Carbon Black Premium App Experiences
              </div>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                We build powerful
                <span className="block bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
                  apps for you and convert your website into an amazing app.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Dark-Syntax creates professional business apps for clients who
                want a premium digital presence. From modern web apps to custom
                business platforms, we focus on clean design, fast performance,
                mobile responsiveness, and polished user experience.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/918608948946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white px-6 py-4 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
                >
                  Contact Now
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://forms.gle/EeWUxweGuwkpKdTYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-medium text-white backdrop-blur-md transition duration-300 hover:scale-[1.03] hover:bg-white/10"
                >
                  Submit Your App Requirements
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-white/50">Agency Preview</p>
                    <h3 className="text-2xl font-semibold">dark-syntax.dev</h3>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/60">
                    Live Build
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-md"
                    >
                      <p className="text-sm text-white/50">{item.label}</p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                    What clients get
                  </p>
                  <ul className="mt-4 space-y-3 text-white/75">
                    <li>• Custom modern app design for each business</li>
                    <li>• Mobile-friendly and responsive interface</li>
                    <li>• Smooth transitions and polished interactions</li>
                    <li>• Strong branding and professional presentation</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-2xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/45">
              Services
            </p>
            <h3 className="text-3xl font-bold sm:text-5xl">
              What Dark-Syntax offers
            </h3>
            <p className="mt-4 text-white/65">
              We help businesses establish a professional digital identity with
              apps that look premium and feel reliable.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-black/35 p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="mt-3 leading-7 text-white/65">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                About Dark-Syntax
              </p>
              <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
                Professional apps designed to impress your clients.
              </h3>
              <p className="mt-6 text-lg leading-8 text-white/70">
                At Dark-Syntax, we create apps that help businesses stand out in
                a competitive digital world. Whether you need a service app,
                startup platform, booking system, admin dashboard, customer
                portal, or custom business solution, we turn your vision into a
                sleek and high-quality digital experience.
              </p>
              <p className="mt-4 leading-8 text-white/60">
                Our focus is not just on visuals. We combine design,
                performance, and smooth interactions to deliver apps that feel
                modern, trustworthy, and ready for real users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-black/35 p-8 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                Why choose us
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Carbon black premium visual style",
                  "Transparent glassmorphism sections",
                  "Smooth animations and modern transitions",
                  "Clear communication and quick order process",
                  "WhatsApp contact and simple app submission flow",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                    <p className="text-white/75">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Let’s Build
            </p>
            <h3 className="mt-4 text-3xl font-bold sm:text-5xl">
              Ready to create your app?
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">
              Contact Dark-Syntax directly on WhatsApp or send your app
              requirements through the Google Form. We’ll turn your idea into a
              modern and professional app.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/918608948946"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-black transition duration-300 hover:scale-[1.03]"
              >
                Contact on WhatsApp
              </a>
              <a
                href="https://forms.gle/LXk1cRHwK8APGJBK7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/30 px-6 py-4 font-medium text-white transition duration-300 hover:scale-[1.03] hover:bg-white/10"
              >
                Submit App Details
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
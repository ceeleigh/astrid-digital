"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {

  const services = [
    {
      title: "Content Writing",
      desc: "SEO blogs, website copy, and brand messaging designed to convert visitors into customers.",
    },
    {
      title: "Virtual Assistance",
      desc: "Inbox management, scheduling, research, and operational support for busy founders.",
    },
    {
      title: "Data & Reporting",
      desc: "Excel dashboards and organized reporting to give clarity to your business decisions.",
    },
    {
      title: "Customer Support",
      desc: "Professional client communication that improves retention and brand reputation.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with Astrid Digital completely upgraded our online presence. Professional, fast, and extremely detail oriented.",
      name: "Olivia M.",
      role: "Boutique Owner",
    },
    {
      quote:
        "Our workflow became significantly smoother. The level of organization and communication was incredible.",
      name: "Daniel R.",
      role: "Startup Founder",
    },
    {
      quote:
        "If you're scaling a business and need reliable support, Astrid Digital is a no-brainer.",
      name: "Sophia L.",
      role: "Marketing Director",
    },
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="font-bold text-xl tracking-wide">
            Astrid Digital
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a href="#contact">
            <Button className="bg-white text-black hover:bg-gray-200">
              Start Project
            </Button>
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Premium Remote Support  
          <br />
          For Growing Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          Astrid Digital helps founders scale faster with high-quality
          content, operational support, and streamlined digital systems.
        </motion.p>

        <a href="#contact">
          <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200">
            Work With Us
          </Button>
        </a>

      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 pb-28">

        <h2 className="text-3xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: i * .1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border border-white/10 rounded-2xl hover:scale-[1.02] transition">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-400">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="bg-black py-28 px-6 border-y border-white/10"
      >

        <h2 className="text-3xl font-bold text-center mb-20">
          Client Results
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="text-yellow-400 mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 mb-6">
                “{t.quote}”
              </p>

              <div className="font-semibold">
                {t.name}
              </div>

              <div className="text-sm text-gray-500">
                {t.role}
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* TRUST BAR */}
      <section className="py-16 text-center">

        <p className="text-gray-500 uppercase tracking-widest mb-10">
          Trusted By Growing Brands
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 text-sm">
          <div className="border border-white/10 py-6 rounded-xl">Brand One</div>
          <div className="border border-white/10 py-6 rounded-xl">Brand Two</div>
          <div className="border border-white/10 py-6 rounded-xl">Brand Three</div>
          <div className="border border-white/10 py-6 rounded-xl">Brand Four</div>
        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 pb-32 text-center"
      >

        <h2 className="text-3xl font-bold mb-6">
          Start Your Project
        </h2>

        <p className="text-gray-400 mb-10">
          Tell us about your business and what you need help with.
        </p>

        <form
          action="https://formspree.io/f/mzdavwev"
          method="POST"
          className="space-y-4 text-left"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={4}
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
          />

          <div className="text-center pt-4">
            <Button className="bg-white text-black px-8 py-3 hover:bg-gray-200">
              Send Message
            </Button>
          </div>

        </form>

      </section>

    </div>
  );
}
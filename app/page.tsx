"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {

  const services = [
    {
      title: "Content Writing & Copywriting",
      desc: "High-converting messaging designed to attract and convert customers."
    },
    {
      title: "Virtual Assistance",
      desc: "Operational support that frees business owners to focus on growth."
    },
    {
      title: "Data Analysis",
      desc: "Clear reporting and insights to help businesses make smarter decisions."
    },
    {
      title: "Customer Support",
      desc: "Professional client communication that strengthens brand loyalty."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,000",
      features: [
        "1 Page Premium Website",
        "Mobile Optimization",
        "Contact Form Setup",
        "Basic SEO Setup"
      ]
    },
    {
      name: "Growth",
      price: "$3,500",
      features: [
        "Multi-Page Website",
        "Brand Styling",
        "Lead Capture System",
        "Performance Optimization"
      ]
    },
    {
      name: "Premium",
      price: "$5,000",
      features: [
        "Full Business Website",
        "Automation Setup",
        "Analytics Dashboard",
        "Priority Support"
      ]
    }
  ];

  const cardStyle =
    "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold tracking-wide">
          Astrid Digital
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://calendly.com"
          target="_blank"
        >
          <Button className="bg-white text-black hover:bg-gray-200">
            Book Call
          </Button>
        </a>
      </nav>

      {/* HERO */}

      <section className="max-w-5xl mx-auto px-6 py-28 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Premium Remote Business Support
        </motion.h1>

        <p className="text-gray-400 text-lg mb-10">
          Agency-level content, operations, and digital support
          for modern companies.
        </p>

        <a href="#contact">
          <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200">
            Start Your Project
          </Button>
        </a>

      </section>

      {/* TRUST BAR */}

      <section className="text-center pb-20">
        <p className="text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Emerging Brands
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto gap-6 opacity-60">
          <div className="border border-white/10 rounded-xl py-4">Brand</div>
          <div className="border border-white/10 rounded-xl py-4">Brand</div>
          <div className="border border-white/10 rounded-xl py-4">Brand</div>
          <div className="border border-white/10 rounded-xl py-4">Brand</div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-28"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: i * .15 }}
            viewport={{ once: true }}
          >
            <Card className={cardStyle}>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* TESTIMONIAL */}

      <section className="py-24 px-6 bg-black text-center">

        <h2 className="text-4xl font-bold mb-12">
          Client Experience
        </h2>

        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur">

          <div className="text-yellow-400 text-xl mb-4">
            ★★★★★
          </div>

          <p className="text-gray-300 text-lg mb-6">
            Working with Astrid Digital completely elevated our online presence.
            The process was seamless and the final product exceeded expectations.
          </p>

          <h4 className="font-semibold">
            Founding Client
          </h4>

        </div>

      </section>

      {/* Pricing */}
<section id="pricing" className="max-w-6xl mx-auto px-6 py-24 text-center">
  <h2 className="text-4xl font-bold mb-16">Simple Transparent Pricing</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Starter */}
    <Card className="bg-white/5 border border-white/10 backdrop-blur-xl">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-4">Starter</h3>

        <p className="text-3xl font-bold mb-6">$500</p>

        <ul className="space-y-2 text-gray-400 mb-8">
          <li>Landing Page</li>
          <li>Contact Form</li>
          <li>Basic Branding</li>
          <li>Mobile Optimized</li>
        </ul>

        <a href="https://buy.stripe.com/eVq00l2wx1oX4hIem3dUY00">
          <Button className="w-full bg-white text-black hover:bg-gray-200">
            Start Your Project
          </Button>
        </a>
      </CardContent>
    </Card>

    {/* Growth */}
    <Card className="bg-white border border-white/20 shadow-2xl scale-105">
      <CardContent className="p-8">
        <p className="text-sm font-semibold mb-2 text-gray-500">
          MOST POPULAR
        </p>

        <h3 className="text-xl font-semibold mb-4 text-black">Growth</h3>

        <p className="text-3xl font-bold mb-6 text-black">$1500</p>

        <ul className="space-y-2 text-gray-600 mb-8">
          <li>Multi Page Website</li>
          <li>SEO Setup</li>
          <li>Analytics Integration</li>
          <li>Performance Optimization</li>
        </ul>

        <a href="https://buy.stripe.com/eVq28tgnngjRaG6a5NdUY01">
          <Button className="w-full bg-black text-white hover:bg-gray-900">
            Start Your Project
          </Button>
        </a>
      </CardContent>
    </Card>

    {/* Premium */}
    <Card className="bg-white/5 border border-white/10 backdrop-blur-xl">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-4">Premium</h3>

        <p className="text-3xl font-bold mb-6">$3500+</p>

        <ul className="space-y-2 text-gray-400 mb-8">
          <li>Custom Design</li>
          <li>Conversion Optimization</li>
          <li>Automation Setup</li>
          <li>Priority Support</li>
        </ul>

        <a href="https://buy.stripe.com/4gM14pb339Vtg0q91JdUY02">
          <Button className="w-full bg-white text-black hover:bg-gray-200">
            Start Your Project
          </Button>
        </a>
      </CardContent>
    </Card>

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
          Tell us about your business and goals.
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
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Page() {

  const services = [
    {
      title: "Content Writing & Copywriting",
      desc: "Professional website, blog, and marketing content designed to convert visitors into customers.",
      icon: "✍️",
    },
    {
      title: "Virtual Assistance",
      desc: "Inbox management, scheduling, research, and day‑to‑day business support for busy entrepreneurs.",
      icon: "🧩",
    },
    {
      title: "Data & Reporting",
      desc: "Clean spreadsheets, reporting dashboards, and organized data so you can make smarter decisions.",
      icon: "📊",
    },
    {
      title: "Customer Support",
      desc: "Professional email and chat support that keeps your customers happy and loyal.",
      icon: "💬",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$1,500",
      desc: "Perfect for small businesses needing reliable monthly support.",
      features: [
        "Virtual Assistant Support",
        "Content Writing",
        "Customer Email Support",
        "Basic Data Organization",
      ],
      link: "https://buy.stripe.com/00w14p1st6Jh9C25PxdUY03",
    },
    {
      name: "Growth",
      price: "$2,500",
      desc: "For growing businesses ready to scale operations.",
      features: [
        "Everything in Starter",
        "Advanced Data Reporting",
        "Workflow Optimization",
        "Priority Support",
      ],
      link: "https://buy.stripe.com/9B68wRdbb3x5cOe6TBdUY04",
    },
    {
      name: "Premium",
      price: "$3,500",
      desc: "Full operational support for serious businesses.",
      features: [
        "Dedicated Business Support",
        "Content + Marketing Assistance",
        "Customer Service Management",
        "Operations Consulting",
      ],
      link: "https://buy.stripe.com/dRm8wR3AB6JhdSi2DldUY05",
    },
  ];

  const testimonials = [
    {
      quote:
        "Astrid Digital helped streamline our entire workflow. We finally feel organized and focused.",
      name: "Shylah M.",
      role: "Operations Manager",
    },
    {
      quote:
        "The content writing alone paid for itself. Our website finally sounds professional.",
      name: "David R.",
      role: "Startup Founder",
    },
  ];

  const cardStyle =
    "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10 transition-all";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Astrid Digital Agency</h1>

          <div className="space-x-6 text-sm">
           <a href="#services" className="hover:text-gray-300">Services</a>
<a href="#pricing" className="hover:text-gray-300">Pricing</a>
<a href="#custom" className="hover:text-gray-300">Custom Plan</a>
<a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
<a href="#contact" className="hover:text-gray-300">Contact</a>
 
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Premium Digital Business Support
        </motion.h1>

        <p className="text-gray-400 text-lg mb-10">
          Astrid Digital Agency helps businesses stay organized, efficient,
          and focused on growth through professional remote support.
        </p>

        <a href="#pricing">
          <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200">
            View Pricing
          </Button>
        </a>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-8"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={cardStyle}>
              <CardContent>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 pb-32">

        <h2 className="text-3xl font-bold text-center mb-14">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <Card key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <CardContent>

                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.desc}</p>

                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                <a href={plan.link} target="_blank">
                  <Button className="w-full bg-white text-black hover:bg-gray-200">
                    Choose Plan
                  </Button>
                </a>

              </CardContent>
            </Card>
          ))}
        </div>

      </section>
{/* CUSTOM PLAN */}
<section id="custom" className="max-w-5xl mx-auto px-6 pb-32 text-center">

  <h2 className="text-3xl font-bold mb-6">
    Build Your Own Plan
  </h2>

  <p className="text-gray-400 mb-12">
    Not every business needs a full package. Choose the services you need and
    receive a personalized quote tailored to your business.
  </p>

  <div className="grid md:grid-cols-2 gap-8 text-left mb-12">

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <h3 className="font-semibold mb-3">Content Services</h3>
      <ul className="text-gray-400 space-y-2 text-sm">
        <li>• Website copywriting</li>
        <li>• Blog writing</li>
        <li>• Product descriptions</li>
      </ul>
    </div>

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <h3 className="font-semibold mb-3">Business Operations</h3>
      <ul className="text-gray-400 space-y-2 text-sm">
        <li>• Virtual assistant tasks</li>
        <li>• Inbox management</li>
        <li>• Scheduling & research</li>
      </ul>
    </div>

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <h3 className="font-semibold mb-3">Customer Support</h3>
      <ul className="text-gray-400 space-y-2 text-sm">
        <li>• Email support</li>
        <li>• Live chat support</li>
        <li>• CRM updates</li>
      </ul>
    </div>

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <h3 className="font-semibold mb-3">Data & Reporting</h3>
      <ul className="text-gray-400 space-y-2 text-sm">
        <li>• Spreadsheet cleanup</li>
        <li>• Data entry</li>
        <li>• Reporting dashboards</li>
      </ul>
    </div>

  </div>

  <a href="#contact">
    <Button className="bg-white text-black px-10 py-4 text-lg hover:bg-gray-200">
      Request Custom Quote
    </Button>
  </a>

</section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-5xl mx-auto px-6 pb-32">

        <h2 className="text-3xl font-bold text-center mb-14">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <CardContent>
                <p className="text-gray-300 mb-4">"{t.quote}"</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto px-6 pb-32 text-center">

        <h2 className="text-3xl font-bold mb-6">Start Your Project</h2>

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

"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Page() {
  const services = [
    {
      title: "Content Writing & Copywriting",
      desc: "Professional content that engages audiences and drives measurable results.",
    },
    {
      title: "Virtual Assistance",
      desc: "Streamlined operations and administrative support for growing businesses.",
    },
    {
      title: "Data Analysis",
      desc: "Excel reporting and structured insights for smarter decisions.",
    },
    {
      title: "Customer Support",
      desc: "Professional communication that strengthens client relationships.",
    },
  ];

  const cardStyle =
    "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Premium Remote Business Support
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-400 mb-10"
        >
          Agency-level content, operations, and digital assistance designed
          for modern enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-black text-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">What Clients Say</h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <p className="text-gray-300 mb-6">
          “Astrid Digital completely transformed our online presence.
          We started getting real inquiries within weeks.”
        </p>
        <h4 className="font-semibold">Sarah M.</h4>
        <span className="text-sm text-gray-500">Boutique Owner</span>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <p className="text-gray-300 mb-6">
          “Professional, fast, and extremely creative. Our website
          finally reflects the quality of our business.”
        </p>
        <h4 className="font-semibold">David R.</h4>
        <span className="text-sm text-gray-500">Marketing Consultant</span>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <p className="text-gray-300 mb-6">
          “We saw a noticeable increase in bookings after launching.
          Highly recommend Astrid Digital.”
        </p>
        <h4 className="font-semibold">Emily T.</h4>
        <span className="text-sm text-gray-500">Fitness Studio Owner</span>
      </div>

    </div>
  </div>
</section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-24">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className={cardStyle}>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {s.title}
                </h3>
                <p className="text-gray-400">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 pb-28 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-gray-400 mb-10">
          Reach out to discuss your goals and receive a custom proposal.
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
    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
  />

  <textarea
  name="message"
    placeholder="Tell me about your project..."
    rows={4}
    required
    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
  />

  <div className="text-center pt-4">
    <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200">
      Send Message
    </Button>
  </div>
</form>

      </section>

    </div>
  );
}

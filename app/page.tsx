"use client";

import React from "react";  
import { motion } from "framer-motion";  
import Image from "next/image";

const fadeInUp = {  
  initial: { opacity: 0, y: 20 },  
  whileInView: { opacity: 1, y: 0 },  
  viewport: { once: true },  
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }  
};

export default function Homepage() {  
  return (  
    <main className="bg-black text-white selection:bg-white/20">  
      {/* Cinematic Hero */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
        {/* Grain Overlay for Texture */}  
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />  
          
        <div className="container mx-auto px-6 z-20 text-center">  
          <motion.p   
            initial={{ opacity: 0, letterSpacing: "0.2em" }}  
            animate={{ opacity: 1, letterSpacing: "0.5em" }}  
            transition={{ duration: 2 }}  
            className="uppercase text-[10px] mb-8 text-neutral-500 font-sans tracking-[0.5em]"  
          >  
            NexVoyage Collective  
          </motion.p>  
            
          <motion.h1   
            initial={{ opacity: 0, filter: "blur(10px)" }}  
            animate={{ opacity: 1, filter: "blur(0px)" }}  
            transition={{ duration: 1.5, delay: 0.5 }}  
            className="font-serif text-5xl md:text-8xl leading-tight mb-8"  
          >  
            Curating the <br />  
            <span className="italic">Unreachable.</span>  
          </motion.h1>  
            
          <motion.div   
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}  
            transition={{ delay: 1.5 }}  
            className="flex justify-center"  
          >  
            <div className="h-20 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0" />  
          </motion.div>  
        </div>

        {/* Hero Background Image - Suggesting a high-end minimalist villa or desert landscape */}  
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 grayscale" />  
      </section>

      {/* Narrative Section: The Silent ROI */}  
      <section className="py-32 bg-neutral-950 border-y border-white/5">  
        <div className="container mx-auto px-6 max-w-4xl">  
          <motion.div {...fadeInUp}>  
            <h2 className="font-serif text-3xl md:text-5xl mb-12 text-center leading-relaxed">  
              In an era of loud luxury, we prioritize the <span className="italic">whisper</span>.  
            </h2>  
            <div className="grid md:grid-cols-2 gap-16 items-start">  
              <p className="font-sans text-neutral-400 leading-relaxed text-sm uppercase tracking-widest">  
                Our philosophy is built on the ROI of Reset. We don't just find rooms; we curate sanctuaries where time slows down and privacy is the ultimate currency.  
              </p>  
              <p className="font-serif text-xl text-neutral-300 italic">  
                “True wealth is the ability to disappear without being missed, and return without being exhausted.”  
              </p>  
            </div>  
          </motion.div>  
        </div>  
      </section>

      {/* The Sanctuaries: Asymmetrical Grid */}  
      <section className="py-32 bg-black">  
        <div className="container mx-auto px-6">  
          <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8">  
            <h3 className="font-serif text-4xl italic">The Sanctuaries</h3>  
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">Edition 2026/01</p>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">  
            {/* Sanctuary 1 */}  
            <motion.div   
              className="md:col-span-7 group cursor-pointer"  
              {...fadeInUp}  
            >  
              <div className="relative aspect-[16/9] overflow-hidden mb-6 bg-neutral-900">  
                <img   
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1500"   
                  alt="Zen Spa Sanctuary"  
                  className="object-cover w-full h-full grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"  
                />  
              </div>  
              <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Aman / Kyoto</p>  
              <h4 className="font-serif text-2xl group-hover:italic transition-all">The Forest Floor Pavilion</h4>  
            </motion.div>

            {/* Sanctuary 2 */}  
            <motion.div   
              className="md:col-span-4 md:col-start-9 md:pt-24 group cursor-pointer"  
              {...fadeInUp}  
            >  
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-neutral-900">  
                <img   
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000"   
                  alt="Minimalist Architecture"  
                  className="object-cover w-full h-full grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"  
                />  
              </div>  
              <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Soneva / Jani</p>  
              <h4 className="font-serif text-2xl group-hover:italic transition-all">Over-Water Obsidian</h4>  
            </motion.div>  
          </div>  
        </div>  
      </section>

      {/* Bottom CTA: The Vetting Standard */}  
      <section className="py-40 bg-white text-black text-center">  
        <motion.div   
          initial={{ opacity: 0 }}  
          whileInView={{ opacity: 1 }}  
          className="container mx-auto px-6"  
        >  
          <h2 className="font-serif text-5xl md:text-7xl mb-12">Entry is not <br /> <span className="italic">guaranteed.</span></h2>  
          <p className="max-w-xl mx-auto font-sans text-xs uppercase tracking-[0.4em] mb-12 text-neutral-500 leading-loose">  
            Membership is restricted to high-net-worth individuals who align with our vetting standard of discretion and intent.  
          </p>  
          <button className="border border-black px-12 py-4 font-sans text-[10px] uppercase tracking-[0.5em] hover:bg-black hover:text-white transition-all">  
            Begin the Vetting  
          </button>  
        </motion.div>  
      </section>  
    </main>  
  );  
}  

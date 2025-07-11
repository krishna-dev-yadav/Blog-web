import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaPenNib } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const secRef = useRef(null);
  const mainref = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      secRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      mainref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mainref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    cardRefs.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { scale: 0.6, rotate: -5 },
        {
          scale: 1,
          rotate: 0,
          duration: 1,
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 10%',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={secRef}>
      <section className="relative w-full h-screen overflow-hidden -mt-6">
        <video
          src="/9667570-hd_1920_1080_25fps (2).mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        <div className="relative z-30 flex flex-col justify-center items-center h-full text-white text-center bg-black/40">
          <div className="text-4xl font-bold drop-shadow">Our Services</div>
          <p className="max-w-3xl text-lg text-gray-200 mt-8">
            Empowering creators with modern tools to tell stories that matter.
          </p>
        </div>
      </section>

      <main className="bg-black w-full min-h-screen py-16 px-4" ref={mainref}>
        <div className="max-w-6xl mt-9 mx-auto grid md:grid-cols-2 gap-8">
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="flex flex-col items-center text-center p-8 rounded-2xl shadow-2xl overflow-hidden bg-[#111] hover:shadow-xl border border-gray-700 transition duration-300"
          >
            <FaPenNib className="text-blue-800 mb-4 text-4xl" />
            <h1 className="text-white text-xl font-semibold mb-2">Easy Blog Publishing</h1>
            <p className="text-gray-300">
              Write and publish posts effortlessly with our clean, user-friendly editor.
            </p>
          </div>

          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="flex flex-col items-center text-center p-8 rounded-2xl shadow-2xl overflow-hidden bg-[#111] hover:shadow-xl border border-gray-700 transition duration-300"
          >
            <IoColorPaletteOutline className="text-blue-800 mb-4 text-4xl" />
            <h1 className="text-white text-xl font-semibold mb-2">Custom Themes</h1>
            <p className="text-gray-300">
              Choose from a variety of modern themes to personalize your blog.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Service;

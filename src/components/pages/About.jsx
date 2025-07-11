import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const secRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      secRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div>
      <section
        ref={secRef}
        className="relative w-full h-screen overflow-hidden -mt-6"
      >
        <video
          id="video"
          src="/9667570-hd_1920_1080_25fps (2).mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        <div className="relative z-30 flex flex-col justify-center items-center h-full text-white text-center bg-black/40">
          <div className="text-4xl font-bold drop-shadow">About BlogPost</div>
          <p className="max-w-3xl text-lg text-gray-200 mt-8">
            At BlogPost, we believe that stories have power — the power to move,
            to inspire, to connect. We are a space where creators share meaningful
            content, express their thoughts, and build communities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

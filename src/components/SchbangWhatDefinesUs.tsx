import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const SchbangWhatDefinesUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const arrowElRef = useRef<HTMLDivElement>(null);
  const currentAngleRef = useRef<number>(0);
  const targetAngleRef = useRef<number>(0);

  // Signature Schbang 360° cursor-tracking arrow rotation
  useEffect(() => {
    let animFrameId: number;
    let renderedAngle = 0;
    let lastClientX = window.innerWidth / 2;
    let lastClientY = window.innerHeight;

    const calculateAngle = (mouseX: number, mouseY: number) => {
      if (!arrowElRef.current) return;
      const rect = arrowElRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;

      // Base angle in degrees (default arrow points down, so South is 0°)
      const rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI - 90;

      // Shortest rotational path calculation (avoids 360° flip artifacts)
      let diff = (rawAngle - currentAngleRef.current) % 360;
      if (diff < -180) diff += 360;
      if (diff > 180) diff -= 360;

      currentAngleRef.current += diff;
      targetAngleRef.current = currentAngleRef.current;
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      calculateAngle(lastClientX, lastClientY);
    };

    const handleScroll = () => {
      calculateAngle(lastClientX, lastClientY);
    };

    // Smooth silky lerp animation loop (runs at native screen refresh rate 60/120Hz)
    const animate = () => {
      renderedAngle += (targetAngleRef.current - renderedAngle) * 0.14;
      if (arrowElRef.current) {
        arrowElRef.current.style.transform = `rotate(${renderedAngle}deg)`;
      }
      animFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#FF5722] via-[#FF8A65] to-[#FFFFFF] pt-16 sm:pt-20 md:pt-26 pb-12 sm:pb-16 md:pb-22 px-4 sm:px-8 lg:px-16 overflow-hidden select-none"
    >
      {/* ── SUBTLE GEOMETRIC WIREFRAME CIRCLE OUTLINES ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.25] overflow-hidden -z-0">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover text-white"
        >
          {/* Overlapping interconnected circular geometric outlines */}
          <circle cx="120" cy="200" r="160" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="380" cy="200" r="160" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="640" cy="200" r="160" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="900" cy="200" r="160" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="1160" cy="200" r="160" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="1420" cy="200" r="160" stroke="currentColor" strokeWidth="1.2" />

          {/* Intersecting horizontal & vertical wireframe balance lines */}
          <line x1="0" y1="200" x2="1440" y2="200" stroke="currentColor" strokeWidth="0.8" />
          <line x1="380" y1="40" x2="380" y2="360" stroke="currentColor" strokeWidth="0.8" />
          <line x1="900" y1="40" x2="900" y2="360" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* ── LEFT COLUMN: TITLE & SIGNATURE SCHBANG MOUSE-TRACKING ROTATING ARROW ── */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-tight drop-shadow-sm">
              What defines BanegaBrand
            </h2>
          </div>

          {/* Interactive Schbang Mouse-Tracking Arrow with Centered Geometric Backdrop */}
          <div className="relative flex items-center justify-center pt-4 sm:pt-6">

            {/* Precise Geometric Backdrop (Curved Ellipse Wireframe) */}
            <div className="absolute pointer-events-none inset-[-50px] flex items-center justify-center opacity-70 select-none">
              <svg
                viewBox="0 0 240 240"
                className="w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 text-white/50 fill-none"
              >
                {/* Vertical ellipse passing right through arrow shaft */}
                <ellipse cx="120" cy="120" rx="66" ry="112" stroke="currentColor" strokeWidth="1.2" />
                {/* Centered concentric circle */}
                <circle cx="120" cy="120" r="84" stroke="currentColor" strokeWidth="1" />
                {/* Subtle alignment crosshair axis lines */}
                <line x1="120" y1="6" x2="120" y2="234" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
                <line x1="6" y1="120" x2="234" y2="120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Clickable 360° Cursor-Tracking Rotating Arrow */}
            <button
              onClick={handleScrollDown}
              className="relative z-10 cursor-pointer outline-none group text-left block p-2 transition-transform duration-200 active:scale-95"
              aria-label="Scroll down to next section"
            >
              <div
                ref={arrowElRef}
                className="will-change-transform flex items-center justify-center"
                style={{
                  transformOrigin: 'center center',
                  width: '210px',
                  height: '210px',
                }}
              >
                <svg
                  viewBox="0 0 100 120"
                  className="w-44 h-52 sm:w-48 sm:h-56 md:w-52 md:h-60 text-white fill-none stroke-current transition-colors duration-300 group-hover:text-black drop-shadow-md"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Vertical central shaft */}
                  <line x1="50" y1="10" x2="50" y2="106" />
                  {/* Left wing */}
                  <line x1="16" y1="72" x2="50" y2="106" />
                  {/* Right wing */}
                  <line x1="84" y1="72" x2="50" y2="106" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* ── RIGHT COLUMN: MANIFESTO HEADLINE, BODY & SOLID PILL CTA ─────────────── */}
        <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6 sm:space-y-8">

          {/* Main Statement on Top Orange Zone */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-bold tracking-tight text-white leading-[1.18] drop-shadow-sm">
            We Build Brands From Idea to Market
          </h3>

          {/* Subtext Paragraph */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-900 font-medium leading-relaxed max-w-3xl">
            BanegaBrand is a product launch partner in India helping founders and businesses turn ideas into market-ready brands through product development branding packaging manufacturing and technology
          </p>

          {/* Solid Black Pill Button on Light Bottom Zone */}
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-black hover:bg-[#FF5722] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.18)] hover:shadow-[0_15px_40px_rgba(255,87,34,0.35)] hover:scale-105 active:scale-95 group"
            >
              <span>Dive Into Our Culture</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SchbangWhatDefinesUs;

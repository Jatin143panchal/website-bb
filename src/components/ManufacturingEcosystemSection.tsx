import React from 'react';

export const ManufacturingEcosystemSection = () => {
  return (
    <section id="manufacturing-ecosystem-section" className="relative w-full overflow-hidden font-sans">
      
      {/* Background Video - Fixed Height Container */}
      <div className="relative w-full h-[320px] md:h-[400px] lg:h-[480px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/assets/3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

    </section>
  );
};

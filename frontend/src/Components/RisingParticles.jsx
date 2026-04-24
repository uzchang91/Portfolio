import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const RisingParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    fpsLimit: 60,
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: "top",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 40, // Number of particles
      },
      opacity: {
        value: { min: 0.25, max: 0.75 }, // Some are fainter than others
      },
      shape: { type: "circle" },
      size: {
        value: { min: 0.5, max: 1 }, // Variation in "snow" size
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="particles-bg"
      />
    );
  }

  return null;
};

export default RisingParticles;
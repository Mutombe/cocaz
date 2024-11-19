import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = ({ children, variant = "default" }) => {
  const backgroundVariants = {
    default: {
      background:
        "linear-gradient(135deg, #318000 0%, #4CAF50 50%, #81C784 100%)",
      backgroundSize: "400% 400%",
      animation: "gradientFlow 15s ease infinite",
    },
    soft: {
      background:
        "linear-gradient(135deg, #2E7D32 0%, #66BB6A 50%, #A5D6A7 100%)",
      backgroundSize: "400% 400%",
      animation: "gradientFlow 20s ease infinite",
    },
    vibrant: {
      background:
        "linear-gradient(135deg, #1B5E20 0%, #43A047 50%, #76FF03 100%)",
      backgroundSize: "400% 400%",
      animation: "gradientFlow 10s ease infinite",
    },
  };

  const selectedVariant =
    backgroundVariants[variant] || backgroundVariants.default;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "relative",
        minHeight: "",
        background: selectedVariant.background,
        backgroundSize: selectedVariant.backgroundSize,
        animation: selectedVariant.animation,
      }}
      className="overflow-hidden rounded-lg"
    >
      {/* Animated Particles Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)",
          animation: "particleFlow 10s infinite alternate",
        }}
      />

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(45deg, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.05) 100%), 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
          `,
          mixBlendMode: "overlay",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      <style jsx global>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes particleFlow {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.05) rotate(5deg);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default AnimatedBackground;

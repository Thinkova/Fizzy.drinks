"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/hooks/useStore";

export default function LoadingScreen() {
  const ready = useStore((state) => state.ready);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (ready) {
      // Small delay so the fade transition looks smooth
      const timeout = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [ready]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#FDE047",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.6s ease",
        opacity: ready ? 0 : 1,
        pointerEvents: ready ? "none" : "all",
      }}
    >
      {/* Logo / brand mark */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Animated can icon */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            animation: "pulse 1.2s ease-in-out infinite",
            boxShadow: "0 8px 32px rgba(249,115,22,0.4)",
          }}
        />

        {/* Loading dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#ea580c",
                animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.92); opacity: 0.85; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-8px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

/* global React */

/**
 * CarRender — a placeholder vehicle silhouette.
 *
 * Real BMW model renders (transparent-PNG, environment-lit) should replace
 * these. Drop files into ../../assets/models/{slug}.png and swap this
 * component for an <img>. The silhouettes here are deliberately neutral so
 * they read as "vehicle plate" without competing visually.
 *
 * variant: "sedan" | "suv" | "coupe"
 */
function CarRender({ variant = "sedan", color = "#1e2a34", className = "" }) {
  const paths = {
    sedan: "M30,150 L60,150 Q62,128 78,118 L150,90 Q220,76 290,90 L350,108 Q390,118 410,134 L470,142 Q485,144 488,150 L470,150 Q470,166 454,166 Q438,166 438,150 L142,150 Q142,166 126,166 Q110,166 110,150 L30,150 Z",
    coupe: "M30,150 L60,150 Q62,124 80,114 L160,82 Q230,68 300,82 L360,104 Q400,116 420,132 L478,140 Q490,144 490,150 L470,150 Q470,166 454,166 Q438,166 438,150 L142,150 Q142,166 126,166 Q110,166 110,150 L30,150 Z",
    suv: "M30,150 L60,150 Q62,114 80,104 L140,76 Q220,64 300,76 L360,98 Q410,108 430,124 L480,134 Q492,138 490,150 L470,150 Q470,168 452,168 Q434,168 434,150 L142,150 Q142,168 124,168 Q106,168 106,150 L30,150 Z",
  };
  return (
    <svg
      viewBox="0 0 520 200"
      className={`bmw-car-render ${className}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`car-grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.9" />
          <stop offset="1" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Body */}
      <path d={paths[variant]} fill={`url(#car-grad-${variant})`} />
      {/* Window glass */}
      <path
        d={
          variant === "suv"
            ? "M120,108 Q140,84 200,80 L300,80 Q350,84 380,108 L380,124 L120,124 Z"
            : "M130,118 Q150,96 210,90 L290,90 Q345,96 370,118 L370,128 L130,128 Z"
        }
        fill="#0a0d12"
        opacity="0.5"
      />
      {/* Wheels */}
      <circle cx="126" cy="156" r="22" fill="#0a0d12" />
      <circle cx="126" cy="156" r="11" fill="#2a3441" />
      <circle cx="454" cy="156" r="22" fill="#0a0d12" />
      <circle cx="454" cy="156" r="11" fill="#2a3441" />
      {/* Ground shadow (subtle) */}
      <ellipse cx="290" cy="184" rx="220" ry="4" fill="#000" opacity="0.06" />
    </svg>
  );
}

window.CarRender = CarRender;

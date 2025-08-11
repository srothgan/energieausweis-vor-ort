export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
        style={{ width: "150%", height: "120%" }}
        viewBox="0 0 1800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 139, 41, 0.12)" />
            <stop offset="50%" stopColor="rgba(144, 196, 76, 0.18)" />
            <stop offset="100%" stopColor="rgba(0, 139, 41, 0.12)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(144, 196, 76, 0.1)" />
            <stop offset="50%" stopColor="rgba(0, 139, 41, 0.15)" />
            <stop offset="100%" stopColor="rgba(144, 196, 76, 0.1)" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 139, 41, 0.08)" />
            <stop offset="100%" stopColor="rgba(144, 196, 76, 0.12)" />
          </linearGradient>
        </defs>

        {/* Large wave - bottom layer */}
        <path
          d="M0,600 C450,480 900,520 1350,450 C1575,400 1725,420 1800,480 L1800,800 L0,800 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-flow"
        />

        {/* Medium wave - middle layer */}
        <path
          d="M0,650 C300,550 750,580 1200,520 C1425,490 1650,510 1800,550 L1800,800 L0,800 Z"
          fill="url(#waveGradient2)"
          className="animate-wave-flow-2"
        />

        {/* Small wave - top layer */}
        <path
          d="M0,700 C450,620 900,650 1350,600 C1575,580 1725,590 1800,620 L1800,800 L0,800 Z"
          fill="url(#waveGradient3)"
          className="animate-wave-flow-3"
        />

        {/* Floating elements for additional interest */}
        <circle
          cx="150"
          cy="500"
          r="3"
          fill="rgba(0, 139, 41, 0.3)"
          className="animate-bounce"
          style={{
            animationDuration: "3s",
            animationDelay: "0s"
          }}
        />
        <circle
          cx="450"
          cy="450"
          r="2"
          fill="rgba(144, 196, 76, 0.4)"
          className="animate-bounce"
          style={{
            animationDuration: "4s",
            animationDelay: "1s"
          }}
        />
        <circle
          cx="1200"
          cy="480"
          r="2.5"
          fill="rgba(0, 139, 41, 0.25)"
          className="animate-bounce"
          style={{
            animationDuration: "5s",
            animationDelay: "2s"
          }}
        />
        <circle
          cx="1500"
          cy="520"
          r="2"
          fill="rgba(144, 196, 76, 0.3)"
          className="animate-bounce"
          style={{
            animationDuration: "3.5s",
            animationDelay: "0.5s"
          }}
        />
      </svg>
    </div>
  );
}

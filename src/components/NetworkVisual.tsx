import { motion } from 'framer-motion'

/** Elegant animated AI network graphic for the hero */
export default function NetworkVisual() {
  const nodes = [
    { x: 50, y: 50 },
    { x: 150, y: 30 },
    { x: 250, y: 50 },
    { x: 80, y: 120 },
    { x: 180, y: 100 },
    { x: 280, y: 130 },
    { x: 40, y: 200 },
    { x: 140, y: 190 },
    { x: 240, y: 210 },
    { x: 100, y: 270 },
    { x: 200, y: 260 },
    { x: 160, y: 150 },
  ]

  const edges: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
    [3, 4], [4, 5], [3, 6], [4, 7], [5, 8],
    [6, 7], [7, 8], [6, 9], [7, 10], [9, 10],
    [4, 11], [11, 7], [1, 11],
  ]

  return (
    <svg
      viewBox="0 0 320 300"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={`e-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#edgeGrad)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.g key={`n-${i}`}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={i === 11 ? 10 : 5}
            fill={i === 11 ? '#6366f1' : '#818cf8'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              ...(i === 11
                ? {}
                : {
                    opacity: [0.5, 1, 0.5],
                  }),
            }}
            transition={{
              duration: i === 11 ? 0.5 : 2.5 + (i % 4) * 0.3,
              delay: i === 11 ? 0.4 : 0.2 + i * 0.05,
              repeat: i === 11 ? 0 : Infinity,
              ease: 'easeInOut',
            }}
          />
          {i === 11 && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={18}
              stroke="#6366f1"
              strokeWidth="1"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </motion.g>
      ))}

      <defs>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  )
}

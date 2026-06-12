import { motion } from "framer-motion";

export default function MetricCard({
  title,
  value,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="
      bg-[#1A1F2E]
      rounded-2xl
      p-6
      border
      border-gray-800
      shadow-lg
      hover:border-blue-500
      transition-all
      duration-300
      "
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="w-3 h-3 rounded-full bg-green-500"
        />

      </div>

      <p className="text-gray-500 mt-4 text-sm">
        {subtitle}
      </p>

    </motion.div>
  );
}
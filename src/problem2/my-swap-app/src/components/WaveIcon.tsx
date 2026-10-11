import { TokenIcon } from "@web3icons/react";
import { motion } from "framer-motion";

const icons = ["btc", "eth", "bnb", "lunc", "sei"];

const WaveIcons = () => {
  return (
    <div className="mt-2 overflow-hidden">
      <div className="flex space-x-1.5 sm:space-x-3 items-center">
        {icons.map((symbol, index) => (
          <motion.div
            key={symbol}
            className="h-6 w-6 sm:h-[34px] sm:w-[34px]"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <TokenIcon
              symbol={symbol}
              variant="mono"
              size="24"
              color="#FFFFFF"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WaveIcons;

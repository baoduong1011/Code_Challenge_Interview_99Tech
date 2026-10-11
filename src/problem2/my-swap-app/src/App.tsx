import { useEffect, useState } from "react";
import "./App.css";
import "./i18n";
import SwapCard from "./components/SwapCard";
import FallingText from "./components/FallingIcon";

const DESKTOP_QUERY = "(min-width: 768px)";

function App() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia(DESKTOP_QUERY).matches
  );

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen w-full overflow-x-hidden px-4 py-6">
      {isDesktop ? (
        <FallingText
          text={`Ethereum Ripple (XRP) Cardano BNB Dogecoin Bitcoin Avalanche Uniswap Aave Solana Synthetix Optimism Loopring Tether`}
          highlightWords={["Bitcoin", "Ethereum", "BNB", "Solana", "Tether"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.5}
          fontSize="1.5rem"
          mouseConstraintStiffness={0.9}
        >
          <SwapCard />
        </FallingText>
      ) : (
        <SwapCard />
      )}
    </div>
  );
}

export default App;

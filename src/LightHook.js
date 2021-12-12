import { useState, useEffect } from "react";

// useLight hook
// - Stores isGreen boolean value
// - Returns isGreen boolean value
// - Contains a function to flip isGreen boolean value
// - Flips isGreen boolean value after a random timeout

export const useLight = () => {
  const [isGreen, setIsGreen] = useState(false);

  const flipLight = () => {
    setIsGreen(!isGreen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Flipping light");
      flipLight();
    }, Math.floor(Math.random() * 3000));

    return () => clearTimeout(timeout);
  }, [isGreen]);
  console.log('isGreen', isGreen);

  return isGreen;
}

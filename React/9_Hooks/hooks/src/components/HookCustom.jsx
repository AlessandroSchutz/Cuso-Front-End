import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previiousValue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previiousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar!</button>
    </div>
  );
};

export default HookCustom;

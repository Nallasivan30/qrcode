import { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("Click button to get advice");
  const [count, setCount] = useState(0);
  const getAdvice = async () => {
    try {
      const res = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      );
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

 
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <b>{count}</b> piece of advice
      </p>
    </div>
  );
};

export default Advice;

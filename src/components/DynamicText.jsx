import React, { useEffect, useState } from 'react';

const phrases = [
  "Rakibul Hasan",
  "Computer Science Graduate",
  "Researcher"
];

export default function DynamicText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <span style={{ color: "#4FC3F7" }}>{phrases[index]}</span>;
}

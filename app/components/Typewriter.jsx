"use client";

import { useState, useEffect } from "react";

const PHRASES = ["ECE @ Northeastern", "HDE I @ Amazon Robotics"];
const TYPE_SPEED = 75;
const DELETE_SPEED = 50;
const PAUSE = 1500;

export default function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), PAUSE);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, deleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

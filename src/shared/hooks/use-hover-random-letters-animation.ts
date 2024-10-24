import { useRef, useState } from 'react';

export const RANDOM_LETTERS = `QWERTYUIOPASDFGHJKLZXCVBNM`.split('');

export const useHoverRandomLettersAnimation = (initalString: string) => {
  const ref = useRef<number>();
  const [frame, setFrame] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(initalString);

  const generatedString = frame !== 0 ? currentText : initalString;

  const clear = () => {
    setCurrentText(initalString);
    setFrame(0);
    cancelAnimationFrame(ref.current as number);
  };
  const animate = () => {
    setFrame((prev) => ++prev);
    ref.current = requestAnimationFrame(animate);
    const newStr = currentText.split('');
    newStr.forEach((_, index) => {
      newStr[index] = RANDOM_LETTERS[Math.floor(Math.random() * RANDOM_LETTERS.length)];
    });
    setCurrentText(newStr.join(''));

    setTimeout(() => clear(), 300);
  };

  return { generatedString, animate, clear };
};

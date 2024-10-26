import { useRef, useState } from 'react';
import { useLocale } from 'next-intl';

import { Locale } from '@locales';

export const RANDOM_LETTERS = {
  ru: `ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ`.split(''),
  en: `QWERTYUIOPASDFGHJKLZXCVBNM`.split(''),
};

export const useHoverRandomLettersAnimation = (initalString: string) => {
  const locale = useLocale() as Locale;
  const ref = useRef<number>();
  const [frame, setFrame] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(initalString);

  const currentLanguageRandomLetters = RANDOM_LETTERS[locale];
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
      newStr[index] =
        currentLanguageRandomLetters[
          Math.floor(Math.random() * currentLanguageRandomLetters.length)
        ];
    });
    setCurrentText(newStr.join(''));

    setTimeout(() => clear(), 300);
  };

  return { generatedString, animate, clear };
};

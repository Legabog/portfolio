import { useLayoutEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';

import { Locale } from '@locales';

export const RANDOM_LETTERS = {
  ru: `ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ`.split(''),
  en: `QWERTYUIOPASDFGHJKLZXCVBNM`.split(''),
};

export const useHoverRandomLettersAnimation = (initalString: string) => {
  const locale = useLocale() as Locale;
  const ref = useRef<number>();
  const [currentText, setCurrentText] = useState<string>(initalString);

  const currentLanguageRandomLetters = RANDOM_LETTERS[locale];

  const clear = () => {
    setCurrentText(initalString);
    cancelAnimationFrame(ref.current as number);
  };

  const animate = () => {
    ref.current = requestAnimationFrame(animate);
    const newStr = currentText.split('');
    if (ref.current % 2) {
      newStr.forEach((_, index) => {
        newStr[index] =
          currentLanguageRandomLetters[
            Math.floor(Math.random() * currentLanguageRandomLetters.length)
          ];
      });
      setCurrentText(newStr.join(''));
    }
    setTimeout(() => clear(), 300);
  };

  useLayoutEffect(() => setCurrentText(initalString), [initalString]);

  return { generatedString: currentText, animate, clear };
};

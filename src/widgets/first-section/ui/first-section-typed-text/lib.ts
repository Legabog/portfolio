import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';

export const useLogic = () => {
  const t = useTranslations(`FirstSection.FirstSectionTypedText`);
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(t('first'));
  const {
    animate: animateDescription,
    clear: clearDescription,
    generatedString: generatedStringDescription,
  } = useHoverRandomLettersAnimation(t('description'));
  const {
    animate: animateSecond,
    clear: clearSecond,
    generatedString: generatedStringSecond,
  } = useHoverRandomLettersAnimation(t('second'));

  return {
    t,
    animate,
    clear,
    generatedString,
    animateDescription,
    clearDescription,
    generatedStringDescription,
    animateSecond,
    clearSecond,
    generatedStringSecond,
  };
};

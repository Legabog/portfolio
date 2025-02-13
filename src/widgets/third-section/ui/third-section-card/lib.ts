import { useTranslations } from 'next-intl';

export const useLogic = () => {
  const t = useTranslations(`ThirdSection.ThirdSectionCard`);

  const firstDescription = t('first-part');
  const secondDescription = t('second-part');
  const animatedText = t('animated-text');

  return { firstDescription, secondDescription, animatedText };
};

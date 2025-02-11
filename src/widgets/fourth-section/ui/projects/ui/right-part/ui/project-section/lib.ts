import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useSoundEffectsStore } from '@widgets/header';
import { Props } from './types';

export const useLogic = (overlappingType: Props['overlappingType']) => {
  const { play } = useSoundEffectsStore();
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionRightPart.Section`);

  const [isFliped, setFliped] = useState<boolean>(false);

  const conditionTranslate = (
    type: 'Title' | 'Description' | 'SecondaryTitle' | 'DescriptionFull' | 'BadgeStatus',
  ) => t(`${type}.${overlappingType}`);
  const title = conditionTranslate('Title');
  const secondaryTitle = conditionTranslate('SecondaryTitle');
  const description = conditionTranslate('Description');
  const descriptionFull = conditionTranslate('DescriptionFull');
  const badgeStatus = conditionTranslate('BadgeStatus');
  const isActive = overlappingType === 'vtb';

  const onClick = () => {
    play('wooshing-1.wav');
    setFliped((prev) => !prev);
  };

  return {
    isFliped,
    title,
    description,
    isActive,
    badgeStatus,
    onClick,
    secondaryTitle,
    descriptionFull,
  };
};

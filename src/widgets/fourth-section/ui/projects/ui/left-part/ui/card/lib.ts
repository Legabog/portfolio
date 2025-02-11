import { useTranslations } from 'next-intl';

import { Props } from './types';

export const useLogic = (overlappingType: Props['overlappingType']) => {
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart.Card`);
  const conditionTranslate = (
    type: 'Title' | 'SecondaryTitle' | 'Badge' | 'Description' | 'Number' | 'BadgeStatus',
  ) => t(`${type}.${overlappingType}`);

  const title = conditionTranslate('Title');
  const secondaryTitle = conditionTranslate('SecondaryTitle');
  const badge = conditionTranslate('Badge');
  const badgeStatus = conditionTranslate('BadgeStatus');
  const number = conditionTranslate('Number');
  const isActive = overlappingType === 'vtb';

  return { badge, isActive, badgeStatus, title, number, secondaryTitle };
};

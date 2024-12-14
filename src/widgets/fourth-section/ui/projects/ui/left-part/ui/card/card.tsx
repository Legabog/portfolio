'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Props } from '../../types';
import { PROJECTS_SVG } from '../../constants';
import {
  Wrapper,
  SectionWrapper,
  IconWrapper,
  Title,
  InfoSection,
  CardBody,
  Badge,
  BlinkingStatus,
  TopNumber,
  SecondaryTitle,
} from './card.styled';
import { Carusel } from './ui';
import { WORDS } from './constants';

export const Card: FC<Pick<Props, 'overlappingType'>> = ({ overlappingType }) => {
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart.Card`);
  const conditionTranslate = (
    type: 'Title' | 'SecondaryTitle' | 'Badge' | 'Description' | 'TopNumber' | 'BadgeStatus',
  ) => t(`${type}.${overlappingType}`);

  const title = conditionTranslate('Title');
  const secondaryTitle = conditionTranslate('SecondaryTitle');
  const badge = conditionTranslate('Badge');
  const badgeStatus = conditionTranslate('BadgeStatus');
  const topNumber = conditionTranslate('TopNumber');
  const isActive = overlappingType === 'vtb';

  return (
    <Wrapper data-testid='left-part-card'>
      <CardBody>
        <InfoSection>
          <SectionWrapper>
            <Badge title={ badge }>
              {badge}
              <BlinkingStatus $isActive={ isActive } title={ badgeStatus } />
            </Badge>
          </SectionWrapper>
          <SectionWrapper>
            <IconWrapper $overlappingType={ overlappingType }>
              {PROJECTS_SVG[overlappingType]}
            </IconWrapper>
            <Title title={ title }>{title}</Title>
          </SectionWrapper>
          <SectionWrapper>
            <TopNumber title={ topNumber }>{topNumber}</TopNumber>
            <SecondaryTitle title={ secondaryTitle }>{secondaryTitle}</SecondaryTitle>
          </SectionWrapper>
        </InfoSection>
      </CardBody>
      {['left', 'right'].map((type, index) => (
        <Carusel
          key={ `${index} - ${type}` }
          caruselType={ type as 'left' | 'right' }
          words={ WORDS[overlappingType][type] }
        />
      ))}
    </Wrapper>
  );
};

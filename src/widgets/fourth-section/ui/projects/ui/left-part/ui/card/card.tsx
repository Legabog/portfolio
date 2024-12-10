'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Props } from '../../types';
import { PROJECTS_SVG } from '../../constants';
import {
  Wrapper,
  IconWrapper,
  TitleWrapper,
  Title,
  InfoSection,
  CardBody,
  Description,
  Badge,
  BlinkingStatus,
  TopNumber,
  SecondaryTitle,
} from './card.styled';
import { Carusel } from './ui';
import { WORDS } from './constants';

export const Card: FC<Pick<Props, 'overlappingType'>> = ({ overlappingType }) => {
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart.Card`);
  const conditionTranslate = (type: 'Title' | 'SecondaryTitle' | 'Badge') =>
    t(`${type}.${overlappingType}`);

  console.log('overlappingType');
  const title = conditionTranslate('Title');
  const secondaryTitle = conditionTranslate('SecondaryTitle');
  const badge = conditionTranslate('Badge');

  return (
    <Wrapper data-testid='left-part-card'>
      <CardBody>
        <InfoSection>
          <TitleWrapper>
            <Badge title={ badge }>
              {badge}
              <BlinkingStatus
                $isActive={ overlappingType === 'vtb' }
                title={ overlappingType === 'vtb' ? 'Active' : 'Inactive' }
              />
            </Badge>
          </TitleWrapper>
          <TitleWrapper>
            <IconWrapper overlappingType={ overlappingType }>
              {PROJECTS_SVG[overlappingType]}
            </IconWrapper>
            <Title title={ title }>{title}</Title>
          </TitleWrapper>
          <TitleWrapper>
            <TopNumber>
              0{overlappingType === 'linkify' ? 1 : overlappingType === 'musicon' ? 2 : 3}
            </TopNumber>
            <SecondaryTitle title={ secondaryTitle }>{secondaryTitle}</SecondaryTitle>
          </TitleWrapper>
          <TitleWrapper>
            <Description>
              Here might be your information. This project is about this. Hello daga bugag dasdas.
              Dkklasd asdasddasd.
            </Description>
          </TitleWrapper>
        </InfoSection>
      </CardBody>
      {['left', 'right'].map((type) => (
        <Carusel caruselType={ type as 'left' | 'right' } words={ WORDS[overlappingType][type] } />
      ))}
    </Wrapper>
  );
};

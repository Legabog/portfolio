'use client';

import { FC } from 'react';

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
import { Carusel, NavigationSections } from './ui';
import { WORDS } from './constants';
import { Props } from './types';
import { useLogic } from './lib';

export const Card: FC<Props> = ({ overlappingType, linkifyRef, musiconRef, vtbRef }) => {
  const { badge, isActive, badgeStatus, title, number, secondaryTitle } = useLogic(overlappingType);

  return (
    <Wrapper data-testid='left-part-card'>
      <NavigationSections
        linkifyRef={ linkifyRef }
        musiconRef={ musiconRef }
        overlappingType={ overlappingType }
        vtbRef={ vtbRef }
      />
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
            <TopNumber title={ number }>{number}</TopNumber>
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

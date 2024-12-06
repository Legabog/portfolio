'use client';

import { FC, ReactElement, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useResizeObserver } from '@shared/hooks';
import { MusicOnProjectIcon, LinkifyIcon, VTBIcon } from '@shared/ui';
import { WORDS } from './constants';
import {
  Wrapper,
  TitleWrapper,
  Title,
  IconWrapper,
  Seperator,
  SeperatorWrapper,
  CardWrapper,
  InfoSection,
  CardBody,
  Description,
  StyledImage,
  Badge,
  BlinkingStatus,
  TopNumber,
} from './left-part.styled';
import { Props } from './types';
import { Carusel, Panels } from './ui';

export const LeftPart: FC<Props> = ({ absoluteRef, overlappingType }) => {
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart`);

  const conditionalSvg: { [key in typeof overlappingType]: ReactElement } = {
    vtb: <VTBIcon />,
    musicon: <MusicOnProjectIcon />,
    linkify: <LinkifyIcon />,
  };
  const text = t(`${overlappingType}`);

  const [width, setWidth] = useState<number>(window.innerWidth * 0.5);
  const resizeHandler = () => {
    setWidth(window.innerWidth * 0.8);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  console.log('resizeRef', resizeRef);

  return (
    <Wrapper data-testid='left-part'>
      <CardWrapper>
        <CardBody>
          <Panels />
          <InfoSection>
            <TopNumber>
              0{overlappingType === 'linkify' ? 1 : overlappingType === 'musicon' ? 2 : 3}
            </TopNumber>
            <TitleWrapper>
              <IconWrapper overlappingType={ overlappingType }>
                {conditionalSvg[overlappingType]}
              </IconWrapper>
              <Title title={ text }>{text}</Title>
              <Badge
                title={
                  overlappingType === 'linkify'
                    ? 'Social app'
                    : overlappingType === 'musicon'
                      ? 'Music app'
                      : 'Cash management'
                }
              >
                {overlappingType === 'linkify'
                  ? 'Social app'
                  : overlappingType === 'musicon'
                    ? 'Music app'
                    : 'Cash management'}
                <BlinkingStatus
                  $isActive={ overlappingType === 'vtb' }
                  title={ overlappingType === 'vtb' ? 'Active' : 'Inactive' }
                />
              </Badge>
            </TitleWrapper>
            <TitleWrapper>
              <Title title={ text }>
                {overlappingType === 'linkify'
                  ? 'Social network'
                  : overlappingType === 'musicon'
                    ? 'Music player'
                    : 'Cash management'}
              </Title>
            </TitleWrapper>
            <Description>
              Here might be your information. This project is about this. Hello daga bugag dasdas.
              Dkklasd asdasddasd.
            </Description>
          </InfoSection>
        </CardBody>
        {['left', 'right'].map((type) => (
          <Carusel caruselType={ type as 'left' | 'right' } words={ WORDS[overlappingType][type] } />
        ))}
      </CardWrapper>
      <SeperatorWrapper>
        <Seperator>
          <IconWrapper ref={ absoluteRef } overlappingType={ overlappingType } $isCenterWrapper>
            {conditionalSvg[overlappingType]}
          </IconWrapper>
        </Seperator>
      </SeperatorWrapper>
      <StyledImage alt='background' height={ width } src='/images/background.png' width={ width } />
    </Wrapper>
  );
};

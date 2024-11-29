'use client';

import { FC, ReactElement, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { AmusicIcon, LinkifyIcon, VTBIcon } from '@shared/ui';
import {
  Wrapper,
  TitleWrapper,
  Title,
  IconWrapper,
  Seperator,
  SeperatorWrapper,
  Example,
  CardWrapper,
  InfoSection,
  CardBody,
  Description,
  AnimatedCarusel,
} from './left-part.styled';
import { Props } from './types';
import { Panels } from './ui';

export const LeftPart: FC<Props> = ({ absoluteRef, overlappingType }) => {
  const refCardBody = useRef<HTMLDivElement | null>(null);
  const [isPaused, setisPaused] = useState<boolean>(false);
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart`);

  const customStylesCarusel = `width: ${refCardBody.current?.clientWidth}px;`;
  const conditionalSvg: { [key in typeof overlappingType]: ReactElement } = {
    vtb: <VTBIcon />,
    amusic: <AmusicIcon />,
    linkify: <LinkifyIcon />,
  };
  const text = t(`${overlappingType}`);

  const onHover = () => setisPaused(true);
  const onLeave = () => setisPaused(false);

  return (
    <Wrapper data-testid='left-part'>
      <CardWrapper>
        <CardBody ref={ refCardBody }>
          <Panels />
          <InfoSection>
            <TitleWrapper>
              <IconWrapper overlappingType={ overlappingType }>
                {conditionalSvg[overlappingType]}
              </IconWrapper>
              <Title title={ text }>{text}</Title>
            </TitleWrapper>
            <Description>
              Here might be your information. This project is about this. Hello daga bugag dasdas.
              Dkklasd asdasddasd.
            </Description>
          </InfoSection>
        </CardBody>
        <Example>
          <AnimatedCarusel
            caruselType='left'
            customStyles={ customStylesCarusel }
            isPaused={ isPaused }
            onMouseEnter={ onHover }
            onMouseLeave={ onLeave }
          >
            <span>
              <li>01</li>
              <li>Linkify</li>
              <li>Projects</li>
              <li>Linkify</li>
              <li>Projects</li>
            </span>
            <span>
              <li>01</li>
              <li>Linkify</li>
              <li>Projects</li>
              <li>Linkify</li>
              <li>Projects</li>
            </span>
          </AnimatedCarusel>
          <AnimatedCarusel
            caruselType='right'
            customStyles={ customStylesCarusel }
            isPaused={ isPaused }
          >
            <span>
              <li>01</li>
              <li>Linkify</li>
              <li>Projects</li>
              <li>Linkify</li>
              <li>Projects</li>
            </span>
            <span>
              <li>01</li>
              <li>Linkify</li>
              <li>Projects</li>
              <li>Linkify</li>
              <li>Projects</li>
            </span>
          </AnimatedCarusel>
        </Example>
      </CardWrapper>
      <SeperatorWrapper>
        <Seperator>
          <IconWrapper ref={ absoluteRef } overlappingType={ overlappingType } isCenterWrapper>
            {conditionalSvg[overlappingType]}
          </IconWrapper>
        </Seperator>
      </SeperatorWrapper>
    </Wrapper>
  );
};

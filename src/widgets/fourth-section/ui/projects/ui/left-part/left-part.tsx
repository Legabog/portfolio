'use client';

import { FC, ReactElement } from 'react';
import { useTranslations } from 'next-intl';

import { AmusicIcon, LinkifyIcon, VTBIcon } from '@shared/ui';
import {
  Wrapper,
  TitleWrapper,
  Title,
  IconWrapper,
  Seperator,
  SeperatorWrapper,
  AnimatedCarusel,
} from './left-part.styled';
import { Props } from './types';
import { Panels } from './ui';

export const LeftPart: FC<Props> = ({ absoluteRef, overlappingType }) => {
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart`);

  const conditionalSvg: { [key in typeof overlappingType]: ReactElement } = {
    vtb: <VTBIcon />,
    amusic: <AmusicIcon />,
    linkify: <LinkifyIcon />,
  };
  const text = t(`${overlappingType}`);

  return (
    <>
      <Wrapper data-testid='left-part' overlappingType={ overlappingType }>
        <Panels />
        {conditionalSvg[overlappingType]}
        <TitleWrapper>
          <Title title={ text }>{text}</Title>
        </TitleWrapper>
        <SeperatorWrapper>
          <Seperator>
            <IconWrapper ref={ absoluteRef }>{conditionalSvg[overlappingType]}</IconWrapper>
          </Seperator>
        </SeperatorWrapper>
      </Wrapper>
      <AnimatedCarusel>
        <span>sdfsdf</span>
        <span>zxczxc</span>
        <span>hgjghjghjsdf</span>
        <span>sdfwerwer</span>
        <span>kkkkkkkkk</span>
      </AnimatedCarusel>
    </>
  );
};

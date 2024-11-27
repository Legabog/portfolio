'use client';

import { FC, ReactElement } from 'react';
import { useTranslations } from 'next-intl';

import { AmusicIcon, LinkifyIcon, VTBIcon } from '@shared/ui';
import {
  Wrapper,
  TitleWrapper,
  Panel,
  Title,
  IconWrapper,
  Seperator,
  SeperatorWrapper,
} from './left-part.styled';
import { Props } from './types';

export const LeftPart: FC<Props> = ({ absoluteRef, overlappingType }) => {
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart`);

  const conditionalSvg: { [key in typeof overlappingType]: ReactElement } = {
    vtb: <VTBIcon />,
    amusic: <AmusicIcon />,
    linkify: <LinkifyIcon />,
  };
  const text = t(`${overlappingType}`);

  return (
    <Wrapper data-testid='left-part' overlappingType={ overlappingType }>
      <TitleWrapper>
        <Panel>{conditionalSvg[overlappingType]}</Panel>
        <Title title={ text }>{text}</Title>
      </TitleWrapper>
      <SeperatorWrapper>
        <Seperator>
          <IconWrapper ref={ absoluteRef }>{conditionalSvg[overlappingType]}</IconWrapper>
        </Seperator>
      </SeperatorWrapper>
    </Wrapper>
  );
};

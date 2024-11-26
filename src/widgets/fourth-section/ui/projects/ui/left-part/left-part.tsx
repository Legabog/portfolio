'use client';

import { FC, ReactElement } from 'react';
import { useTranslations } from 'next-intl';

import { AmusicIcon, LinkifyIcon, VTBIcon } from '@shared/ui';
import { COLORS } from '@shared/constants';
import { useThemeStore } from '@widgets/header';
import {
  Wrapper,
  StyledTypeAnimation,
  Seperator,
  IconWrapper,
  IconWrapperSecondary,
} from './left-part.styled';
import { Props } from './types';

export const LeftPart: FC<Props> = ({ absoluteRef, overlappingType }) => {
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart`);
  const { themeType } = useThemeStore();

  const conditionalSvg: { [key in typeof overlappingType]: ReactElement } = {
    vtb: <VTBIcon />,
    amusic: <AmusicIcon />,
    linkify: <LinkifyIcon />,
  };
  const text = t(`${overlappingType}`);

  return (
    <Wrapper data-testid='left-part'>
      <StyledTypeAnimation
        key={ `${themeType}-${overlappingType}` }
        $color={ COLORS[overlappingType] }
        repeat={ Infinity }
        sequence={ [text, 1000, '', 1000] }
        speed={ 50 }
      />
      <Seperator>
        <IconWrapper>
          <IconWrapperSecondary ref={ absoluteRef }>
            {conditionalSvg[overlappingType]}
          </IconWrapperSecondary>
        </IconWrapper>
      </Seperator>
    </Wrapper>
  );
};

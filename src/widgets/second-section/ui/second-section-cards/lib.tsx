import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { NitroIcon, ScienceIcon, SmileIcon } from '@shared/ui';
import { useSoundEffectsStore, useThemeStore } from '@widgets/header';
import {
  CardWrapper,
  FrontWrapper,
  BackWrapper,
  Description,
  Title,
  TopSection,
  TopSectionText,
  StyledTypeAnimation,
} from './second-section-cards.styled';
import { JSXElement } from './types';

export const useAdditionalLogic = () => {
  const t = useTranslations(`SecondSection.SecondSectionCards`);
  const { themeType } = useThemeStore();
  const { play } = useSoundEffectsStore();

  const cards: JSXElement[] = [
    {
      id: 'card-1',
      JSX: () => {
        const [flip, setFlip] = useState<boolean>(false);
        const card = 'card-1';
        const front = `${card}.front`;
        const back = `${card}.back`;
        const frontTitle = t(`${front}.title`);
        const frontDescription = t(`${front}.description`);
        const backTitle = t(`${back}.title`);
        const backDescription = t(`${back}.description`);
        const firstTyped = t(`${back}.typed-1`);
        const secondTyped = t(`${back}.typed-2`);
        const thirdTyped = t(`${back}.typed-3`);

        const onClick = () => {
          play('wooshing-1.wav');
          setFlip((prev) => !prev);
        };
        return (
          <CardWrapper key='card-1' $flip={ flip } onClick={ onClick }>
            <FrontWrapper $flip={ flip }>
              <TopSection>
                <SmileIcon />
                <TopSectionText $type='number'>/ 01</TopSectionText>
              </TopSection>
              <Title>{frontTitle}</Title>
              <Description>{frontDescription}</Description>
            </FrontWrapper>
            <BackWrapper $flip={ flip }>
              <TopSection>
                <TopSectionText $type='text'>{backTitle}</TopSectionText>
                <TopSectionText $type='number'>/ 01</TopSectionText>
              </TopSection>
              <StyledTypeAnimation
                key={ themeType }
                repeat={ Infinity }
                sequence={ [firstTyped, 1000, secondTyped, 1000, thirdTyped, 1000] }
                speed={ 50 }
              />
              <Description>{backDescription}</Description>
            </BackWrapper>
          </CardWrapper>
        );
      },
    },
    {
      id: 'card-2',
      JSX: () => {
        const [flip, setFlip] = useState<boolean>(false);
        const card = 'card-2';
        const front = `${card}.front`;
        const back = `${card}.back`;
        const frontTitle = t(`${front}.title`);
        const frontDescription = t(`${front}.description`);
        const backTitle = t(`${back}.title`);
        const backDescription = t(`${back}.description`);
        const firstTyped = t(`${back}.typed-1`);
        const secondTyped = t(`${back}.typed-2`);
        const thirdTyped = t(`${back}.typed-3`);

        const onClick = () => {
          play('wooshing-1.wav');
          setFlip((prev) => !prev);
        };

        return (
          <CardWrapper key='card-2' $flip={ flip } onClick={ onClick }>
            <FrontWrapper $flip={ flip }>
              <TopSection>
                <NitroIcon />
                <TopSectionText $type='number'>/ 02</TopSectionText>
              </TopSection>
              <Title>{frontTitle}</Title>
              <Description>{frontDescription}</Description>
            </FrontWrapper>
            <BackWrapper $flip={ flip }>
              <TopSection>
                <TopSectionText $type='text'>{backTitle}</TopSectionText>
                <TopSectionText $type='number'>/ 02</TopSectionText>
              </TopSection>
              <StyledTypeAnimation
                key={ themeType }
                repeat={ Infinity }
                sequence={ [firstTyped, 1000, secondTyped, 1000, thirdTyped, 1000] }
                speed={ 50 }
              />
              <Description>{backDescription}</Description>
            </BackWrapper>
          </CardWrapper>
        );
      },
    },
    {
      id: 'card-3',
      JSX: () => {
        const [flip, setFlip] = useState<boolean>(false);
        const card = 'card-3';
        const front = `${card}.front`;
        const back = `${card}.back`;
        const frontTitle = t(`${front}.title`);
        const frontDescription = t(`${front}.description`);
        const backTitle = t(`${back}.title`);
        const backDescription = t(`${back}.description`);
        const firstTyped = t(`${back}.typed-1`);
        const secondTyped = t(`${back}.typed-2`);
        const thirdTyped = t(`${back}.typed-3`);

        const onClick = () => {
          play('wooshing-1.wav');
          setFlip((prev) => !prev);
        };

        return (
          <CardWrapper key='card-3' $flip={ flip } onClick={ onClick }>
            <FrontWrapper $flip={ flip }>
              <TopSection>
                <ScienceIcon />
                <TopSectionText $type='number'>/ 03</TopSectionText>
              </TopSection>
              <Title>{frontTitle}</Title>
              <Description>{frontDescription}</Description>
            </FrontWrapper>
            <BackWrapper $flip={ flip }>
              <TopSection>
                <TopSectionText $type='text'>{backTitle}</TopSectionText>
                <TopSectionText $type='number'>/ 02</TopSectionText>
              </TopSection>
              <StyledTypeAnimation
                key={ themeType }
                repeat={ Infinity }
                sequence={ [firstTyped, 1000, secondTyped, 1000, thirdTyped, 1000] }
                speed={ 50 }
              />
              <Description>{backDescription}</Description>
            </BackWrapper>
          </CardWrapper>
        );
      },
    },
  ];
  return { cards };
};

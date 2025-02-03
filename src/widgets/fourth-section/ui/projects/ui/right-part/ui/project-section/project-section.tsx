import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useSoundEffectsStore } from '@widgets/header';
import {
  Wrapper,
  Card,
  Back,
  Front,
  FrontHeader,
  FrontBody,
  FrontFooter,
  FrontText,
  FrontTitle,
  Description,
  TechnologyWrapper,
  BackHeader,
  BackBody,
  BackTitleWrapper,
  BackTitle,
  BackSecondaryTitle,
  BackSecondaryTitleWrapper,
  BackBlinkingStatus,
  BackSecondaryNumberWrapper,
} from './project-section.styled';
import { Props } from './types';
import { Carusel } from './ui';

export const ProjectSection: FC<Props> = ({
  sectionRef,
  icon,
  topNumber,
  overlappingType,
  frontTechnologyIcons,
  backTechnologyIcons,
  secondaryTitleNumber,
}) => {
  const [isFliped, setFliped] = useState<boolean>(false);
  const { play } = useSoundEffectsStore();
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionRightPart.Section`);
  const conditionTranslate = (
    type: 'Title' | 'Description' | 'SecondaryTitle' | 'DescriptionFull' | 'BadgeStatus',
  ) => t(`${type}.${overlappingType}`);

  const title = conditionTranslate('Title');
  const secondaryTitle = conditionTranslate('SecondaryTitle');
  const description = conditionTranslate('Description');
  const descriptionFull = conditionTranslate('DescriptionFull');
  const badgeStatus = conditionTranslate('BadgeStatus');
  const isActive = overlappingType === 'vtb';

  const onClick = () => {
    play('wooshing-1.wav');
    setFliped((prev) => !prev);
  };

  return (
    <Wrapper ref={ sectionRef } data-testid='project-section'>
      <Card $isFliped={ isFliped } id={ `${overlappingType}-card` } onClick={ onClick }>
        <Front>
          <FrontHeader title={ topNumber }>{topNumber}</FrontHeader>
          <FrontBody>
            {icon}
            <FrontText>
              <FrontTitle title={ title }>{title}</FrontTitle>
              <Description title={ description }>{description}</Description>
            </FrontText>
          </FrontBody>
          <FrontFooter>
            {frontTechnologyIcons.map(({ icon, id, title }) => (
              <TechnologyWrapper key={ id } title={ title }>
                {icon}
              </TechnologyWrapper>
            ))}
          </FrontFooter>
        </Front>
        <Back>
          <BackHeader>
            <Carusel caruselType='left' technologies={ backTechnologyIcons } />
          </BackHeader>
          <BackBody>
            <BackTitleWrapper title={ title }>
              {icon}
              <BackTitle>{title}</BackTitle>
            </BackTitleWrapper>
            <BackSecondaryTitleWrapper title={ title }>
              <BackSecondaryNumberWrapper title={ secondaryTitleNumber }>
                <BackBlinkingStatus $isActive={ isActive } title={ badgeStatus } />
                {secondaryTitleNumber}
              </BackSecondaryNumberWrapper>
              <BackSecondaryTitle title={ secondaryTitle }>{secondaryTitle}</BackSecondaryTitle>
            </BackSecondaryTitleWrapper>
            <Description>{descriptionFull}</Description>
          </BackBody>
        </Back>
      </Card>
    </Wrapper>
  );
};

import { FC } from 'react';

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
import { useLogic } from './lib';

export const ProjectSection: FC<Props> = ({
  sectionRef,
  icon,
  topNumber,
  overlappingType,
  frontTechnologyIcons,
  backTechnologyIcons,
  secondaryTitleNumber,
}) => {
  const {
    isFliped,
    title,
    description,
    isActive,
    badgeStatus,
    onClick,
    secondaryTitle,
    descriptionFull,
  } = useLogic(overlappingType);

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

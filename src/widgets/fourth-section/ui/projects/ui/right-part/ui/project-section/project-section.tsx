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
  FrontDescription,
  TechnologyWrapper,
  BackHeader,
} from './project-section.styled';
import { Props } from './types';

export const ProjectSection: FC<Props> = ({
  sectionRef,
  icon,
  topNumber,
  overlappingType,
  frontTechnologyIcons,
  backTechnologyIcons,
}) => {
  const [isFliped, setFliped] = useState<boolean>(false);
  const { play } = useSoundEffectsStore();
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionRightPart.Section`);
  const conditionTranslate = (type: 'Title' | 'Description') => t(`${type}.${overlappingType}`);

  const title = conditionTranslate('Title');
  const description = conditionTranslate('Description');

  const onClick = () => {
    play('wooshing-1.wav');
    setFliped((prev) => !prev);
  };

  return (
    <Wrapper ref={ sectionRef }>
      <Card $isFliped={ isFliped } onClick={ onClick }>
        <Front>
          <FrontHeader title={ topNumber }>{topNumber}</FrontHeader>
          <FrontBody>
            {icon}
            <FrontText>
              <FrontTitle title={ title }>{title}</FrontTitle>
              <FrontDescription title={ description }>{description}</FrontDescription>
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
            {backTechnologyIcons.map(({ icon, id, title }) => (
              <TechnologyWrapper key={ id } title={ title }>
                {icon}
              </TechnologyWrapper>
            ))}
          </BackHeader>
        </Back>
      </Card>
    </Wrapper>
  );
};

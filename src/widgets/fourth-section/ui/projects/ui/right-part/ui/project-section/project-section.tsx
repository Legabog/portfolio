import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

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
  TechnologyTitle,
} from './project-section.styled';
import { Props } from './types';

export const ProjectSection: FC<Props> = ({
  sectionRef,
  icon,
  topNumber,
  overlappingType,
  technologyIcons,
}) => {
  const [isFliped, setFliped] = useState<boolean>(false);
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionRightPart.Section`);
  const conditionTranslate = (type: 'Title' | 'Description') => t(`${type}.${overlappingType}`);

  const title = conditionTranslate('Title');
  const description = conditionTranslate('Description');

  return (
    <Wrapper ref={ sectionRef }>
      <Card $isFliped={ isFliped } onClick={ () => setFliped((prev) => !prev) }>
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
            {technologyIcons.map(({ icon, id, title }) => (
              <TechnologyWrapper key={ id } title={ title }>
                {icon}
                <TechnologyTitle>{title}</TechnologyTitle>
              </TechnologyWrapper>
            ))}
          </FrontFooter>
        </Front>
        <Back>BACK</Back>
      </Card>
    </Wrapper>
  );
};

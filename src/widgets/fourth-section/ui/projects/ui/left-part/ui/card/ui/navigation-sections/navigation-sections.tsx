import { FC } from 'react';

import { NavigationSectionItem } from './ui';
import { Wrapper, SecondaryWrapper } from './navigation-sections.styled';
import { SECTIONS } from './constants';
import { Props } from './types';

export const NavigationSections: FC<Props> = ({
  overlappingType,
  linkifyRef,
  musiconRef,
  vtbRef,
}) => (
  <Wrapper data-testid='navigation-sections'>
    <SecondaryWrapper>
      {SECTIONS.map((props) => (
        <NavigationSectionItem
          key={ props.id }
          { ...props }
          activeOverlappingType={ overlappingType }
          linkifyRef={ linkifyRef }
          musiconRef={ musiconRef }
          vtbRef={ vtbRef }
        />
      ))}
    </SecondaryWrapper>
  </Wrapper>
);

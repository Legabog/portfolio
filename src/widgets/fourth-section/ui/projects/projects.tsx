import { FC } from 'react';

import { MainIcon } from '@shared/ui';
import {
  Wrapper,
  LeftPart,
  RightPart,
  Seperator,
  IconWrapper,
  IconWrapperSecondary,
  Title,
} from './projects.styled';

export const Projects: FC = () => (
  <Wrapper id='projects'>
    <LeftPart>
      <Title>Some text description text dadad dadaa</Title>
      <Seperator>
        <IconWrapper>
          <IconWrapperSecondary>
            <MainIcon />
          </IconWrapperSecondary>
        </IconWrapper>
      </Seperator>
    </LeftPart>
    <RightPart />
  </Wrapper>
);

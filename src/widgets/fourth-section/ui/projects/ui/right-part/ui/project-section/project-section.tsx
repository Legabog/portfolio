import { FC, useState } from 'react';

import { LinkifyIcon } from '@shared/ui';
import {
  Wrapper,
  Card,
  Back,
  Front,
  FrontHeader,
  FrontBody,
  FrontFooter,
} from './project-section.styled';
import { Props } from './types';

export const ProjectSection: FC<Props> = ({ sectionRef }) => {
  const [isFliped, setFliped] = useState<boolean>(false);

  return (
    <Wrapper ref={ sectionRef }>
      <Card $isFliped={ isFliped } onClick={ () => setFliped((prev) => !prev) }>
        <Front>
          <FrontHeader>/ 01</FrontHeader>
          <FrontBody>
            <LinkifyIcon />
            <h3>Linkify</h3>
            <span>DADA</span>
          </FrontBody>
          <FrontFooter>JS + TS + Node.js</FrontFooter>
        </Front>
        <Back>BACK</Back>
      </Card>
    </Wrapper>
  );
};

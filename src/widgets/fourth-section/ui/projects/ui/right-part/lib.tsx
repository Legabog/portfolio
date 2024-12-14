import { MutableRefObject } from 'react';

import {
  BemIcon,
  JsIcon,
  LinkifyIcon,
  MusicOnProjectIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  StyledComponentsIcon,
  TsIcon,
  VTBIcon,
} from '@shared/ui';
import { MusicOnWrapper } from './right-part.styled';
import { Props } from './ui';

export const useAdditionalLogic = (
  linkifyRef: MutableRefObject<HTMLDivElement | null>,
  musiconRef: MutableRefObject<HTMLDivElement | null>,
  vtbRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const projectsMap: Props[] = [
    {
      id: 'project-1',
      overlappingType: 'linkify',
      icon: <LinkifyIcon />,
      topNumber: '/ 01',
      technologyIcons: [
        {
          id: 'technology-icon-1',
          icon: <JsIcon />,
          title: 'JavaScript',
        },
        { id: 'technology-icon-2', icon: <ReactIcon />, title: 'React' },
        { id: 'technology-icon-3', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'technology-icon-4', icon: <BemIcon />, title: 'BEM' },
      ],
      sectionRef: linkifyRef,
    },
    {
      id: 'project-2',
      overlappingType: 'musicon',
      icon: (
        <MusicOnWrapper>
          <MusicOnProjectIcon />
        </MusicOnWrapper>
      ),
      topNumber: '/ 02',
      technologyIcons: [
        {
          id: 'technology-icon-5',
          icon: <TsIcon />,
          title: 'TypeScript',
        },
        { id: 'technology-icon-6', icon: <ReactIcon />, title: 'React' },
        { id: 'technology-icon-7', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'technology-icon-8', icon: <ScssIcon />, title: 'Scss' },
      ],
      sectionRef: musiconRef,
    },
    {
      id: 'project-3',
      overlappingType: 'vtb',
      icon: <VTBIcon />,
      topNumber: '/ 03',
      technologyIcons: [
        {
          id: 'technology-icon-9',
          icon: <TsIcon />,
          title: 'TypeScript',
        },
        { id: 'technology-icon-10', icon: <ReactIcon />, title: 'React' },
        { id: 'technology-icon-11', icon: <ReduxIcon />, title: 'RTK' },
        { id: 'technology-icon-12', icon: <StyledComponentsIcon />, title: 'Styled Components' },
      ],
      sectionRef: vtbRef,
    },
  ];

  return { projectsMap };
};

import { MutableRefObject } from 'react';

import {
  BemIcon,
  ExpressIcon,
  FirebaseIcon,
  JsIcon,
  LinkifyIcon,
  MongodbIcon,
  MusicOnProjectIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  StyledComponentsIcon,
  TsIcon,
  VTBIcon,
  WebpackIcon,
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
      frontTechnologyIcons: [
        {
          id: 'front-technology-icon-1',
          icon: <JsIcon />,
          title: 'JavaScript',
        },
        { id: 'front-technology-icon-2', icon: <ReactIcon />, title: 'React' },
        { id: 'front-technology-icon-3', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'front-technology-icon-4', icon: <BemIcon />, title: 'BEM' },
      ],
      backTechnologyIcons: [
        {
          id: 'back-technology-icon-1',
          icon: <JsIcon />,
          title: 'JavaScript',
        },
        { id: 'back-technology-icon-2', icon: <ReactIcon />, title: 'React' },
        { id: 'back-technology-icon-3', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'back-technology-icon-4', icon: <BemIcon />, title: 'BEM' },
        { id: 'back-technology-icon-5', icon: <WebpackIcon />, title: 'Webpack' },
        { id: 'back-technology-icon-6', icon: <ExpressIcon />, title: 'Express' },
        { id: 'back-technology-icon-7', icon: <FirebaseIcon />, title: 'Firebase' },
        { id: 'back-technology-icon-8', icon: <MongodbIcon />, title: 'MongoDB' },
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
      frontTechnologyIcons: [
        {
          id: 'front-technology-icon-5',
          icon: <TsIcon />,
          title: 'TypeScript',
        },
        { id: 'front-technology-icon-6', icon: <ReactIcon />, title: 'React' },
        { id: 'front-technology-icon-7', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'front-technology-icon-8', icon: <ScssIcon />, title: 'Scss' },
      ],
      backTechnologyIcons: [
        {
          id: 'back-technology-icon-1',
          icon: <JsIcon />,
          title: 'JavaScript',
        },
        { id: 'back-technology-icon-2', icon: <ReactIcon />, title: 'React' },
        { id: 'back-technology-icon-3', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'back-technology-icon-4', icon: <ScssIcon />, title: 'Scss' },
      ],
      sectionRef: musiconRef,
    },
    {
      id: 'project-3',
      overlappingType: 'vtb',
      icon: <VTBIcon />,
      topNumber: '/ 03',
      frontTechnologyIcons: [
        {
          id: 'front-technology-icon-9',
          icon: <TsIcon />,
          title: 'TypeScript',
        },
        { id: 'front-technology-icon-10', icon: <ReactIcon />, title: 'React' },
        { id: 'front-technology-icon-11', icon: <ReduxIcon />, title: 'RTK' },
        {
          id: 'front-technology-icon-12',
          icon: <StyledComponentsIcon />,
          title: 'Styled Components',
        },
      ],
      backTechnologyIcons: [
        {
          id: 'back-technology-icon-1',
          icon: <JsIcon />,
          title: 'JavaScript',
        },
        { id: 'back-technology-icon-2', icon: <ReactIcon />, title: 'React' },
        { id: 'back-technology-icon-3', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'back-technology-icon-4', icon: <BemIcon />, title: 'BEM' },
      ],
      sectionRef: vtbRef,
    },
  ];

  return { projectsMap };
};

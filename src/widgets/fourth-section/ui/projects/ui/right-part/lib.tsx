import { MutableRefObject } from 'react';

import {
  BemIcon,
  DockerIcon,
  EslintIcon,
  ExpressIcon,
  FirebaseIcon,
  JestIcon,
  JsIcon,
  LinkifyIcon,
  MongodbIcon,
  MusicOnProjectIcon,
  PostgresqlIcon,
  PrettierIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  SonarIcon,
  StorybookIcon,
  StyledComponentsIcon,
  StylelintIcon,
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
      secondaryTitleNumber: '01',
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
        { id: 'back-technology-icon-5', icon: <StorybookIcon />, title: 'Storybook' },
        { id: 'back-technology-icon-6', icon: <WebpackIcon />, title: 'Webpack' },
        { id: 'back-technology-icon-7', icon: <ExpressIcon />, title: 'Express' },
        { id: 'back-technology-icon-8', icon: <FirebaseIcon />, title: 'Firebase' },
        { id: 'back-technology-icon-9', icon: <MongodbIcon />, title: 'MongoDB' },
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
      secondaryTitleNumber: '02',
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
          id: 'back-technology-icon-10',
          icon: <TsIcon />,
          title: 'TypeScript',
        },
        { id: 'back-technology-icon-11', icon: <ReactIcon />, title: 'React' },
        { id: 'back-technology-icon-12', icon: <ReduxIcon />, title: 'Redux' },
        { id: 'back-technology-icon-13', icon: <ScssIcon />, title: 'Scss' },
        { id: 'back-technology-icon-14', icon: <StorybookIcon />, title: 'Storybook' },
        { id: 'back-technology-icon-15', icon: <WebpackIcon />, title: 'Webpack' },
        { id: 'back-technology-icon-16', icon: <JestIcon />, title: 'Jest' },
        { id: 'back-technology-icon-17', icon: <PrettierIcon />, title: 'Prettier' },
        { id: 'back-technology-icon-18', icon: <EslintIcon />, title: 'ESlint' },
        { id: 'back-technology-icon-19', icon: <StylelintIcon />, title: 'Stylelint' },
      ],
      sectionRef: musiconRef,
    },
    {
      id: 'project-3',
      overlappingType: 'vtb',
      icon: <VTBIcon />,
      topNumber: '/ 03',
      secondaryTitleNumber: '03',
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
          id: 'back-technology-icon-20',
          icon: <TsIcon />,
          title: 'TypeScript',
        },
        { id: 'back-technology-icon-21', icon: <ReactIcon />, title: 'React' },
        { id: 'back-technology-icon-22', icon: <ReduxIcon />, title: 'RTK' },
        {
          id: 'back-technology-icon-23',
          icon: <StyledComponentsIcon />,
          title: 'Styled Components',
        },
        { id: 'back-technology-icon-14', icon: <StorybookIcon />, title: 'Storybook' },
        { id: 'back-technology-icon-15', icon: <WebpackIcon />, title: 'Webpack' },
        { id: 'back-technology-icon-16', icon: <PrettierIcon />, title: 'Prettier' },
        { id: 'back-technology-icon-17', icon: <PostgresqlIcon />, title: 'Posgresql' },
        { id: 'back-technology-icon-18', icon: <DockerIcon />, title: 'Docker' },
        { id: 'back-technology-icon-19', icon: <SonarIcon />, title: 'SonarQube' },
      ],
      sectionRef: vtbRef,
    },
  ];

  return { projectsMap };
};

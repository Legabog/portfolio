import {
  EslintIcon,
  JestIcon,
  NextIcon,
  PlaywrightIcon,
  PrettierIcon,
  SentryIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TsIcon,
} from '@shared/ui';
import { Props } from './ui';

export const TECHNOLOGIES: Props['technologies'] = [
  {
    id: 'tech-1',
    icon: <TsIcon />,
    title: 'React',
  },
  {
    id: 'tech-2',
    icon: <NextIcon />,
    title: 'Next',
  },
  {
    id: 'tech-3',
    icon: <StyledComponentsIcon />,
    title: 'Styled components',
  },
  {
    id: 'tech-4',
    icon: <PlaywrightIcon />,
    title: 'Playwright',
  },
  {
    id: 'tech-5',
    icon: <JestIcon />,
    title: 'Jest',
  },
  {
    id: 'tech-6',
    icon: <StorybookIcon />,
    title: 'Storybook',
  },
  {
    id: 'tech-7',
    icon: <EslintIcon />,
    title: 'ESlint',
  },
  {
    id: 'tech-8',
    icon: <PrettierIcon />,
    title: 'Prettier',
  },
  {
    id: 'tech-9',
    icon: <SentryIcon />,
    title: 'Sentry',
  },
];

import {
  EslintIcon,
  GithubIcon,
  JestIcon,
  NextIcon,
  PlaywrightIcon,
  PrettierIcon,
  SentryIcon,
  StorybookIcon,
  StyledComponentsIcon,
  ThreeIcon,
  TsIcon,
  VercelIcon,
  WebpackIcon,
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
    icon: <ThreeIcon />,
    title: 'Three',
  },
  {
    id: 'tech-4',
    icon: <StyledComponentsIcon />,
    title: 'Styled components',
  },
  {
    id: 'tech-5',
    icon: <PlaywrightIcon />,
    title: 'Playwright',
  },
  {
    id: 'tech-6',
    icon: <JestIcon />,
    title: 'Jest',
  },
  {
    id: 'tech-7',
    icon: <StorybookIcon />,
    title: 'Storybook',
  },
  {
    id: 'tech-8',
    icon: <EslintIcon />,
    title: 'ESlint',
  },
  {
    id: 'tech-9',
    icon: <PrettierIcon />,
    title: 'Prettier',
  },
  {
    id: 'tech-10',
    icon: <SentryIcon />,
    title: 'Sentry',
  },
  {
    id: 'tech-11',
    icon: <WebpackIcon />,
    title: 'Webpack',
  },
  {
    id: 'tech-12',
    icon: <VercelIcon />,
    title: 'Vercel',
  },
  {
    id: 'tech-13',
    icon: <GithubIcon />,
    title: 'Github actions',
  },
];

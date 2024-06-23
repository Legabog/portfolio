'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { Loader } from '@shared/ui';

const Spline = dynamic(() => import('@widgets/spline'), { loading: () => <Loader /> });

const Home: FC = () => <Spline />;
export default Home;

'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { a } from '@react-spring/web';
import { TypeAnimation } from 'react-type-animation';

import { Sphere } from '@features';
import { TextWrapper, CanvasWrapper, InnerTextWrapper } from './page.styled';

const Home: FC = () => {
	const t = useTranslations('HomePage.typed-text');

	return (
		<a.main>
			<TextWrapper>
				<InnerTextWrapper>
					<TypeAnimation sequence={ [t('hello')] } speed={ 50 } />
					<TypeAnimation
						repeat={ Infinity }
						sequence={ [t('name'), 1000, t('specialization'), 1000] }
						speed={ 50 }
					/>
				</InnerTextWrapper>
			</TextWrapper>
			<CanvasWrapper>
				<Canvas dpr={ [1, 2] }>
					<Sphere />
					<OrbitControls
						enablePan={ false }
						enableZoom={ false }
						maxPolarAngle={ Math.PI / 2 }
						minPolarAngle={ Math.PI / 2 }
					/>
				</Canvas>
			</CanvasWrapper>
		</a.main>
	);
};
export default Home;

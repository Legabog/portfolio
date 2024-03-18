'use client';

import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { a } from '@react-spring/web';
import { TypeAnimation } from 'react-type-animation';

import Sphere from 'src/feature/sphere/sphere';
import { TextWrapper, CanvasWrapper } from './page.styled';

const Home: FC = () => (
	<a.main>
		<TextWrapper>
			<TypeAnimation
				sequence={ [`Hello!`, 1000] }
				speed={ 50 }
				style={ { fontSize: '66px', fontWeight: 'bold' } }
			/>
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
export default Home;

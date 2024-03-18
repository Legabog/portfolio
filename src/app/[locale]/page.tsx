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
				repeat={ Infinity }
				sequence={ [
					'We produce food for Mice',
					1000,
					'We produce food for Hamsters',
					1000,
					'We produce food for Guinea Pigs',
					1000,
					'We produce food for Chinchillas',
					1000,
				] }
				speed={ 50 }
				style={ { fontSize: '2em' } }
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

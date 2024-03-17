'use client';

import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';

import Sphere from 'src/feature/sphere/sphere';
import { TextWrapper, CanvasWrapper } from './page.styled';

const Home: FC = () => {
	const [{ background }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, []);
	return (
		<a.main style={ { background } }>
			<TextWrapper>
				<h1>qweqweqwe</h1>
			</TextWrapper>
			<CanvasWrapper>
				<Canvas camera={ { position: [0, 0, 4] } } shadows>
					<Sphere setBg={ set } />
					<OrbitControls
						enablePan={ false }
						enableZoom={ false }
						maxPolarAngle={ Math.PI / 2 }
						minPolarAngle={ Math.PI / 2 }
					/>
					<ContactShadows blur={ 1.5 } far={ 0.8 } opacity={ 0.25 } position={ [0, -0.8, 0] } scale={ 10 } />
				</Canvas>
			</CanvasWrapper>
		</a.main>
	);
};
export default Home;

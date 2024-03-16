'use client';

import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';

import Sphere from 'src/feature/sphere/sphere';
import { Wrapper } from './page.styled';

const Home: FC = () => {
	const [{ background }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, []);
	return (
		<Wrapper>
			<a.main style={ { background } }>
				<Canvas dpr={ [1, 2] }>
					<Sphere setBg={ set } />
					<OrbitControls
						enablePan={ false }
						enableZoom={ false }
						maxPolarAngle={ Math.PI / 2 }
						minPolarAngle={ Math.PI / 2 }
					/>
				</Canvas>
			</a.main>
		</Wrapper>
	);
};
export default Home;

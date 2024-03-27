'use client';

import { Suspense, useState, useRef, FC } from 'react';
import { MathUtils, PointLight } from 'three';
import { useFrame } from '@react-three/fiber';
import {
	PerspectiveCamera,
	MeshDistortMaterial,
	Environment,
	ContactShadows,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

import { useThemeStore } from '@app/model';
import { COLORS } from '@shared/constants';
import type { SphereMesh } from './types';

const AnimatedMaterial = a(MeshDistortMaterial);

const { orange, black, white } = COLORS;

export const Sphere: FC = () => {
	const sphere = useRef<SphereMesh>(null);
	const light = useRef<PointLight>(null);
	const [down, setDown] = useState<boolean>(false);
	const [hovered, setHovered] = useState<boolean>(false);
	const { setTheme, themeType } = useThemeStore();

	const isDarkTheme = themeType === 'dark';

	const onSpherePointerHandler = (type: 'down' | 'out' | 'over' | 'up') => {
		const conditionalCb: { [key in typeof type]: () => void } = {
			down: () => setDown(true),
			out: () => setHovered(false),
			over: () => setHovered(true),
			up: () => {
				setDown(false);
				setTheme();
			},
		};
		return conditionalCb[type];
	};

	useFrame(({ pointer, clock }) => {
		const lightPosition = (light.current as PointLight).position;
		const spherePosition = (sphere.current as SphereMesh)?.position;

		lightPosition.x = pointer.x * 30;
		lightPosition.y = pointer.y * 30;

		if (spherePosition) {
			spherePosition.x = MathUtils.lerp(spherePosition.x, hovered ? pointer.x / 2 : 0, 0.2);
			spherePosition.y = MathUtils.lerp(
				spherePosition.y,
				Math.sin(clock.elapsedTime / 1.5) / 6 + (hovered ? pointer.y / 2 : 0),
				0.2,
			);
		}
	});

	const [{ wobble, coat, color, ambient, env }] = useSpring(
		{
			wobble: down ? 1.2 : hovered ? 1.05 : 1,
			coat: isDarkTheme ? 0.04 : 0.4,
			ambient: isDarkTheme ? 1.5 : 0.5,
			env: isDarkTheme ? 0.4 : 2,
			color: hovered ? orange : isDarkTheme ? black : white,
			config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
		} as object,
		[hovered, down],
	);

	return (
		<>
			<PerspectiveCamera fov={ 75 } position={ [0, 0, 4] } makeDefault>
				<a.ambientLight intensity={ ambient } />
				<a.pointLight ref={ light } color={ orange } intensity={ env } />
			</PerspectiveCamera>
			<Suspense fallback={ null }>
				<a.mesh
					ref={ sphere }
					scale={ wobble }
					onPointerDown={ onSpherePointerHandler('down') }
					onPointerOut={ onSpherePointerHandler('out') }
					onPointerOver={ onSpherePointerHandler('over') }
					onPointerUp={ onSpherePointerHandler('up') }
				>
					<sphereGeometry args={ [1, 64, 64] } />
					<AnimatedMaterial
						clearcoat={ coat }
						clearcoatRoughness={ 0 }
						color={ color }
						envMapIntensity={ env }
						speed={ 5 }
					/>
				</a.mesh>
				<Environment preset='warehouse' />
				<ContactShadows
					blur={ 2.5 }
					far={ 1.6 }
					opacity={ isDarkTheme ? 0.6 : 0.4 }
					position={ [0, -1.6, 0] }
				/>
			</Suspense>
		</>
	);
};

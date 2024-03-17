/* eslint-disable */
'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import { MathUtils, PointLight } from 'three';
import { useFrame } from '@react-three/fiber';
import {
	PerspectiveCamera,
	Environment,
	MeshDistortMaterial,
	ContactShadows,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

import type { SphereMesh } from './types';

const AnimatedMaterial = a(MeshDistortMaterial);

const Sphere = ({ setBg }) => {
	const sphere = useRef<SphereMesh>(null);
	const light = useRef<PointLight>(null);
	const [mode, setMode] = useState<boolean>(false);
	const [down, setDown] = useState<boolean>(false);
	const [hovered, setHovered] = useState<boolean>(false);

	// Change cursor on hovered state
	useEffect(() => {
		document.body.style.cursor = hovered
			? 'none'
			: `url('data:image/svg+xml;base64,${btoa(
					'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>',
				)}'), auto`;
	}, [hovered]);

	// Make the bubble float and follow the mouse
	// This is frame-based animation, useFrame subscribes the component to the render-loop
	useFrame((state) => {
		(light.current as PointLight).position.x = state.pointer.x * 20;
		(light.current as PointLight).position.y = state.pointer.y * 20;
		if (sphere.current) {
			(sphere.current as SphereMesh).position.x = MathUtils.lerp(
				(sphere.current as SphereMesh).position.x,
				hovered ? state.pointer.x / 2 : 0,
				0.2,
			);
			(sphere.current as SphereMesh).position.y = MathUtils.lerp(
				(sphere.current as SphereMesh).position.y,
				Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.pointer.y / 2 : 0),
				0.2,
			);
		}
	});

	// Springs for color and overall looks, this is state-driven animation
	// React-spring is physics based and turns static props into animated values
	const [{ wobble, coat, color, ambient, env }] = useSpring(
		{
			wobble: down ? 1.2 : hovered ? 1.05 : 1,
			coat: mode && !hovered ? 0.04 : 1,
			ambient: mode && !hovered ? 1.5 : 0.5,
			env: mode && !hovered ? 0.4 : 1,
			color: hovered ? '#E8B059' : mode ? '#202020' : 'white',
			config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
		} as any,
		[mode, hovered, down],
	);

	return (
		<>
			<PerspectiveCamera fov={75} position={[0, 0, 4]} makeDefault>
				<a.ambientLight intensity={ambient} />
				<a.pointLight ref={light} color='#F8C069' intensity={env} position-z={-15} />
			</PerspectiveCamera>
			<Suspense fallback={null}>
				<a.mesh
					ref={sphere}
					scale={wobble}
					onPointerDown={() => setDown(true)}
					onPointerOut={() => setHovered(false)}
					onPointerOver={() => setHovered(true)}
					onPointerUp={() => {
						setDown(false);
						setMode(!mode);
						setBg({
							background: !mode ? '#202020' : '#f0f0f0',
							fill: !mode ? '#f0f0f0' : '#202020',
						});
					}}
				>
					<sphereGeometry args={[1, 64, 64]} />
					<AnimatedMaterial
						clearcoat={coat}
						clearcoatRoughness={0}
						color={color}
						envMapIntensity={env}
						metalness={0.1}
					/>
				</a.mesh>
				<Environment preset='warehouse' />
				<ContactShadows
					blur={2.5}
					far={1.6}
					height={15}
					opacity={mode ? 0.8 : 0.4}
					position={[0, -1.6, 0]}
					rotation={[Math.PI / 2, 0, 0]}
					width={15}
				/>
			</Suspense>
		</>
	);
};
export default Sphere;

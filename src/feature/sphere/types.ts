import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three';

export type SphereMesh = Mesh<
	BufferGeometry<NormalBufferAttributes>,
	Material | Material[],
	Object3DEventMap
>;

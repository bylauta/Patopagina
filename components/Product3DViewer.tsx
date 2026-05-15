'use client';

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/lib/theme';
import { translations } from '@/lib/translations';

interface Product3DViewerProps {
    color?: string;
    autoRotate?: boolean;
}

function RotatingModel({ color = '#D4C4A8' }: { color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating animation
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

            // Subtle rotation when not being controlled
            if (!hovered) {
                meshRef.current.rotation.y += 0.003;
            }
        }
    });

    return (
        <RoundedBox
            ref={meshRef}
            args={[2, 1.8, 2]}
            radius={0.15}
            smoothness={4}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <meshStandardMaterial
                color={color}
                roughness={0.3}
                metalness={0.1}
                envMapIntensity={0.5}
            />
        </RoundedBox>
    );
}

function Loader() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-cream-100">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-warmGray-200 border-t-warmGray-600 rounded-full animate-spin mx-auto mb-3" />
                <p className="text-sm text-warmGray-600">Cargando modelo 3D...</p>
            </div>
        </div>
    );
}

export default function Product3DViewer({ color = '#D4C4A8', autoRotate = true }: Product3DViewerProps) {
    const { language } = useTheme();
    const t = translations[language];

    return (
        <div className="relative w-full h-full min-h-[300px] bg-cream-100 rounded-2xl overflow-hidden">
            <Suspense fallback={<Loader />}>
                <Canvas
                    camera={{ position: [4, 2, 4], fov: 50 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]}
                >
                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
                    <directionalLight position={[-5, 3, -5]} intensity={0.3} />
                    <pointLight position={[0, 5, 0]} intensity={0.4} />

                    {/* Environment for reflections */}
                    <Environment preset="apartment" />

                    {/* 3D Model */}
                    <RotatingModel color={color} />

                    {/* Controls */}
                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        minDistance={3}
                        maxDistance={8}
                        autoRotate={autoRotate}
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 4}
                    />
                </Canvas>
            </Suspense>

            {/* Interaction Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-warmGray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] md:text-xs text-warmGray-600 dark:text-warmGray-400 pointer-events-none transition-colors">
                <span className="hidden sm:inline">{t.dragToRotate} • {t.scrollToZoom}</span>
                <span className="sm:hidden">{t.swipeToRotate}</span>
            </div>
        </div>
    );
}

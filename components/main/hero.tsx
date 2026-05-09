'use client';

import React, { useRef, useEffect, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface HeroProps {
    color?: string;
    style?: CSSProperties;
    className?: string;
}

export function Hero({
    className
}: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        camera: THREE.Camera;
        scene: THREE.Scene;
        renderer: THREE.WebGLRenderer;
        uniforms: any;
        animationId: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Vertex shader
        const vertexShader = `
          void main() {
            gl_Position = vec4( position, 1.0 );
          }
        `;

        // Fragment shader
        const fragmentShader = `
          #define TWO_PI 6.2831853072
          #define PI 3.14159265359

          precision highp float;
          uniform vec2 resolution;
          uniform float time;

          void main(void) {
            vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
            float t = time*0.08;
            float lineWidth = 0.002;

            vec3 color = vec3(0.0);
            for(int j = 0; j < 3; j++){
              for(int i=0; i < 5; i++){
                color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
              }
            }
            
            gl_FragColor = vec4(color[0],color[1],color[2],1.0);
          }
        `;

        // Initialize Three.js scene
        const camera = new THREE.Camera();
        camera.position.z = 1;

        const scene = new THREE.Scene();
        const geometry = new THREE.PlaneGeometry(2, 2);

        const uniforms = {
            time: { value: 1.0 },
            resolution: { value: new THREE.Vector2() },
        };

        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);

        container.appendChild(renderer.domElement);

        // Handle window resize
        const onWindowResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            uniforms.resolution.value.x = renderer.domElement.width;
            uniforms.resolution.value.y = renderer.domElement.height;
        };

        // Initial resize
        onWindowResize();
        window.addEventListener("resize", onWindowResize, false);

        // Animation loop
        const animate = () => {
            const animationId = requestAnimationFrame(animate);
            uniforms.time.value += 0.05;
            renderer.render(scene, camera);

            if (sceneRef.current) {
                sceneRef.current.animationId = animationId;
            }
        };

        // Store scene references for cleanup
        sceneRef.current = {
            camera,
            scene,
            renderer,
            uniforms,
            animationId: 0,
        };

        // Start animation
        animate();

        // Cleanup function
        return () => {
            window.removeEventListener("resize", onWindowResize);

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);

                if (container && sceneRef.current.renderer.domElement) {
                    container.removeChild(sceneRef.current.renderer.domElement);
                }

                sceneRef.current.renderer.dispose();
                geometry.dispose();
                material.dispose();
            }
        };
    }, []);

    return (
        <div className={`relative w-full h-screen overflow-hidden bg-black ${className || ''}`}>
            {/* Shader Background Container */}
            <div
                ref={containerRef}
                className="absolute inset-0 z-0"
            />

            {/* Gradient Overlay for Smooth Transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Content Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full max-w-[1000px] px-6 flex flex-col items-center gap-8 pointer-events-none">
                <div className="flex flex-col gap-2">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[0.875rem] font-semibold tracking-[0.2em] uppercase text-white/50 font-pretendard"
                    >
                        Premium Web Development
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.2] font-suit"
                    >
                        고객이 이해하고,<br />
                        신뢰하며, 문의하는<br className="md:hidden" /> 웹사이트
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-base md:text-lg text-white/70 max-w-3xl font-medium leading-[1.6] tracking-[-0.02em] font-pretendard break-keep"
                >
                    서비스 소개부터 문의 흐름까지, 고객이 망설이는 지점을 먼저 정리합니다.<br className="hidden md:block" />
                    기획·카피·디자인·개발을 하나의 흐름으로 설계해 사업을 설득하는 웹사이트를 만듭니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pointer-events-auto"
                >
                    <button className="px-10 py-[18px] rounded-full bg-white text-black text-[1.125rem] font-bold flex items-center gap-3 cursor-pointer border-none shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:bg-[#f0f0f0] font-pretendard">
                        프로젝트 문의하기
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

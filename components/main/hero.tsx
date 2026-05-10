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

        // Defer Three.js initialization to free up main thread for initial paint
        const initTimeout = setTimeout(() => {
            const container = containerRef.current;
            if (!container) return;

            // Vertex shader
            const vertexShader = `
              void main() {
                gl_Position = vec4( position, 1.0 );
              }
            `;

            // Fragment shader (Optimized: reduced loops)
            const fragmentShader = `
              #define TWO_PI 6.2831853072
              #define PI 3.14159265359

              precision highp float;
              uniform vec2 resolution;
              uniform float time;

              void main(void) {
                vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
                float t = time*0.06;
                float lineWidth = 0.002;

                vec3 color = vec3(0.0);
                for(int j = 0; j < 3; j++){
                  for(int i=0; i < 3; i++){ // Reduced from 5 to 3 for performance
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

            const renderer = new THREE.WebGLRenderer({ 
                antialias: false, // Turned off for performance
                powerPreference: "high-performance"
            });
            
            // Limit pixel ratio to max 2 for performance on high-dpi screens
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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
                uniforms.time.value += 0.04;
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
        }, 100); // 100ms delay to allow browser to render text first

        // Cleanup function
        return () => {
            clearTimeout(initTimeout);
            window.removeEventListener("resize", () => {});

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);

                const container = containerRef.current;
                if (container && sceneRef.current.renderer.domElement) {
                    container.removeChild(sceneRef.current.renderer.domElement);
                }

                sceneRef.current.renderer.dispose();
                // geometry.dispose() and material.dispose() are safe here
            }
        };
    }, []);

    return (
        <section id="hero" className={`relative w-full h-screen overflow-hidden bg-black ${className || ''}`}>
            {/* Shader Background Container */}
            <div
                ref={containerRef}
                className="absolute inset-0 z-0"
            />

            {/* Gradient Overlay for Smooth Transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Center Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)] z-10" />

            {/* Content Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full max-w-[1400px] px-6 flex flex-col items-center gap-12 pointer-events-none">
                <div className="flex flex-col items-center gap-4">
                    {/* Urgency Badge (Dark Pattern) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <div className="relative flex h-2 w-2 mr-1">
                            <motion.span
                                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inline-flex h-full w-full rounded-full bg-purple-400"
                            />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </div>
                        <span className="text-[0.75rem] md:text-[0.8125rem] font-semibold text-white/90 tracking-wider font-pretendard">
                            [Early Bird] 선착순 10팀 한정 런칭가 혜택
                        </span>
                    </motion.div>

                    <div className="flex flex-col gap-2">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="text-4xl md:text-7xl lg:text-[88px] font-bold text-white tracking-tight leading-[1.1] font-suit"
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
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pointer-events-auto"
                >
                    <motion.button
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        variants={{
                            initial: { scale: 1, backgroundColor: "#ffffff" },
                            hover: { backgroundColor: "#f0f0f0" },
                            tap: { scale: 0.95 }
                        }}
                        className="px-10 py-[18px] rounded-full text-black text-[1.125rem] font-bold flex items-center gap-3 cursor-pointer border-none shadow-[0_10px_30px_rgba(255,255,255,0.1)] font-pretendard"
                    >
                        프로젝트 문의하기
                        <motion.div
                            variants={{
                                initial: { x: 0 },
                                hover: {
                                    x: [0, 8, 0],
                                    transition: {
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

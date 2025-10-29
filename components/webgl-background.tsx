"use client"

import { useEffect, useRef } from "react"

interface WebGLBackgroundProps {
  mousePos?: { x: number; y: number }
  scrollY?: number
}

export default function WebGLBackground({ mousePos = { x: 0, y: 0 }, scrollY = 0 }: WebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2")
    if (!gl) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Vertex shader
    const vertexShader = `#version 300 es
      precision highp float;
      
      in vec2 position;
      
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    const fragmentShader = `#version 300 es
      precision highp float;
      
      uniform float time;
      uniform vec2 resolution;
      uniform vec2 mouse;
      uniform float scroll;
      
      // Simplex noise function
      vec3 permute(vec3 x) {
        return mod(((x*34.0)+1.0)*x, 289.0);
      }
      
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m * m;
        m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec2 mouseUv = mouse / resolution.xy;
        
        // Distance from mouse
        float distToMouse = distance(uv, mouseUv);
        float mouseInfluence = exp(-distToMouse * 3.0) * 0.5;
        
        // Multi-layer noise
        float noise = snoise(uv * 3.0 + time * 0.1 + mouseInfluence * 0.5);
        noise += snoise(uv * 6.0 + time * 0.15 + scroll * 0.01) * 0.5;
        noise += snoise(uv * 12.0 + time * 0.2) * 0.25;
        
        // Scroll-responsive pattern
        float pattern = sin(uv.x * 10.0 + time * 0.05 + scroll * 0.005) * 0.5 + 0.5;
        pattern *= cos(uv.y * 10.0 + time * 0.05 + scroll * 0.003) * 0.5 + 0.5;
        
        // Mouse-reactive waves
        float waves = sin(distToMouse * 20.0 - time * 2.0) * 0.5 + 0.5;
        waves *= mouseInfluence;
        
        // Color composition
        vec3 color = vec3(0.0);
        color += vec3(0.0, 0.3, 0.8) * (noise * 0.3 + 0.1);
        color += vec3(0.0, 0.15, 0.4) * pattern * 0.2;
        color += vec3(0.0, 0.4, 1.0) * waves * 0.3;
        
        // Enhance near mouse
        color += vec3(0.0, 0.5, 1.0) * mouseInfluence * 0.4;
        
        gl_FragColor = vec4(color, 0.12);
      }
    `

    // Compile shader
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const vShader = compileShader(vertexShader, gl.VERTEX_SHADER)
    const fShader = compileShader(fragmentShader, gl.FRAGMENT_SHADER)

    if (!vShader || !fShader) return

    // Create program
    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vShader)
    gl.attachShader(program, fShader)
    gl.linkProgram(program)

    // Create buffer
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, "time")
    const resolutionLocation = gl.getUniformLocation(program, "resolution")
    const mouseLocation = gl.getUniformLocation(program, "mouse")
    const scrollLocation = gl.getUniformLocation(program, "scroll")

    // Animation loop with performance optimization
    const startTime = Date.now()
    let animationFrameId: number | null = null
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      gl.uniform1f(timeLocation, elapsed)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform2f(mouseLocation, mousePos.x, canvas.height - mousePos.y)
      gl.uniform1f(scrollLocation, scrollY)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [mousePos, scrollY])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
  )
}

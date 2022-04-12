import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './logo.scss';
import LogoA from '../../../assets/images/logo-a.png';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoA} alt='A' />
            <svg
        width="428.000000pt"
        height="626.000000pt"
        version="1.0"
        viewBox="0 0 428.000000 626.000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
<path
ref={outlineLogoRef}

d="M2428 6173 c23 -2 61 -2 85 0 23 2 4 4 -43 4 -47 0 -66 -2 -42 -4z"/>
<path
ref={outlineLogoRef} d="M2348 6163 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
<path
ref={outlineLogoRef} d="M2590 6160 c34 -11 60 -11 35 0 -11 5 -29 8 -40 8 -16 0 -15 -2 5 -8z"/>
<path
ref={outlineLogoRef} d="M2245 6130 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
<path
ref={outlineLogoRef} d="M2700 6126 c0 -3 9 -10 20 -16 11 -6 20 -8 20 -6 0 3 -9 10 -20 16
-11 6 -20 8 -20 6z"/>
<path
ref={outlineLogoRef} d="M2204 6104 c-18 -14 -18 -15 4 -4 12 6 22 13 22 15 0 8 -5 6 -26 -11z"/>
<path
ref={outlineLogoRef} d="M2780 6065 c19 -19 36 -35 39 -35 3 0 -10 16 -29 35 -19 19 -36 35
-39 35 -3 0 10 -16 29 -35z"/>
<path
ref={outlineLogoRef} d="M2156 6074 c-6 -6 -17 -9 -26 -7 -8 2 -26 -1 -40 -6 -21 -9 -18 -10
15 -4 38 6 39 5 25 -13 -11 -14 -8 -13 10 3 22 19 39 23 115 25 l90 3 -89 5
c-59 3 -94 1 -100 -6z"/>
<path
ref={outlineLogoRef} d="M2368 6063 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path
ref={outlineLogoRef} d="M2431 6046 c10 -9 69 -36 69 -32 0 6 -55 36 -66 36 -4 0 -5 -2 -3 -4z"/>
<path
ref={outlineLogoRef} d="M2015 6030 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
<path
ref={outlineLogoRef} d="M1939 5978 c-25 -24 -34 -34 -20 -22 14 11 39 30 55 42 16 12 25 22
20 22 -5 0 -30 -19 -55 -42z"/>
<path
ref={outlineLogoRef} d="M2845 6000 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23
20 -3 0 3 -9 13 -20z"/>
<path
ref={outlineLogoRef} d="M2074 5988 c-30 -34 -47 -58 -42 -58 3 0 19 18 37 40 34 43 38 55 5
18z"/>
<path
ref={outlineLogoRef} d="M2515 6003 c6 -5 37 -34 70 -63 51 -46 54 -48 20 -11 -22 23 -53 52
-70 63 -16 12 -25 17 -20 11z"/>
<path
ref={outlineLogoRef} d="M1849 5893 l-24 -28 28 24 c25 23 32 31 24 31 -2 0 -14 -12 -28 -27z"/>
<path
ref={outlineLogoRef} d="M2930 5870 c11 -22 23 -40 25 -40 3 0 -4 18 -15 40 -11 22 -23 40
-25 40 -3 0 4 -18 15 -40z"/>
<path
ref={outlineLogoRef} d="M1969 5829 c-16 -34 -29 -63 -27 -65 2 -2 18 26 36 61 17 36 30 65
27 65 -3 0 -19 -27 -36 -61z"/>
<path
ref={outlineLogoRef} d="M1813 5848 c-15 -20 -25 -38 -20 -38 3 0 12 11 21 25 17 26 16 35 -1
13z"/>
<path
ref={outlineLogoRef} d="M2960 5815 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
-5 8 -10 11 -10 5z"/>
<path
ref={outlineLogoRef} d="M1755 5754 c-15 -25 -25 -47 -23 -49 2 -2 16 18 31 46 35 62 28 65
-8 3z"/>
<path
ref={outlineLogoRef} d="M2700 5781 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z"/>
<path
ref={outlineLogoRef} d="M2720 5745 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
-5 8 -10 11 -10 5z"/>
<path
ref={outlineLogoRef} d="M1916 5715 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
<path
ref={outlineLogoRef} d="M3016 5670 c3 -14 11 -32 16 -40 6 -10 7 -7 2 10 -3 14 -11 32 -16
40 -6 10 -7 7 -2 -10z"/>
<path
ref={outlineLogoRef} d="M1891 5649 c-6 -18 -9 -34 -7 -36 2 -2 9 10 15 28 6 18 9 34 7 36 -2
2 -9 -10 -15 -28z"/>
<path
ref={outlineLogoRef} d="M2750 5675 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
-5 8 -10 11 -10 5z"/>
<path
ref={outlineLogoRef} d="M1706 5655 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
<path
ref={outlineLogoRef} d="M3041 5600 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1676 5585 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
<path
ref={outlineLogoRef} d="M2791 5570 c0 -8 4 -22 9 -30 12 -18 12 -2 0 25 -6 13 -9 15 -9 5z"/>
<path
ref={outlineLogoRef} d="M3061 5524 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1631 5459 c-12 -35 -21 -68 -20 -73 0 -6 11 20 25 58 13 38 22 71
20 73 -2 2 -13 -24 -25 -58z"/>
<path
ref={outlineLogoRef} d="M2811 5510 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3071 5484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3081 5444 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2831 5434 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2841 5400 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3102 5375 c0 -11 3 -29 8 -40 11 -25 11 1 0 35 -6 20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M1576 5284 c-10 -31 -16 -58 -14 -60 3 -2 12 21 22 52 10 31 16 58
14 60 -3 2 -12 -21 -22 -52z"/>
<path
ref={outlineLogoRef} d="M2861 5324 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3121 5294 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2871 5284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1766 5264 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3131 5254 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2881 5244 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3141 5214 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2892 5210 c0 -8 4 -26 8 -40 6 -20 8 -21 8 -5 0 11 -3 29 -8 40 -5
12 -8 14 -8 5z"/>
<path
ref={outlineLogoRef} d="M3151 5174 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1541 5173 c-1 -6 -4 -20 -7 -30 -5 -17 -5 -17 6 0 6 10 9 23 6 30
-3 9 -5 9 -5 0z"/>
<path
ref={outlineLogoRef} d="M3161 5134 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2911 5135 c0 -5 6 -32 13 -60 8 -27 14 -41 14 -30 0 21 -25 107 -27
90z"/>
<path
ref={outlineLogoRef} d="M1711 5089 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1516 5094 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3171 5094 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3181 5060 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2941 5010 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3201 4984 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1461 4919 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M2421 4927 c-7 -21 -11 -40 -8 -43 2 -3 8 8 12 23 8 27 8 27 20 -17
7 -25 13 -36 13 -25 0 11 -5 38 -12 60 l-12 40 -13 -38z"/>
<path
ref={outlineLogoRef} d="M3211 4944 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2961 4934 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1651 4899 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3221 4910 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2971 4894 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2201 4860 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2396 4844 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3241 4834 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2461 4824 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2991 4824 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3251 4794 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1411 4759 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M2181 4784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2221 4784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2471 4784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3001 4784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2371 4754 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3261 4760 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2231 4744 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2481 4744 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3011 4744 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1596 4724 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2161 4714 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2242 4705 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M2491 4704 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2351 4684 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3281 4684 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3031 4674 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2502 4660 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2136 4634 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3291 4644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3041 4634 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2261 4614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2326 4604 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2511 4614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3301 4610 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1351 4569 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3051 4600 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1541 4549 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M2116 4564 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2271 4574 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2521 4574 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2303 4527 c-15 -42 -26 -110 -14 -82 7 16 9 17 13 5 3 -8 4 -3 2 12
-2 15 2 41 8 58 5 17 8 33 6 35 -2 3 -9 -10 -15 -28z"/>
<path
ref={outlineLogoRef} d="M2281 4534 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2531 4534 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3321 4534 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3071 4524 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2096 4494 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2541 4494 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3331 4494 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3081 4484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2552 4450 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3341 4460 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3091 4450 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1296 4394 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2071 4404 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2311 4404 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2561 4404 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1481 4359 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3361 4384 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2261 4374 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3111 4374 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2321 4364 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2571 4364 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3371 4344 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2051 4334 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3121 4334 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2331 4324 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2581 4324 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2241 4304 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3381 4310 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3131 4300 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2341 4284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2591 4284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2026 4254 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M1241 4219 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M2352 4240 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2602 4240 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2216 4224 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3401 4234 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1431 4199 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3151 4224 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2006 4184 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2361 4194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2611 4194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3411 4194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3161 4184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2196 4154 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2371 4154 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2621 4154 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3171 4150 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1986 4114 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3431 4124 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2381 4114 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2631 4114 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2176 4084 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3441 4084 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2391 4074 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2641 4074 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3191 4074 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1181 4029 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3451 4044 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1371 4009 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M2402 4035 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M2652 4035 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M3201 4034 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1961 4024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2151 3994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3211 4000 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3471 3974 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1941 3954 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2421 3944 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2671 3944 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3481 3934 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2131 3924 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3231 3924 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2431 3904 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2681 3904 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1131 3869 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3491 3900 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1916 3874 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3241 3884 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2441 3864 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2691 3864 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2106 3844 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M1316 3834 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3251 3850 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2452 3825 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M2702 3825 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M3511 3824 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1896 3804 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2086 3774 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3521 3784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3271 3774 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1876 3734 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3531 3750 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2471 3734 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2721 3734 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3281 3734 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2066 3704 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M1071 3679 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M2481 3694 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2731 3694 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1261 3659 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3551 3674 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3301 3664 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2491 3654 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2741 3654 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1851 3644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3561 3634 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3311 3624 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2041 3614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2502 3615 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M2751 3614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3571 3600 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3321 3590 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1831 3574 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2762 3570 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2021 3544 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2521 3524 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2771 3524 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3591 3524 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1016 3504 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3341 3514 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1806 3494 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M1201 3469 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M2531 3484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2781 3484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3601 3484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1996 3464 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3351 3474 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2541 3444 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2791 3444 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3611 3450 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1786 3424 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3361 3440 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1976 3394 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2551 3404 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2801 3404 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3631 3374 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1766 3354 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2562 3360 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2812 3360 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3381 3364 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M961 3329 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1956 3324 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3641 3334 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3391 3324 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2571 3314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2821 3314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1146 3294 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3651 3300 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3401 3290 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2581 3274 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2831 3274 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1741 3264 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1931 3234 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2591 3234 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2841 3234 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3671 3224 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3421 3214 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1721 3194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2601 3194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2851 3194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3681 3184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3431 3174 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M901 3139 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1911 3164 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2612 3150 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2862 3155 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M1091 3119 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3441 3140 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M1696 3114 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3701 3114 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2621 3104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1886 3084 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3711 3074 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2631 3064 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2881 3064 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3461 3064 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1676 3044 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3721 3034 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1866 3014 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2641 3024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2891 3024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3471 3024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M851 2979 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1656 2974 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2651 2984 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2901 2984 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3481 2990 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3741 2964 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1036 2944 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M1846 2944 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2662 2945 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M2912 2945 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M3751 2924 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3501 2914 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1631 2884 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3761 2890 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3511 2874 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1821 2854 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2681 2854 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2931 2854 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3521 2840 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M791 2789 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1611 2814 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2691 2814 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2941 2814 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3781 2814 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M981 2769 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1801 2784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2701 2774 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2951 2774 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3791 2774 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3541 2764 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1586 2734 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2712 2735 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"/>
<path
ref={outlineLogoRef} d="M2961 2734 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3801 2740 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3551 2724 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1776 2704 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2972 2690 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1566 2664 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3821 2664 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3571 2654 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1756 2634 c-4 -15 -5 -28 -3 -30 2 -2 226 -4 498 -4 748 -1 749 -1
749 8 0 4 -279 6 -620 4 l-620 -2 6 25 c3 14 4 25 1 25 -3 0 -8 -12 -11 -26z"/>
<path
ref={outlineLogoRef} d="M2731 2644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2981 2644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M731 2599 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3831 2624 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3581 2614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M921 2579 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1546 2594 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3841 2590 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3591 2580 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M2751 2564 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2761 2524 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3861 2514 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3611 2504 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3871 2474 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M681 2439 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3621 2464 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3881 2440 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3631 2430 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M866 2404 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3 2
-8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3901 2364 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3651 2354 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3911 2324 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3661 2314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3921 2290 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M621 2249 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3671 2280 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M811 2229 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3941 2214 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3691 2204 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3951 2174 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3701 2164 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3711 2130 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3971 2104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M566 2074 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3 2
-8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M751 2039 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3981 2064 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3731 2054 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3991 2024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3741 2014 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3751 1980 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M4011 1954 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M511 1899 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M4021 1914 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M701 1879 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3771 1904 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4031 1874 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3781 1864 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3791 1830 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M4051 1804 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4061 1764 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3811 1754 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M451 1709 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1500 1729 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"/>
<path
ref={outlineLogoRef} d="M4071 1730 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M641 1689 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M3821 1714 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3201 1704 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1485 1680 l-7 -30 -98 0 c-80 0 -99 -3 -104 -16 -9 -24 -7 -31 5
-11 8 14 25 17 99 17 61 0 90 -4 93 -12 4 -10 6 -10 6 0 1 9 156 12 741 12
693 0 740 -1 750 -17 10 -16 10 -16 8 2 -3 20 -12 20 -746 23 l-744 2 7 30 c4
17 4 30 2 30 -3 0 -8 -13 -12 -30z"/>
<path
ref={outlineLogoRef} d="M3831 1680 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3211 1664 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4091 1654 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3221 1624 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4101 1614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3851 1604 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1456 1584 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M2981 1584 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3231 1584 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M401 1549 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M4111 1580 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3861 1564 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1251 1554 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M2991 1544 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3241 1544 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M586 1514 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3 2
-8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3001 1504 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3251 1504 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4131 1504 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1426 1484 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3881 1494 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1226 1474 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3011 1464 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3261 1464 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4141 1464 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3891 1454 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3021 1424 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3271 1424 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4151 1430 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M3901 1420 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M551 1403 c-1 -6 -4 -20 -7 -30 -5 -17 -5 -17 6 0 6 10 9 23 6 30 -3
9 -5 9 -5 0z"/>
<path
ref={outlineLogoRef} d="M1396 1384 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M341 1359 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1196 1374 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3031 1384 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3281 1384 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4171 1354 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3041 1344 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3291 1344 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3921 1344 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4181 1314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M516 1294 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3 2
-8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3051 1304 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3301 1304 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3931 1304 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1366 1284 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M1166 1274 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M4191 1274 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3061 1264 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3311 1264 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3941 1275 c0 -5 6 -32 13 -60 8 -27 14 -41 14 -30 0 21 -25 107 -27
90z"/>
<path
ref={outlineLogoRef} d="M4201 1234 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3071 1224 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3321 1224 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M281 1169 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1341 1194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4211 1194 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1136 1174 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M3081 1192 c-1 -19 72 -308 75 -297 2 6 -14 78 -35 160 -22 83 -40
144 -40 137z"/>
<path
ref={outlineLogoRef} d="M3331 1184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M481 1174 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4222 1150 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3341 1144 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3972 1150 c0 -8 4 -26 8 -40 6 -20 8 -21 8 -5 0 11 -3 29 -8 40 -5
12 -8 14 -8 5z"/>
<path
ref={outlineLogoRef} d="M461 1104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3351 1104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4232 1100 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1311 1094 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1106 1074 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3
2 -8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M251 1064 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M451 1064 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3361 1064 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3992 1060 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4242 1045 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
<path
ref={outlineLogoRef} d="M441 1024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3371 1030 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M4001 1014 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M231 994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1281 994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4252 980 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"/>
<path
ref={outlineLogoRef} d="M432 980 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1076 974 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3 2
-8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M4012 960 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M221 954 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3391 954 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M422 925 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
<path
ref={outlineLogoRef} d="M211 914 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M3401 914 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4022 905 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
<path
ref={outlineLogoRef} d="M4264 830 c0 -58 1 -81 3 -52 2 28 2 76 0 105 -2 28 -3 5 -3 -53z"/>
<path
ref={outlineLogoRef} d="M1241 869 c-7 -22 -11 -43 -8 -45 2 -2 9 14 16 37 7 22 11 43 8 45
-2 2 -9 -14 -16 -37z"/>
<path
ref={outlineLogoRef} d="M1046 874 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3 2
-8 -8 -11 -23z"/>
<path
ref={outlineLogoRef} d="M202 870 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M413 790 c0 -47 2 -66 4 -42 2 23 2 61 0 85 -2 23 -4 4 -4 -43z"/>
<path
ref={outlineLogoRef} d="M3421 850 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5 13
-9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M4033 820 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z"/>
<path
ref={outlineLogoRef} d="M3171 834 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M192 800 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"/>
<path
ref={outlineLogoRef} d="M1216 795 c-3 -9 -6 -22 -5 -28 0 -7 5 -1 10 12 5 13 8 26 5 28 -2 2
-6 -3 -10 -12z"/>
<path
ref={outlineLogoRef} d="M3181 794 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M987 688 c-14 -45 -25 -84 -23 -86 2 -2 16 33 31 78 15 45 25 83 23
85 -2 3 -16 -32 -31 -77z"/>
<path
ref={outlineLogoRef} d="M3451 744 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M183 690 c0 -30 2 -43 4 -27 2 15 2 39 0 55 -2 15 -4 2 -4 -28z"/>
<path
ref={outlineLogoRef} d="M3201 724 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path
ref={outlineLogoRef} d="M1186 705 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
<path
ref={outlineLogoRef} d="M4252 700 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M422 670 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4032 650 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"/>
<path
ref={outlineLogoRef} d="M4241 663 c-1 -6 -4 -20 -7 -30 -5 -17 -5 -17 6 0 6 10 9 23 6 30 -3
9 -5 9 -5 0z"/>
<path
ref={outlineLogoRef} d="M3481 650 c0 -8 4 -22 9 -30 12 -18 12 -2 0 25 -6 13 -9 15 -9 5z"/>
<path
ref={outlineLogoRef} d="M1147 598 c-9 -23 -15 -43 -13 -45 2 -2 11 15 20 38 9 23 15 43 13
45 -2 2 -11 -15 -20 -38z"/>
<path
ref={outlineLogoRef} d="M3231 630 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5 13
-9 14 -9 5z"/>
<path
ref={outlineLogoRef} d="M192 595 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
<path
ref={outlineLogoRef} d="M4022 590 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path
ref={outlineLogoRef} d="M4210 580 c-7 -17 -28 -56 -46 -88 -19 -31 -25 -46 -13 -32 25 29 82
140 76 146 -2 3 -10 -9 -17 -26z"/>
<path
ref={outlineLogoRef} d="M450 575 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25 -5
8 -10 11 -10 5z"/>
<path
ref={outlineLogoRef} d="M3251 563 c-1 -16 40 -126 44 -121 2 2 -7 33 -20 68 -13 36 -24 60
-24 53z"/>
<path
ref={outlineLogoRef} d="M201 549 c-1 -18 20 -82 25 -77 2 2 -3 24 -11 48 -7 25 -14 38 -14
29z"/>
<path
ref={outlineLogoRef} d="M926 515 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
<path
ref={outlineLogoRef} d="M3996 515 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
<path
ref={outlineLogoRef} d="M1092 475 c-12 -25 -20 -45 -17 -45 7 0 47 81 43 86 -3 2 -14 -17
-26 -41z"/>
<path
ref={outlineLogoRef} d="M3530 515 c0 -18 57 -110 81 -130 l24 -20 -22 25 c-12 14 -36 50 -52
80 -17 30 -31 51 -31 45z"/>
<path
ref={outlineLogoRef} d="M897 445 c-24 -50 -20 -58 4 -12 11 22 19 41 17 43 -3 2 -12 -12 -21
-31z"/>
<path
ref={outlineLogoRef} d="M3300 425 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25 -5
8 -10 11 -10 5z"/>
<path
ref={outlineLogoRef} d="M4085 388 l-40 -43 43 40 c23 21 42 40 42 42 0 8 -9 0 -45 -39z"/>
<path
ref={outlineLogoRef} d="M260 400 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20 -2
0 0 -9 6 -20z"/>
<path
ref={outlineLogoRef} d="M575 380 c21 -22 41 -40 44 -40 3 0 -13 18 -34 40 -21 22 -41 40 -44
40 -3 0 13 -18 34 -40z"/>
<path
ref={outlineLogoRef} d="M1031 377 c-29 -35 -30 -38 -7 -17 24 22 52 60 44 60 -2 0 -18 -19
-37 -43z"/>
<path
ref={outlineLogoRef} d="M3940 400 c-6 -11 -8 -20 -6 -20 3 0 10 9 16 20 6 11 8 20 6 20 -3 0
-10 -9 -16 -20z"/>
<path
ref={outlineLogoRef} d="M839 330 c-20 -36 -27 -40 -63 -42 -38 -1 -39 -1 -8 -5 30 -4 32 -6
20 -21 -11 -15 -10 -15 8 1 11 9 34 18 50 18 23 1 25 3 7 6 -28 5 -28 4 -2 47
12 20 19 36 16 36 -3 0 -16 -18 -28 -40z"/>
<path
ref={outlineLogoRef} d="M3345 336 c10 -14 19 -26 22 -26 7 0 -17 39 -28 46 -6 3 -3 -5 6 -20z"/>
<path
ref={outlineLogoRef} d="M3640 356 c0 -2 14 -14 30 -26 17 -12 30 -19 30 -16 0 2 -13 14 -30
26 -16 12 -30 19 -30 16z"/>
<path
ref={outlineLogoRef} d="M3990 325 c-25 -13 -41 -24 -37 -25 11 0 87 39 87 45 0 7 0 7 -50
-20z"/>
<path
ref={outlineLogoRef} d="M300 336 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z"/>
<path
ref={outlineLogoRef} d="M3875 310 c-13 -14 -32 -20 -64 -21 l-46 -2 40 -6 c22 -3 56 -4 75
-1 27 3 30 5 12 8 -23 3 -23 4 -6 23 9 10 15 19 12 19 -3 0 -13 -9 -23 -20z"/>
<path
ref={outlineLogoRef} d="M915 305 c-16 -8 -23 -14 -15 -14 8 0 26 6 40 14 32 18 15 18 -25 0z"/>
<path
ref={outlineLogoRef} d="M690 300 c8 -5 22 -9 30 -9 10 0 8 3 -5 9 -27 12 -43 12 -25 0z"/>
<path
ref={outlineLogoRef} d="M3809 253 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17
-17z"/>
<path
ref={outlineLogoRef} d="M384 251 c7 -11 46 -35 46 -28 0 3 -12 12 -26 22 -15 9 -23 12 -20 6z"/>
<path
ref={outlineLogoRef} d="M754 240 c-6 -6 -33 -19 -60 -30 -27 -10 -42 -19 -34 -19 20 -1 96
34 104 48 9 14 3 14 -10 1z"/>
<path
ref={outlineLogoRef} d="M3430 240 c35 -24 54 -31 30 -11 -14 11 -29 21 -35 21 -5 0 -3 -5 5
-10z"/>
<path
ref={outlineLogoRef} d="M3750 220 c-19 -11 -31 -19 -27 -20 11 0 67 29 67 35 0 7 -1 7 -40
-15z"/>
<path
ref={outlineLogoRef} d="M470 200 c8 -5 22 -9 30 -9 10 0 8 3 -5 9 -27 12 -43 12 -25 0z"/>
<path
ref={outlineLogoRef} d="M3528 193 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path
ref={outlineLogoRef} d="M3688 193 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path
ref={outlineLogoRef} d="M548 183 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z"/>
<path
ref={outlineLogoRef} d="M3588 183 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z"/>
        </g>
      </svg>
        </div>
    )
}

export default Logo 
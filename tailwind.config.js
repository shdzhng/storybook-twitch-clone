const purgeEnabled = process.env.NODE_ENV === 'production';

console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx',
    './public/**/*.html',
  ],
  purge: {
    enabled: purgeEnabled,
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lp: '#9146FF',
        dp: '#772CE8',
        g0: '#E5E5E5',
        g1: '#ACACB8',
        g2: '#F7F7F8',
        g3: '#53535f',
        w: '#FFFFFF',
        g: '#1F1F24',
        ghover: '#161619',
        b: '#000000',
        r: '#eb0400',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        strech: {
          '0%, 100%': { width: ['w-60'] },
          '50%': { width: ['w-80'] },
        },
        heartBeat: {
          '0%': { transform: 'scale(1);' },
          '14%': { transform: 'scale(1.3);' },
          '28%': { transform: 'scale(1);' },
          '42%': { transform: 'scale(1.3);' },
          '70%': { transform: 'scale(1);' },
        },
        flipHorizontal: {
          '50%': { transform: 'rotateY(180deg)' },
        },
        flipVertical: {
          '50%': { transform: 'rotateX(180deg)' },
        },
        swing: {
          '20%': {
            transform: 'rotate3d(0, 0, 1, 15deg)',
          },

          '40%': {
            transform: 'rotate3d(0, 0, 1, -10deg)',
          },

          '60%': {
            transform: 'rotate3d(0, 0, 1, 5deg)',
          },

          '80%': {
            transform: 'rotate3d(0, 0, 1, -5deg)',
          },
          to: {
            transform: 'rotate3d(0, 0, 1, 0deg)',
          },
        },
        rubberBand: {
          from: {
            transform: 'scale3d(1, 1, 1)',
          },

          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },

          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },

          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },

          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },

          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          to: {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        flash: {
          '25%, 40%': { opacity: '0' },
          '50%': { opacity: '1' },
          '75%': { opacity: '0' },
        },
        headShake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },

          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },

          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },

          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
        wobble: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },

          '15%': {
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
          },

          '30%': {
            transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
          },

          '45%': {
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
          },

          '60%': {
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
          },

          '75%': {
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
          },

          to: {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        jello: {
          'from, 11.1%,to': {
            transform: 'translate3d(0, 0, 0)',
          },

          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
          },

          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)',
          },

          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
          },

          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)',
          },

          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
          },

          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(0.390625deg)',
          },

          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
          },
        },
      },
      animation: {
        strech: 'strech 1s ease-in-out forwards',
        wiggle: 'wiggle 1s ease-in-out forwards',
        heartBeat: 'heartBeat 1s forwards',
        hflip: 'flipHorizontal 2s forwards',
        vflip: 'flipVertical 2s forwards',
        swing: 'swing 2s ease-out forwards',
        rubberBand: 'rubberBand 1s forwards',
        flash: 'flash 2s forwards',
        headShake: 'headShake 1s forwards',
        wobble: 'wobble 1s forwards',
        jello: 'jello 2s forwards',
      },
      fontSize: {
        xxs: '0.7rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'group-focus'],
    },
  },
  plugins: [],
};

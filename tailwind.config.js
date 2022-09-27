const purgeEnabled = process.env.NODE_ENV === 'production';

console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  mode: 'jit',
  purge: {
    enabled: purgeEnabled,
    content: [
      './src/**/*.html',
      './src/**/*.tsx',
      './src/**/*.jsx',
      './public/**/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      lp: '#9146FF',
      dp: '#772CE8',
      g0: '#E5E5E5',
      g1: '#EFEFF1',
      g2: '#F7F7F8',
      g3: '#53535f',
      w: '#FFFFFF',
      b: '#000000',
      r: '#eb0400',
    },
    extend: {
      fontSize: {
        xxs: '0.7rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};

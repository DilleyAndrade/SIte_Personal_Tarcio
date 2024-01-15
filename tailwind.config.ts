import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)'],
      bebas: ['var(--font-bebas)'],
    },
    colors: {
      mainColor: '#FFF31B',
      mainColorHover: '#FFF655',
      bgColor: '#000000',
      middleColor: '#424242',
      fontColor: '#ffffff',
    },
  },
  plugins: [],
}
export default config

module.exports = {
  content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
    extend: {
      colors: {
        'theme-light-100': '#F4F7FD',
        'theme-light-200': '#F0F3F9',
        'theme-light-300': '#EAECF3',
        'theme-light-400': '#E0E0ED',
        'theme-light-500': '#D5D8E4',
        'theme-faded-100': '#E1EBFF',
        'theme-faded-200': '#76709F',
        'theme-faded-300': '#5C5589',
        'theme-faded-400': '#3F3A5A',
        'theme-default': '#130B43',
        'theme-active': '#2E57E8',
      },
      boxShadow: {
        'theme-lg': '0px 4px 42px rgba(79, 114, 205, 0.15)',
        'theme-sm': '0px 1px 0px 1px rgba(203, 201, 217, 0.6)',
      }
    },
  },
  plugins: [],
}

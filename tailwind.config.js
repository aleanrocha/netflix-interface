export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-flix': '#000000',
        'black-overlay': 'rgba(0,0,0,0.4)',
        'black-login-flix': 'rgba(0,0,0,0.7)',
        'white-flix': '#ffffff',
        'link-flix': '#0071eb',
        'border-flix': '#b7b7b7',
        'accent-flix': '#e50914',
        'highlight-flix': '#414141'
      },
      fontFamily: {
        'flix-sans': ['Arial', 'Helvetica', 'sans-serif']
      },
      height: {
        'max-90': '90vh'
      },
      backgroundImage: {
        'banner-home-flix': 'url("../src/assets/bg-login-flix.jpg")',
        'banner-mask-flix':
          'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)',
        'box-radial-mobile-flix':
          'radial-gradient( 120.35% 220% at 49.86% -6.29%, #e50914 0%, #0e1b4f 46.15%, #0d1121 100% )',
        'box-radial-desktop-flix':
          'radial-gradient( 51.39% 511.66% at 47.68% -217.91%, #ff9900 0%, #e50914 17.27%, #0e1b4f 79.44%, #000413 100% )'
      }
    }
  },
  plugins: []
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-flix': '#000000',
        'black-overlay': 'rgba(0,0,0,0.4)',
        'white-flix': '#ffffff',
        'link-flix': '#0071eb',
        'border-flix': '#b7b7b7',
        'accent-flix': '#e50914',
        'highlight-flix': '#414141'
      },
      fontFamily: {
        'flix-sans': ['Netflix Sans', 'Arial', 'Helvetica', 'sans-serif']
      },
      height: {
        'max-90': '90vh'
      },
      backgroundImage: {
        'banner-home-flix': 'url("./src/assets/bg-login-flix.jpg")',
        'banner-mask-flix':
          'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)'
      }
    }
  },
  plugins: []
}

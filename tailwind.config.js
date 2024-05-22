export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-flix': '#000000',
        'text-flix': '#000000',
        'link-flix': '#0071eb',
        'accent-flix': '#e50914',
        'highlight-flix': '#414141'
      },
      fontFamily: {
        'flix-sans': ['Netflix Sans', 'Arial', 'Helvetica', 'sans-serif']
      }
    }
  },
  plugins: []
}

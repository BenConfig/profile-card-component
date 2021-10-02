module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        'body': "url('/images/bg-pattern-top.svg'), url('/images/bg-pattern-bottom.svg')",
        'card': "url('/images/bg-pattern-card.svg'), linear-gradient(transparent 76%, hsl(0, 0%, 70%) calc(76% + 1px), transparent 0)",
      },
      backgroundPosition: {
        'position': "bottom 40vh right 50vw, top 40vh left 50vw",
      },
      fontFamily: {
        'sans': ['Kumbh Sans, system-ui'],
      },
      fontSize: {
        xs: ['10px', '15px'],
      },
      maxWidth: {
        'card': '21.875rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

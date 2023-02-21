/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#E74241",
                  
          "secondary": "#F000B8",
                  
          "accent": "#37CDBE",
                  
          "neutral": "#3D4451",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1800px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'lightGreen': '#0FE224',
        'green': '#74D279',
        'Orenge':'#DB0909',
        'darkBlue': '#1E182E',
        'blue': '#0B2779',
        'blueHover': '#133698',
        'graytext': '#555061',
        'Black-100':'#101010',
        'gry':'#000105AD',
        'light-gry':'#00010587',
        'title': '#525355',
        'yellow': '#f0bc5e',
        'redlight': '#e55252',
        'redDark': '#c50807',
        'orangeLight': '#D9BFA7',
        'bgOrangelight': '#FEF7E8',
        'orange': '#FA8B24',
        'orangeHover': '#d27421',
        'subTitle': "#646778",
        'textGray': "#ADA9B5",
        'textDarkGray': "#534E5F",
        'textGrayLight': "#EAE8EF",
        'white': "#FAFAFA",
        'bgWhite': '#F9FAFE', 
        'redred': '#DB0908',
        'superlightred': "#f7cbcb",
      },
      fontFamily: {
        'lato':'Lato',
        'merriweather':'Merriweather',
        'roboto':'Roboto',
      },
      boxShadow: {
        'reddrop': 'rgba(192, 2, 2, 1) 0px 0px 15px;',
        'drop': 'rgba(0, 0, 0, 0.1) 0px 0px 10px;',
        'boxList': 'rgba(30, 24, 46, 0.12) 0px 1px 1px;'
      },
      backgroundImage: {
        'mainPageBanner': "url('../assets/img/main-page-first-view-banner.png')",
        'mainPageFooterBanner': "url('../assets/img/main-page-footer-banner.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  
  
}

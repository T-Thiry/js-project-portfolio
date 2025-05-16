const theme = {
  colors: {
    primary: "#1e1e1e",     // black color
    secondary: "#ffffff",   // white color
    tertiary: "#F5F5F5",    // light gray
    accent: "#CE400C",      // orange
  },

  fontSizes: {
    // Heading sizes by breakpoint
    headingSmall: {
      mobile: "1.125rem",   // 18px
      tablet: "1.25rem",    // 20px
      desktop: "1.5rem",  // 24px
    },
    headingMedium: {
      mobile: "1.5rem",    // 24px
      tablet: "1.75rem",   // 28px
      desktop: "2rem",     // 32px
    },
    headingLarge: {
      mobile: "1.75rem",   // 28px
      tablet: "2rem",      // 32px
      desktop: "2.5rem",   // 40px
    },
    headingXLarge: {
      mobile: "1.75rem",   // 28px
      tablet: "2.5rem",    // 40px
      desktop: "3rem",     // 48px
    },
    
    // Body font sizes
    small: "1rem",         // 16px
    large: "1.125rem",     // 18px
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  
  lineHeights: {
    heading: "1.25",
    body: "1.5",
  },

  borderRadius: "0.5rem",

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export default theme;
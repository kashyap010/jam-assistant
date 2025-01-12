export const theme = {
  sizes: {
    container: 1205,
    readable: 770,
  },
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 4, 6, 8, 16, 32],
  borderWidths: [0, 2],
  fonts: {
    body: 'system-ui, -apple-system, "Public Sans", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  cards: {
    primary: {
      color: "text",
      p: [3, 4],
      borderRadius: "normal",
      overflow: "hidden",
    },
    secondary: {
      bg: "muted",
      borderRadius: 3,
      p: 4,
    },
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 74],
  fontWeights: {
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    headline: {
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 9,
      py: 3,
    },
    heading: {
      lineHeight: "heading",
      fontWeight: "light",
      fontSize: 7,
      py: 3,
    },
    smallHeadline: {
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
      py: 2,
    },
    tinyHeading: {
      lineHeight: "heading",
      fontWeight: "light",
      fontSize: 3,
      py: 3,
    },
    tinyHeadline: {
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
      py: 2,
    },
    paragraph: {
      my: 2,
    },
  },
  forms: {
    plain: {
      border: 0,
      padding: 0,
      outline: "none",
    },
  },
  label: {
    fontWeight: "bold",
    color: "text",
    fontSize: 1,
  },
  badges: {
    primary: {
      border: "3px solid",
      borderColor: "secondary",
      borderRadius: 4,
      py: 1,
      px: 2,
      bg: "lightGreen",
      color: "text",
      fontWeight: "body",
    },
    secondary: {
      border: "3px solid",
      borderColor: "secondary",
      borderRadius: 4,
      py: 1,
      px: 2,
      bg: "background",
      color: "primary",
      fontWeight: "body",
    },
  },
  images: {
    rounded: {
      borderRadius: "50%",
    },
  },
  colors: {
    text: "#0A1026",
    background: "#fff",
    primary: "#004D3F",
    secondary: "#749F97",
    accent: "#F9B644",
    muted: "#F0F4F3",
    red: "#E96565",
    lightGray: "#F7FBFA",
    lightRed: "#FFC7C7",
    lightGreen: "#C5E7E0",
    lightYellow: "#FFE3B4",
    success: "#C5E7E0",
    warn: "#FFE3B4",
    danger: "#FFC7C7",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      a: {
        variant: "styles.link",
      },
    },
    link: {
      color: "inherit",
    },
    h1: {
      variant: "text.heading",
      color: "primary",
      fontSize: 6,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      background: "secondary",
      fontFamily: "monospace",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderSpacing: "0 15px",
    },
    th: {
      borderBottomStyle: "solid",
    },
    td: {
      borderBottomStyle: "solid",
    },
    hr: {
      my: 4,
      borderStyle: "solid",
      borderWidth: 2,
      color: "lightGreen",
    },
  },
  alerts: {
    success: {
      color: "text",
      bg: "lightGreen",
      fontWeight: "body",
      p: 4,
      borderRadius: 4,
    },
    error: {
      color: "text",
      bg: "lightRed",
      fontWeight: "body",
      p: 4,
      borderRadius: 4,
    },
    warning: {
      color: "text",
      bg: "accent",
      fontWeight: "body",
      borderRadius: 4,
      p: 4,
    },
    muted: {
      color: "text",
      bg: "muted",
      fontWeight: "body",
      p: 4,
      borderRadius: 4,
    },
  },
  layout: {
    container: {
      maxWidth: "container",
      width: "100%",
      mx: "auto",
      px: 4,
    },
    readable: {
      maxWidth: "readable",
      width: "100%",
      mx: "auto",
      px: 4,
      my: 5,
    },
  },
  buttons: {
    primary: {
      "&:focus": {
        borderColor: "secondary",
        backgroundColor: "secondary",
      },
      backgroundColor: "lightGreen",
      color: "text",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      outline: "none",
      gap: 2,
      px: [2, 3],
      py: 2,
      fontSize: 1,
      "&:disabled": {
        backgroundColor: "secondary",
        color: "primary",
        cursor: "default",
      },
    },
    outline: {
      "&:focus": {
        borderColor: "secondary",
        backgroundColor: "secondary",
      },
      backgroundColor: "lightGreen",
      color: "text",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      outline: "none",
      gap: 2,
      px: [2, 3],
      py: 2,
      fontSize: 1,
      background: "none",
      borderColor: "primary",
      borderWidth: 2,
      borderStyle: "solid",
      "&:disabled": {
        borderColor: "secondary",
        color: "secondary",
        cursor: "default",
      },
    },
    small: {
      "&:focus": {
        borderColor: "secondary",
        backgroundColor: "secondary",
      },
      backgroundColor: "lightGreen",
      color: "text",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      outline: "none",
      gap: 2,
      px: 2,
      py: 1,
      fontSize: 1,
      "&:disabled": {
        backgroundColor: "lightGreen",
        color: "secondary",
        cursor: "default",
      },
    },
    link: {
      "&:focus": {
        borderColor: "secondary",
        backgroundColor: "secondary",
      },
      backgroundColor: "lightGreen",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      outline: "none",
      gap: 2,
      px: [2, 3],
      py: 2,
      fontSize: 1,
      background: "none",
      textDecoration: "underline",
      border: 0,
      m: 0,
      p: 0,
      "&:disabled": {
        color: "lightGreen",
        cursor: "default",
      },
    },
    secondary: {
      "&:focus": {
        borderColor: "secondary",
        backgroundColor: "secondary",
      },
      backgroundColor: "primary",
      color: "background",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      outline: "none",
      gap: 2,
      px: [2, 3],
      py: 2,
      fontSize: 1,
      "&:disabled": {
        backgroundColor: "lightGreen",
        color: "secondary",
        cursor: "default",
      },
    },
    warn: {
      "&:focus": {
        borderColor: "secondary",
        backgroundColor: "lightYellow",
      },
      backgroundColor: "warn",
      color: "text",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      outline: "none",
      gap: 2,
      px: [2, 3],
      py: 2,
      fontSize: 1,
      "&:disabled": {
        backgroundColor: "lightYellow",
        color: "secondary",
        cursor: "default",
      },
    },
    danger: {
      "&:focus": {
        borderColor: "secondary",
        backgroundColor: "red",
      },
      backgroundColor: "danger",
      color: "text",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      outline: "none",
      gap: 2,
      px: [2, 3],
      py: 2,
      fontSize: 1,
      "&:disabled": {
        backgroundColor: "lightRed",
        color: "secondary",
        cursor: "default",
      },
    },
    icon: {
      cursor: "pointer",
    },
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      fontWeight: "normal",
      "&.active": {
        color: "primary",
        fontWeight: "bold",
      },
    },
  },
};

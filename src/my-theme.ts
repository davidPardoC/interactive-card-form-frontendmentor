import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    lightGrayishViolet: "hsl(270, 3%, 87%)",
    darkGrayishViolet: "hsl(279, 6%, 55%)",
    veryDarkViolet: "hsl(278, 68%, 11%)",
  },
  breakPoints: {
    mobileSm: "375px",
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export { myTheme };

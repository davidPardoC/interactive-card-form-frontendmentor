import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      lightGrayishViolet: string;
      darkGrayishViolet: string;
      veryDarkViolet: string;
    };
    breakPoints: {
      mobileSm: "375px";
      mobile: "480px";
      tablet: "768px";
      desktop: "1024px";
    };
  }
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      white: string
      pink100: string
    };
    weights: {
      normal: string;
      semiBold: string;
      bold: string;
      extraBold: string;
      black: string;
    };
    fontSizes: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radius: {
      xm: string;
      sm: string;
      md: string;
      xl: string;
    };
    shadows: {
      shadow100: string;
    };
    glows: {
      glow100: string;
    };
    widths: {
      buttons: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      imputs: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      cards: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      forms: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
      };
    };
    heights: {
      buttons: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      imputs: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      cards: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      forms: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
      };
    };
    fontFamily: {
      Poppins: string;
      Sora: string;
      Candal: string;
    };
  }
}

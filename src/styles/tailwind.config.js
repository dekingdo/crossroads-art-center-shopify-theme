let defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "600px",
      md: "782px",
      lg: "960px",
      xl: "1040px"
    },
    aspectRatio: {
      "16/9": [16, 9],
      "3/2": [3, 2],
      "4/3": [4, 3],
      "square": [1, 1]
    },
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#fff",

      shade: {
        25: "#00000044",
        50: "#00000088",
        75: "#000000CC"
      },

      tint: {
        25: "#ffffff44",
        50: "#ffffff88",
        75: "#ffffffCC"
      },
      gray: {
        100: "#EEEEEF",
        200: "#D4D5D6",
        300: "#BBBBBD",
        400: "#87898C",
        500: "#54565B",
        600: "#4C4D52",
        700: "#323437",
        800: "#262729",
        900: "#191A1B"
      },
      green: {
        100: "#F1F8EC",
        200: "#DDEED0",
        300: "#C8E4B4",
        400: "#9FD07B",
        500: "#76BC43",
        600: "#6AA93C",
        700: "#477128",
        800: "#35551E",
        900: "#233814"
      },
      magenta: {
        100: "#FBE8F0",
        200: "#F4C6D9",
        300: "#EEA3C3",
        400: "#E15F95",
        500: "#D41A68",
        600: "#BF175E",
        700: "#7F103E",
        800: "#5F0C2F",
        900: "#40081F"
      },
      orange: {
        100: "#FEF2ED",
        200: "#FCDFD1",
        300: "#FBCBB6",
        400: "#F7A57F",
        500: "#F47E48",
        600: "#DC7141",
        700: "#924C2B",
        800: "#6E3920",
        900: "#492616"
      },
      blue: {
        100: "#E6F0F4",
        200: "#BFDAE3",
        300: "#99C3D2",
        400: "#4D97B1",
        500: "#006A8F",
        600: "#005F81",
        700: "#004056",
        800: "#003040",
        900: "#00202B"
      },
      paleBlue: {
        100: "#F2F6FB",
        200: "#DEE8F5",
        300: "#CBDAEF",
        400: "#A3BFE2",
        500: "#7CA3D6",
        600: "#7093C1",
        700: "#4A6280",
        800: "#384960",
        900: "#253140"
      },
      rose: {
        100: "#F5EBEE",
        200: "#E7CCD6",
        300: "#D9ADBD",
        400: "#BC708B",
        500: "#9F3259",
        600: "#8F2D50",
        700: "#5F1E35",
        800: "#481728",
        900: "#300F1B"
      },
      beige: {
        100: "#F7F6F5",
        200: "#EBEAE7",
        300: "#DFDDD9",
        400: "#C8C3BC",
        500: "#B0A99F",
        600: "#9E988F",
        700: "#6A655F",
        800: "#4F4C48",
        900: "#353330"
      },
      olive: {
        100: "#EFF4EC",
        200: "#D8E3CF",
        300: "#C1D1B1",
        400: "#92AF77",
        500: "#638D3D",
        600: "#597F37",
        700: "#3B5525",
        800: "#2D3F1B",
        900: "#1E2A12"
      },
      linkedin: "#007bb5",
      facebook: "#3C5A99",
      twitter: "#1da1f2",
      youtube: "#ff0000"
    },
    fontFamily: {
      display: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: [
        "Constantia",
        "Lucida Bright",
        "Lucidabright",
        "Lucida Serif",
        "Lucida",
        "DejaVu Serif",
        "Bitstream Vera Serif",
        "Liberation Serif",
        "Georgia",
        "serif"
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    verticalAlign: {
      middle: 'middle !important'
    },
    extend: {
      width: {
        "40": "10rem"
      },
      inset: {
        "100": "100%"
      },
      maxHeight: {
        "675": "675px"
      }
    }
  },
  variants: {
    display: ["group-hover", "responsive"],
    opacity: ["group-hover"]
  },
  corePlugins: {
    container: false,
    verticalAlign: false,
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-aspect-ratio")(),
    require('tailwindcss-tables')(),
  ]
};

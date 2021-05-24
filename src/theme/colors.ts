import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#8FC6CF",
  primaryBright: "#BEDEE3",
  primaryDark: "#BEDEE3",
  secondary: "#BEDEE3",
  success: "#e1aff7",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#12334E",
  backgroundDisabled: "#8FC6CF",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#12334E",
  tertiary: "#353547",
  text: "#BEDEE3",
  textDisabled: "#666171",
  textSubtle: "#8FC6CF",
  borderColor: "#174061",
  card: "#19456A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #12334E 0%, #1E527E 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#8FC6CF",
  background: "#12334E",
  backgroundDisabled: "#8FC6CF",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#12334E",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#BEDEE3",
  textDisabled: "#666171",
  textSubtle: "#8FC6CF",
  borderColor: "#174061",
  card: "#19456A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #12334E 0%, #1E527E 100%)",
  },
};


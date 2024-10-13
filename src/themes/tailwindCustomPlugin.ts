import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

export const textStylePlugin = plugin(function ({ addUtilities }) {
  const textUtilitiesObject: { [key: string]: CSSRuleObject } = {
    "34-extrabold": {
      fontWeight: "800",
      fontSize: "34rem",
      lineHeight: "47.6rem",
    },
    "32-semibold": {
      fontWeight: "600",
      fontSize: "32rem",
      lineHeight: "41.6rem",
    },
    "28-bold": {
      fontWeight: "700",
      fontSize: "28rem",
      lineHeight: "36.4rem",
    },
    "28-medium": {
      fontWeight: "700",
      fontSize: "28rem",
      lineHeight: "36.4rem",
    },
    "26-semibold": {
      fontWeight: "600",
      fontSize: "26rem",
      lineHeight: "33.8rem",
    },
    "26-bold": {
      fontWeight: "700",
      fontSize: "26rem",
      lineHeight: "33.8rem",
    },
    "26-semibold-177": {
      fontWeight: "600",
      fontSize: "26rem",
      lineHeight: "46.02rem",
    },
    "24-medium": {
      fontWeight: "500",
      fontSize: "24rem",
      lineHeight: "31.2rem",
    },
    "24-semibold": {
      fontWeight: "600",
      fontSize: "24rem",
      lineHeight: "33.6rem",
    },
    "24-bold": {
      fontWeight: "700",
      fontSize: "24rem",
      lineHeight: "33.6rem",
    },
    "22-extrabold": {
      fontWeight: "800",
      fontSize: "22rem",
      lineHeight: "30.8rem",
    },
    "22-bold": {
      fontWeight: "700",
      fontSize: "22rem",
      lineHeight: "30.8rem",
    },
    "22-medium": {
      fontWeight: "500",
      fontSize: "22rem",
      lineHeight: "30.8rem",
    },
    "20-medium": {
      fontWeight: "500",
      fontSize: "20rem",
      lineHeight: "28rem",
    },
    "20-semibold": {
      fontWeight: "600",
      fontSize: "20rem",
      lineHeight: "28rem",
    },
    "18-regular": {
      fontWeight: "400",
      fontSize: "18rem",
      lineHeight: "25.2rem",
    },
    "18-medium": {
      fontWeight: "500",
      fontSize: "18rem",
      lineHeight: "25.2rem",
    },
    "18-semibold": {
      fontWeight: "600",
      fontSize: "18rem",
      lineHeight: "27rem",
    },
    "17-semibold": {
      fontWeight: "600",
      fontSize: "17rem",
      lineHeight: "23.8rem",
    },
    "17-bold": {
      fontWeight: "700",
      fontSize: "17rem",
      lineHeight: "23.8rem",
    },
    "17-extrabold": {
      fontWeight: "800",
      fontSize: "17rem",
      lineHeight: "23.8rem",
    },
    "16-regular": {
      fontWeight: "400",
      fontSize: "16rem",
      lineHeight: "22.4rem",
    },
    "16-poppin": {
      fontFamily: "Poppin",
      fontWeight: "400",
      fontSize: "16rem",
      lineHeight: "22.4rem",
    },
    "16-medium": {
      fontWeight: "500",
      fontSize: "16rem",
      lineHeight: "22.4rem",
    },
    "16-medium-120": {
      fontWeight: "500",
      fontSize: "16rem",
      lineHeight: "19.2rem",
    },
    "16-date": {
      fontWeight: "500",
      fontSize: "16rem",
      lineHeight: "22.4rem",
      letterSpacing: "0.8rem",
    },
    "16-semibold": {
      fontWeight: "600",
      fontSize: "16rem",
      lineHeight: "22.4rem",
    },
    "16-bold": {
      fontWeight: "700",
      fontSize: "16rem",
      lineHeight: "22.4rem",
    },
    "16-bold-120": {
      fontWeight: "700",
      fontSize: "16rem",
      lineHeight: "19.2rem",
    },
    "15-medium": {
      fontWeight: "500",
      fontSize: "15rem",
      lineHeight: "21rem",
    },
    "15-medium-120": {
      fontWeight: "500",
      fontSize: "15rem",
      lineHeight: "18rem",
    },
    "15-semibold-120": {
      fontWeight: "600",
      fontSize: "15rem",
      lineHeight: "18rem",
    },
    "15-semibold": {
      fontWeight: "600",
      fontSize: "15rem",
      lineHeight: "21rem",
    },
    "14-regular": {
      fontWeight: "400",
      fontSize: "14rem",
      lineHeight: "19.6rem",
    },
    "14-medium": {
      fontWeight: "500",
      fontSize: "14rem",
      lineHeight: "19.6rem",
    },
    "14-medium-120": {
      fontWeight: "500",
      fontSize: "14rem",
      lineHeight: "16.8rem",
    },
    "14-semibold": {
      fontWeight: "600",
      fontSize: "14rem",
      lineHeight: "16.8rem",
    },
    "14-bold": {
      fontWeight: "700",
      fontSize: "14rem",
      lineHeight: "16.8rem",
    },
    "13-semibold": {
      fontWeight: "600",
      fontSize: "13rem",
      lineHeight: "18.2rem",
    },
    "12-bold": {
      fontWeight: "700",
      fontSize: "12rem",
      lineHeight: "14.4rem",
    },
  };

  const textUtilities = Object.keys(textUtilitiesObject).reduce((acc: { [key: string]: CSSRuleObject }, key) => {
    acc[`.ts-${key}`] = textUtilitiesObject[key];
    return acc;
  }, {});

  const noDragUtility: { [key: string]: CSSRuleObject } = {
    ".no-drag": {
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
    },
  };

  const scrollbarHideUtility: { [key: string]: CSSRuleObject } = {
    ".scrollbar-hide": {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },

    ".scrollbar-default": {
      "-ms-overflow-style": "auto",
      "scrollbar-width": "auto",
      "&::-webkit-scrollbar": {
        display: "block",
      },
    },
  };

  addUtilities([textUtilities, noDragUtility, scrollbarHideUtility]);
});

export default textStylePlugin;

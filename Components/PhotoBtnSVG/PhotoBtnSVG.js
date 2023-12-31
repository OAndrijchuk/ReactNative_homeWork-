import React from "react";
import { View } from "react-native";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const PhotoBtnSVG = () => {
  return (
    <View>
      <Svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={30} cy={30} r={30} fill="rgba(255, 255, 255, 0.30)" />
        <G clipPath="url(#clip0_32_29)">
          <Path
            d="M29.9998 33.2C31.7671 33.2 33.1998 31.7673 33.1998 30C33.1998 28.2327 31.7671 26.8 29.9998 26.8C28.2325 26.8 26.7998 28.2327 26.7998 30C26.7998 31.7673 28.2325 33.2 29.9998 33.2Z"
            fill="#BDBDBD"
          />
          <Path
            d="M27 20L25.17 22H22C20.9 22 20 22.9 20 24V36C20 37.1 20.9 38 22 38H38C39.1 38 40 37.1 40 36V24C40 22.9 39.1 22 38 22H34.83L33 20H27ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z"
            fill="#BDBDBD"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_32_29">
            <Rect
              width={24}
              height={24}
              fill="white"
              transform="translate(18 18)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default PhotoBtnSVG;

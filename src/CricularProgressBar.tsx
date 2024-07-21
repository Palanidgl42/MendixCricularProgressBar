import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { CricularProgressBarProps } from "../typings/CricularProgressBarProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function CricularProgressBar({
    style,
    Count,
    WidgetSize,
    BorderWidth,
    FontColor,
    bgColor,
    fontSize,
    tintColor,
    tintColor2,
    tintColor3,
    title,
    showTitle,
    logo,
    logoheight,
    logowidth,
    showLogo,
    AnimatedDuration,
    AnimatedDelay
}: CricularProgressBarProps<CustomStyle>): ReactElement {
    return (
        <HelloWorld
            style={style}
            Count={Count}
            WidgetSize={WidgetSize}
            BorderWidth={BorderWidth}
            FontColor={FontColor}
            bgColor={bgColor}
            fontSize={fontSize}
            tintColor={tintColor}
            tintColor2={tintColor2}
            tintColor3={tintColor3}
            titles={title}
            showTitle={showTitle}
            logo={logo}
            logoheight={logoheight}
            logowidth={logowidth}
            showLogo={showLogo}
            AnimatedDuration={AnimatedDuration}
            AnimatedDelay={AnimatedDelay}
        />
    );
}

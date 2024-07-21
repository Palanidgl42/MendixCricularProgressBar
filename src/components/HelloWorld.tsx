import { ReactElement, createElement } from "react";
import { Text, View } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../CricularProgressBar";

import { EditableValue, DynamicValue, NativeImage } from "mendix";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Big from "big.js";
import { SvgXml } from "react-native-svg";

export type ShowTitleEnum = "yes" | "no";
export type ShowLogoEnum = "yes" | "no";

export interface HelloWorldProps {
    style: CustomStyle[];
    Count: EditableValue<Big>;
    WidgetSize?: number;
    BorderWidth?: number;
    fontSize?: number;
    FontColor?: string;
    bgColor?: string;
    tintColor?: string;
    tintColor2?: string;
    tintColor3?: string;
    key?: number;
    titles?: string;
    showTitle: ShowTitleEnum;
    logo: DynamicValue<NativeImage>;
    logoheight?: number;
    logowidth?: number;
    showLogo: ShowLogoEnum;
    AnimatedDuration?: number;
    AnimatedDelay?: number;
}

const defaultStyle: CustomStyle = {
    container: {
        marginTop: -35
    },
    label: {
        color: "#F6BB42"
    },
    header: {
        fontSize: 12,
        fontWeight: "300",
        color: "#323232"
    },
    tinyLogo: {
        position: "absolute",
        top: 10,
        right: 0
    }
};

export function HelloWorld({
    Count,
    WidgetSize,
    BorderWidth,
    fontSize,
    FontColor,
    bgColor,
    tintColor,
    tintColor2,
    tintColor3,
    style,
    titles,
    showTitle,
    logo,
    logoheight,
    logowidth,
    showLogo,
    AnimatedDuration,
    AnimatedDelay
}: HelloWorldProps): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);

    let fill = 0;
    if (Count.status === "available" && Count.value !== undefined) {
        fill = parseFloat(Count.value.toString());
    }

    let selectedTintColor = tintColor;
    if (fill >= 85) {
        selectedTintColor = tintColor;
    } else if (fill >= 60) {
        selectedTintColor = tintColor2;
    } else if (fill >= 0) {
        selectedTintColor = tintColor3;
    }

    const renderCircularProgress = (fillValue: number) => {
        const formattedFill = Math.round(fillValue);
        return (
            <View style={{ alignItems: "center" }}>
                <Text
                    style={{
                        fontSize: fontSize,
                        color: FontColor,
                        fontWeight: "600",
                        letterSpacing: -0.5,
                        paddingHorizontal: 18
                    }}
                >
                    {formattedFill}
                </Text>
                {showTitle === "yes" ? <Text style={styles.header}>{titles}</Text> : null}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ position: "relative" }}>
                <AnimatedCircularProgress
                    size={WidgetSize}
                    width={BorderWidth}
                    fill={fill}
                    tintColor={selectedTintColor}
                    backgroundColor={bgColor}
                    rotation={90}
                    arcSweepAngle={290}
                    lineCap="round"
                    duration={AnimatedDuration}
                    delay={AnimatedDelay}
                >
                    {renderCircularProgress}
                </AnimatedCircularProgress>
                {showLogo === "yes" ? (
                    <SvgXml xml={logo.value} style={styles.tinyLogo} width={logowidth} height={logoheight} />
                ) : null}
            </View>
        </View>
    );
}

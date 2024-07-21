/**
 * This file was generated from CricularProgressBar.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue, NativeImage } from "mendix";
import { Big } from "big.js";

export type ShowTitleEnum = "yes" | "no";

export type ShowLogoEnum = "yes" | "no";

export interface CricularProgressBarProps<Style> {
    name: string;
    style: Style[];
    Count: EditableValue<Big>;
    showTitle: ShowTitleEnum;
    title: string;
    showLogo: ShowLogoEnum;
    logo: DynamicValue<NativeImage>;
    logoheight: number;
    logowidth: number;
    WidgetSize: number;
    fontSize: number;
    FontColor: string;
    BorderWidth: number;
    tintColor: string;
    tintColor2: string;
    tintColor3: string;
    bgColor: string;
    AnimatedDuration: number;
    AnimatedDelay: number;
}

export interface CricularProgressBarPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    Count: string;
    showTitle: ShowTitleEnum;
    title: string;
    showLogo: ShowLogoEnum;
    logo: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    logoheight: number | null;
    logowidth: number | null;
    WidgetSize: number | null;
    fontSize: number | null;
    FontColor: string;
    BorderWidth: number | null;
    tintColor: string;
    tintColor2: string;
    tintColor3: string;
    bgColor: string;
    AnimatedDuration: number | null;
    AnimatedDelay: number | null;
}

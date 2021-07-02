import React from "react";
import LuckyWheelGuideEN from "./en";
import LuckyWheelGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";

const LuckyWheelGuide = (props: GameGuideBase) => {
    const { locale } = props;
    if (locale === locales.en) {
        return <LuckyWheelGuideEN />;
    }
    return <LuckyWheelGuideVI />;
};
export default LuckyWheelGuide;

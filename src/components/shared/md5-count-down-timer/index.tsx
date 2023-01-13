import { locales } from "../../../common/constants";
import { renderMD5VI } from "../../game-guide/multiplay-big-small/vi";
import { renderMD5EN } from "./en";
import { renderMD5ID } from "./id";
import { renderMD5TH } from "./th";
import { renderMD5CN } from "./zh_cn";
import { renderMD5TW } from "./zh_tw";

const ScrollToMD5 = () => {
    const md5Scope: any = document.querySelector("#md5");
    window.scrollTo({ top: md5Scope?.offsetTop, behavior: "smooth" });
};

export const renderMD5 = (locale?: string) => {
    switch (locale) {
        case locales.vi:
            return renderMD5VI();
        case locales.id:
            return renderMD5ID();
        case locales.th:
            return renderMD5TH();
        case locales.zh_cn:
            return renderMD5CN();
        case locales.zh_tw:
            return renderMD5TW();
        default:
            return renderMD5EN();
    }
};
export default ScrollToMD5;

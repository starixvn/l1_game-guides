import React from "react";
import { locales } from "../../common/constants";
import { baseTermAndConditionEn } from "../game-guide/base/terms-and-conditions/languages/en";
import { baseTermAndConditionVi } from "../game-guide/base/terms-and-conditions/languages/vi";
import { baseTermAndConditionTh } from "../game-guide/base/terms-and-conditions/languages/th";
import { baseTermAndConditionId } from "../game-guide/base/terms-and-conditions/languages/id";
import { baseTermAndConditionTw } from "../game-guide/base/terms-and-conditions/languages/tw";
import BaseTermsAndConditions from "../game-guide/base/terms-and-conditions/terms-and-conditions";
import { baseTermAndConditionCn } from "../game-guide/base/terms-and-conditions/languages/cn";
import { IBaseTermAndConditionResources } from "../game-guide/base/terms-and-conditions/languages/types";

const games = { bitcoinMaster: 43, casinoHoldem: 39, texasHoldem: 42, blackjack: 23 };

export const renderTermsAndConditions = (style = "", locale?: string | undefined, extendDetails: Array<string> = []) => {
    switch (locale) {
        case locales.vi:
            return renderTermsAndConditionsVI(style, extendDetails);
        case locales.id:
            return renderTermsAndConditionsID(style, extendDetails);
        case locales.th:
            return renderTermsAndConditionsTH(style, extendDetails);
        case locales.zh_cn:
            return renderTermsAndConditionsCN(style, extendDetails);
        case locales.zh_tw:
            return renderTermsAndConditionsTW(style, extendDetails);
        default:
            return renderTermsAndConditionsEN(style, extendDetails);
    }
};

export const renderTermsAndConditionsEN = (style = "", extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = { ...baseTermAndConditionEn, details: extendDetails.concat(baseTermAndConditionEn.details) };
    return <li className="guide-item"><BaseTermsAndConditions resources={resources} /></li>
};

export const renderTermsAndConditionsID = (style = "", extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = { ...baseTermAndConditionId, details: extendDetails.concat(baseTermAndConditionId.details) };
    return <li className="guide-item"><BaseTermsAndConditions resources={resources} /></li>
};

export const renderTermsAndConditionsTH = (style = "", extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = { ...baseTermAndConditionTh, details: extendDetails.concat(baseTermAndConditionTh.details) };
    return <li className="guide-item"><BaseTermsAndConditions resources={resources} /></li>
};

export const renderTermsAndConditionsVI = (style = "", extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = { ...baseTermAndConditionVi, details: extendDetails.concat(baseTermAndConditionVi.details) };
    return <li className="guide-item"><BaseTermsAndConditions resources={resources} /></li>
};

export const renderTermsAndConditionsCN = (style = "", extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = { ...baseTermAndConditionCn, details: extendDetails.concat(baseTermAndConditionCn.details) };
    return <li className="guide-item"><BaseTermsAndConditions resources={resources} /></li>
};

export const renderTermsAndConditionsTW = (style = "", extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = { ...baseTermAndConditionTw, details: extendDetails.concat(baseTermAndConditionTw.details) };
    return <li className="guide-item"><BaseTermsAndConditions resources={resources} /></li>
};

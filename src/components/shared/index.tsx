import React from "react";
import { locales, ENVIRONMENT, ORIENTATION } from "../../common/constants";
import { baseTermAndConditionEn } from "../game-guide/base/terms-and-conditions/languages/en";
import { baseTermAndConditionVi } from "../game-guide/base/terms-and-conditions/languages/vi";
import { baseTermAndConditionTh } from "../game-guide/base/terms-and-conditions/languages/th";
import { baseTermAndConditionId } from "../game-guide/base/terms-and-conditions/languages/id";
import { baseTermAndConditionTw } from "../game-guide/base/terms-and-conditions/languages/tw";
import BaseTermsAndConditions from "../game-guide/base/terms-and-conditions/terms-and-conditions";
import { baseTermAndConditionCn } from "../game-guide/base/terms-and-conditions/languages/cn";
import { baseTermAndConditionJa } from "../game-guide/base/terms-and-conditions/languages/ja";
import { IBaseTermAndConditionResources } from "../game-guide/base/terms-and-conditions/languages/types";
import { generatebaseTermAndConditionTolgee } from "../game-guide/base/terms-and-conditions/languages/tolgee";
import { TolgeeInstance } from "@tolgee/react";

export const renderTermsAndConditions = (locale?: string | undefined, extendDetails: Array<string> = []) => {
    switch (locale) {
        case locales.vi:
            return renderTermsAndConditionsVI(extendDetails);
        case locales.id:
            return renderTermsAndConditionsID(extendDetails);
        case locales.th:
            return renderTermsAndConditionsTH(extendDetails);
        case locales.zh_cn:
            return renderTermsAndConditionsCN(extendDetails);
        case locales.zh_tw:
            return renderTermsAndConditionsTW(extendDetails);
        default:
            return renderTermsAndConditionsEN(extendDetails);
    }
};

export const renderTermsAndConditionsEN = (extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = {
        ...baseTermAndConditionEn,
        details: extendDetails.concat(baseTermAndConditionEn.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export const renderTermsAndConditionsID = (extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = {
        ...baseTermAndConditionId,
        details: extendDetails.concat(baseTermAndConditionId.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export const renderTermsAndConditionsTH = (extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = {
        ...baseTermAndConditionTh,
        details: extendDetails.concat(baseTermAndConditionTh.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export const renderTermsAndConditionsVI = (extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = {
        ...baseTermAndConditionVi,
        details: extendDetails.concat(baseTermAndConditionVi.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export const renderTermsAndConditionsCN = (extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = {
        ...baseTermAndConditionCn,
        details: extendDetails.concat(baseTermAndConditionCn.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export const renderTermsAndConditionsTW = (extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = {
        ...baseTermAndConditionTw,
        details: extendDetails.concat(baseTermAndConditionTw.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export const isShowedMD5 = (environment?: string, orientation?: string) => {
    return environment === ENVIRONMENT.sc && orientation !== ORIENTATION.portrait;
};

export const renderTermsAndConditionsJA = (extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = {
        ...baseTermAndConditionJa,
        details: extendDetails.concat(baseTermAndConditionJa.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export const renderTermsAndConditionsTolgee = (tolgee: TolgeeInstance, extendDetails: Array<string> = []) => {
    const resources: IBaseTermAndConditionResources = generatebaseTermAndConditionTolgee(tolgee);
    return <BaseTermsAndConditions resources={resources} />;
};

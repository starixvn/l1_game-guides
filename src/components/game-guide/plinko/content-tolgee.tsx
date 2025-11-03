import { T, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { FC, useMemo } from "react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { PlinkoContentsProps } from "./type";
import { TogleeNamespace } from "./namespace-tolgee";
import { UserStakeLevelProps } from "../../../pages";

const PlinkoIntroduction: FC<{
    t: Function;
    displayName?: string;
}> = ({ t, displayName }) => {
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
            <div className="content">
                <T
                    params={{
                        gameName: displayName,
                    }}
                >
                    {t("intro_para", { ns: TogleeNamespace.SpecificGame })}
                </T>
            </div>
        </li>
    );
};

const PlinkoGameRules: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <li className={`guide-item`}>
            <h2 className="font-bold">{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("game_rules_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_4", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_5", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_6", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_7", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
        </li>
    );
};

const PlinkoPayout: FC<{
    t: Function;
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}> = ({ t, gameConfigs, userStakeLevel, fractionalOddsFormat }) => {
    const { minBet, maxBet, maxWinPerRound } = gameConfigs;
    const maxBetTmp = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);

    const maxBetMain = numberWithCommas(maxBetTmp);
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetTmp);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("payout_para_1", { minbet: minBetMain, maxbet: maxBetMain, ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("payout_para_2", { maxpayout: maxWin, ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
        </li>
    );
};

const GameNameMapping: Record<number, string> = {
    150: "game_name",
};

const PlinkoGameGuideContent: React.FC<PlinkoContentsProps> = ({ gameConfigs, fractionalOddsFormat, userStakeLevel, id }) => {
    const { t } = useTranslate([TogleeNamespace.Common, TogleeNamespace.SpecificGame]);

    const displayName = useMemo(() => {
        return t(GameNameMapping[id || 150], { ns: TogleeNamespace.SpecificGame });
    }, [t]);

    return (
        <div className={`sedie`}>
            <ul className={`game-guide`}>
                <PlinkoIntroduction t={t} displayName={displayName} />
                <PlinkoGameRules t={t} />
                <PlinkoPayout t={t} gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} fractionalOddsFormat={fractionalOddsFormat} />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default PlinkoGameGuideContent;

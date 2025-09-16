import { useTranslate } from "@tolgee/react";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { COMMON, SOCCER_PIN_GOAL } from "./namespace-tolgee";

interface SoccerPinGoalContentProps {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}

const Content = (props: SoccerPinGoalContentProps) => {
    const { maxBet } = props.gameConfigs;
    return (
        <ul className={`game-guide`}>
            <Introduction />

            <TermsAndConditionsTolgee />
        </ul>
    );
};

const Introduction = () => {
    const { t } = useTranslate([SOCCER_PIN_GOAL, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_introduction", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("intro_para1", { ns: SOCCER_PIN_GOAL })}</li>
                    <li>{t("intro_para2", { ns: SOCCER_PIN_GOAL })}</li>
                </ul>
            </div>
        </li>
    );
};

export default Content;

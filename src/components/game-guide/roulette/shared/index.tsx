import React from "react";
import Styles from "../roulette.module.scss";

export const renderGameRuleImage = (
    fractionalOddsFormat: boolean | undefined,
    locale?: string
) => {
    return (
    <div className={Styles["wrapper-img-rule"]}>
        {fractionalOddsFormat ? (
            <img src={`/static/images/roulette/fractionalodds/game_guide-luat_choi_${locale}.png`} alt="luat-choi" loading="lazy" />
        ) : (
            <img src={`/static/images/roulette/game_guide-luat_choi_${locale}.png`} alt="luat-choi" loading="lazy" />
        )}
    </div>
    )
}
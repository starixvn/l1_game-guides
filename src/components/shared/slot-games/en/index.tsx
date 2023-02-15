import React from "react";
import { PROJECTS } from "../../../../common/constants";

export const renderGameRuleContent = (project: string | undefined) => {
    return (
        <>
            <li>
                The Player selects the Paylines (Lines) and sets the Bet Level you want to place bet before pressing {`"Spin"`}.
                <div className="text-center">
                    <strong>Total Bet</strong> = Paylines * Bet Level
                </div>
            </li>

            <li> 25 Paylines are numbered from 1 to 25 and the Player must choose at least one Payline before starting the game.</li>
            <li>By default, all Paylines with the minimum Bet Level will be selected at the beginning.</li>
            <li>The Win-loss on each Payline will be calculated based on the number of the same symbols located on that Payline.</li>
            {project === PROJECTS.L2 && (
                <li>
                    There are 3 options for Bet amount; for each option, the Player will have the opportunity to win an attractive Jackpot
                    prize.
                </li>
            )}
        </>
    );
};

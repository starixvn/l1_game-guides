import React from "react";

export const renderGameRuleContent = () => {
    return (
    <>
        <li>
            The Player selects the Paylines (Lines) and sets the Bet Level you want to place bet before pressing {`"Spin"`}.
            <div className="text-center">
                <strong>Total Bet</strong> = Paylines * Bet Level
            </div>
        </li>

        <li> 25 Paylines are numbered from 1 to 25 and the Player must choose at least one Payline before starting the game.</li>
        <li>The Win-loss on each Payline will be calculated based on the number of the same symbols located on that Payline.</li>
    </>
    )
}
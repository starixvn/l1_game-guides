import React from "react";

const LuckyWheelGuideEN: React.FC = () => {
    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Promotion Program</h2>
                    <ul className="desc">
                        <li>
                            The players having Free Spins can play Lucky Wheel and receive Scoin{" "}
                            <img src="/static/images/lucky-wheel/coin.png" alt="coin" width={26} height={26} />
                        </li>
                        <li>Scoin obtained from Lucky Wheel will automatically be added to your Scoin wallet</li>
                        <li>There is no limit to the number of free spins can play per day.</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>How to place a bet using Scoin</h2>
                    <ul className="desc">
                        <li>Scoin can only be used to play the Se Die game in Vgaming.</li>
                        <li>
                            The Free Spins will be valid for a week from the time the players get the notification. After this period, any
                            unused Free Spins will be lost.
                        </li>
                        <li>The winning amount from the Se Die game using Scoin will be credited to your account balance.</li>
                        <li>
                            <strong>Note:</strong>
                            <ul className="plus">
                                <li>Scoin cannot be exchanged for cash.</li>
                                <li>
                                    Scoin is only available for Se Die, with other games, the stakes will be deducted directly from your
                                    account balance.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="guide-item">
                    <h2>Terms and Conditions</h2>
                    <p>By entering into this promotion you agree to be bound by these terms and conditions.</p>
                    <ul className="style-number-rule">
                        <li className="number-dot">
                            The Company reserves the right to cancel any Lucky Wheel results because of a force majeure event including but
                            not limited to any technical errors, network service failures, power failures.
                        </li>
                        <li className="number-dot">
                            In the case of any suspicious or fraudulent gameplay/behavior, the Company reserves the right to cancel the
                            Lucky Wheel results or exclude players from this promotion.
                        </li>
                        <li className="number-dot">
                            The Company reserves the right to vary any of the terms of entry applying to this promotion or to modify,
                            terminate, suspend, or reschedule this promotion at any time.
                        </li>
                        <li className="number-dot">
                            The Company reserves the right to vary any of the terms of entry applying to this promotion or to modify,
                            terminate, suspend, or reschedule this promotion at any time.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default LuckyWheelGuideEN;

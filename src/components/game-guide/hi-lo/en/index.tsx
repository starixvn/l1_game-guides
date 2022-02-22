import React, { useEffect } from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../hi-lo.module.scss";

const renderGameRule = () => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    Select the bet amount that suits you best. Click <img src="/static/images/hi-lo/play.png" alt="play icon" width="30" height="30" className={Styles["play"]}/> to start the game.        
                </li>
                <li>The system will randomly pick up the first card (base card) and the Player will choose whether the next card (result card) will be higher (Hi) or lower (Lo). </li>
                <li>
                    After each turn, if the result is a win, the Player can decide whether to stop or continue playing the next turn.
                    <ul className="detail">
                        <li>Click the button &quot;Collect&quot; to stop playing and get the payout.</li>
                        <li>Continue playing the next turn, the result card for the turn will become the base card for the next turn, and the payout of the turn will be the bet amount for the next turn.</li>
                    </ul>
                </li>
            </ul>
            <div>Example:</div>
            <p>The system randomly picks up the first card (base card) = <span className={Styles["red"]}>9</span><span className={`${Styles["red"]} ${Styles["large-font"]}`}>♥</span>. Player places bet 100 on &quot;Low&quot; option. </p>
            <p>Result card: 4<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span> ={'>'} Player wins and payout = 123. There are 2 options:</p>
            <ul className="plus">
                <li>Click the button &quot;Collect&quot; to stop playing ={'>'} Player gets 123 into the balance account.</li>
                <li>Continue playing the next turn, then the Player guesses whether the next card will be higher or lower than the current card (4<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>), with a bet amount = 123</li>
                
            </ul>
            <ul className="desc">
                <li>The Player will have 2 minutes to complete a turn (decide to select either Hi or Lo).</li>
                <li>If the Player cannot complete a turn within 2 minutes: 
                    <ul className="detail">
                        <li>The system will randomly select the Hi or Lo for the first turn that the User has clicked <img src="/static/images/hi-lo/play.png" alt="play icon" width="30" height="30" className={Styles["play"]}/> button.</li>
                        <li>Other turns will be treated as &quot;Collect&quot;</li>
                    </ul>
                </li>
                <li>The cards will be shuffled after each turns</li>
            </ul>
        </>
    );
};

const renderPayouts = () => {
    return (
        <>
            <h2>Payout</h2>
            <ul className="desc">
                <li>The Payout includes the initial stake.</li>
                <li>The payout for correctly guessing whether the next card will be higher or lower could vary each turn. </li>
            </ul>
        </>
    );
};

const HiLoGuideEN: React.FC<GameGuideProps<{}, {}>> = (props) => {
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        Hi-Lo is a popular card game with the simplest of rules. The game is played with a standard 52-card deck (excluding Joker). The aim of the game is to guess whether the next card to be dealt will be higher or lower than the current one.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                <li className="guide-item">
                    <h2>Card Values</h2>
                    <ul className="desc">
                        <li>The card&apos;s value is ranked from the lowest to the highest in the following order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), and Ace (A)</li>
                        <li>All the suits - heart (<span className={`${Styles["red"]} ${Styles["large-font"]}`}>♥</span>), spade (<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>), diamond (<span className={`${Styles["red"]} ${Styles["large-font"]}`}>♦</span>), and club (<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♣</span>) have equal value.</li>
                    </ul>
                    <p><strong>Noted:</strong></p>
                    <ul className="desc">
                        <li>If the Base Card and Result Card are the same ranks then the result is Tie. The Player continues to play the next turn.</li>
                        <li>If the Base Card is 2 or Ace. The Player will have only one option to select, High for 2 and Low for Ace and the result is Tie for that turn.</li>
                    </ul>

                </li>
                <li className="guide-item">{renderPayouts()}</li>
                

                {renderTermsAndConditionsEN("", 45)}
            </ul>
        </>
    );
};
export default HiLoGuideEN;

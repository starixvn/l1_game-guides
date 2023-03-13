import { Markup } from "interweave";
import React from "react";
import { GameGuideProps } from "../../type";
import { getLuckyWheelTranslationResource } from "../languages";

const LuckyWheelGuideTemplate: React.FC<GameGuideProps<{}, {}>> = (props) => {
    const { locale } = props;
    const resources = getLuckyWheelTranslationResource(locale);
    const { introduction, promotionProgram, gameRules, termsAndConditions } = resources;
    return (
        <div>
            <ul className="game-guide">
                <h1>{introduction}</h1>
                <li className="guide-item">
                    <h2>{promotionProgram.title}</h2>
                    <ul className="desc">
                        <li>
                            {promotionProgram.scoin} <img src="/static/images/lucky-wheel/coin.png" alt="coin" width={26} height={26} />
                        </li>
                        {promotionProgram.description.map((desc, index) => (
                            <li key={index}>{<Markup content={desc} />}</li>
                        ))}
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>{gameRules.title}</h2>
                    <ul className="desc">
                        {gameRules.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                        <li>
                            <strong>{gameRules.note.content}</strong>
                            <ul className="plus">
                                {gameRules.note.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="guide-item">
                    <h2>{termsAndConditions.title}</h2>
                    <p>{termsAndConditions.line1}</p>
                    <ul className="style-number-rule">
                        {termsAndConditions.description.map((desc, index) => (
                            <li key={index} className="number-dot">
                                {desc}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default LuckyWheelGuideTemplate;

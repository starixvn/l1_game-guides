import { Markup } from "interweave";
import React from "react";
import { StringFormat } from "../../../../helpers/string-helper";
import { renderTermsAndConditions } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../hi-lo.module.scss";
import { getHiLoTranslationResource } from "../languages";
import { IHiLoTranslationResource } from "../languages/types";
import { renderToString } from "react-dom/server";

export default class HiLoGuideTemplate extends React.Component<GameGuideProps<{}, {}>, { translationResource: IHiLoTranslationResource }> {
    constructor(props: GameGuideProps<{}, {}>) {
        super(props);
        this.state = {
            translationResource: getHiLoTranslationResource(props.locale),
        };
    }

    renderIntroduction() {
        const { introduction } = this.state.translationResource;
        return (
            <li className="guide-item">
                <h2>{introduction.title}</h2>
                <p className="content">{introduction.description}</p>
            </li>
        );
    }

    renderGameRules() {
        const { gameRules } = this.state.translationResource;
        const heart9 = (
            <>
                <span className={Styles["red"]}>9</span>
                <span className={`${Styles["red"]} ${Styles["large-font"]}`}>♥</span>
            </>
        );
        const spade4 = (
            <>
                4<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>
            </>
        );
        return (
            <li className="guide-item">
                <h2>{gameRules.title}</h2>
                <ul className="desc">
                    <li>{gameRules.description.line1}</li>
                    <li>{gameRules.description.line2}</li>
                    <li>
                        {gameRules.description.line3}
                        <ul className="detail">
                            {gameRules.description.subLines.map((sub, index) => (
                                <li key={index}>{sub}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <div>{gameRules.example.title}:</div>
                <p>
                    <Markup content={StringFormat(gameRules.example.description.introduction, renderToString(heart9))} />
                </p>
                <p>
                    <Markup content={StringFormat(gameRules.example.description.result.detail, renderToString(spade4))} />
                </p>
                <ul className="plus">
                    <li>{gameRules.example.description.result.option1}</li>
                    <li>
                        <Markup content={StringFormat(gameRules.example.description.result.option2, renderToString(spade4))} />
                    </li>
                </ul>
                {this.renderGameRulesExampleNote()}
            </li>
        );
    }

    renderGameRulesExampleNote() {
        const { note } = this.state.translationResource.gameRules.example.description;
        return (
            <ul className="desc">
                <li>{note.completeTurn}</li>
                <li>
                    {note.autoSettle.detail}
                    <ul className="detail">
                        {note.autoSettle.subLines.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </li>
                <li>{note.shuffleCard}</li>
            </ul>
        );
    }

    renderCardValues() {
        const { cardValues } = this.state.translationResource;
        const heart = <span className={`${Styles["red"]} ${Styles["large-font"]}`}>♥</span>;
        const spade = <span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>;
        const diamond = <span className={`${Styles["red"]} ${Styles["large-font"]}`}>♦</span>;
        const club = <span className={`${Styles["black"]} ${Styles["large-font"]}`}>♣</span>;
        return (
            <li className="guide-item">
                <h2>{cardValues.title}</h2>
                <ul className="desc">
                    <li>{cardValues.line1}</li>
                    <li>
                        <Markup
                            content={StringFormat(
                                cardValues.line2,
                                renderToString(heart),
                                renderToString(spade),
                                renderToString(diamond),
                                renderToString(club)
                            )}
                        />
                    </li>
                </ul>
                <p>
                    <strong>{cardValues.note.title}:</strong>
                </p>
                <ul className="desc">
                    {cardValues.note.descriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                </ul>
            </li>
        );
    }

    renderPayout() {
        const { payout } = this.state.translationResource;
        return (
            <li className="guide-item">
                <h2>{payout.title}</h2>
                <ul className="desc">
                    {payout.descriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                </ul>
            </li>
        );
    }

    render(): React.ReactNode {
        const { locale } = this.props;
        return (
            <>
                <ul className="game-guide">
                    {this.renderIntroduction()}
                    {this.renderGameRules()}
                    {this.renderCardValues()}
                    {this.renderPayout()}
                    {renderTermsAndConditions(locale)}
                </ul>
            </>
        );
    }
}

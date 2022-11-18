import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ENVIRONMENT, locales, Themes } from "../../common/constants";
import appSettings from "../../common/app-settings";

const renderGameName = (setGameId: Function) => {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" onChange={(event) => setGameId(+event.target.value)}>
                {Object.values(appSettings.gameSettings).map((guide) => {
                    return (
                        <>
                            <option key={guide.id} value={guide.id}>
                                {guide.gameName}
                            </option>
                        </>
                    );
                })}
            </select>
        </div>
    );
};

const renderLanguage = (setLocale: Function) => {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" onChange={(event) => setLocale(event.target.value)}>
                {Object.values(locales).map((locale, index) => {
                    return (
                        <>
                            <option key={index} value={locale}>
                                {locale}
                            </option>
                        </>
                    );
                })}
            </select>
        </div>
    );
};

const renderThemes = (setTheme: Function) => {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" onChange={(event) => setTheme(event.target.value)}>
                {Object.values(Themes).map((name, index) => {
                    return (
                        <>
                            <option key={index} value={name}>
                                {name}
                            </option>
                        </>
                    );
                })}
            </select>
        </div>
    );
};

const renderEnvironment = (setEnvironment: Function) => {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" onChange={(event) => setEnvironment(event.target.value)}>
                {Object.values(ENVIRONMENT).map((name, index) => {
                    return (
                        <>
                            <option key={index} value={name}>
                                {name}
                            </option>
                        </>
                    );
                })}
            </select>
        </div>
    );
};

const Demo = () => {
    const [linkGuide, setLinkGuide] = useState<string>("");
    const [locale, setLocale] = useState<string>(locales.en);
    const [gameId, setGameId] = useState<number>(1);
    const [theme, setTheme] = useState<string>(Themes.light);
    const [environment, setEnvironment] = useState<string>(ENVIRONMENT.sc);
    const [minBet, setMinBet] = useState<number>(0);
    const [maxBet, setMaxBet] = useState<number>(2000);

    useEffect(() => {
        if (locale && gameId && theme && environment) {
            const data = `${locale}?gId=${gameId}&t=${theme}&f=${environment}&minBet=${minBet}&maxBet=${maxBet}&c=0`;
            setLinkGuide(`${window.location.origin}/${data}`);
        }
    }, [locale, gameId, theme, environment, minBet, maxBet]);

    return (
        <div id="container-guide" className="container-guide">
            <div className="container" style={{ marginBottom: 20, marginTop: 20 }}>
                <div className="col-8">
                    <div className="row">
                        <div className="col">{renderGameName(setGameId)}</div>
                        <div className="col"> {renderLanguage(setLocale)}</div>
                    </div>
                    <div className="row">
                        <div className="col"> {renderThemes(setTheme)}</div>
                        <div className="col"> {renderEnvironment(setEnvironment)}</div>
                    </div>
                </div>

                <div className="row">
                    <h4>User stake level</h4>
                    <div className="col-8">
                        <div className="input-group">
                            <span className="input-group-text" style={{ fontSize: 14 }}>
                                Min bet and Max bet
                            </span>
                            <input
                                type="number"
                                min={0}
                                className="form-control"
                                value={minBet}
                                onChange={(event) => setMinBet(+event.target.value)}
                                style={{ fontSize: 14 }}
                            ></input>
                            <input
                                type="number"
                                min={0}
                                className="form-control"
                                value={maxBet}
                                onChange={(event) => setMaxBet(+event.target.value)}
                                style={{ fontSize: 14 }}
                            ></input>
                        </div>
                    </div>
                </div>
            </div>

            {linkGuide && (
                <iframe
                    key={uuidv4()}
                    className={"guide-iframe"}
                    src={linkGuide}
                    referrerPolicy="strict-origin-when-cross-origin"
                    height={window.innerHeight}
                    width={window.innerWidth}
                    scrolling="auto"
                    style={{ border: "none" }}
                />
            )}
        </div>
    );
};

export default Demo;

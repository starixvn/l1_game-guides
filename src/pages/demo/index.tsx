import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { v4 as uuidv4 } from "uuid";
import { TFunction, useTranslation } from "next-i18next";

import { ENVIRONMENT, locales, Themes } from "../../common/constants";
import appSettings from "../../common/app-settings";

const SelectOptions = (listData: Object, setData: Function) => {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" onChange={(event) => setData(event.target.value)}>
                {Object.values(listData).map((data, index) => {
                    return (
                        <option key={index} value={data}>
                            {data}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

const renderGameName = (setGameId: Function, t: TFunction) => {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" onChange={(event) => setGameId(+event.target.value)}>
                {Object.values(appSettings.gameSettings).map((guide, index) => {
                    return (
                        <option key={index} value={guide.id}>
                            {t(guide.gameName.toLocaleLowerCase())}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

const Demo = () => {
    const { t } = useTranslation();

    const [linkGuide, setLinkGuide] = useState<string>("");
    const [locale, setLocale] = useState<string>(locales.en);
    const [gameId, setGameId] = useState<number>(1);
    const [theme, setTheme] = useState<string>(Themes.dark);
    const [environment, setEnvironment] = useState<string>(ENVIRONMENT.sc);
    const [minBet, setMinBet] = useState<number>(0);
    const [maxBet, setMaxBet] = useState<number>(2000);
    const [showConfig, setShowConfig] = useState<boolean>(true);

    useEffect(() => {
        if (locale && gameId && theme && environment) {
            let data = `${locale}?gId=${gameId}&t=${theme}&minBet=${minBet}&maxBet=${maxBet}&c=0`;
            environment == ENVIRONMENT.sc && (data += `&f=${environment}`);
            setLinkGuide(`${window.location.origin}/${data}`);
        }
    }, [locale, gameId, theme, environment, minBet, maxBet]);

    return (
        <div id="container-guide" className="container-guide">
            <div>
                <div className="container" style={{ marginBottom: 20, marginTop: 20 }}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setShowConfig(!showConfig)}
                        style={{ fontSize: 14, marginBottom: 10 }}
                    >
                        {showConfig ? "Collapse Configs" : "Expand Configs"}
                    </button>
                    <div className={showConfig ? "show" : "hide"}>
                        <div className="col-8">
                            <div className="row">
                                <div className="col">{renderGameName(setGameId, t)}</div>
                                <div className="col"> {SelectOptions(locales, setLocale)}</div>
                            </div>
                            <div className="row">
                                <div className="col">{SelectOptions(Themes, setTheme)} </div>
                                <div className="col"> {SelectOptions(ENVIRONMENT, setEnvironment)}</div>
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
                        <div className="row">
                            Link Guide:{" "}
                            <a href={linkGuide} rel="noopener noreferrer" target="_blank">
                                {linkGuide}
                            </a>
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

export const getStaticProps = async ({ locale = "en" }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export default Demo;

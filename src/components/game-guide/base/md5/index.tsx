import React from "react";
import { Markup } from "interweave";
import { StringFormat } from "../../../../helpers/string-helper";
import { IMd5Resources } from "./languages/types";

const md5ServicesUrl = "<a href='https://md5.services/' target='_blank' rel='noopener noreferrer'>https://md5.services/</a>";

const Md5Content: React.FunctionComponent<{ resources: IMd5Resources }> = ({ resources }) => {
    const { content } = resources;
    return (
        <>
            <h2> {content.header}</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text"> {content.technology.header}</span>
                    <ul className="desc">
                        {
                            content.technology.details.map((detail, index) => {
                                return <li key={index}>{<Markup content={detail} />}</li>
                            })
                        }
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text"> {content.validation.header}</span>
                    <ul className="desc">

                        {
                            content.validation.details.map((detail, index) => {
                                return <li key={index}><Markup content={StringFormat(detail, md5ServicesUrl)} /></li>
                            })
                        }
                    </ul>
                </li>
            </ul>
            <div className="content"> {content.noted} </div>
        </>
    );
};

export abstract class Md5Example<P extends { resources: IMd5Resources }> extends React.PureComponent<P>  {
    renderStep2() {
        return <></>;
    }

    render() {
        const { example } = this.props.resources;
        return (
            <>
                <div className="content">
                    {<Markup content={example.header} />}
                </div>
                <ul className="desc">
                    <li>
                        {<Markup content={example.details.step1.text} />}
                        <img className="format-img auto-center" src={example.details.step1.imageUrl} alt="md5-string" />
                    </li>
                    {this.renderStep2()}
                    <li>
                        {<Markup content={StringFormat(example.details.step3.text, md5ServicesUrl)} />}
                        <img className="format-img auto-center" src={example.details.step3.imageUrl} alt="hash-darling" />
                    </li>
                    <li>
                        {<Markup content={example.details.step4.text} />}
                        <img className="format-img auto-center" src={example.details.step4.imageUrl} alt="md5-checksum" />
                    </li>
                </ul>
            </>
        );
    }
};

export default Md5Content;

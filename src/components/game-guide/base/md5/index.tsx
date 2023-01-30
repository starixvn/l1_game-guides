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
    renderStep1() {
        const { example } = this.props.resources;
        return (<li>
            {<Markup content={example.step1Text} />}
            <img className="format-img auto-center" src={example.step1ImageUrl} alt="md5-string" />
        </li>);
    }

    renderStep2() {
        return <></>;
    }

    renderStep3() {
        const { example } = this.props.resources;
        return (<li>
            {<Markup content={StringFormat(example.step3Text, md5ServicesUrl)} />}
            <img className="format-img auto-center" src={example.step3ImageUrl} alt="hash-darling" />
        </li>);
    }

    renderStep4() {
        const { example } = this.props.resources;
        return (<li>
            {<Markup content={example.step4Text} />}
            <img className="format-img auto-center" src={example.step4ImageUrl} alt="md5-checksum" />
        </li>);
    }

    render() {
        const { example } = this.props.resources;
        return (
            <>
                <div className="content">
                    {<Markup content={example.header} />}
                </div>
                <ul className="desc">
                    {this.renderStep1()}
                    {this.renderStep2()}
                    {this.renderStep3()}
                    {this.renderStep4()}
                </ul>
            </>
        );
    }
};

export default Md5Content;

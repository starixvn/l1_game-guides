import React from "react";
import { Markup } from "interweave";
import { StringFormat } from "../../../../helpers/string-helper";
import { IMd5Resources } from "./languages/types";
import { getBaseMD5TranslationResource } from "./languages";

const md5ServicesUrl = "<a href='https://md5.services/' target='_blank' rel='noopener noreferrer'>https://md5.services/</a>";

type MD5Props = {
    locale: string | undefined;
    resources?: IMd5Resources;
    step1ImageUrl?: string;
    step2ImageUrl?: string;
    step3ImageUrl?: string;
    step4ImageUrl?: string;
    note?: JSX.Element | string;
};

type MD5MobiProps = {
    environment?: string;
    md5Key?: string;
    md5Result?: string;
};

export default class MD5 extends React.Component<MD5Props & MD5MobiProps, { translationResource: IMd5Resources }> {
    constructor(props: MD5Props) {
        super(props);
        this.state = {
            translationResource: props.resources || getBaseMD5TranslationResource(props.locale),
        };
    }

    renderMD5Content() {
        const { content } = this.state.translationResource;
        return (
            <>
                <h2> {content.header}</h2>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="title-text"> {content.technology.header}</span>
                        <ul className="desc">
                            {content.technology.details.map((detail, index) => {
                                return <li key={index}>{<Markup content={detail} />}</li>;
                            })}
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="title-text"> {content.validation.header}</span>
                        <ul className="desc">
                            {content.validation.details.map((detail, index) => {
                                return (
                                    <li key={index}>
                                        <Markup content={StringFormat(detail, md5ServicesUrl)} />
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <div className="content"> {content.noted}</div>
                </ul>
            </>
        );
    }

    renderStep1() {
        const { example } = this.state.translationResource;
        return (
            <li>
                {<Markup content={example.step1Text} />}
                <img className="format-img auto-center md5-sample" src={this.props.step1ImageUrl} alt="md5-string" />
            </li>
        );
    }

    renderStep2() {
        const { example } = this.state.translationResource;
        return (
            <li>
                {<Markup content={example.step2Text} />}
                <img className="format-img auto-center md5-sample" src={this.props.step2ImageUrl} alt="md5-result" />
                <div>{this.props.note}</div>
            </li>
        );
    }

    renderStep3() {
        const { example } = this.state.translationResource;
        return (
            <li>
                {<Markup content={StringFormat(example.step3Text, md5ServicesUrl)} />}
                <img className="format-img auto-center" src={this.props.step3ImageUrl} alt="hash-darling" />
            </li>
        );
    }

    renderStep4() {
        const { example } = this.state.translationResource;
        return (
            <li>
                {<Markup content={example.step4Text} />}
                <img className="format-img auto-center" src={this.props.step4ImageUrl} alt="md5-checksum" />
            </li>
        );
    }

    renderMD5Example() {
        const { example } = this.state.translationResource;
        return (
            <>
                <div className="md5-content">{<Markup content={example.header} />}</div>
                <ul className="desc md5-content">
                    {this.renderStep1()}
                    {this.renderStep2()}
                    {this.renderStep3()}
                    {this.renderStep4()}
                </ul>
            </>
        );
    }

    render(): React.ReactNode {
        return (
            <li className="guide-item" id="md5">
                {this.renderMD5Content()}
                {this.renderMD5Example()}
            </li>
        );
    }
}

import { Markup } from "interweave";
import FanTanTemplate from "./default";

export default class FanTanGuideVI extends FanTanTemplate {
    renderExampleDetail() {
        const { example } = this.state.translationResource.gameRules;
        return (
            <>
                <li>
                    <b>{example.title}: </b>
                    <ul className="detail">
                        {example.resultDetails.map((detail, index) => (
                            <li key={index}>
                                <Markup content={detail} />
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    {example.haveOptions}
                    {this.renderExampleTable()}
                </li>
            </>
        );
    }
}

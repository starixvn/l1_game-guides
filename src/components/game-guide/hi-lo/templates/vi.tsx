import HiLoGuideTemplate from "./default";

export default class HiLoGuideVI extends HiLoGuideTemplate {
    renderGameRulesExampleNote() {
        const { note } = this.state.translationResource.gameRules.example.description;
        return (
            <ul className="desc">
                <li>
                    {note.autoSettle.detail}
                    <ul className="detail">
                        {note.autoSettle.subLines.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </li>
                <li>{note.completeTurn}</li>
                <li>{note.shuffleCard}</li>
            </ul>
        );
    }
}

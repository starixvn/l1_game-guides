import { MaxBetChoicesProps } from "../type";

const BetLimit: React.FunctionComponent<{ maxBetFollowChoice?: MaxBetChoicesProps }> = (props) => {
    const { maxBetFollowChoice } = props;
    return (
        <>
            <h2>Bet Limit</h2>
            <table className="table table-small text-center">
                <thead>
                    <tr>
                        <td>Options</td>
                        <td>Bet Limit(Min-Max)</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ante</td>
                        <td>
                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                        </td>
                    </tr>
                    <tr>
                        <td>Call</td>
                        <td>
                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetCallBetChoice}
                        </td>
                    </tr>
                    <tr>
                        <td>AA</td>
                        <td>
                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAaBetChoice}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default BetLimit;

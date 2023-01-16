import Styles from "../casino-hold.module.scss";
const Introduce: React.FunctionComponent = () => {
    return (
        <>
            <h2>Introduction</h2>
            <p className="content">
                Casino Hold’em is a variant of Texas Hold’em Poker. The game is played with a standard 52-card deck (excluding Joker), and
                the cards are shuffled after each round. The Player will play against the Dealer and the object of this game is to achieve
                the best possible five-card poker hand using a combination of two hole cards and five community cards to beat the Dealer’s
                hand.
            </p>
            <p className="content">
                In addition, a new feature -{" "}
                <a href="#md5" className={Styles["link"]}>
                    MD5 (Message-Digest algorithm 5)
                </a>{" "}
                that allows the Player to check the fairness and authenticity of every game result.
            </p>
        </>
    );
};

export default Introduce;

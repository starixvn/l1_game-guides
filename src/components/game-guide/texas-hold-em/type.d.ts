import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    AnteBet_flush: number;
    AnteBet_fourKind: number;
    AnteBet_fullHouse: number;
    AnteBet_highCard: number;
    AnteBet_onePair: number;
    AnteBet_royalFlush: number;
    AnteBet_straight: number;
    AnteBet_straightFlush: number;
    AnteBet_threeKind: number;
    AnteBet_twoPairs: number;
    call: number;
    river: number;
    turn: number;
}

export interface ChoicesMaxBetProps {
    anteBet: number;
    callBet: number;
    riverBet: number;
    turnBet: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetRound: string | number;
    minBetRound: string | number;
    maxBetAnteBetChoice: string | number;
    maxBetCallBetChoice: string | number;
    maxBetRiverBetChoice: string | number;
    maxBetTurnBetChoice: string | number;
}

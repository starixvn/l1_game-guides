import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    AABet_flush: number;
    AABet_fourKind: number;
    AABet_fullHouse: number;
    AABet_pairAces: number;
    AABet_royalFlush: number;
    AABet_straight: number;
    AABet_straightFlush: number;
    AABet_threeKind: number;
    AABet_twoPairs: number;
    AnteBet_flush: number;
    AnteBet_fourKind: number;
    AnteBet_fullHouse: number;
    AnteBet_highCards: number;
    AnteBet_onePair: number;
    AnteBet_royalFlush: number;
    AnteBet_straight: number;
    AnteBet_straightFlush: number;
    AnteBet_threeKind: number;
    AnteBet_twoPairs: number;
    CallBet_callBet: number;
}

export interface ChoicesMaxBetProps {
    aaBet: number;
    anteBet: number;
    callBet: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetRound: string | number;
    minBetRound: string | number;
    maxBetAaBetChoice: string | number;
    maxBetAnteBetChoice: string | number;
    maxBetCallBetChoice: string | number;
}

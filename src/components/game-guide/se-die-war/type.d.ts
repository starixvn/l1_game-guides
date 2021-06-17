import { GameConfigsProps } from "../type";

export interface OddsProps {
    banker: number;
    bankerEven: number;
    bankerOdd: number;
    bankerRed3: number;
    bankerRed4: number;
    bankerWhite3: number;
    bankerWhite4: number;
    even: number;
    odd: number;
    player: number;
    playerEven: number;
    playerOdd: number;
    playerRed3: number;
    playerRed4: number;
    playerWhite3: number;
    playerWhite4: number;
    tie: number;
}

export interface ChoicesMaxBetProps {
    banker: number;
    bankerEven: number;
    bankerOdd: number0;
    bankerRed3: number0;
    bankerRed4: number0;
    bankerWhite3: number;
    bankerWhite4: number;
    even: number;
    odd: number;
    player: number;
    playerEven: number;
    playerOdd: number;
    playerRed3: number;
    playerRed4: number;
    playerWhite3: number;
    playerWhite4: number;
    tie: number;
}

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}

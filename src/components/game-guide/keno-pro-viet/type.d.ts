import { OddsProMaxProps, ChoicesMaxBetProMaxProps } from "./../keno-pro-max/type.d";
import { GameConfigsBaseProps } from "../type";

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProMaxProps;
    choices_maxbet: ChoicesMaxBetProMaxProps;
}

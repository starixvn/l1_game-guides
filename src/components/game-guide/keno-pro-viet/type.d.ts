import { OddsProMaxProps, ChoicesMaxBetProMaxProps } from "./../keno-pro-max/type.d";
import { GameConfigsBaseProps } from "../type";

export interface OddsProps extends OddsProMaxProps {}

export interface ChoicesMaxBetProps extends ChoicesMaxBetProMaxProps {}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}

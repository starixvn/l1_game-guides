export interface GameConfigProps extends GameConfigsBaseProps {
    odds: object;
    coin: number;
    level: numer;
    betMultiplier: number;
    coinValues: number[];
    betLevels: number[];
}

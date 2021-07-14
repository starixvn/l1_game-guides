export interface OddsProps {
    [number]: number[][];
}

export type JackpotProps = {
    winningRatio: number;
};

export interface GameConfigProps {
    odds: OddsProps;
    jackpot: JackpotProps;
    stakeLevels: number[];
}

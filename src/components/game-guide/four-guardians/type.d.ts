export type JackpotProps = {
    winningRatio: number;
};

export interface GameConfigProps {
    odds: number[][];
    jackpot: JackpotProps;
    stakeLevels: number[];
}

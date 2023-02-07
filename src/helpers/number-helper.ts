const numberWithCommas = (number: number, toFixed = 2) => {
    return number.toLocaleString("en-US", { maximumFractionDigits: toFixed });
};

const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatOdds = (value: number | undefined, fractionFormat = false) => {
    return fractionFormat && value ? `${numberWithCommas(value - 1)}:1` : `1:${value}`;
};

const checkIsInteger = (number: string | number | object) => {
    return Number.isInteger(+number) ? +number : 0;
};

export { numberWithCommas, randomInteger, formatOdds, checkIsInteger };

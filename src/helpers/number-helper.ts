const numberWithCommas = (number: number, toFixed = 2) => {
    return number.toLocaleString("en-US", { maximumFractionDigits: toFixed });
};

const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatOdds = (value: number | undefined, fractionFormat = false) => {
    return fractionFormat && value ? `${numberWithCommas(value - 1)}:1` : `1:${value}`;
};

const formatOddsNotTwoDot = (value: number | undefined, fractionFormat = false) => {
    return fractionFormat && value ? `${numberWithCommas(value - 1)}` : `${value}`;
};

const checkIsInteger = (number: string | number | object) => {
    return Number.isInteger(+number) ? +number : 0;
};

const formatCommasReg = /\B(?=(\d{3})+(?!\d))/g;
const numberWithCommasAndSuffix = (number: number, toFixed = 1, noZeroSuffix = true) => {
    if (number) {
        let trimZeroNumber: string;
        if (noZeroSuffix) {
            trimZeroNumber = `${+(+number).toFixed(toFixed)}`;
        } else {
            trimZeroNumber = (+number).toFixed(toFixed);
        }
        return trimZeroNumber.replace(formatCommasReg, ",");
    }

    return "0";
};
export { checkIsInteger, formatOdds, numberWithCommas, numberWithCommasAndSuffix, randomInteger, formatOddsNotTwoDot };

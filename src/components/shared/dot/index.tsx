const renderDot = (data: boolean[]) => {
    return data.map((isRed, index) => {
        if (isRed) {
            return <span key={index} className="dot-odd"></span>;
        } else {
            return <span key={index} className="dot-even"></span>;
        }
    });
};

export const renderFourRed = () => {
    return (
        <td>
            <div className="d-flex justify-content-center">{renderDot([true, true, true, true])}</div>
        </td>
    );
};
export const renderFourWhite = () => {
    return (
        <td>
            <div className="d-flex justify-content-center">{renderDot([false, false, false, false])}</div>
        </td>
    );
};
export const renderOneRedThreeWhite = () => {
    return (
        <td>
            <div className="d-flex justify-content-center">{renderDot([true, false, false, false])}</div>
        </td>
    );
};
export const renderTwoRedTwoWhite = () => {
    return (
        <td>
            <div className="d-flex justify-content-center">{renderDot([true, true, false, false])}</div>
        </td>
    );
};
export const renderThreeRedOneWhite = () => {
    return (
        <td>
            <div className="d-flex justify-content-center">{renderDot([true, true, true, false])}</div>
        </td>
    );
};

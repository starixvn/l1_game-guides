import React from "react";
import { OddsProps } from "../../../game-guide/se-die/type";
import { OddsProps as OddsPropsSpecial } from "../../../game-guide/se-die-special/type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../dot";

export const renderStatisticalTable = () => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>Kết Quả</th>
                        <th>Mô Tả</th>
                        <th>Ký Hiệu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4 đỏ</td>
                        {renderFourRed()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">4</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4 trắng</td>
                        {renderFourWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">0</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2 đỏ, 2 trắng</td>
                        {renderTwoRedTwoWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">2</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3 đỏ, 1 trắng</td>
                        {renderThreeRedOneWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-odd">3</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1 đỏ, 3 trắng</td>
                        {renderOneRedThreeWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-odd">1</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export const renderPayoutDataOnTable = (odds: OddsProps | OddsPropsSpecial) => {
    return (
        <>
            <tr>
                <td rowSpan={2}>Lẻ</td>
                <td>3 đỏ, 1 trắng</td>
                {renderThreeRedOneWhite()}
                <td rowSpan={5}>1:{odds.even}</td>
            </tr>
            <tr>
                <td>1 đỏ, 3 trắng</td>
                {renderOneRedThreeWhite()}
            </tr>
            <tr>
                <td rowSpan={3}>Chẵn</td>
                <td>4 đỏ</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 trắng</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>2 đỏ, 2 trắng</td>
                {renderTwoRedTwoWhite()}
            </tr>
        </>
    );
};

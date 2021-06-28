import React from "react";

export const renderFiveElements = () => {
    return (
        <>
            <span className="font-weight-medium">Cược Ngũ hành (Kim/Mộc/Thủy/Hỏa/Thổ)</span>
            <ul className="desc">
                <li>
                    <strong>Kim:</strong> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 210 đến 695
                </li>
                <li>
                    <strong>Mộc:</strong> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 696 đến 763
                </li>
                <li>
                    <strong>Thuỷ:</strong> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 764 đến 855
                </li>
                <li>
                    <strong>Hỏa:</strong> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 856 đến 923
                </li>
                <li>
                    <strong>Thổ:</strong> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 924 đến 1410
                </li>
            </ul>
        </>
    );
};

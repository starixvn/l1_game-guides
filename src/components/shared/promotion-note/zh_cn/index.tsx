export const renderPromotionNoteCN = (isInPromotionTime = false) => {
    return (
        <>
            {isInPromotionTime && (
                <li>
                    <strong>注</strong>: 投注赔率可以在促销期间在游戏桌上更改和更新。
                </li>
            )}
        </>
    );
};

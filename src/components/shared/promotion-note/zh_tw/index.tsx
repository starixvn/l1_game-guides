export const renderPromotionNoteTW = (isInPromotionTime = false) => {
    return (
        <>
            {isInPromotionTime && (
                <li>
                    <strong>注</strong>: 投注賠率可以在促銷期間在遊戲桌上更改和更新。
                </li>
            )}
        </>
    );
};

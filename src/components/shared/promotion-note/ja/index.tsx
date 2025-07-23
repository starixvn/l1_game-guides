export const renderPromotionNoteJA = (isInPromotionTime = false) => {
    return (
        <>
            {isInPromotionTime && (
                <li>
                    <strong>ご注意</strong>: プロモーション期間中、ゲームテーブルでベットオッズが変更・更新される場合があります。
                </li>
            )}
        </>
    );
}; 
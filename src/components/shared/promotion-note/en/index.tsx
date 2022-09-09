export const renderPromotionNoteEN = (isInPromotionTime = false) => {
    return (
        <>
            {isInPromotionTime && (
                <li>
                    <strong>Please note</strong>: The payouts can be changed and updated on the game table during the promotion period.
                </li>
            )}
        </>
    );
};

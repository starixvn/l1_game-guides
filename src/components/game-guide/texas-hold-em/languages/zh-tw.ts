import { TexasHoldemLanguage } from "./types";

const steps = {
    one: "<b>第一步</b>: 按下 Deal 按鈕後復制 MD5 鑰匙。",
    two: "<b>第二步</b>: 按呼叫按鈕後復制結果。",
    three: "<b>第三步</b>: 轉到 {0} 並將結果粘貼到 MD5 框中。",
    four: "<b>第四步</b>: 按 <b>“hash darling, hash!</b>” 按鈕，並將新生成的 <strong>MD5 checksum</strong> 字符串與步驟 1 中的 MD5 鑰匙進行比較。",
};

export const zhTW: TexasHoldemLanguage = {
    introduction: {
        Introduction: "介紹",
        "Texas Holdem is":
            "德州撲克是世界上最受歡迎的撲克遊戲之一。\
            遊戲使用一副標準的 52 張牌（不包括王牌）進行，每輪結束後重新洗牌。可能的五張撲克牌。\
            此遊戲的目標是獲得比莊家排名更高的撲克牌。\
            使用你的兩張底牌和五張公共牌來創造最好的五張撲克手牌。",
        "In addition, a new feature": "此外，還有一項新功能",
        "MD5 (Message-Digest algorithm 5)": "MD5（消息摘要算法5）",
        "that allows the Player to": "允許玩家檢查每場比賽結果的公平性和真實性。",
    },

    gameRules: {
        "Game Rules": "遊戲規則",
        "Select the desired chip with": "選擇價值最適合您的籌碼，然後下注底注。",
        "Note, Ante bet is": "注意，底注是一個強制性選項，玩家必須在發牌前下注。",
        "Click on the Deal button to": "點擊發牌按鈕開始遊戲，閒家和莊家各獲得兩張底牌。",
        "Swap Cards": "換牌",
        "Swap Cards is": "交換卡是一項可選功能，可以打開/關閉。它允許玩家選擇在開牌之前將他的底牌與莊家的底牌交換，或者保持牌不變。",
        "Note: The Swap cards feature can": "注意：換牌功能只能在遊戲回合開始前開啟/關閉。",
        "After the two hole cards are": "在發完兩張底牌並開牌後，玩家必須決定是跟注還是棄牌。",
        FOLD: "棄牌",
        "the Player will surrender": "玩家將放棄他的牌並輸掉底注。遊戲回合結束。",
        CALL: "跟注",
        "the Player will continue playing": "玩家將繼續跟注，等於底注賭注的兩倍，並且三張公共牌（翻牌）在桌子中間正面朝上。",
        "Turn & River bet": "轉牌和河牌",
        "are additional bets": "是玩家決定是否要加註的額外投注。",
        "Turn bet": "轉牌下注",
        "before a fourth community card is dealt":
            "在第四張公共牌面朝上（轉牌）發出之前，玩家可以通過在“轉牌”選項上下注與底注相同的賭注來增加本金。",
        "River bet": "河牌注",
        "the River is the": "河牌是第五張也是最後一張公共牌。與轉牌下注類似，在發河牌之前，玩家可以選擇再下注河牌。",
        Check: "過牌",
        "To skip placing bets on Turn or River": "要跳過在轉牌或河牌上下注，只需單擊“過牌”按鈕。",
        "The two personal cards are combined with 5 community cards":
            "兩張個人牌與 5 張公共牌相結合，組成最好的五張撲克牌。如果閒家的牌好於莊家，閒家將獲勝",
        "The maximum total stake per round is": "每輪的最大總賭注為  ",
        "Note, placed bets cannot be canceled after cards are dealt": "注意，發牌後無法取消投注。",
        "Ranking Level": "排名",
        "Card Values": "牌面值",
        "The card’s value is ": "牌面值從高到低依次為：Ace (A)、King (K)、Queen (Q)、Jack (J)、10、9、8、7、6、5、4、 3 和 2。",
        "The Ace can be used as": "Ace 既可以用作最高牌也可以用作最低牌。",
        "For example: In a straight, ": "例如：在順子中，A 可以用作 A、K、Q、J，10 作為最高點數，或 5、4、3、2、A 作為最低點數。",
        "All the suits": "所有花色",
        heart: "紅心 ",
        spade: "黑桃 ",
        diamond: "方塊 ",
        "and club": "和梅花",
        "have equal value": "具有相同的價值。",
        "Hand Ranking": "手牌排名",
        "List of poker hand ranking levels from highest to lowest.": "從最高到最低的撲克手牌排名。",
        Hand: "手",
        Description: "描述",
        Example: "例子",
        "Royal Flush": "皇家同花順",
        "Ace, King, Queen, Jack, and 10 in the same suit": "A、K、Q、J、10 同花色",
        "Straight Flush": "同花順",
        "Five cards in the same suit, all in a rank sequence": "五張同花色的牌，按順序排列",
        "Four of a Kind": "四條",
        "Four cards of the same rank": "四張相同等級的牌",
        "Full House": "葫蘆",
        "Three of a Kind and a Pair": "三條和一對",
        Flush: "同花",
        "Five cards in the same suit": "五張同花色的牌",
        Straight: "順子",
        "Five cards a rank sequence": "五張牌一個等級順序",
        "Three of a Kind": "三條",
        "Three cards of the same rank": "三張相同等級的牌",
        "Two Pair": "兩隊",
        "Two pairs of different ranks": "兩對不同等級",
        Pair: "一對",
        "Two cards of the same rank": "兩張相同等級的牌",
        "High Card": "高牌",
        "Highest card when no higher hand is available": "沒有更高的牌可用時的最高牌",
        "The Poker hand consists of five cards":
            "一手撲克牌由五張牌組成。如果閒家和莊家共同贏牌，則將使用單張牌來打破平局。如果閒家手中最大的牌相同，則比較第二大的牌，以此類推。",
        Cards: "牌",
        Combination: "組合",
        Result: "結果",
        Player: "玩家",
        Dealer: "莊家",
        "Community Cards": "公共牌",
        "The Player wins": "玩家贏",
        "The Dealer wins": "莊家贏",
        "Result is a “Tie”": "和局",
    },

    payout: {
        Payout: "賠率",
        "All winning amounts are": "投注結算後，所有獲勝金額都會立即添加到您的賬戶餘額中。",
        "The winning amount is calculated": "中獎金額根據投注賠率計算。注意，支出包括初始本金。",
        "If Player’s hand beats Dealer’s hand": "如果閒家的牌勝過莊家的牌",
        "With a Three of a Kind or lower": "擁有同類三張或更小的牌",
        "the Call, Turn and River bets are won, and Ante is pushed.": "跟注、轉牌和河牌下注獲勝，底注被推。",
        "With a Straight or higher": "順子或更高",
        "All bets (Ante, Call, Turn, and River) will win.": "所有投注（底注、跟注、轉牌和河牌）都將獲勝。",
        "Payout and Bet Limit": "賠率和投注限額",
        Option: "選項",
        Odds: "賠率",
        "Bet Limit (Min-Max)": "投注限額（最小-最大）",
        "Ante (with Three of a Kind or lower)": "底注（三條或更低）",
        Push: "推",
        "Ante (with Straight or higher)": "底注（三條或更低）",
        Call: "跟注",
        Turn: "轉牌",
        River: "河牌",
    },
    md5: {
        md5Base: {
            content: {
                header: "MD5（消息摘要算法5）",
                technology: {
                    header: "MD5技術",
                    details: [
                        "MD5讓玩家可以通過第三方驗證遊戲結果的真實性和透明度。",
                        "遊戲結果將在翻牌前由系統隨機生成。",
                        "玩家可以手動檢查翻牌前生成的結果（<strong>MD5 </strong> 鑰匙）與發布結果（<strong>結果</strong>）是否匹配。",
                    ],
                },
                validation: {
                    header: "MD5 驗證",
                    details: Object.values(steps),
                },
                noted: "如果兩個字符串匹配，則證明該遊戲回合的結果是透明的，並且遊戲結果與系統在揭牌前產生的隨機結果沒有變化。",
            },
            example: {
                header: "<strong> 示例:</strong> 檢查撲克遊戲結果的真實性和透明度。",
                step1Text: steps.one,
                step2Text: steps.two,
                step3Text: steps.three,
                step4Text: steps.four,
                md5Key: "MD5 鑰匙",
                result: "結果",
                copy: "複製",
            },
        },
        md5Note: {
            title: "注意",
            line1: "從左到右，出牌順序為：閒家牌 {0}、莊家牌 {1}、五張公共牌 {2}",
            line2: "如果閒家與莊家交換了他的牌，那麼順序將是：莊家的牌 {0}，閒家的牌 {1}，以及五張公共牌。",
        },
    },
    extendTermsAndConditionsDetails: [
        `未完成的遊戲回合可以恢復，必須在玩家按下“發牌”按鈕後24小時內完成。未完成的遊戲將在24小時後自動結算。玩家的牌被視為“棄牌”。
        <ul class="detail">
            <li>如果在玩家選擇“跟注”或“棄牌”之前遊戲回合中斷 => 玩家的牌被視為“棄牌”。</li>
            <li>如果在玩家選擇“跟注”選項後遊戲回合中斷，玩家的手牌將被視為轉牌和河牌下注的“CHECK”=> 遊戲回合將照常結算。</li>
        </ul>`,
    ],
};

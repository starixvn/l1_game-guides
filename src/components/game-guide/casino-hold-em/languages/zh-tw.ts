import { ICasinoHoldTranslationResource } from "./types";

const steps = {
    one: "<b>第一步</b>: 按下 Deal 按鈕後復制 MD5 鑰匙。",
    two: "<b>第二步</b>: 按呼叫按鈕後復制結果。",
    three: "<b>第三步</b>: 轉到 {0} 並將結果粘貼到 MD5 框中。",
    four: "<b>第四步</b>: 按 <b>“hash darling, hash!</b>” 按鈕，並將新生成的 <strong>MD5 checksum</strong> 字符串與步驟 1 中的 MD5 鑰匙進行比較。",
};

const Hand = {
    royalFlush: "皇家同花順",
    straightFlush: "同花順",
    fourOfAKind: "四條",
    fullHouse: "葫蘆",
    flush: "同花",
    straight: "順子",
    threeOfAKind: "三條",
    twoPair: "兩對",
    pair: "一對",
    highCard: "高牌",
    PairOfAces: "一對A",
};

export const tw: ICasinoHoldTranslationResource = {
    common: {
        hand: Hand,
        player: "玩家",
        dealer: "莊家",
        communityCards: "公共牌",
        cards: "牌",
        combination: "組合",
        result: "結果",
        handResult: "牌局結果",
        odds: "賠率",
        example: "例子",
    },
    introduction: {
        title: "介紹",
        description:
            "Casino Hold'em是德州撲克的一種變體。遊戲使用標準的 52 張牌（不包括王牌）進行，每輪結束後洗牌。玩家將與莊家對戰，此遊戲的目標是使用兩張底牌和五張公共牌的組合來獲得最好的五張撲克手牌來擊敗莊家。",
        md5: {
            sentence1: "此外，一項新功能——",
            sentence2: "MD5（消息摘要算法5）",
            sentence3: "允許玩家檢查每場比賽結果的公平性和真實性。",
        },
    },
    gameRule: {
        title: "遊戲規則",
        description: {
            line1: "選擇最適合您的籌碼並將籌碼放在底注或 AA 紅利投注上。",
            line2: "注意，底注是一個強制性選項，玩家必須在發牌前下注。",
            line3: "點擊發牌按鈕開始遊戲回合，閒家和莊家各獲得兩張底牌。",
            line4: "三張公共牌（翻牌）在桌子中間面朝上發。",
        },
        swapCard: {
            title: "換牌",
            description:
                "交換卡是一項可選功能，可以打開/關閉。它允許玩家選擇在牌面揭開之前將自己的兩張底牌與莊家的牌交換，或者保留底牌不變。",
        },
        note: "注意：換牌功能只能在遊戲回合開始前開啟/關閉。",
        foldCall: {
            description: "在發完前三張公共牌後，玩家必須決定是跟注還是棄牌。",
            fold: "<strong>棄牌</strong>: 玩家將放棄他的牌並輸掉底注和可選的 AA 賭注。遊戲回合結束。",
            call: "<strong>跟注</strong>: 玩家將繼續下注額外的跟注，等於底注的兩倍。",
        },
        afterClick: "點擊 跟注 按鈕後，最後兩張公共牌被發出，閒家和莊家都將顯示他們的牌面值。",
        theTwo: "兩張個人牌與 5 張公共牌相結合，組成最好的五張撲克牌。",
        thePlayer: "如果閒家的牌比莊家好，閒家將贏得底注。",
        maximumTotal: "每輪的最大總賭注為 {0}。注意，發牌後無法取消投注。",
        rankingLevel: "排名等級",
        cardValues: {
            title: "牌面值",
            description: {
                line1: "牌面值從高到低依次為：Ace (A)、King (K)、Queen (Q)、Jack (J)、10、9、8、7、6、5、4、 3 和 2。",
                line2: "Ace既可以作為最高牌也可以作為最低牌，因此可以在A、K、Q、J、10作為最高值或5、4、3、2、A作為最低值的順子中使用。",
                line3: "所有花色 - 紅心 ({0})、黑桃 ({1})、方塊 ({2}) 和梅花 ({3}) 具有相同的價值。",
            },
        },
        handRanking: {
            title: "手牌排名",
            line1: "從最高到最低的撲克手排名列表",
            table: {
                title: {
                    hand: "手",
                    description: "描述",
                    example: "例子",
                },
                description: {
                    royalFlush: "A、K、Q、J、10 同花色",
                    straightFlush: "五張同花色的牌，按順序排列",
                    fourOfAKind: "四張相同等級的牌",
                    fullHouse: "三條和一对",
                    flush: "五張同花色的牌",
                    straight: "五張牌一個等級順序",
                    threeOfAKind: "三张相同等级的牌",
                    twoPair: "兩對不同等級",
                    pair: "兩張相同等級的牌",
                    highCard: "沒有更高的牌可用時的最高牌",
                },
            },
            line2: "一手撲克牌由五張牌組成。如果閒家和莊家共同贏牌，則將使用單張牌來打破平局。 如果玩家手中最大的牌相等，則比較第二大的牌，依此類推。",
            example: {
                player: "玩家贏",
                dealer: "莊家贏",
                result: "和局",
            },
        },
        bettingOption: "投注選項",
        anteBet: {
            title: "底注",
            description: {
                line1: "“底注”是玩家在發牌前必須下注的強制性選項。",
                line2: "如果玩家可以使用兩張底牌和五張公共牌的組合來打敗莊家的手牌，那麼玩家將贏得底注。",
            },
        },
        aaBet: {
            title: "AA投注",
            description: {
                line1: "稱為“AA”的附加賭注是基於玩家的兩張牌和前三張公共牌的撲克價值。無論莊家有什麼牌，如果閒家能拿到一對 A 或更好的牌，他將贏得“AA”賭注。",
                line2: "“AA”投注與底注結果無關。玩家可能會輸掉遊戲，但“AA”投注可能會贏，反之亦然。",
                line3: "注意，如果玩家選擇“棄牌”，他將輸掉底注和可選的“AA”賭注。",
            },
        },
        callBet: {
            title: "跟注",
            description: {
                line1: "跟注是玩家決定是否要繼續遊戲回合的額外投注。跟注金額是原底注的兩倍。",
            },
        },
        handQualification: {
            title: "手牌資格",
            description: "莊家必須至少有一對四才能組成合格牌。如果莊家未能獲得資格，則根據投注賠率表支付底注，同時不接受任何跟注",
            table: {
                title: {
                    dealer: "發牌者有資格",
                    DealerDoes: "發牌員不合格",
                },
                col1: {
                    playerBeat: "玩家擊敗莊家",
                    player: "玩家沒有擊敗莊家",
                    playerAndDealer: "玩家和莊家是平手的",
                },
                col2: {
                    playerWins: "玩家同時贏得底注和跟注。",
                    playerLoses: "玩家輸掉底注和跟注。",
                    bothThe: "底注和跟注被推送",
                },
                col3: {
                    playerWins: "玩家贏得底注，跟注被推送",
                },
            },
        },
    },
    payOuts: {
        title: "賠付表",
        description: {
            line1: "中獎金額根據投注賠率計算。",
            line2: "注意，支出包括初始本金。",
            line3: "投注結算後，所有獲勝金額都會立即添加到您的賬戶餘額中。",
        },
        anteBet: "底注",
        callBet: {
            title: "跟注",
            description: {
                line1: "只有當莊家有資格並且您擊敗了他們的牌時，玩家才會贏得跟注。",
                line2: "投注賠率 ",
            },
        },
        aaBet: "AA 賭注",
    },
    betLimit: {
        title: "投注限額",
        table: {
            title: {
                options: "選項",
                betLimit: "投注限額（最小-最大）",
            },
            content: {
                ante: "賭注",
                call: "跟注",
            },
        },
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
                        "玩家可以手動檢查翻牌前生成的結果（<strong>MD5 </strong> 鑰匙）和發布的結果（<strong>結果</strong>）是否匹配。",
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
        "未完成的遊戲回合可以恢復，必須在玩家按下“發牌”按鈕後24小時內完成。未完成的遊戲將在24小時後自動結算。玩家的牌被視為“棄牌”。",
    ],
};

import { ICasinoHoldTranslationResource } from "./types";
const steps = {
    one: "<b>第一步</b>: 按下 Deal 按钮后复制 MD5 钥匙。",
    two: "<b>第二步</b>: 按呼叫按钮后复制结果。",
    three: "<b>第三步</b>: 转到 {0} 并将结果粘贴到 MD5 框中。",
    four: "<b>第四步</b>: 按 <b>“hash darling, hash!</b>” 按钮，并将新生成的 <strong>MD5 checksum</strong> 字符串与步骤 1 中的 MD5 钥匙进行比较。",
};
const Hand = {
    royalFlush: "皇家同花顺",
    straightFlush: "同花顺",
    fourOfAKind: "四条",
    fullHouse: "葫芦",
    flush: "同花",
    straight: "顺子",
    threeOfAKind: "三条",
    twoPair: "两对",
    pair: "一对",
    highCard: "高牌",
    PairOfAces: "一对A",
};

export const cn: ICasinoHoldTranslationResource = {
    common: {
        hand: Hand,
        player: "玩家",
        dealer: "庄家",
        communityCards: "公共牌",
        cards: "牌",
        combination: "组合",
        result: "结果",
        handResult: "牌局结果",
        odds: "赔率",
        example: "例子",
    },
    introduction: {
        title: "介绍",
        description:
            "Casino Hold'em是德州扑克的一种变体。游戏使用标准的 52 张牌（不包括王牌）进行，每轮结束后洗牌。玩家将与庄家对战，此游戏的目标是使用两张底牌和五张公共牌的组合来获得最好的五张扑克手牌来击败庄家。",
        md5: {
            sentence1: "此外，一项新功能——",
            sentence2: "MD5（消息摘要算法5）",
            sentence3: "允许玩家检查每场比赛结果的公平性和真实性。",
        },
    },
    gameRule: {
        title: "游戏规则",
        description: {
            line1: "选择最适合您的筹码并将筹码放在底注或 AA 红利投注上。",
            line2: "注意，底注是一个强制性选项，玩家必须在发牌前下注。",
            line3: "点击发牌按钮开始游戏回合，闲家和庄家各获得两张底牌。",
            line4: "三张公共牌（翻牌）在桌子中间面朝上发。",
        },
        swapCard: {
            title: "换牌",
            description:
                "交换卡是一项可选功能，可以打开/关闭。它允许玩家选择在牌面揭开之前将自己的两张底牌与庄家的牌交换，或者保留底牌不变。",
        },
        note: "注意：换牌功能只能在游戏回合开始前开启/关闭。",
        foldCall: {
            description: "在发完前三张公共牌后，玩家必须决定是跟注还是弃牌。",
            fold: "<strong>弃牌</strong>: 玩家将放弃他的牌并输掉底注和可选的 AA 赌注。游戏回合结束。",
            call: "<strong>跟注</strong>: 玩家将继续下注额外的跟注，等于底注的两倍。",
        },
        afterClick: "点击 跟注 按钮后，最后两张公共牌被发出，闲家和庄家都将显示他们的牌面值。",
        theTwo: "两张个人牌与 5 张公共牌相结合，组成最好的五张扑克牌。",
        thePlayer: "如果闲家的牌比庄家好，闲家将赢得底注。",
        maximumTotal: "每轮的最大总赌注为 {0}。注意，发牌后无法取消投注。",
        rankingLevel: "排名等级",
        cardValues: {
            title: "牌面值",
            description: {
                line1: "牌面值从高到低依次为：Ace (A)、King (K)、Queen (Q)、Jack (J)、10、9、8、7、6、5、4、 3 和 2。",
                line2: "Ace既可以作为最高牌也可以作为最低牌，因此可以在A、K、Q、J、10作为最高值或5、4、3、2、A作为最低值的顺子中使用。",
                line3: "所有花色 - 红心 ({0})、黑桃 ({1})、方块 ({2}) 和梅花 ({3}) 具有相同的价值。",
            },
        },
        handRanking: {
            title: "手牌排名",
            line1: "从最高到最低的扑克手排名列表",
            table: {
                title: {
                    hand: "手",
                    description: "描述",
                    example: "例子",
                },
                description: {
                    royalFlush: "A、K、Q、J、10 同花色",
                    straightFlush: "五张同花色的牌，按顺序排列",
                    fourOfAKind: "四张相同等级的牌",
                    fullHouse: "三条和一对",
                    flush: "五张同花色的牌",
                    straight: "五张牌一个等级顺序",
                    threeOfAKind: "三张相同等级的牌",
                    twoPair: "两对不同等级",
                    pair: "两张相同等级的牌",
                    highCard: "没有更高的牌可用时的最高牌",
                },
            },
            line2: "一手扑克牌由五张牌组成。如果闲家和庄家共同赢牌，则将使用单张牌来打破平局。如果玩家手中最大的牌相等，则比较第二大的牌，依此类推。",
            example: {
                player: "玩家赢",
                dealer: "庄家赢",
                result: "和局",
            },
        },
        bettingOption: "投注选项",
        anteBet: {
            title: "底注",
            description: {
                line1: "“底注”是玩家在发牌前必须下注的强制性选项。",
                line2: "如果玩家可以使用两张底牌和五张公共牌的组合来打败庄家的手牌，那么玩家将赢得底注。",
            },
        },
        aaBet: {
            title: "AA投注",
            description: {
                line1: "称为“AA”的附加赌注是基于玩家的两张牌和前三张公共牌的扑克价值。无论庄家有什么牌，如果闲家能拿到一对 A 或更好的牌，他将赢得“AA”赌注。",
                line2: "“AA”投注与底注结果无关。玩家可能会输掉游戏，但“AA”投注可能会赢，反之亦然。",
                line3: "注意，如果玩家选择“弃牌”，他将输掉底注和可选的“AA”赌注。",
            },
        },
        callBet: {
            title: "跟注",
            description: {
                line1: "跟注是玩家决定是否要继续游戏回合的额外投注。跟注金额是原底注的两倍。",
            },
        },
        handQualification: {
            title: "手牌资格",
            description: "庄家必须至少有一对四才能组成合格牌。如果庄家未能获得资格，则根据投注赔率表支付底注，同时不接受任何跟注",
            table: {
                title: {
                    dealer: "发牌者有资格",
                    DealerDoes: "发牌员不合格",
                },
                col1: {
                    playerBeat: "玩家击败庄家",
                    player: "玩家没有击败庄家",
                    playerAndDealer: "玩家和庄家是平手的",
                },
                col2: {
                    playerWins: "玩家同时赢得底注和跟注。",
                    playerLoses: "玩家输掉底注和跟注。",
                    bothThe: "底注和跟注被推送",
                },
                col3: {
                    playerWins: "玩家赢得底注，跟注被推送",
                },
            },
        },
    },
    payOuts: {
        title: "赔付表",
        description: {
            line1: "中奖金额根据投注赔率计算。",
            line2: "注意，支出包括初始本金。",
            line3: "投注结算后，所有获胜金额都会立即添加到您的账户余额中。",
        },
        anteBet: "底注",
        callBet: {
            title: "跟注",
            description: {
                line1: "只有当庄家有资格并且您击败了他们的牌时，玩家才会赢得跟注。",
                line2: "投注赔率 ",
            },
        },
        aaBet: "AA 赌注",
    },
    betLimit: {
        title: "投注限额",
        table: {
            title: {
                options: "选项",
                betLimit: "投注限额（最小-最大）",
            },
            content: {
                ante: "赌注",
                call: "跟注",
            },
        },
    },
    md5: {
        md5Base: {
            content: {
                header: "MD5（消息摘要算法5）",
                technology: {
                    header: "MD5技术",
                    details: [
                        "MD5让玩家可以通过第三方验证游戏结果的真实性和透明度。",
                        "游戏结果将在翻牌前由系统随机生成。",
                        "玩家可以手动检查翻牌前生成的结果（<strong>MD5</strong> 钥匙）和发布的结果（<strong>结果</strong>）是否匹配。",
                    ],
                },
                validation: {
                    header: "MD5 验证",
                    details: Object.values(steps),
                },
                noted: "如果两个字符串匹配，则证明该游戏回合的结果是透明的，并且游戏结果与系统在揭牌前产生的随机结果没有变化。",
            },
            example: {
                header: "<strong>示例:</strong> 检查扑克游戏结果的真实性和透明度。",
                step1Text: steps.one,
                step2Text: steps.two,
                step3Text: steps.three,
                step4Text: steps.four,
                md5Key: "MD5 钥匙",
                result: "结果",
                copy: "复制",
            },
        },
        md5Note: {
            title: "注意",
            line1: "从左到右，出牌顺序为：闲家牌 {0}、庄家牌 {1}、五张公共牌 {2}",
            line2: "如果闲家与庄家交换了他的牌，那么顺序将是：庄家的牌 {0}，闲家的牌 {1}，以及五张公共牌。",
        },
    },
    extendTermsAndConditionsDetails: [
        "未完成的游戏回合可以恢复，必须在玩家按下“发牌”按钮后24小时内完成。未完成的游戏将在24小时后自动结算。玩家的牌被视为“弃牌”。",
    ],
};

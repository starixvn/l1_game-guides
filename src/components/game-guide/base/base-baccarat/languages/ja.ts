import { baseTermAndConditionJa } from "../../terms-and-conditions/languages/ja";
import { IBaseBaccaratResources } from "./types";

export const baseBaccaratResourcesJa: IBaseBaccaratResources = {
    introduction: {
        header: "",
        content: "",
    },
    gameRules: {
        header: "ゲームルール",
        getDetails(environment: string | undefined, maxBetMain: number | string) {
            return [];
        },
        table: {
            header: {
                options: "オプション",
                descriptions: "説明",
            },
            contents: [
                {
                    choice: "プレイヤー",
                    rule: "プレイヤーの合計ポイントがバンカーの合計ポイントより高い場合、プレイヤーの手が勝ちます。",
                },
                {
                    choice: "バンカー",
                    rule: "バンカーの合計ポイントがプレイヤーの合計ポイントより高い場合、バンカーの手が勝ちます。",
                },
                {
                    choice: "タイ",
                    rule: "プレイヤーとバンカーの両方の手が同じ合計ポイントで終了した場合、プレイヤーが勝ちます。",
                },
                {
                    choice: "プレイヤーペア",
                    rule: "プレイヤーの最初の2枚のカードがペアの場合、スートに関係なくプレイヤーが勝ちます。",
                },
                {
                    choice: "バンカーペア",
                    rule: "バンカーの最初の2枚のカードがペアの場合、スートに関係なくプレイヤーが勝ちます。",
                },
                {
                    choice: "ビッグ",
                    rule: "1ラウンドで配られたカードの総数が5枚または6枚の場合、プレイヤーが勝ちます。",
                },
                {
                    choice: "スモール",
                    rule: "1ラウンドで配られたカードの総数が4枚の場合、プレイヤーが勝ちます。",
                },
            ],
        },
    },
    pointRules: {
        header: "ポイント計算ルール",
        descriptions: {
            paragraph1: {
                cardPointValues: "カードのポイント値：",
                details: [
                    "カード（2から9）は表面の値でカウントされます。",
                    "10または絵札（ジャック、クイーン、キング）の値は0で、エースの値は1です。",
                ],
            },
            paragraph2:
                "合計ポイントが9を超える場合、合計の最初の桁を削除し、2番目の桁が手の値になります。",
        },
        examples: {
            firstTwoCard: "最初の2枚のカード",
            thirdCard: "3枚目のカード",
            totals: "合計",
            basedTotal: "バカラルールに基づく合計ポイント",
        },
    },
    thirdCardRules: {
        header: "3枚目のカードルール",
        descriptions: [
            "3枚目のカードはゲームの厳格なルールに従って配られます。",
            "どちらかの手の最初の2枚のカードの合計ポイントが8または9の場合、これは「ナチュラル」と呼ばれ、それ以上のカードは配られず、プレイヤーとバンカーの両方がスタンドします。",
        ],
        playerHand: {
            header: "プレイヤーの手のルール",
            cardsTotal: "プレイヤーの最初の2枚のカードの合計",
            action: "アクション",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2, 3, 4, 5",
                    action: "3枚目のカードを引きます。",
                },
                {
                    twoCardsTotal: "6または7",
                    action: "プレイヤーは常にスタンドします。",
                },
                {
                    twoCardsTotal: "8または9",
                    action: "「ナチュラル」でそれ以上のカードは配られず、プレイヤーとバンカーの両方がスタンドします。",
                },
            ],
        },
        bankerHand: {
            header: "バンカーの手のルール",
            firstDescription: "- プレイヤーの手が3枚目のカードを取得した場合、バンカーは以下のルールに従って3枚目のカードを引きます：",
            cardsTotal: "バンカーの最初の2枚のカードの合計",
            action: "プレイヤーの3枚目のカードのポイント値が以下の場合、バンカーは引きます：",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2",
                    action: "バンカーは常に3枚目のカードを引きます。",
                },
                {
                    twoCardsTotal: "3",
                    action: "ポイント値が1, 2, 3, 4, 5, 6, 7, 9, 0（8以外）。",
                },
                {
                    twoCardsTotal: "4",
                    action: "ポイント値が2, 3, 4, 5, 6, 7。",
                },
                {
                    twoCardsTotal: "5",
                    action: "ポイント値が4, 5, 6, 7。",
                },
                {
                    twoCardsTotal: "6",
                    action: "ポイント値が6または7。",
                },
                {
                    twoCardsTotal: "7",
                    action: "バンカーは常にスタンドします。",
                },
                {
                    twoCardsTotal: "8または9",
                    action: "「ナチュラル」でそれ以上のカードは配られず、プレイヤーとバンカーの両方がスタンドします。",
                },
            ],
            secondDescription: [
                "プレイヤーの最初の2枚のカードの合計ポイントが6または7の場合、バンカーは合計6または7でスタンドし、合計5以下で引きます。",
            ],
        },
    },
    payouts: {
        header: "配当",
        descriptions: {
            details: [
                "勝金額はベットオッズに従って計算されます。",
                "配当には初期賭け金が含まれます。",
                "すべての勝金額は、ベットが決済されるとすぐにアカウント残高に追加されます。",
            ],
            noted: "<strong>注意：</strong>結果が引き分けの場合、プレイヤーとバンカーへのすべてのベットは返金されます。",
            options: "オプション",
            odds: "オッズ",
            betLimit: "ベット制限</br>（最小 - 最大）",
            player: "プレイヤー",
            banker: "バンカー",
            big: "ビッグ",
            small: "スモール",
            tie: "タイ",
            playerPair: "プレイヤーペア",
            bankerPair: "バンカーペア",
        },
    },
    termsAndConditions: baseTermAndConditionJa,
}; 
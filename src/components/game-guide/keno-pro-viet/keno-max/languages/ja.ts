import { baseTermAndConditionJa } from "../../../base/terms-and-conditions/languages/ja";
import { IKenoTranslationResource } from "./types";
export const ja: IKenoTranslationResource = {
    introduction: {
        title: "紹介",
        description:
            "Mega Keno / Mega Keno 2 / Keno North / Keno South / Keno West / Keno Eastは80個のボールを使用するRNG Kenoです。1から80までの番号が付けられた80個のボールから20個のボールがランダムに抽選されます。プレイヤーはゲームテーブルに表示されている1つまたは複数のベットオプションに賭けます。抽選された20個の番号ボールの合計がプレイヤーの勝敗を決定します。",
    },
    gameRules: {
        title: "ゲームルール",
        description: {
            lines: [
                "すべてのベットはベット時間が終了する前に配置する必要があります。注意：配置されたベットはキャンセルできません。",
                "ベット時間が終了すると、結果が表示されます。",
            ],
            maximum: "ラウンドあたりの最大総賭け金は{0}です",
            otherLine: undefined,
        },
    },
    bettingOptions: {
        title: "ベットオプション",
        bigSmall: {
            title: "大/小",
            descriptions: [
                "<b>大:</b> 抽選された20個の番号ボールの合計が >= 811",
                "<b>小:</b> 抽選された20個の番号ボールの合計が <= 810",
            ],
            winningText: "大に賭けたプレイヤーが勝利します。",
        },
        oddEven: {
            title: "奇数/偶数",
            descriptions: [
                "<b>奇数:</b> 抽選された20個の番号ボールの合計が奇数です。",
                "<b>偶数:</b> 抽選された20個の番号ボールの合計が偶数です。",
            ],
            winningText: "偶数に賭けたプレイヤーが勝利します。",
        },
        fiveElement: {
            title: "五行（金、木、水、火、土）",
            descriptions: [
                "<b>金:</b> 抽選された20個の番号ボールの合計が210から695の範囲です。",
                "<b>木:</b> 抽選された20個の番号ボールの合計が696から763の範囲です。",
                "<b>水:</b> 抽選された20個の番号ボールの合計が764から855の範囲です。",
                "<b>火:</b> 抽選された20個の番号ボールの合計が856から923の範囲です。",
                "<b>土:</b> 抽選された20個の番号ボールの合計が924から1410の範囲です。",
            ],
            winningText: "木に賭けたプレイヤーが勝利します。",
        },
        example: {
            description: "<b>例:</b> 80個の番号ボールからランダムに抽選された20個の番号ボールのセット",
            drawResult: "抽選結果",
            totalSum: "合計",
        },
    },
    payouts: {
        title: "配当",
        descriptions: [
            "勝利金額はベットオッズに従って計算されます。",
            "配当には初期賭け金が含まれます。",
            "ベットが決済されると、すべての勝利金額は即座にアカウント残高に追加されます。",
        ],
        options: "オプション",
        odds: "オッズ",
        betLimit: "ベット制限",
        min: "最小",
        max: "最大",
        big: "大",
        small: "小",
        odd: "奇数",
        even: "偶数",
        gold: "金",
        wood: "木",
        water: "水",
        fire: "火",
        earth: "土",
    },
    md5: {
        image1: "/static/images/mega-keno/md5_step1_ja.png",
        image2: "/static/images/mega-keno/md5_step2_ja.png",
        note: "注意: 363はゲーム結果の合計ポイントです。",
    },
    termsAndConditions: baseTermAndConditionJa,
}; 
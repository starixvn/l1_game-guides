import { baseTermAndConditionJa } from "../../../base/terms-and-conditions/languages/ja";
import { IKenoTranslationResource } from "../../keno-max/languages/types";

export const ja: IKenoTranslationResource = {
    introduction: {
        title: "紹介",
        description:
            "Keno Mini / Keno Mini 2は40個のボールを使用するRNG Kenoです。1から40までの番号が付けられた40個のボールから10個のボールがランダムに抽選されます。プレイヤーはゲームテーブルに表示されている1つまたは複数のベットオプションに賭けます。抽選された10個の番号ボールの合計がプレイヤーの勝敗を決定します。",
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
                "<b>大:</b> 抽選された10個の番号ボールの合計が >= 206",
                "<b>小:</b> 抽選された10個の番号ボールの合計が <= 205",
            ],
            winningText: "小に賭けたプレイヤーが勝利します。",
        },
        oddEven: {
            title: "奇数/偶数",
            descriptions: [
                "<b>奇数:</b> 抽選された10個の番号ボールの合計が奇数です。",
                "<b>偶数:</b> 抽選された10個の番号ボールの合計が偶数です。",
            ],
            winningText: "奇数に賭けたプレイヤーが勝利します。",
        },
        fiveElement: {
            title: "五行（金、木、水、火、土）",
            descriptions: [
                "<b>金:</b> 抽選された10個の番号ボールの合計が55から163の範囲です。",
                "<b>木:</b> 抽選された10個の番号ボールの合計が164から187の範囲です。",
                "<b>水:</b> 抽選された10個の番号ボールの合計が188から222の範囲です。",
                "<b>火:</b> 抽選された10個の番号ボールの合計が223から246の範囲です。",
                "<b>土:</b> 抽選された10個の番号ボールの合計が247から355の範囲です。",
            ],
            winningText: "火に賭けたプレイヤーが勝利します。",
        },
        example: {
            description: "<b>例:</b> 40個の番号ボールからランダムに抽選された10個の番号ボールのセット",
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
        image1: "/static/images/keno-mini/md5_step1_ja.png",
        image2: "/static/images/keno-mini/md5_step2_ja.png",
        note: "注意: 237はゲーム結果の合計ポイントです。",
    },
    termsAndConditions: baseTermAndConditionJa,
}; 
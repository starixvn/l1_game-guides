import { IPowerKenoTranslationResource } from "./types";

export const ja: IPowerKenoTranslationResource = {
    common: {
        bettypes: "ベットタイプ",
        options: "オプション",
        teamBlueRed: "ブルーチーム/レッドチーム",
        sumBigSmall: "合計大/小",
        sumEvenOdd: "合計偶数/奇数",
        teamBlueBigSmall: "ブルーチーム大/小",
        teamRedBigSmall: "レッドチーム大/小",
        teamBlue: "ブルーチーム",
        teamRed: "レッドチーム",
        big: "大",
        small: "小",
        odd: "奇数",
        even: "偶数",
    },
    main: {
        introduction: "紹介",
        description:
            "{0}は2組の数字で構成されており、1組は「ブルーチーム」、もう1組は「レッドチーム」で、それぞれ80個の数字（01から80）があります。システムは各チームに対して20個の数字（重複なし）をランダムに抽選します。このゲームの目的は、抽選された数字の合計スコアを予測することです。",
    },
    gameRule: {
        title: "ゲームルール",
        details: [
            "快適に賭けられる金額を確実に賭けてください。",
            "プレイヤーはゲームテーブルに表示されている1つまたは複数のベットオプションに賭けることができます。",
            "すべてのベットはベット時間が終了する前に配置する必要があります。注意：配置されたベットはキャンセルできません。",
            "ラウンドあたりの最大総賭け金は{0}です",
        ],
        bettingOptions: {
            winningConditions: "勝利条件",
            teamBlueDescription:
                "ブルーチームの合計ポイントがレッドチームより大きい場合、プレイヤーが勝利します。<br />+ 両チームの合計ポイントが等しい場合、すべてのベットは返金されます。",
            teamRedDescription:
                "レッドチームの合計ポイントがブルーチームより大きい場合、プレイヤーが勝利します。<br />+ 両チームの合計ポイントが等しい場合、すべてのベットは返金されます。",
            sumBigDescription: "両チームの合計ポイントが1621以上の場合、プレイヤーが勝利します",
            sumSmallDescription: "両チームの合計ポイントが1621未満の場合、プレイヤーが勝利します",
            sumEvenDescription: "両チームの合計ポイントが偶数の場合、プレイヤーが勝利します。",
            sumOddDescription: "両チームの合計ポイントが奇数の場合、プレイヤーが勝利します。",
            teamBlueBigDescription: "ブルーチームの合計ポイントが811以上の場合、プレイヤーが勝利します",
            teamBlueSmallDescription: "ブルーチームの合計ポイントが811未満の場合、プレイヤーが勝利します",
            teamRedBigDescription: "レッドチームの合計ポイントが811以上の場合、プレイヤーが勝利します",
            teamRedSmallDescription: "レッドチームの合計ポイントが811未満の場合、プレイヤーが勝利します",
        },
    },
    payOut: {
        title: "配当",
        description1: "勝利金額はベットオッズに従って計算されます。",
        description2: "配当には初期賭け金が含まれます。",
        description3: "ベットが決済されると、すべての勝利金額は即座にアカウント残高に追加されます。",
        odds: "オッズ",
        betLimit: "ベット制限<br />（最小-最大）",
    },
    md5noted: "注意: <span class={0}>899</span>と<span class={1}>807</span>はそれぞれブルーチームとレッドチームの結果です。",
}; 
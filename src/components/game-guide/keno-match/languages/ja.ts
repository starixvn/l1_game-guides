import { IPowerSoccerTranslationResource } from "./types";

export const ja: IPowerSoccerTranslationResource = {
    common: {
        bettypes: "ベットタイプ",
        options: "オプション",
        teamBlue: "ブルーチーム",
        teamRed: "レッドチーム",
        odd: "奇数",
        even: "偶数",
        firstHalf: "前半戦",
        fullTime: "フルタイム",
        fullTimeLive: "フルタイム（ライブ）",
        over: "オーバー",
        under: "アンダー",
    },
    main: {
        introduction: "紹介",
        description:
            "{0}は2組の数字で構成されており、1組は「ブルーチーム」、もう1組は「レッドチーム」で、それぞれ80個の数字（01から80）があります。システムは各チームに対して20個の数字（重複なし）をランダムに抽選し、そのうち10個の数字が「前半戦」用、10個の数字が「フルタイム」用に抽選されます。このゲームの目的は、各チームの抽選された数字の合計スコアを予測することです。",
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
            text: "ベットオプション",
            description1: "各ラウンドには2回の抽選があり、最初の抽選は「前半戦」の結果、2回目は「フルタイム」用です。",
            description2: "プレイヤーにはベットを配置するための2つの異なる間隔があります：",
            description3:
                "「前半戦」の結果の数字が抽選される前にベットを配置すると、「前半戦」と「フルタイム」にベットを配置でき、すべてのベットタイプに適用されます。配当率は固定されており、すべてのゲームラウンドで同じままです。",
            description4:
                " <strong>ライブベッティング</strong>: 両チームの前半戦の結果が発表された直後にベットを配置します。<strong>注意</strong>、「フルタイム」にのみベットを配置してください。配当率は「前半戦」の結果に基づいて変化します。",
            winningConditions: "勝利条件",

            firstHalfTeamBlueDescription:
                "ブルーチームの10個のランダムに抽選された数字の合計ポイントがレッドチームより大きい場合、プレイヤーが勝利します。<br />+ 両チームの合計ポイントが等しい場合、すべてのベットは返金されます。",
            fullTimeTeamBlueDescription:
                "ブルーチームの合計ポイント（前半戦+フルタイム）がレッドチームより大きい場合、プレイヤーが勝利します。<br />+ 両チームの合計ポイントが等しい場合、すべてのベットは返金されます。",

            firstHalfTeamRedDescription:
                "レッドチームの10個のランダムに抽選された数字の合計ポイントがブルーチームより大きい場合、プレイヤーが勝利します。<br />+ 両チームの合計ポイントが等しい場合、すべてのベットは返金されます。",
            fullTimeTeamRedDescription:
                "レッドチームの合計ポイント（前半戦+フルタイム）がブルーチームより大きい場合、プレイヤーが勝利します。<br />+ 両チームの合計ポイントが等しい場合、すべてのベットは返金されます。",

            firstHalfOverDescription: "両チームの合計ポイント（前半戦）が811以上の場合、プレイヤーが勝利します",
            fullTimeOverDescription: "両チームの合計ポイント（前半戦+フルタイム）が1621以上の場合、プレイヤーが勝利します",

            firstHalfUnderDescription: "両チームの合計ポイント（前半戦）が811未満の場合、プレイヤーが勝利します",
            fullTimeUnderDescription: "両チームの合計ポイント（前半戦+フルタイム）が1621未満の場合、プレイヤーが勝利します",

            firstHalfEvenDescription: "両チームの合計ポイント（前半戦）が偶数の場合、プレイヤーが勝利します。",
            fullTimeEvenDescription: "両チームの合計ポイント（前半戦+フルタイム）が偶数の場合、プレイヤーが勝利します。",

            firstHalfOddnDescription: "両チームの合計ポイント（前半戦）が奇数の場合、プレイヤーが勝利します。",
            fullTimeOddDescription: "両チームの合計ポイント（前半戦+フルタイム）が奇数の場合、プレイヤーが勝利します。",
        },
    },
    payOut: {
        title: "配当",
        description1: "勝利金額はベットオッズに従って計算されます。",
        description2: "配当には初期賭け金が含まれます。",
        description3: "ベットが決済されると、すべての勝利金額は即座にアカウント残高に追加されます。",
        odds: "オッズ",
        betLimit: "配当<br />（最小-最大）",
        firstHalfPayout: "a) 「前半戦」の結果の数字が抽選される前にベットを配置",
        liveBettingPayout: {
            text: "b) ライブベッティング",
            mainDescription:
                "ベットオプション<strong>ブルーチーム/レッドチーム - フルタイム（ライブ）</strong>と<strong>オーバー/アンダー - フルタイム（ライブ）</strong>の場合",
            description1: "配当率は両チームの「前半戦」の結果によって異なります",
            description2: "最大ベット制限は配当率に応じて変化します。",
            highLightDescription1:
                "<strong>ブルーチーム/レッドチーム - フルタイム（ライブ）</strong>: 「前半戦」でのブルーチームとレッドチームの合計スコア差が-150から150の間の場合のみ配当が利用可能です",
            highLightDescription2:
                "<strong>オーバー/アンダー - フルタイム（ライブ）</strong>: 両チームの「前半戦」の合計スコアが661から980の間の場合のみ配当が利用可能です",
            min: "最小",
            max: "最大",
            betLimit: "ベット制限",
            maximumBetLimit: "最大ベット制限は配当率に応じて変化します。",
        },
    },
    md5noted:
        "注意: <span class={0}>363</span>と<span class={1}>467</span>はそれぞれブルーチームとレッドチームの前半戦の結果です",
}; 
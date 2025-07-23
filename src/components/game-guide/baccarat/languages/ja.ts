import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesJa } from "../../base/base-baccarat/languages/ja";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const baccaratResourcesJa: IBaseBaccaratResources = {
    ...baseBaccaratResourcesJa,
    introduction: {
        header: "紹介",
        content:
            "バカラはカジノで最もよくプレイされるカードゲームの一つです。ゲームは標準の52枚のデッキ（ジョーカーを除く）でプレイされます。7つのベットオプションがあり、プレイヤーはゲームテーブルに表示された1つまたは複数のベットオプションにベットできます。",
    },
    gameRules: {
        ...baseBaccaratResourcesJa.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["プレイヤーとバンカー、それぞれの手は2枚の伏せられたカードから始まります。"];

                if (environment === ENVIRONMENT.sc || environment === ENVIRONMENT.sm) {
                    details = details.concat(["プレイヤーは2つの手のどちらが勝つかを予測します。"]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "プレイヤーとディーラーの手に2枚の初期伏せカードを配り終えた後、3枚目のカードも引かれます。",
                        "カードは1から6まで番号が付けられており、ゲームラウンドの開始時の配られたカードの順序に対応しています。",
                    ]);
                }

                return details.concat([
                    "もう一つのベットオプションは「タイ」で、プレイヤーが2つの手が同じ合計で終了すると予測する場合、またはビッグ、スモール、プレイヤーペア、バンカーペアのオプションにもベットできます。",
                    "すべてのベットはベット時間が終了する前に配置する必要があります。注意：配置されたベットはキャンセルできません。",
                    `ラウンドあたりの最大総賭け金は${maxBetMain}です`,
                    "ベット時間が終了すると、ディーラーはカードを表向きにします。",
                    "最初の2枚のカードの合計ポイントに基づいて、ディーラーはどちらかの手が3枚目のカードを明かすかどうかを決定します。",
                    "ゲームは各手のすべてのカードの合計ポイントを比較して勝敗を決定し、勝つ手は9ポイントの合計に最も近い手です。",
                    "52枚のカード（ジョーカーを除く）の標準デッキは毎ラウンド後にシャッフルされます。",
                ]);
            },
        },
    },
    md5: {
        step1ImageUrl: "/static/images/baccarat/md5_step1_en.png?v=1",
        step2ImageUrl: "/static/images/baccarat/md5_step2_en.png?v=1",
        step3ImageUrl: "/static/images/baccarat/md5_step3.png?v=1",
        step4ImageUrl: "/static/images/baccarat/md5_step4.png?v=1",
        step2Noted1Text: "注意：左から右へ、",
        step2Noted2Text: "ゲームラウンドの開始時の配られたカードの順序に対応しています。",
    },
}; 
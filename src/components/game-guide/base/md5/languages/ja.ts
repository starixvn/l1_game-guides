import { IMd5Resources } from "./types";

const steps = {
    one: "<strong>ステップ1</strong>: 結果が発表される前に<strong>MD5</strong>キーをコピーします。",
    two: "<strong>ステップ2</strong>: 結果が公開された後に<strong>結果</strong>をコピーします。",
    three: "<strong>ステップ3</strong>: {0}に移動し、結果をMD5ボックスに貼り付けます。",
    four: "<strong>ステップ4</strong>: <strong>「hash darling, hash!」</strong>ボタンを押し、新しく生成された<strong>MD5チェックサム</strong>をステップ1のMD5キーと比較します。",
};

export const ja: IMd5Resources = {
    content: {
        header: "MD5（メッセージダイジェストアルゴリズム5）",
        technology: {
            header: "MD5技術",
            details: [
                "MD5により、プレイヤーは第三者を通じてゲーム結果の真正性と透明性を確認できます。",
                "ゲーム結果は、プレイヤーがベットを配置する前にシステムによってランダムに生成されます。",
                "プレイヤーは、ベット前の生成結果（<strong>MD5</strong>キー）と公開結果（<strong>結果</strong>）が一致するかどうかを手動で確認できます。",
            ],
        },
        validation: {
            header: "MD5検証",
            details: Object.values(steps),
        },
        noted: "2つの文字列が一致する場合、そのゲームラウンドの結果が透明であり、ゲーム結果がベット前のシステムによって生成されたランダム結果から変更されていないことを証明します。",
    },
    example: {
        header: "<strong>例:</strong> 結果の真正性と透明性を確認します。",
        step1Text: steps.one,
        step2Text: steps.two,
        step3Text: steps.three,
        step4Text: steps.four,
        md5Key: "MD5キー",
        result: "結果",
        copy: "コピー",
    },
}; 
import { IMd5Resources } from "./types";

const steps = {
    one: "<strong>ステップ1</strong>: 結果が発表される前に<strong>MD5</strong>キーをコピーします。",
    two: "<strong>ステップ2</strong>: システムが結果を発表した後、結果をコピーしてください。",
    three: "<strong>ステップ3</strong>: {0}にアクセスし、結果をMD5ボックスに貼り付けます。",
    four: "<strong>ステップ4</strong>: <strong>「ハッシュダーリン、ハッシュ！」</strong>ボタンを押して、新しく生成された<strong>チェックサムMD5</strong>文字列と<strong>ステップ1</strong>のMD5文字列を比較してください。",
};

export const ja: IMd5Resources = {
    content: {
        header: "MD5（メッセージダイジェストアルゴリズム5）",
        technology: {
            header: "MD5技術",
            details: [
                "MD5により、プレイヤーは第三者機関を通じてゲーム結果の真正性と透明性を確認できます。",
                "プレイヤーがベットする前に、ゲームの結果はシステムによってランダムに生成されます。",
                "プレイヤーは、ベット前に生成された結果（**MD5**キー）と公開された結果（**結果**）が一致するかどうかを手動で確認できます。",
            ],
        },
        validation: {
            header: "MD5検証",
            details: Object.values(steps),
        },
        noted: "2つの文字列が一致した場合、そのゲームラウンドの結果は透明性があり、ベット前にシステムによって生成されたランダムな結果からゲーム結果は変更されていないことを証明します。",
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
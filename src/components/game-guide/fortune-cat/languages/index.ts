import { th } from "../../base/base-slot/languages/th";
import { en } from "../../base/base-slot/languages/en";
import { id } from "../../base/base-slot/languages/id";
import { cn } from "../../base/base-slot/languages/cn";
import { tw } from "../../base/base-slot/languages/tw";
import { vi } from "../../base/base-slot/languages/vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { ISlotTranslationResource } from "../../base/base-slot/types";

en.main.description =
    "“Fortune Cat” is an online slot game with the waving lucky cat - a symbol of good fortune and prosperity.  " + en.main.description;
th.main.description =
    "“แมวนำโชค” เป็นเกมส์สล็อตออนไลน์ที่มีแมวกวักนำโชคซึ่งเป็นสัญลักษณ์ของความโชคดีและความเจริญรุ่งเรือง " + th.main.description;
id.main.description =
    "Kucing Keberuntungan adalah permainan slot online dengan kucing keberuntungan yang melambai - simbol keberuntungan dan kemakmuran. " +
    id.main.description;
cn.main.description = "“招财猫”是一款招财猫在线老虎机游戏——招财猫是吉祥和繁荣的象征。 " + cn.main.description;
tw.main.description = "“招財貓”是一款招財貓在線老虎機遊戲——招財貓是吉祥和繁榮的象徵。 " + tw.main.description;
vi.main.description =
    "“Mèo Tài Lộc” là thể loại Slot game (game xèng) với giao diện hấp dẫn, được xây dựng với chủ đề mèo cầu tài lộc nhân dịp tết Quý Mão. " +
    vi.main.description;

const supportedLanguages: { [name: string]: ISlotTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi: vi,
};

export const getFortuneCatTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<ISlotTranslationResource>(langKey, supportedLanguages, en);
};

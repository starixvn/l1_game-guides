import { th } from "../../base/base-classic-slot/languages/th";
import { en } from "../../base/base-classic-slot/languages/en";
import { id } from "../../base/base-classic-slot/languages/id";
import { cn } from "../../base/base-classic-slot/languages/cn";
import { tw } from "../../base/base-classic-slot/languages/tw";
import { vi } from "../../base/base-classic-slot/languages/vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { ISlotTranslationResource } from "../../base/base-classic-slot/types";

en.main.description =
    "“Nightclub Lady” is an online slot game with a unique theme - Hot Girls & Dance Club, attractive gameplay and gripping graphics that make the game hot and sexier than ever. " +
    en.main.description;
th.main.description =
    "“Nightclub Lady” เกมส์สล็อตออนไลน์มาพร้อมกับธีมที่เป็นเอกลักษณ์ ในธีม Hot Girls & Dance Club การเดิมพันรูปแบบใหม่ กราฟฟิคตื่นตาตื่นใจ สุดร้อนแรง เซ็กซี่ไม่เหมือนใคร " +
    th.main.description;
id.main.description =
    "“Nightclub Lady” adalah permainan slot online dengan tema unik - Hot Girls & Dance Club, gameplay yang menarik, dan grafik yang mencekam membuat game ini semakin panas dan seksi. " +
    id.main.description;
cn.main.description =
    "“Nightclub Lady”是一款在线老虎机游戏，拥有独特的主题 - 辣妹和舞蹈俱乐部，引人入胜的游戏玩法和引人入胜的画面让游戏比以往任何时候都火爆性感。 " +
    cn.main.description;
tw.main.description =
    "“Nightclub Lady”是一款在線老虎機遊戲，擁有獨特的主題 - 辣妹和舞蹈俱樂部，引人入勝的遊戲玩法和引人入勝的畫面讓遊戲比以往任何時候都火爆性感。 " +
    tw.main.description;
vi.main.description =
    "“Gái Nhảy” là thể loại Slot game (game xèng), được xây dựng với giao diện hấp dẫn với chủ đề Hot Girls & Dance Club. " +
    vi.main.description;

const supportedLanguages: { [name: string]: ISlotTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi: vi,
};

export const getNightClubTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<ISlotTranslationResource>(langKey, supportedLanguages, en);
};

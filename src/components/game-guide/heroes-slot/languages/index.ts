import { th } from "../../base/base-slot/languages/th";
import { en } from "../../base/base-slot/languages/en";
import { id } from "../../base/base-slot/languages/id";
import { cn } from "../../base/base-slot/languages/cn";
import { tw } from "../../base/base-slot/languages/tw";
import { vi } from "../../base/base-slot/languages/vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { ISlotTranslationResource } from "../../base/base-slot/types";

en.main.description = "The Legend of Heroes is an online slot game, with high quality graphics.  " + en.main.description;
th.main.description = "The Legend of Heroes เป็นเกมสล็อตออนไลน์ที่มีกราฟิกคุณภาพสูง " + th.main.description;
id.main.description = "The Legend of Heroes adalah permainan slot online, dengan grafis berkualitas tinggi. " + id.main.description;
cn.main.description = "《英雄传说》是一款在线老虎机游戏，拥有高品质的画面。 " + cn.main.description;
tw.main.description = "《英雄傳說》是一款在線老虎機遊戲，擁有高品質的畫面。 " + tw.main.description;
vi.main.description = "Anh Hùng Chim Lạc là thể loại Slot game (game xèng). " + vi.main.description;

const supportedLanguages: { [name: string]: ISlotTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi: vi,
};

export const getHeroesSlotTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<ISlotTranslationResource>(langKey, supportedLanguages, en);
};

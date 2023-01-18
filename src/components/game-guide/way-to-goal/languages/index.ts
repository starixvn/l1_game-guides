import { th } from "../../base/base-slot/languages/th";
import { en } from "../../base/base-slot/languages/en";
import { id } from "../../base/base-slot/languages/id";
import { cn } from "../../base/base-slot/languages/cn";
import { tw } from "../../base/base-slot/languages/tw";
import { vi } from "../../base/base-slot/languages/vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { ISlotTranslationResource } from "../../base/base-slot/types";

en.main.description =
    "“Way To Goal” is a football-themed slot game, with attractive gameplay, and gripping graphics.  " + en.main.description;
th.main.description = "“Way To Goal” เป็นเกมส์สล็อตธีมฟุตบอลที่มีรูปแบบการเล่นที่น่าดึงดูดใจและกราฟิกที่สวยงาม " + th.main.description;
id.main.description =
    "“Way To Goal” adalah game slot bertema sepak bola, dengan gameplay yang menarik, dan grafik yang mencekam. " + id.main.description;
cn.main.description = "“Way To Goal” 是一款以足球为主题的老虎机游戏，具有引人入胜的游戏玩法和引人入胜的画面。 " + cn.main.description;
tw.main.description = "“Way To Goal” 是一款以足球為主題的老虎機遊戲，具有引人入勝的遊戲玩法和引人入勝的畫面。 " + tw.main.description;
vi.main.description =
    "“Đường Đến Khung Thành” là thể loại Slot game (game xèng), được xây dựng với giao diện hấp dẫn mang đậm dấu ấn World Cup. " +
    vi.main.description;

const supportedLanguages: { [name: string]: ISlotTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi: vi,
};

export const getWayToGoalTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<ISlotTranslationResource>(langKey, supportedLanguages, en);
};

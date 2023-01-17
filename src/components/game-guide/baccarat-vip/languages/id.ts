import { baccaratResourcesId } from "../../baccarat/languages/id";
import { IMd5BaccaratResources } from "../../baccarat/languages/types";

export const vipBaccaratResourcesId: IMd5BaccaratResources = {
    ...baccaratResourcesId,
    ...{
        introduction: {
            header: "Perkenalan",
            content:
                "VIP Bakarat - adalah versi Baccarat yang disempurnakan dengan batas taruhan yang lebih tinggi. Permainan ini dimainkan dengan satu dek 52 kartu standar (tidak termasuk Joker). Ada 7 opsi taruhan dan Penumpang dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
        },
    },
};

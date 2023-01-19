import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesId } from "../../base/base-baccarat/languages/id";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";
import { md5ResourcesId } from "../../base/md5/languages/id";
import { IMd5Resources } from "../../base/md5/languages/types";

export const baccaratResourcesId: IBaseBaccaratResources = {
    ...baseBaccaratResourcesId,
    ...{
        introduction: {
            header: "Perkenalan",
            content:
                "Bakarat - adalah versi Baccarat yang disempurnakan dengan batas taruhan yang lebih tinggi. Permainan ini dimainkan dengan satu dek 52 kartu standar (tidak termasuk Joker). Ada 7 opsi taruhan dan Penumpang dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesId.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["Player dan Banker, masing-masing tangan akan mulai dengan 2 kartu tertutup."];

                if (environment === ENVIRONMENT.sm) {
                    details = details.concat(["Punter memprediksi yang mana dari dua tangan yang akan menang."]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "Kartu ketiga juga akan ditarik setelah menyelesaikan pembagian 2 kartu awal menghadap ke bawah untuk tangan Pemain dan Dealer.",
                        "Kartu diberi nomor dari satu hingga enam yang sesuai dengan urutan kartu yang dibagikan di awal putaran permainan.",
                    ]);
                }

                return details.concat([
                    "Opsi taruhan lainnya adalah “Tie” jika Penumpang memprediksi dua tangan akan berakhir dengan total yang sama atau mereka juga dapat bertaruh pada opsi Besar, Kecil, Pasangan Pemain, atau Pasangan Bankir.",
                    "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir.  Catatan, taruhan yang dipasang tidak dapat dibatalkan",
                    `Total taruhan maksimum per putaran adalah ${maxBetMain}`,
                    "Setelah waktu taruhan berakhir, dealer membalik kartu menghadap ke atas.",
                    "Berdasarkan total poin dari dua kartu pertama, dealer akan menentukan apakah kedua tangan mendapat kartu ketiga",
                    "Permainan menentukan menang atau kalah dengan membandingkan total poin semua kartu di masing-masing tangan dan tangan yang menang adalah yang paling dekat dengan total 9 poin.",
                    "Dek standar dengan 52 kartu (tidak termasuk Joker) dikocok setelah setiap putaran.",
                ]);
            },
        },
    },
};

export const md5BaccaratResourcesId: IMd5Resources = {
    ...md5ResourcesId,
    ...{
        example: {
            ...md5ResourcesId.example,
            ...{
                step1ImageUrl: "/static/images/baccarat/md5_step1_en.png?v=1",
                step2ImageUrl: "/static/images/baccarat/md5_step2_en.png?v=1",
                step3ImageUrl: "/static/images/baccarat/md5_step3_en.png?v=1",
                step4ImageUrl: "/static/images/baccarat/md5_step4_en.png?v=1",
                step2Noted1Text: "Catatan: Dari kiri ke kanan,",
                step2Noted2Text: "csesuai dengan urutan kartu yang dibagikan di awal putaran permainan.",
            },
        },
    },
};

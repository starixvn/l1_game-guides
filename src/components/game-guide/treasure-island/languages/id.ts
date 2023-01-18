import { TreasureIslandLanguage } from "./types";

export const id: TreasureIslandLanguage = {
    introduction: {
        title: "Perkenalan",
        description:
            "Pulau Harta Karun adalah permainan slot cascading online yang telah menjadi sangat populer di kalangan pemain online karena menawarkan banyak peluang untuk menang jika dibandingkan dengan mesin slot model lama. \
            Permainan ini terdiri dari enam gulungan, lima baris, dan sepuluh simbol berbeda.",
    },

    gameRules: {
        title: "Aturan Permainan",
        rulePlayerSelect: "Pemain memilih atau menyesuaikan jumlah taruhan yang paling cocok untuk Anda sebelum menekan tombol “Putar”.",
        totalBet: "Total taruhan",
        paylinesFormular: "= Tingkat Taruhan * Nilai Koin * Pengganda Taruhan",
        subDescriptions: [
            "1. Nilai koin adalah jumlah yang ingin Anda keluarkan per baris dalam game.",
            "2. Level taruhan adalah jumlah koin per baris.",
            "3. Pengganda Taruhan adalah pengganda yang digunakan untuk menghitung Total Taruhan dengan mengalikan Level Taruhan dan Nilai Koin. Pengganda Taruhan: 20x.",
        ],
        ruleStartSpin: "Pemain dapat menekan tombol “Putar”, atau gunakan tombol Spasi/Enter pada keyboard untuk memulai putaran.",
        ruleWin: "Jumlah total simbol yang sama di layar pada akhir putaran menentukan nilai Kemenangan",
        betLimit: "Batas taruhan:",
    },

    payout: {
        title: "Pembayaran",
        description1: [
            "Simbol membayar di mana saja di layar.",
            "Menang-kalah dari setiap kombinasi akan dihitung berdasarkan nilai taruhan dasar.",
        ],
        baseBetValue: "Nilai Taruhan Dasar = Tingkat taruhan * Nilai Koin",
        description2: "Tabel pembayaran akan diperbarui sesuai dengan nilai taruhan dasar yang telah Anda pilih.",
        description3(currMaxBet: number) {
            return [
                "Jumlah yang menang langsung ditambahkan ke saldo akun Anda ketika semua kejatuhan yang dihasilkan dari putaran dasar telah dimainkan.",
                `Jumlah kemenangan maksimum terbatas pada ${currMaxBet} X taruhan. Jika total kemenangan suatu ronde mencapai nilai max win, maka ronde permainan langsung berakhir. \
                Kemenangan diberikan hingga batas dan semua fitur yang tersisa hangus. `,
            ];
        },
    },

    examplePayout: {
        content: "<strong> Contoh:</strong> Nilai taruhan dasar Anda adalah",
        table: {
            headers: ["Simbol", "Keterangan"],
            getHavingSymbol(symbol: string) {
                return `Memiliki ${symbol} simbol `;
            },
            descriptionContent: "muncul di papan hasil.",
            payout: "Pembayaran =",
        },
    },

    tumbling: {
        title: "Fitur Jatuh",
        descriptions: [
            "Setelah setiap putaran, kombinasi pemenang dibayar, dan semua simbol pemenang akan dihapus dari gulungan, memungkinkan simbol baru jatuh ke posisi kosong.",
            "Kejatuhan akan berlanjut sampai tidak ada lagi kombinasi pemenang yang muncul sebagai akibat dari kejatuhan.",
            "Tidak ada batasan jumlah kemungkinan jatuh.",
        ],
    },

    multipliers: {
        title: "Pengali",
        descriptions: [
            "Simbol Pengali hadir di semua gulungan dan dapat dipukul secara acak selama putaran, dan jatuh di permainan dasar dan putaran bebas.",
            "Setiap kali simbol Pengali mengenai, dibutuhkan nilai pengali acak dari 2x hingga 500x.",
            "Di akhir Tumbles, nilai simbol Pengali ditambahkan dan dikalikan dengan nilai Jatuh Menang untuk menghitung jumlah Menang.",
        ],
    },

    exampleMultipliers: {
        title: "Contoh:",
        tableHeader: ["Menangkan Simbol", "Jatuh Menang", "Pengali", "Menang"],
    },

    freeSpin: {
        title: "Fitur Free Spins",
        define: "Fitur Free Spins diberikan ketika 4 atau lebih simbol SCATTER muncul di mana saja di layar.",
        subDescriptions: {
            tableHeader: ["Simbol", "Keterangan"],
            getSymbolOrMore(symbol) {
                return `Memiliki ${symbol} atau lebih simbol Scatter pada hasilnya.`;
            },
            getSymbol(symbol: string) {
                return `Memiliki ${symbol} simbol Scatter pada hasilnya.`;
            },
            getFreeSpin(count: number) {
                return `Dapatkan  “${count}” Bonus Free Spins.`;
            },
        },
        getMoreFreeSpin(value: number) {
            return `Setiap kali 4 atau lebih simbol SCATTER muncul selama putaran Free Spins, ${value} Free Spins tambahan akan diberikan.`;
        },
        totalMultiplier:
            "Selama durasi putaran Free Spins, setiap kali simbol Pengali baru muncul dan putaran menghasilkan kemenangan, nilai Pengali ditambahkan ke total pengali. \
            Nilai Pengganda Total digunakan untuk menghitung jumlah Win.",
        freeSpin24h:
            "Pemain harus menyelesaikan Bonus Free Spins dalam waktu 24 jam setelah dikeluarkan. Free Spins yang tidak digunakan akan hilang.",
    },

    exampleFreeSpin: {
        title: "Example: The player wins 4 Free Spins",
        table: {
            headers: ["ID bulat", "Jatuh Menang", "Pengali", "Pengganda Total", "Menang"],
            round1Win: "<strong>50</strong><br/><strong>(Jatuh Menang * Pengganda Total)</strong>",
            round2Win: "<strong>5</strong><br/><strong>(Jatuh Menang)</strong>",
            round4Win: "<strong>56</strong><br/><strong>(Jatuh Menang * Pengganda Totalr)</strong>",
        },
        tumbleDescriptions: ["1. Jumlah Jatuh Menang", "2. Pengganda Total: 5+3 =8"],
    },
};

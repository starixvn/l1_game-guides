import { ISlotTranslationResource } from "../types";

export const id: ISlotTranslationResource = {
    gameRule: {
        title: "Aturan Permainan",
        description: {
            line1: "Pemain memilih Paylines (Garis) dan menetapkan Level Taruhan yang ingin Anda pasang sebelum menekan “ Putar ”.",
            totalBet: "Total Taruhan",
            paylinesFormular: "= Paylines * Level Taruhan",
            subDescriptions: [
                "25 Payline diberi nomor dari 1 hingga 25 dan Pemain harus memilih setidaknya satu Payline sebelum memulai permainan.",
                "Menang-kalah pada setiap Payline akan dihitung berdasarkan jumlah simbol yang sama yang terletak di Payline tersebut.",
            ],
        },
    },
    payOut: {
        paytable: "Tabel Pembayaran",
        winningAmount: "Jumlah kemenangan dihitung sesuai dengan rasio pembayaran.",
        note: "Catatan",
        initialStake: "Pembayaran termasuk taruhan awal.",
        allWinningAmount: "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
    },
    examplePayout: {
        title: "Contoh",
        table: {
            symbolHeader: "Simbol",
            descriptionHeader: "Keterangan",
            having5Symbols: "Memiliki 5 simbol",
            samePayline: "yang terletak pada payline yang sama.",
            payoutBetLevel: "Pembayaran = Tingkat Taruhan *",
            having3Symbols: "Memiliki 3 simbol",
            having4Symbols: "Memiliki 4 simbol",
        },
    },
    freeSpin: {
        title: "Free Spin",
        description1: "Pemain akan menerima Bonus Putaran Gratis sesuai dengan jumlah simbol Putaran Gratis yang ada di hasil.",
        description2: "Simbol Free Spin tidak harus berada di payline yang sama.",
        freeSpinBonus: "Bonus Putaran Gratis.",
        note: "Catatan",
        freeSpinReel:
            "Catatan: Simbol “Putaran Gratis” harus muncul di gulungan yang berbeda. Misalnya, jika ada 3 simbol “Putaran Gratis” pada gulungan yang sama, sistem akan dihitung sebagai satu simbol.",
        thereAre4:
            "Ada 4 simbol “Putaran gratis” di hasil, tetapi 3 simbol terletak di gulungan yang sama. Pemain tidak memenuhi syarat untuk bonus putaran Gratis.",
        lastFreespin:
            "Putaran Gratis dimainkan pada Level Taruhan yang sama dan jumlah garis pembayaran yang sama dengan putaran terakhir (putaran di mana Pengguna mendapatkan Bonus Putaran Gratis).",
        freeSpinExpired:
            "Pemain harus menyelesaikan Bonus Putaran Gratis dalam waktu 24 jam setelah diterbitkan. Putaran Gratis yang tidak digunakan akan hilang.",
    },
    bonus: {
        title: "Bonus",
        description1: "Memiliki 3, 4, atau 5 simbol Bonus yang muncul di mana saja pada hasil akan memicu Permainan Bonus.",
        description2: "Simbol Bonus tidak harus berada di garis pembayaran yang sama.",
        canOpen: "Dapat membuka",
        itemInBonusGame: " Peti Harta Karun di Game Bonus.",
        note: "Catatan",
        bonusReel:
            "Catatan: Simbol Bonus harus muncul di gulungan yang berbeda. Misalnya, jika 2 atau 3 simbol Bonus muncul di gulungan yang sama, sistem akan dihitung sebagai satu simbol.",
        thereAre4: "Ada 4",
        eligible: "simbol “Bonus” di hasil, tetapi 2 simbol terletak di gulungan yang sama. Pemain hanya memenuhi syarat untuk 3 item.",
        bonusExpired:
            "Pemain harus menyelesaikan Game Bonus dalam waktu 120 detik dari hitungan mundur. Setelah periode ini, sistem akan membuka Peti secara acak dan menyelesaikan putaran permainan.",
    },
    wild: {
        title: "Wild",
        substitute: "Simbol “Wild” dapat menggantikan semua simbol kecuali",
        and: "dan",
        endSubstitute: "",
        onlyHighest: "Hanya kemenangan tertinggi yang dicapai per baris yang dibayarkan.",
        example: "Contoh",
        ifwild: "Jika simbol Liar adalah",
        payoutBetLevel: "Pembayaran = Level Taruhan ",
        highestWin: "Pemain akan mendapatkan kemenangan tertinggi pada payline ini",
    },
    main: {
        introduction: "Perkenalan",
        description:
            "Permainan ini mencakup 5 gulungan dan 3 baris, dengan 11 simbol berbeda. Pemain akan menang jika ada simbol yang sama yang terletak di garis pembayaran yang sama dengan yang Anda pilih.",
    },
};

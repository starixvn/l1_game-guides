import { ICasinoHoldTranslationResource } from "./types";

const steps = {
    one: "<b>Langkah 1</b>: Salin Kunci MD5 setelah menekan tombol Deal.",
    two: "<b>Langkah 2</b>: Salin Hasil setelah menekan tombol Panggil.",
    three: "<b>Langkah 3</b>: Buka {0} dan rekatkan Hasil ke kotak MD5.",
    four: "<b>Langkah 4</b>: Tekan tombol <b>“hash darling, hash!</b>” dan bandingkan rangkaian daftar <strong>MD5 checksum</strong> yang baru dibuat dengan Kunci MD5 di <strong>Langkah 1</strong>.",
};

const Hand = {
    royalFlush: "Royal Flush",
    straightFlush: "Straight Flush",
    fourOfAKind: "Four of a Kind",
    fullHouse: "Full House",
    flush: "Flush",
    straight: "Straight",
    threeOfAKind: "Three of a Kind",
    twoPair: "Dua Pair",
    pair: "Pair",
    highCard: "Kartu tinggi",
    PairOfAces: "Pair of Aces",
};

export const id: ICasinoHoldTranslationResource = {
    common: {
        hand: Hand,
        player: "Player",
        dealer: "Dealer",
        communityCards: "Kartu Komunitas",
        cards: "Kartu-kartu",
        combination: "Kombinasi",
        result: "Hasil",
        handResult: "Hasil Tangan",
        odds: "Peluang ",
        example: "Contoh",
    },
    introduction: {
        title: "Perkenalan",
        description:
            "Casino Hold'em adalah varian dari Texas Hold'em Poker. Permainan ini dimainkan dengan setumpuk 52 kartu standar (tidak termasuk Joker), dan kartu dikocok setelah setiap putaran. Player akan bermain melawan Dealer dan tujuan permainan ini adalah untuk mencapai kartu poker lima kartu terbaik menggunakan kombinasi dua kartu hole dan lima kartu komunitas untuk mengalahkan tangan Dealer.",
        md5: {
            sentence1: "Selain itu, fitur baru -",
            sentence2: "MD5 (Message-Digest algorithm 5)",
            sentence3: "memungkinkan Player untuk memeriksa keadilan dan keaslian setiap hasil permainan.",
        },
    },
    gameRule: {
        title: "Aturan Permainan",
        description: {
            line1: "Pilih chip dengan nilai yang paling sesuai untuk Anda dan pasang chip pada taruhan Ante atau taruhan bonus AA.",
            line2: "Catatan, Taruhan Ante adalah opsi wajib yang harus dipasang Player sebelum kartu apa pun dibagikan.",
            line3: "Klik tombol Deal untuk memulai putaran permainan, Player dan Dealer masing-masing menerima dua kartu hole.",
            line4: "Tiga kartu komunitas (kartu gagal) dibagikan tertutup di tengah meja.",
        },
        swapCard: {
            title: "Tukar Kartu",
            description:
                "Tukar Kartu adalah fitur opsional dan dapat DIHIDUPKAN/DIMATIKAN. Hal ini memungkinkan Player untuk memilih antara menukar dua kartu hole dengan kartu Dealer sebelum kartu menghadap ke atas atau menyimpan kartu tanpa perubahan.",
        },
        note: "Catatan: Fitur Tukar kartu hanya dapat ON/OFF sebelum putaran permainan dimulai.",
        foldCall: {
            description: "Setelah tiga kartu komunitas pertama dibagikan, Player harus memutuskan apakah akan CALL atau FOLD.",
            fold: "<strong>FOLD</strong>: Player akan menyerahkan tangannya dan kalah taruhan Ante dan taruhan AA opsional. Putaran permainan telah berakhir.",
            call: "<strong>CALL</strong>: Player akan terus bermain dengan taruhan Panggilan tambahan, sama dengan dua kali taruhan Ante.",
        },
        afterClick:
            "Setelah mengklik tombol CALL, dua kartu komunitas terakhir dibagikan dan Player dan Dealer akan mengungkapkan nilai kartu mereka.",
        theTwo: "Dua kartu pribadi digabungkan dengan 5 kartu komunitas untuk membuat kartu Poker lima kartu terbaik.",
        thePlayer: "Player akan memenangkan taruhan Ante jika Pemain memiliki kartu yang lebih baik daripada Dealer",
        maximumTotal:
            "Total maksimum taruhan per putaran adalah {0}. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan setelah kartu dibagikan.",
        rankingLevel: "Tingkat Peringkat",
        cardValues: {
            title: "Nilai Kartu",
            description: {
                line1: "Nilai kartu diurutkan dari yang tertinggi ke terendah dengan urutan sebagai berikut: Ace (A), King (K), Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3 dan 2.",
                line2: "Ace dapat digunakan sebagai kartu tertinggi dan terendah, sehingga dapat digunakan dalam kartu lurus A, K, Q, J, 10 sebagai nilai tertinggi atau 5, 4, 3, 2, A sebagai kartu nilai terendah.",
                line3: "Semua setelan - hati ({0}), sekop ({1}), wajik ({2}), dan klub ({3}) memiliki nilai yang sama.",
            },
        },
        handRanking: {
            title: "Peringkat Tangan",
            line1: "Peringkat Tangan",
            table: {
                title: {
                    hand: "Tangan",
                    description: "Keterangan",
                    example: "Contoh",
                },
                description: {
                    royalFlush: "As, King, Queen, Jack, dan 10 dengan jenis yang sama",
                    straightFlush: "Lima kartu dengan jenis yang sama, semuanya dalam urutan peringkat",
                    fourOfAKind: "Empat kartu dengan peringkat yang sama",
                    fullHouse: "Three of a Kind dan Sepasang",
                    flush: "Lima kartu dengan jenis yang sama",
                    straight: "Lima kartu urutan peringkat",
                    threeOfAKind: "Tiga kartu dengan nilai yang sama",
                    twoPair: "Dua Pair peringkat yang berbeda",
                    pair: "Dua kartu dengan nilai yang sama",
                    highCard: "Kartu tertinggi ketika tidak ada tangan yang lebih tinggi tersedia",
                },
            },
            line2: "Tangan Poker terdiri dari lima kartu. Jika Player dan Dealer berbagi tangan yang menang, maka masing-masing kartu akan digunakan untuk memecahkan Tie. Jika kartu tertinggi di tangan Player sama, kartu tertinggi kedua harus dibandingkan, dan seterusnya.",
            example: {
                player: "Player menang",
                dealer: "Dealer menang",
                result: "Hasilnya adalah “Seri”",
            },
        },
        bettingOption: "Opsi Taruhan",
        anteBet: {
            title: "Taruhan Ante",
            description: {
                line1: "Taruhan “Ante” adalah opsi wajib yang harus dipasang Player sebelum kartu apa pun dibagikan.",
                line2: "Player akan memenangkan Taruhan Ante jika dia dapat membuat kartu poker lima kartu terbaik menggunakan kombinasi dua kartu hole dan lima kartu komunitas untuk mengalahkan tangan Dealer.",
            },
        },
        aaBet: {
            title: "Taruhan AA",
            description: {
                line1: "Taruhan samping yang dikenal sebagai taruhan “AA”, didasarkan pada nilai poker dari dua kartu Player dan tiga kartu komunitas pertama. Player akan memenangkan taruhan “AA” jika dia dapat mencapai sepasang ace atau lebih baik, terlepas dari apa yang dimiliki Dealer.",
                line2: "Taruhan “AA” tidak terkait dengan hasil taruhan Ante. Player mungkin kalah dalam permainan, tetapi Taruhan “AA” mungkin menang atau sebaliknya.",
                line3: "Perhatikan, jika Player memilih “FOLD”, dia akan kehilangan taruhan Ante dan taruhan opsional “AA”.",
            },
        },
        callBet: {
            title: "Taruhan Panggilan",
            description: {
                line1: "Taruhan panggilan adalah taruhan tambahan yang diputuskan oleh Player apakah dia ingin melanjutkan putaran permainan. Jumlah taruhan panggilan dua kali lipat dari taruhan Ante asli.",
            },
        },
        handQualification: {
            title: "Kualifikasi Tangan",
            description:
                "Dealer harus memiliki setidaknya sepasang merangkak untuk membuat tangan yang memenuhi syarat. Jika Dealer gagal memenuhi syarat, taruhan Ante dibayarkan sesuai dengan tabel odds taruhan sedangkan taruhan Panggilan akan didorong.",
            table: {
                title: {
                    dealer: "Dealer memenuhi syarat",
                    DealerDoes: "Dealer tidak memenuhi syarat",
                },
                col1: {
                    playerBeat: "Player mengalahkan Dealer",
                    player: "Player tidak mengalahkan Dealer",
                    playerAndDealer: "Player dan Dealer adalah tangan yang sama",
                },
                col2: {
                    playerWins: "Player memenangkan taruhan Ante dan Call.",
                    playerLoses: "Player kehilangan taruhan Ante dan Panggilan.",
                    bothThe: "Taruhan Ante dan Call didorong.",
                },
                col3: {
                    playerWins: "Player memenangkan taruhan Ante, Taruhan panggilan didorong.",
                },
            },
        },
    },
    payOuts: {
        title: "Pembayaran",
        description: {
            line1: "Jumlah kemenangan dihitung berdasarkan odds taruhan.",
            line2: "Perhatikan, Pembayaran termasuk taruhan awal.",
            line3: "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        },
        anteBet: "Taruhan Ante",
        callBet: {
            title: "Taruhan panggilan",
            description: {
                line1: "Player akan memenangkan taruhan Panggilan hanya jika Dealer memenuhi syarat dan Anda mengalahkan kartu mereka.",
                line2: "Peluang taruhan ",
            },
        },
        aaBet: "Taruhan AA",
    },
    betLimit: {
        title: "Batas Taruhan",
        table: {
            title: {
                options: "Pilihan",
                betLimit: "Batas Taruhan (Min-Max)",
            },
            content: {
                ante: "Ante",
                call: "Call",
            },
        },
    },
    md5: {
        md5Base: {
            content: {
                header: "MD5 (Mencerna Pesan Algoritma 5)",
                technology: {
                    header: "MD5 teknologi",
                    details: [
                        "MD5 yang memungkinkan pemain untuk memeriksa keaslian dan transparansi hasil permainan melalui pihak ke-3.",
                        "Hasil permainan akan dibuat secara acak oleh sistem sebelum kartu dibuka.",
                        "Pemain dapat secara manual memeriksa apakah hasil yang dihasilkan sebelum bertaruh (<strong>kunci MD5</strong>) dan hasil penerbitan (<strong>Hasil</strong>) cocok atau tidak.",
                    ],
                },
                validation: {
                    header: "Validasi MD5",
                    details: Object.values(steps),
                },
                noted: "Jika keduanya cocok, buktikan bahwa hasil putaran permainan itu transparan dan hasil permainan tidak berubah dari hasil acak yang dihasilkan oleh sistem sebelum kartu dibuka.",
            },
            example: {
                header: "<strong> Contoh:</strong> periksa keaslian dan transparansi hasilnya.",
                step1Text: steps.one,
                step2Text: steps.two,
                step3Text: steps.three,
                step4Text: steps.four,
                md5Key: "Kunci MD5",
                result: "Hasil",
                copy: "Salin",
            },
        },
        md5Note: {
            title: "Catatan:",
            line1: "Dari kiri ke kanan, kartu ditampilkan dalam urutan: kartu Player {0}, kartu Dealer {1}, dan lima kartu komunitas {2}",
            line2: "Jika Player telah menukar kartunya dengan Dealer maka urutannya adalah: kartu Dealer {0}, kartu Pemain {1}, dan lima kartu komunitas.",
        },
    },
    extendTermsAndConditionsDetails: [
        'Putaran permainan yang belum selesai dapat dipulihkan dan harus diselesaikan dalam waktu 24 jam sejak Player menekan\
        tombol "Deal". Permainan yang belum selesai akan diselesaikan secara otomatis setelah 24 jam. Tangan pemain\
        dianggap sebagai “FOLD”.',
    ],
};

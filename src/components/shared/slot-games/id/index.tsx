import React from "react";
import { PROJECTS } from "../../../../common/constants";

export const renderGameRuleContent = (project: string | undefined) => {
    return (
        <>
            <li>
                Pemain memilih Paylines (Garis) dan menetapkan Level Taruhan yang ingin Anda pasang sebelum menekan &#34;Putar&#34;.
                <div className="text-center">
                    <strong>Total Taruhan</strong> = Paylines * Level Taruhan
                </div>
            </li>

            <li>25 Payline diberi nomor dari 1 hingga 25 dan Pemain harus memilih setidaknya satu Payline sebelum memulai permainan.</li>
            <li>Menang-kalah pada setiap Payline akan dihitung berdasarkan jumlah simbol yang sama yang terletak di Payline tersebut.</li>
            {project === PROJECTS.L2 && (
                <li>
                    Ada 3 pilihan jumlah Taruhan; untuk setiap pilihan, Pemain akan memiliki kesempatan untuk memenangkan hadiah Jackpot
                    yang menarik.
                </li>
            )}
        </>
    );
};

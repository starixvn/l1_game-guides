import React from "react";

export const renderMD5ID = () => {
    return (
        <>
            <h2> MD5 (Mencerna Pesan Algoritma 5) </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">MD5 teknologi</span>
                    <ul className="desc">
                        <li>MD5 yang memungkinkan pemain untuk memeriksa keaslian dan transparansi hasil permainan melalui pihak ke-3.</li>
                        <li>Hasil permainan akan dihasilkan secara acak oleh sistem sebelum pemain memasang taruhan.</li>
                        <li>
                            Pemain dapat secara manual memeriksa apakah hasil yang dihasilkan sebelum bertaruh (<strong>kunci MD5</strong>)
                            dan hasil penerbitan (<strong>Hasil</strong>) cocok atau tidak.
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">Validasi MD5</span>
                    <ul className="desc">
                        <li>
                            <strong>Langkah 1</strong>: Salin kunci <strong>MD5</strong> sebelum hasilnya diumumkan.
                        </li>
                        <li>
                            <strong>Langkah 2</strong>: Salin <strong>Hasil</strong> setelah sistem menerbitkan hasilnya.
                        </li>
                        <li>
                            <strong>Langkah 3</strong>: Buka{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            dan tempel Hasil ke kotak MD5.
                        </li>
                        <li>
                            <strong>Langkah 4</strong>: Tekan tombol <strong>“hash darling, hash!”</strong> dan bandingkan rangkaian daftar
                            periksa MD5 yang baru dibuat dengan Kunci MD5 di <strong>Langkah 1</strong>.
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="content">
                Jika kedua rangkaian cocok, buktikan bahwa hasil putaran permainan itu transparan dan hasil permainan tidak berubah dari
                hasil acak yang dihasilkan oleh sistem sebelum bertaruh.
            </div>
        </>
    );
};

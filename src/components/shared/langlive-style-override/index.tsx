import Head from "next/head";
import React from "react";

type LangliveStyleOverrideProps = {
    styles: string;
};

const LangliveStyleOverride: React.FC<LangliveStyleOverrideProps> = ({ styles }) => {
    if (!styles) {
        return null;
    }

    return (
        <Head>
            <style>{styles}</style>
        </Head>
    );
};

export default LangliveStyleOverride;
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { locales } from "../common/constants";

const Error = (props: any) => {
    const { err, res } = props;
    const { t } = useTranslation("messages");
    const router = useRouter();
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

    useEffect(() => {
        setIsLoading(false);
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div>
            <div className="error-page">
                <img className="error-background small" src={`/static/images/error-${theme}.svg`} alt="error" />
                <p className="info">
                    <Trans t={t}>{t("errorOccurred", { errorCode: statusCode })}</Trans>
                </p>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale = locales.vi }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["messages"])),
    },
});

export default Error;

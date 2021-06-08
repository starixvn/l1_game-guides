import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "next-themes";
import { GetStaticProps } from "next";
import { locales } from "../common/constants";

const Custom404 = () => {
    const { t } = useTranslation("messages");
    const { theme } = useTheme();

    return (
        <div>
            <div className="error-page">
                <img className="error-background small" src={`/static/images/error-${theme}.svg`} alt="error" />
                <p className="info">
                    <Trans t={t}>{t("errorOccurred", { errorCode: 404 })}</Trans>
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

export default Custom404;

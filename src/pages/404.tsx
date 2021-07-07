import { useTheme } from "next-themes";

const Custom404 = () => {
    const { theme } = useTheme();

    return (
        <div>
            <div className="error-page">
                <img className="error-background small" src={`/static/images/error-${theme}.svg`} alt="error" />
                <p className="info">An error has occurred, please contact CSD for details.</p>
            </div>
        </div>
    );
};

export default Custom404;

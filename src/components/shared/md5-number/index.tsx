const ScrollToMD5 = () => {
    const md5Scope: any = document.querySelector("#md5");
    window.scrollTo({ top: md5Scope?.offsetTop, behavior: "smooth" });
};
export default ScrollToMD5;

export const scrollToIDContent = (id: string | undefined) => {
    if(id !== undefined) {
        const idContent = `#${id}`;
        const md5Scope: any = document.querySelector(idContent);
        window.scrollTo({ top: md5Scope?.offsetTop, behavior: "smooth" });
    }   
};


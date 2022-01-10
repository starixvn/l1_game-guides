const ScrollToMD5 = () => {
    const md5Scope: any = document.querySelector("#md5");
    window.scrollTo({ top: md5Scope?.offsetTop, behavior: "smooth" });
};

export default ScrollToMD5;

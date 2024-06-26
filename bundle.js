const menuTrigger = document.querySelector(".menu-trigger"),
    menu = document.querySelector(".menu"),
    mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth"),
    isMobile = () => window.matchMedia(mobileQuery).matches,
    isMobileMenu = () => {
        menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile()), menu && menu.classList.toggle("hidden", isMobile())
    };
isMobileMenu(), menuTrigger && menuTrigger.addEventListener("click", () => menu && menu.classList.toggle("hidden")), window.addEventListener("resize", isMobileMenu);
const getTheme = window.localStorage && window.localStorage.getItem("theme"),
    themeToggle = document.querySelector(".theme-toggle"),
    isDark = getTheme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");
getTheme !== null && (document.body.classList.toggle("dark-theme", isDark), isDark ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa")), themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme"), window.localStorage && window.localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light"), document.body.classList.contains("dark-theme") ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa")
})
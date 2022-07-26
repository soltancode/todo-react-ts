import {useEffect, useState} from "react";

export default function useDarkMode() {
    let enable = false;
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        enable = true;
    } else {
        enable = false;
    }

    const [darkMode, setDarkMode] = useState<boolean>(enable);
    let theme:string = darkMode ? "dark" : "light";
    localStorage.theme = theme;
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
        useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme)
    }, [theme, colorTheme]);

    return [darkMode, setDarkMode] as const;
}
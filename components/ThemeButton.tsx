"use client";
import { useTheme } from "next-themes";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    
    return(
        <button onClick={() => {setTheme(theme === "light" ? "dark" : "light")}}
         className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            Toggle Theme
        </button>
    );
}
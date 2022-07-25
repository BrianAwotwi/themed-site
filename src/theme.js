import React, { useState, useEffect } from "react";
import './theme.scss';

export let color = '';

const ThemeSwitch = () => {
    const [colorTheme, setColorTheme] = useState('theme-light');

    useEffect(() =>{
        const currentThemeColor = localStorage.getItem('theme-color');
        if (currentThemeColor) {
            setColorTheme(currentThemeColor);
        }
    }, []);

    const handleClick = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme-color', theme);
    }
    color = colorTheme
console.log(color)

    return (
        <div className="theme-options">
            <div id="theme-dark"
                onClick={() => handleClick('theme-dark')}
                className={`${colorTheme === 'theme-dark' ? 'active' : ''}`}
            />
            <div id="theme-light"
                onClick={() => handleClick('theme-light')}
                className={`${colorTheme === 'theme-light' ? 'active' : ''}`}
            />
            <div id="theme-cream"
                onClick={() => handleClick('theme-cream')}
                className={`${colorTheme === 'theme-cream' ? 'active' : ''}`}
            />
            <div id="theme-green"
                onClick={() => handleClick('theme-green')}
                className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
            />
            <div id="theme-purple"
                onClick={() => handleClick('theme-purple')}
                className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
            />
            <div id="theme-pink"
                onClick={() => handleClick('theme-pink')}
                className={`${colorTheme === 'theme-pink' ? 'active' : ''}`}
            />
            <div id="theme-blue"
                onClick={() => handleClick('theme-blue')}
                className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
            />
            <div id="theme-citrus"
                onClick={() => handleClick('theme-citrus')}
                className={`${colorTheme === 'theme-citrus' ? 'active' : ''}`}
            />
        </div>
    )
}

export default ThemeSwitch;
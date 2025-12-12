import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThems = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThems>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThems || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

    return (
      <nav className={styles.menu}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ir para a home"
          title="Ir para Home">
          <HouseIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ver Histórico"
          title="Ver Histórico">
          <HistoryIcon />
        </a>{" "}
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Configurações"
          title="Configurações">
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Mudar thema"
          title="Mudar Thema"
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    );
}
// ...existing code...
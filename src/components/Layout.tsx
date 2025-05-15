import * as React from 'react';
import {
  makeStyles,
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  tokens,
} from "@fluentui/react-components";
import { Navigation } from './Navigation';

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  main: {
    flex: 1,
    overflowY: "auto",
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const styles = useStyles();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <FluentProvider theme={isDarkMode ? webDarkTheme : webLightTheme}>
      <div className={styles.container}>
        <Navigation 
          isDarkMode={isDarkMode}
          onThemeChange={setIsDarkMode}
        />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </FluentProvider>
  );
}; 
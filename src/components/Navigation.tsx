import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  makeStyles,
  shorthands,
  tokens,
  TabList,
  Tab,
  Switch,
  useId,
  SelectTabEvent,
  SelectTabData,
} from "@fluentui/react-components";
import {
  bundleIcon,
  Home24Regular,
  Home24Filled,
  Apps24Regular,
  Apps24Filled,
  CloudArrowUp24Regular,
  CloudArrowUp24Filled,
  ChartMultiple24Regular,
  ChartMultiple24Filled,
  LockClosed24Regular,
  LockClosed24Filled,
  PersonFeedback24Regular,
  PersonFeedback24Filled,
  WeatherMoon24Regular,
  WeatherMoon24Filled,
  ShieldKeyhole24Regular,
  ShieldKeyhole24Filled,
} from "@fluentui/react-icons";

const HomeIcon = bundleIcon(Home24Filled, Home24Regular);
const AppsIcon = bundleIcon(Apps24Filled, Apps24Regular);
const CloudIcon = bundleIcon(CloudArrowUp24Filled, CloudArrowUp24Regular);
const AnalyticsIcon = bundleIcon(ChartMultiple24Filled, ChartMultiple24Regular);
const SecurityIcon = bundleIcon(LockClosed24Filled, LockClosed24Regular);
const FeedbackIcon = bundleIcon(PersonFeedback24Filled, PersonFeedback24Regular);
const DarkModeIcon = bundleIcon(WeatherMoon24Filled, WeatherMoon24Regular);
const AdminIcon = bundleIcon(ShieldKeyhole24Filled, ShieldKeyhole24Regular);

const useStyles = makeStyles({
  navbar: {
    width: "280px",
    backgroundColor: tokens.colorNeutralBackground2,
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    height: "100vh",
    position: "sticky",
    top: 0,
    display: "flex",
    flexDirection: "column",
  },
  navHeader: {
    ...shorthands.padding("20px"),
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflowY: "auto",
    paddingTop: "8px",
  },
  tabList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    ...shorthands.padding("8px"),
  },
  tab: {
    justifyContent: "flex-start",
    height: "auto",
    ...shorthands.padding("12px", "16px"),
    "& span": {
      fontSize: "14px",
      fontWeight: "500",
    },
  },
  brandName: {
    fontSize: "24px",
    fontWeight: "600",
    color: tokens.colorBrandForeground1,
    marginBottom: "0",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
  },
});

interface NavigationProps {
  isDarkMode: boolean;
  onThemeChange: (isDark: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDarkMode, onThemeChange }) => {
  const styles = useStyles();
  const pathname = usePathname();
  const switchId = useId("theme-switch");

  const handleThemeChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    onThemeChange(ev.target.checked);
  }, [onThemeChange]);

  const navItems = [
    { icon: <HomeIcon />, label: "Home", value: "/", path: "/" },
    { icon: <AppsIcon />, label: "Products", value: "/products", path: "/products" },
    { icon: <CloudIcon />, label: "Solutions", value: "/solutions", path: "/solutions" },
    { icon: <AnalyticsIcon />, label: "Analytics", value: "/analytics", path: "/analytics" },
    { icon: <SecurityIcon />, label: "Security", value: "/security", path: "/security" },
    { icon: <FeedbackIcon />, label: "Support", value: "/support", path: "/support" },
    { icon: <AdminIcon />, label: "Administration", value: "/administration", path: "/administration" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <Link href="/" className={styles.link}>
          <h1 className={styles.brandName}>3Ring</h1>
        </Link>
      </div>
      <div className={styles.navContainer}>
        <TabList 
          vertical 
          selectedValue={pathname}
          className={styles.tabList}
        >
          {navItems.map((item) => (
            <Link key={item.value} href={item.path} className={styles.link}>
              <Tab
                value={item.value}
                icon={item.icon}
                className={styles.tab}
              >
                {item.label}
              </Tab>
            </Link>
          ))}
          <Tab
            key="theme"
            value="theme"
            icon={<DarkModeIcon />}
            className={styles.tab}
          >
            Dark Mode
            <Switch
              id={switchId}
              checked={isDarkMode}
              onChange={handleThemeChange}
              style={{ marginLeft: 'auto' }}
            />
          </Tab>
        </TabList>
      </div>
    </nav>
  );
}; 
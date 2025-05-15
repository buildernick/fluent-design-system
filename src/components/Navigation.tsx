import * as React from 'react';
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
} from "@fluentui/react-icons";

const HomeIcon = bundleIcon(Home24Filled, Home24Regular);
const AppsIcon = bundleIcon(Apps24Filled, Apps24Regular);
const CloudIcon = bundleIcon(CloudArrowUp24Filled, CloudArrowUp24Regular);
const AnalyticsIcon = bundleIcon(ChartMultiple24Filled, ChartMultiple24Regular);
const SecurityIcon = bundleIcon(LockClosed24Filled, LockClosed24Regular);
const FeedbackIcon = bundleIcon(PersonFeedback24Filled, PersonFeedback24Regular);
const DarkModeIcon = bundleIcon(WeatherMoon24Filled, WeatherMoon24Regular);

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
});

interface NavigationProps {
  isDarkMode: boolean;
  onThemeChange: (isDark: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDarkMode, onThemeChange }) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState("home");
  const switchId = useId("theme-switch");

  const handleThemeChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    onThemeChange(ev.target.checked);
  }, [onThemeChange]);

  const handleTabSelect = React.useCallback((event: SelectTabEvent, data: SelectTabData) => {
    setSelectedTab(data.value as string);
  }, []);

  const navItems = [
    { icon: <HomeIcon />, label: "Home", value: "home" },
    { icon: <AppsIcon />, label: "Products", value: "products" },
    { icon: <CloudIcon />, label: "Solutions", value: "solutions" },
    { icon: <AnalyticsIcon />, label: "Analytics", value: "analytics" },
    { icon: <SecurityIcon />, label: "Security", value: "security" },
    { icon: <FeedbackIcon />, label: "Support", value: "support" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <h1 className={styles.brandName}>CloudFlow</h1>
      </div>
      <div className={styles.navContainer}>
        <TabList 
          vertical 
          selectedValue={selectedTab}
          onTabSelect={handleTabSelect}
          className={styles.tabList}
        >
          {navItems.map((item) => (
            <Tab
              key={item.value}
              value={item.value}
              icon={item.icon}
              className={styles.tab}
            >
              {item.label}
            </Tab>
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
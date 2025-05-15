'use client';

import * as React from 'react';
import {
  makeStyles,
  shorthands,
  Card,
  CardHeader,
  CardPreview,
  Button,
  Title3,
  Body1,
  tokens,
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Switch,
  useId,
  Avatar,
  Caption1,
  Text,
  TabList,
  Tab,
  SelectTabEvent,
  SelectTabData,
} from "@fluentui/react-components";
import {
  Nav,
  NavItem,
  NavItemProps,
} from "@fluentui/react-nav-preview";
import {
  bundleIcon,
  CloudArrowUp24Regular,
  CloudArrowUp24Filled,
  ChartMultiple24Regular,
  ChartMultiple24Filled,
  LockClosed24Regular,
  LockClosed24Filled,
  Home24Regular,
  Home24Filled,
  Apps24Regular,
  Apps24Filled,
  PersonFeedback24Regular,
  PersonFeedback24Filled,
  WeatherMoon24Regular,
  WeatherMoon24Filled,
  ArrowRight24Regular,
  ArrowRight24Filled,
  PlayCircle24Regular,
  PlayCircle24Filled,
  Rocket24Regular,
  Rocket24Filled,
  Eye24Regular,
  Eye24Filled,
  ShieldLockRegular,
  ShieldLockFilled,
} from "@fluentui/react-icons";

const HomeIcon = bundleIcon(Home24Filled, Home24Regular);
const AppsIcon = bundleIcon(Apps24Filled, Apps24Regular);
const FeedbackIcon = bundleIcon(PersonFeedback24Filled, PersonFeedback24Regular);
const CloudIcon = bundleIcon(CloudArrowUp24Filled, CloudArrowUp24Regular);
const AnalyticsIcon = bundleIcon(ChartMultiple24Filled, ChartMultiple24Regular);
const SecurityIcon = bundleIcon(LockClosed24Filled, LockClosed24Regular);
const DarkModeIcon = bundleIcon(WeatherMoon24Filled, WeatherMoon24Regular);
const RocketIcon = bundleIcon(Rocket24Filled, Rocket24Regular);
const PlayIcon = bundleIcon(PlayCircle24Filled, PlayCircle24Regular);
const ArrowIcon = bundleIcon(ArrowRight24Filled, ArrowRight24Regular);
const EyeIcon = bundleIcon(Eye24Filled, Eye24Regular);
const ShieldIcon = bundleIcon(ShieldLockFilled, ShieldLockRegular);

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: tokens.colorNeutralBackground1,
  },
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
  main: {
    flex: 1,
    overflowY: "auto",
  },
  hero: {
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    ...shorthands.padding("80px", "20px"),
    backgroundColor: "transparent",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
  },
  heroContent: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "64px",
    lineHeight: "1.1",
    fontWeight: "600",
    marginBottom: "24px",
    color: tokens.colorNeutralForeground1,
    "& span": {
      color: tokens.colorBrandForeground1,
    },
  },
  heroSubtitle: {
    fontSize: "24px",
    lineHeight: "1.5",
    marginBottom: "40px",
    color: tokens.colorNeutralForeground2,
    maxWidth: "800px",
    margin: "0 auto 40px",
  },
  heroActions: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    ...shorthands.padding("40px"),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  card: {
    maxWidth: "100%",
    boxShadow: tokens.shadow4,
    ...shorthands.transition("transform", "box-shadow"),
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: tokens.shadow8,
    },
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    ...shorthands.borderRadius("4px"),
  },
  brandName: {
    fontSize: "24px",
    fontWeight: "600",
    color: tokens.colorBrandForeground1,
    marginBottom: "0",
  },
  cardFooter: {
    display: "flex",
    gap: "12px",
    ...shorthands.padding("16px"),
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  cardContent: {
    ...shorthands.padding("16px"),
  },
  themeToggle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    ...shorthands.padding("12px", "20px"),
    marginTop: "auto",
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  themeIcon: {
    fontSize: "20px",
    color: tokens.colorNeutralForeground1,
  },
  testimonialsSection: {
    ...shorthands.padding("80px", "40px"),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  testimonialsHeader: {
    textAlign: "center",
    marginBottom: "48px",
  },
  testimonialsTitle: {
    fontSize: "36px",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
    marginBottom: "16px",
  },
  testimonialsSubtitle: {
    fontSize: "18px",
    color: tokens.colorNeutralForeground2,
    maxWidth: "600px",
    margin: "0 auto",
  },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  testimonialCard: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    ...shorthands.transition("transform", "box-shadow"),
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: tokens.shadow8,
    },
  },
  testimonialContent: {
    ...shorthands.padding("24px"),
  },
  testimonialQuote: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: tokens.colorNeutralForeground1,
    marginBottom: "24px",
  },
  testimonialAuthor: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
});

export default function Home() {
  const styles = useStyles();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("home");
  const switchId = useId("theme-switch");

  const handleThemeChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(ev.target.checked);
  }, []);

  const handleTabSelect = React.useCallback((event: SelectTabEvent, data: SelectTabData) => {
    setSelectedTab(data.value as string);
  }, []);

  const navItems = [
    { icon: <HomeIcon />, label: "Home", value: "home" },
    { icon: <AppsIcon />, label: "Products", value: "products" },
    { icon: <CloudIcon />, label: "Solutions", value: "solutions" },
    { icon: <AnalyticsIcon />, label: "Analytics", value: "analytics" },
    { icon: <SecurityIcon />, label: "Security", value: "security" },
    { icon: <PersonFeedback24Regular />, label: "Support", value: "support" },
  ];

  return (
    <FluentProvider theme={isDarkMode ? webDarkTheme : webLightTheme}>
      <div className={styles.container}>
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

        <main className={styles.main}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Transform Your Business with <span>Cloud-Native</span> Solutions
              </h1>
              <p className={styles.heroSubtitle}>
                Experience enterprise-grade infrastructure that scales with your needs. 
                Built for modern businesses that demand security, performance, and reliability.
              </p>
              <div className={styles.heroActions}>
                <Button 
                  appearance="primary" 
                  size="large" 
                  icon={<RocketIcon />}
                  style={{ 
                    fontSize: "18px", 
                    padding: "24px 48px",
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  appearance="outline" 
                  size="large" 
                  icon={<PlayIcon />}
                  style={{ 
                    fontSize: "18px", 
                    padding: "24px 48px",
                  }}
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <Card className={styles.card}>
              <CardPreview>
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Cloud Infrastructure"
                  className={styles.cardImage}
                />
              </CardPreview>
              <CardHeader
                header={
                  <Title3>Cloud Infrastructure</Title3>
                }
                image={<CloudIcon />}
              />
              <div className={styles.cardContent}>
                <Body1>
                  Scale your infrastructure effortlessly with our cloud-native platform.
                  Built for modern enterprises with security and performance in mind.
                </Body1>
              </div>
              <div className={styles.cardFooter}>
                <Button appearance="primary" icon={<RocketIcon />}>Get Started</Button>
                <Button appearance="outline" icon={<ArrowIcon />}>Learn More</Button>
              </div>
            </Card>

            <Card className={styles.card}>
              <CardPreview>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Analytics Dashboard"
                  className={styles.cardImage}
                />
              </CardPreview>
              <CardHeader
                header={
                  <Title3>Analytics & Insights</Title3>
                }
                image={<AnalyticsIcon />}
              />
              <div className={styles.cardContent}>
                <Body1>
                  Make data-driven decisions with real-time analytics and comprehensive
                  reporting tools. Visualize your success.
                </Body1>
              </div>
              <div className={styles.cardFooter}>
                <Button appearance="primary" icon={<EyeIcon />}>Try Analytics</Button>
                <Button appearance="outline" icon={<PlayIcon />}>View Demo</Button>
              </div>
            </Card>

            <Card className={styles.card}>
              <CardPreview>
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise Security"
                  className={styles.cardImage}
                />
              </CardPreview>
              <CardHeader
                header={
                  <Title3>Enterprise Security</Title3>
                }
                image={<SecurityIcon />}
              />
              <div className={styles.cardContent}>
                <Body1>
                  Industry-leading security features to protect your data and maintain
                  compliance standards. Stay secure and compliant.
                </Body1>
              </div>
              <div className={styles.cardFooter}>
                <Button appearance="primary" icon={<ShieldIcon />}>Secure Now</Button>
                <Button appearance="outline" icon={<ArrowIcon />}>See Features</Button>
              </div>
            </Card>
          </div>

          <section className={styles.testimonialsSection}>
            <div className={styles.testimonialsHeader}>
              <h2 className={styles.testimonialsTitle}>
                Trusted by Industry Leaders
              </h2>
              <p className={styles.testimonialsSubtitle}>
                See what our customers are saying about their experience with CloudFlow
              </p>
            </div>
            
            <div className={styles.testimonialsGrid}>
              <Card className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <Text className={styles.testimonialQuote}>
                    "CloudFlow has transformed how we manage our infrastructure. The platform's 
                    intuitive design and robust features have significantly improved our 
                    deployment efficiency and reduced operational costs by 40%."
                  </Text>
                  <div className={styles.testimonialAuthor}>
                    <Avatar
                      image={{ src: "https://avatars.githubusercontent.com/u/87654321" }}
                      size={48}
                      aria-label="Sarah Chen"
                    />
                    <div className={styles.authorInfo}>
                      <Text weight="semibold">Sarah Chen</Text>
                      <Caption1>CTO, TechCorp Solutions</Caption1>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <Text className={styles.testimonialQuote}>
                    "Security was our top priority when choosing a cloud platform. CloudFlow's 
                    enterprise-grade security features and compliance standards have given us 
                    complete confidence in our infrastructure."
                  </Text>
                  <div className={styles.testimonialAuthor}>
                    <Avatar
                      image={{ src: "https://avatars.githubusercontent.com/u/12345678" }}
                      size={48}
                      aria-label="Marcus Rodriguez"
                    />
                    <div className={styles.authorInfo}>
                      <Text weight="semibold">Marcus Rodriguez</Text>
                      <Caption1>Head of Security, FinanceStream</Caption1>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </FluentProvider>
  );
}

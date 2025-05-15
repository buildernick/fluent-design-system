'use client';

import * as React from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Card,
  CardHeader,
  Title3,
  Body1,
  Badge,
  Text,
  Spinner,
  ProgressBar,
  useId,
} from "@fluentui/react-components";
import {
  ILineChartProps,
  LineChart,
} from '@fluentui/react-charting';
import {
  bundleIcon,
  PeopleTeam24Regular,
  PeopleTeam24Filled,
  DatabaseSearch24Regular,
  DatabaseSearch24Filled,
  ServerMultipleRegular,
  ServerMultipleFilled,
  Key24Regular,
  Key24Filled,
  Storage24Regular,
  Storage24Filled,
  ShieldLockRegular,
  ShieldLockFilled,
  PaymentRegular,
  PaymentFilled,
} from "@fluentui/react-icons";
import { Layout } from '@/components/Layout';

const TeamIcon = bundleIcon(PeopleTeam24Filled, PeopleTeam24Regular);
const DatabaseIcon = bundleIcon(DatabaseSearch24Filled, DatabaseSearch24Regular);
const ServerIcon = bundleIcon(ServerMultipleFilled, ServerMultipleRegular);
const KeyIcon = bundleIcon(Key24Filled, Key24Regular);
const StorageIcon = bundleIcon(Storage24Filled, Storage24Regular);
const ShieldIcon = bundleIcon(ShieldLockFilled, ShieldLockRegular);
const CreditIcon = bundleIcon(PaymentFilled, PaymentRegular);

const useStyles = makeStyles({
  pageContainer: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  container: {
    ...shorthands.padding("24px"),
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "24px",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    lineHeight: "1.2",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
    marginBottom: "16px",
    "& span": {
      color: tokens.colorBrandForeground1,
    },
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.5",
    color: tokens.colorNeutralForeground2,
    maxWidth: "800px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    ...shorthands.transition("transform", "box-shadow"),
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: tokens.shadow8,
    },
  },
  cardContent: {
    ...shorthands.padding("16px"),
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  stat: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statLabel: {
    color: tokens.colorNeutralForeground2,
    fontSize: "14px",
  },
  statValue: {
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
    fontSize: "16px",
  },
  progressContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  progressLabel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeContainer: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  chartSection: {
    marginTop: "40px",
  },
  chartCard: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    ...shorthands.padding("24px"),
    ...shorthands.borderRadius("8px"),
  },
  chartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  chartTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
  },
  legend: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  legendDot: {
    width: "12px",
    height: "12px",
    ...shorthands.borderRadius("50%"),
  },
});

export default function Administration() {
  const styles = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const chartId = useId("credits-chart");

  React.useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const monitoringData = {
    activeUsers: 1247,
    storageUsed: 82,
    apiCalls: "2.3M",
    uptime: 99.99,
  };

  const productAccess = [
    "Cloud Storage",
    "Analytics Dashboard",
    "Security Suite",
    "API Gateway",
    "Load Balancer",
    "Database Cluster",
  ];

  // Generate sample data for the past 7 days
  const generateChartData = () => {
    const data = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        used: Math.floor(Math.random() * 1000) + 500,
        allocated: 1500,
      });
    }
    return data;
  };

  const chartData = generateChartData();

  const chartProps: ILineChartProps = {
    data: {
      lineChartData: [
        {
          legend: 'Used Credits',
          data: chartData.map(item => ({
            x: new Date(item.date),
            y: item.used,
          })),
          color: tokens.colorBrandForeground1,
          lineOptions: {
            lineBorderWidth: 3,
          },
        },
        {
          legend: 'Allocated Credits',
          data: chartData.map(item => ({
            x: new Date(item.date),
            y: item.allocated,
          })),
          color: tokens.colorNeutralForeground3,
          lineOptions: {
            lineBorderWidth: 2,
          },
        },
      ],
    },
    legendsOverflowText: 'Overflow Items',
    yMinValue: 0,
    yMaxValue: 2000,
    height: 300,
    margins: { top: 20, right: 20, bottom: 35, left: 40 },
    xAxisTickCount: 7,
    yAxisTickCount: 5,
    enablePerfOptimization: true,
  };

  if (isLoading) {
    return (
      <Layout>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Spinner size="large" label="Loading administration panel..." />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              System <span>Administration</span>
            </h1>
            <p className={styles.subtitle}>
              Monitor system usage, manage product access, and maintain your cloud infrastructure
            </p>
          </header>

          <div className={styles.grid}>
            {/* User Activity Card */}
            <Card className={styles.card}>
              <CardHeader
                header={<Title3>User Activity</Title3>}
                image={<TeamIcon />}
              />
              <div className={styles.cardContent}>
                <div className={styles.stat}>
                  <Text className={styles.statLabel}>Active Users</Text>
                  <Text className={styles.statValue}>{monitoringData.activeUsers}</Text>
                </div>
                <div className={styles.progressContainer}>
                  <div className={styles.progressLabel}>
                    <Text>Current Load</Text>
                    <Text>78%</Text>
                  </div>
                  <ProgressBar value={0.78} />
                </div>
              </div>
            </Card>

            {/* System Resources Card */}
            <Card className={styles.card}>
              <CardHeader
                header={<Title3>System Resources</Title3>}
                image={<ServerIcon />}
              />
              <div className={styles.cardContent}>
                <div className={styles.stat}>
                  <Text className={styles.statLabel}>Storage Used</Text>
                  <Text className={styles.statValue}>{monitoringData.storageUsed}%</Text>
                </div>
                <div className={styles.progressContainer}>
                  <div className={styles.progressLabel}>
                    <Text>Storage Capacity</Text>
                    <Text>{monitoringData.storageUsed}%</Text>
                  </div>
                  <ProgressBar value={monitoringData.storageUsed / 100} />
                </div>
              </div>
            </Card>

            {/* API Usage Card */}
            <Card className={styles.card}>
              <CardHeader
                header={<Title3>API Usage</Title3>}
                image={<DatabaseIcon />}
              />
              <div className={styles.cardContent}>
                <div className={styles.stat}>
                  <Text className={styles.statLabel}>Total API Calls</Text>
                  <Text className={styles.statValue}>{monitoringData.apiCalls}</Text>
                </div>
                <div className={styles.stat}>
                  <Text className={styles.statLabel}>Uptime</Text>
                  <Text className={styles.statValue}>{monitoringData.uptime}%</Text>
                </div>
              </div>
            </Card>

            {/* Product Access Card */}
            <Card className={styles.card}>
              <CardHeader
                header={<Title3>Product Access</Title3>}
                image={<KeyIcon />}
              />
              <div className={styles.cardContent}>
                <Body1>Authorized Products</Body1>
                <div className={styles.badgeContainer}>
                  {productAccess.map((product) => (
                    <Badge key={product} appearance="filled" color="brand">
                      {product}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <section className={styles.chartSection}>
            <Card className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <Title3>Credits Usage Over Time</Title3>
                <div className={styles.legend}>
                  <div className={styles.legendItem}>
                    <div 
                      className={styles.legendDot} 
                      style={{ backgroundColor: tokens.colorBrandForeground1 }}
                    />
                    <Text>Used Credits</Text>
                  </div>
                  <div className={styles.legendItem}>
                    <div 
                      className={styles.legendDot} 
                      style={{ backgroundColor: tokens.colorNeutralForeground3 }}
                    />
                    <Text>Allocated Credits</Text>
                  </div>
                </div>
              </div>
              
              <LineChart {...chartProps} />
            </Card>
          </section>

          {/* Add a new card for current credits status */}
          <div className={styles.grid} style={{ marginTop: "24px" }}>
            <Card className={styles.card}>
              <CardHeader
                header={<Title3>Credits Status</Title3>}
                image={<CreditIcon />}
              />
              <div className={styles.cardContent}>
                <div className={styles.stat}>
                  <Text className={styles.statLabel}>Current Usage</Text>
                  <Text className={styles.statValue}>
                    {chartData[chartData.length - 1].used} / {chartData[chartData.length - 1].allocated}
                  </Text>
                </div>
                <div className={styles.progressContainer}>
                  <div className={styles.progressLabel}>
                    <Text>Usage Rate</Text>
                    <Text>
                      {Math.round((chartData[chartData.length - 1].used / chartData[chartData.length - 1].allocated) * 100)}%
                    </Text>
                  </div>
                  <ProgressBar 
                    value={chartData[chartData.length - 1].used / chartData[chartData.length - 1].allocated} 
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
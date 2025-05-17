'use client';

import * as React from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableCellLayout,
  TableSelectionCell,
  TableColumnDefinition,
  TableColumnId,
  createTableColumn,
  Badge,
  Button,
  Title3,
  Caption1,
  Subtitle2,
  Dropdown,
  Option,
} from "@fluentui/react-components";
import {
  Filter24Regular,
  Filter24Filled,
  Laptop24Regular,
  Laptop24Filled,
  Phone24Regular,
  Phone24Filled,
  TabletLaptop24Regular,
  TabletLaptop24Filled,
  Desktop24Regular,
  Desktop24Filled,
} from "@fluentui/react-icons";
import { AppLayout } from '@/components/Layout';

const FilterIcon = {
  filled: Filter24Filled,
  regular: Filter24Regular,
};

const LaptopIcon = {
  filled: Laptop24Filled,
  regular: Laptop24Regular,
};

const PhoneIcon = {
  filled: Phone24Filled,
  regular: Phone24Regular,
};

const TabletIcon = {
  filled: TabletLaptop24Filled,
  regular: TabletLaptop24Regular,
};

const DesktopIcon = {
  filled: Desktop24Filled,
  regular: Desktop24Regular,
};

const useStyles = makeStyles({
  container: {
    ...shorthands.padding("24px"),
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "32px",
  },
  title: {
    fontSize: "32px",
    lineHeight: "1.2",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    color: tokens.colorNeutralForeground2,
  },
  section: {
    marginBottom: "48px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  filterContainer: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  table: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    ...shorthands.borderRadius("8px"),
    ...shorthands.overflow("hidden"),
  },
  statusBadge: {
    minWidth: "80px",
    textAlign: "center",
  },
  deviceIcon: {
    color: tokens.colorNeutralForeground1,
  },
});

interface Device {
  id: string;
  name: string;
  type: 'laptop' | 'desktop' | 'phone' | 'tablet';
  status: 'online' | 'offline' | 'maintenance';
  lastActive: string;
  owner: string;
  location: string;
}

const getDeviceIcon = (type: Device['type']) => {
  switch (type) {
    case 'laptop':
      return <LaptopIcon.regular />;
    case 'desktop':
      return <DesktopIcon.regular />;
    case 'phone':
      return <PhoneIcon.regular />;
    case 'tablet':
      return <TabletIcon.regular />;
  }
};

const getStatusBadge = (status: Device['status']) => {
  const appearance = {
    online: { color: 'success', text: 'Online' },
    offline: { color: 'danger', text: 'Offline' },
    maintenance: { color: 'warning', text: 'Maintenance' },
  }[status];

  return (
    <Badge 
      appearance="filled" 
      color={appearance.color as 'success' | 'danger' | 'warning'} 
      style={{ minWidth: '80px', textAlign: 'center' }}
    >
      {appearance.text}
    </Badge>
  );
};

const columns: TableColumnDefinition<Device>[] = [
  createTableColumn<Device>({
    columnId: 'name',
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => 'Device Name',
    renderCell: (item) => (
      <TableCellLayout media={getDeviceIcon(item.type)}>
        {item.name}
      </TableCellLayout>
    ),
  }),
  createTableColumn<Device>({
    columnId: 'status',
    compare: (a, b) => a.status.localeCompare(b.status),
    renderHeaderCell: () => 'Status',
    renderCell: (item) => getStatusBadge(item.status),
  }),
  createTableColumn<Device>({
    columnId: 'lastActive',
    compare: (a, b) => a.lastActive.localeCompare(b.lastActive),
    renderHeaderCell: () => 'Last Active',
    renderCell: (item) => item.lastActive,
  }),
  createTableColumn<Device>({
    columnId: 'owner',
    compare: (a, b) => a.owner.localeCompare(b.owner),
    renderHeaderCell: () => 'Owner',
    renderCell: (item) => item.owner,
  }),
  createTableColumn<Device>({
    columnId: 'location',
    compare: (a, b) => a.location.localeCompare(b.location),
    renderHeaderCell: () => 'Location',
    renderCell: (item) => item.location,
  }),
];

const myDevices: Device[] = [
  { id: '1', name: 'MacBook Pro', type: 'laptop', status: 'online', lastActive: 'Now', owner: 'Me', location: 'Office' },
  { id: '2', name: 'iPhone 14', type: 'phone', status: 'online', lastActive: '2m ago', owner: 'Me', location: 'Mobile' },
  { id: '3', name: 'iPad Pro', type: 'tablet', status: 'offline', lastActive: '2d ago', owner: 'Me', location: 'Home' },
];

const teamDevices: Device[] = [
  { id: '4', name: 'Meeting Room PC', type: 'desktop', status: 'online', lastActive: '5m ago', owner: 'Team', location: 'Conference Room A' },
  { id: '5', name: 'Shared Laptop', type: 'laptop', status: 'maintenance', lastActive: '1d ago', owner: 'Team', location: 'Office' },
  { id: '6', name: 'Demo Tablet', type: 'tablet', status: 'online', lastActive: '30m ago', owner: 'Team', location: 'Demo Room' },
];

const orgDevices: Device[] = [
  { id: '7', name: 'Server Room PC', type: 'desktop', status: 'online', lastActive: 'Now', owner: 'IT Dept', location: 'Server Room' },
  { id: '8', name: 'Reception Tablet', type: 'tablet', status: 'online', lastActive: '1h ago', owner: 'Reception', location: 'Lobby' },
  { id: '9', name: 'Security Desktop', type: 'desktop', status: 'online', lastActive: '15m ago', owner: 'Security', location: 'Security Office' },
  { id: '10', name: 'Inventory Scanner', type: 'phone', status: 'offline', lastActive: '3d ago', owner: 'Warehouse', location: 'Storage' },
];

export default function Devices() {
  const styles = useStyles();
  const [selectedFilter, setSelectedFilter] = React.useState("all");

  return (
    <AppLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Device Management</h1>
          <p className={styles.subtitle}>
            Monitor and manage all your connected devices across your organization
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Title3>My Devices</Title3>
            <div className={styles.filterContainer}>
              <Dropdown
                value={selectedFilter}
                onOptionSelect={(e, data) => setSelectedFilter(data.optionValue || "all")}
              >
                <Option value="all">All Devices</Option>
                <Option value="online">Online</Option>
                <Option value="offline">Offline</Option>
                <Option value="maintenance">Maintenance</Option>
              </Dropdown>
              <Button icon={<FilterIcon.filled />}>Filter</Button>
            </div>
          </div>
          <Table className={styles.table}>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.columnId}>{column.renderHeaderCell()}</TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {myDevices.map((item) => (
                <TableRow key={item.id}>
                  {columns.map((column) => (
                    <TableCell key={`${item.id}-${column.columnId}`}>
                      {column.renderCell(item)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Title3>Team Devices</Title3>
          </div>
          <Table className={styles.table}>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.columnId}>{column.renderHeaderCell()}</TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamDevices.map((item) => (
                <TableRow key={item.id}>
                  {columns.map((column) => (
                    <TableCell key={`${item.id}-${column.columnId}`}>
                      {column.renderCell(item)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Title3>Organization Devices</Title3>
          </div>
          <Table className={styles.table}>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.columnId}>{column.renderHeaderCell()}</TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {orgDevices.map((item) => (
                <TableRow key={item.id}>
                  {columns.map((column) => (
                    <TableCell key={`${item.id}-${column.columnId}`}>
                      {column.renderCell(item)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </AppLayout>
  );
} 
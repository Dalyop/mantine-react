import { Outlet } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellFooter,
  AppShellMain,
  AppShellSection,
  Burger
} from '@mantine/core';
import { DarkMode } from '@/components/DarkModeButton/DarkMode';
import { Dashboard } from '@/components/Dashboard/Dashboard';

export default function RootLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: true } }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShellHeader
      style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 10}}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <AppShellSection px="md">
          <h1>Welcome, user</h1>
        </AppShellSection>
        <AppShellSection>
          <DarkMode />
        </AppShellSection>
      </AppShellHeader>

      <AppShellNavbar>
        <AppShellSection>
          <Dashboard />
        </AppShellSection>
      </AppShellNavbar>

      <AppShellMain>
        <Outlet />
      </AppShellMain>

    </AppShell>
  );
}

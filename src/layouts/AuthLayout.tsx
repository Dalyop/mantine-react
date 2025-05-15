import { Outlet } from 'react-router-dom';
import { AppShell, AppShellHeader, AppShellNavbar, AppShellFooter, AppShellMain, AppShellSection, Flex } from '@mantine/core';
import { DarkMode } from '../components/DarkModeButton/DarkMode';

export default function AuthLayout() {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShellHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10,}}>
        <AppShellSection px="md">
          <h2>Header Content</h2>
        </AppShellSection>
        <AppShellSection>
          <DarkMode />
        </AppShellSection>
      </AppShellHeader>

      <AppShellMain>
        <Outlet />
      </AppShellMain>

      <AppShellFooter>
        <AppShellSection px="md">
          <p>Footer content</p>
        </AppShellSection>
      </AppShellFooter>
    </AppShell>
  );
}

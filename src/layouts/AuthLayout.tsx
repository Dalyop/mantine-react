import { Outlet } from 'react-router-dom';
import { AppShell, AppShellHeader, AppShellNavbar, AppShellFooter, AppShellMain, AppShellSection, Flex } from '@mantine/core';
import { DarkMode } from '../components/DarkModeButton/DarkMode';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

export default function AuthLayout() {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShellHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10,}}>
        <AppShellSection px="md">
          < Navbar />
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
          <Footer />
        </AppShellSection>
      </AppShellFooter>

    </AppShell>
  );
}

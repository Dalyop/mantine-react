import { Outlet } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { DarkMode } from '@/components/DarkModeButton/DarkMode';
import { Dashboard } from '@/components/Dashboard/Dashboard';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

export default function RootLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { AppRouter } from './AppRouter';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppRouter />
    </MantineProvider>
  );
}

import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Paper,
  Title,
  Text,
  Container,
  LoadingOverlay,
  Anchor
} from '@mantine/core';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    onSubmit({ email, password });

    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Container size={420} my={40}>
      <Paper shadow="xs" radius="md">
        <Title order={2} align="center" mt={20} mb={20}>
          Welcome Back
        </Title>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            mb="md"
          />
          <Group justify="space-between" mb={5}>
            <Text component="label" htmlFor="your-password" size="sm" fw={500}>
              Your password
            </Text>

            <Link to="/forgot-password" pt={2} fw={500} fz="xs">
              Forgot your password?
            </Link>
          </Group>
          <PasswordInput placeholder="Your password" id="your-password" />

          <Group mt="lg">
            <Button type="submit" fullWidth loading={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>
          </Group>
        </form>

        <Text align="center" mt={10}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Text>
      </Paper>
    </Container>
  );
}

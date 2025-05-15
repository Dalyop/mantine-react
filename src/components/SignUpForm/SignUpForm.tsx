import React, { useState } from 'react';
import { Container, TextInput, Title, PasswordInput, Button, Group, Paper, Text, Notification } from '@mantine/core';
import { Link } from 'react-router-dom';

interface SignUpFormProps {
    onSubmit: (values: { email: string; password: string; confirmPassword: string }) => void;
}

export function SignUpForm({ onSubmit }: SignUpFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        onSubmit({ email, password, confirmPassword });
    };

    return (
        <Container size={420} my={40}>
            <Paper shadow="xs" radius="md">
                <Title order={2} align="center" mb={20}>
                    Create an Account
                </Title>

                {error && (
                    <Notification color="red" onClose={() => setError(null)} mb="md">
                        {error}
                    </Notification>
                )}

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

                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        mb="md"
                    />

                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        mb="md"
                    />

                    <Group mt="lg">
                        <Button type="submit" fullWidth>
                            Sign Up
                        </Button>
                    </Group>
                </form>
                <Text align="center" mt={10}>
                    Already have an account? <Link to="/login">Login</Link>
                </Text>
            </Paper>
        </Container>
    );
}

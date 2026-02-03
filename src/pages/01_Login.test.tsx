import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import Login from './01_Login';
import { renderWithProviders } from '@/test/test-utils';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<any>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('react-hot-toast', () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

const mockMutate = vi.fn();

vi.mock('@/query/hooks/useAuth', () => ({
  useLogin: () => ({
    mutate: mockMutate,
    isPending: false,
  }),
}));

//Test 1. email/password kosong
test('shows error toast if email or password is empty', async () => {
  renderWithProviders(<Login />);

  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  const toast = (await import('react-hot-toast')).default;

  expect(toast.error).toHaveBeenCalledWith('Email dan password wajib diisi');
});

//Test 2 login sukses
test('calls login mutation and navigates on success', async () => {
  renderWithProviders(<Login />);

  await userEvent.type(screen.getByPlaceholderText(/email/i), 'test@mail.com');
  await userEvent.type(screen.getByPlaceholderText(/password/i), '123456');

  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(mockMutate).toHaveBeenCalledWith(
    { email: 'test@mail.com', password: '123456' },
    expect.any(Object)
  );
});

//Test 3. toggle password
test('toggle password visibility', async () => {
  renderWithProviders(<Login />);

  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toHaveAttribute('type', 'password');

  // Ambil tombol toggle di dalam parent input
  const toggleButton = within(passwordInput.parentElement!).getByRole('button');

  // Klik toggle, tunggu sampai type berubah
  await userEvent.click(toggleButton);
  await waitFor(() => {
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  // Klik lagi, tunggu balik ke password
  await userEvent.click(toggleButton);
  await waitFor(() => {
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});

import { Outlet } from 'react-router-dom';
import { useAuthStore } from '@/zustand/authStore';

import NavbarGuest from './01_NavbarGuest';
import NavbarGuest2 from './01_NavbarGuest2';
import NavbarUser from './02_NavbarUser';
import NavbarUser2 from './02_NavbarUser2';
import Footer from './03_Footer';

type Props = {
  variant?: 'default' | 'detail';
};

export default function AppLayout({ variant = 'default' }: Props) {
  const user = useAuthStore((state) => state.user);

  const navbar = user ? (
    variant === 'detail' ? (
      <NavbarUser2 />
    ) : (
      <NavbarUser />
    )
  ) : variant === 'detail' ? (
    <NavbarGuest2 />
  ) : (
    <NavbarGuest />
  );

  return (
    <>
      {navbar}

      <main className={user ? 'pt-64 md:pt-80' : ''}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

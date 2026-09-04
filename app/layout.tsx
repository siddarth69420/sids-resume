import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Siddarth Khade | Finance & Investment',
  description: 'Personal portfolio of Siddarth Khade, B.Com Finance and Investment student at Christ University.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
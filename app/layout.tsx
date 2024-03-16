import { titilliumWeb } from '@/app/ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={titilliumWeb.className}>{children}</body>
    </html>
  );
}

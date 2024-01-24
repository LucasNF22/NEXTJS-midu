import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className='flex py-10 items-center justify-center'> hecho con ♥ por mí. </footer>
      </body>
    </html>
  );
}

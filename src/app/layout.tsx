import { ReactNode } from "react";
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpeg" type="image/jpeg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

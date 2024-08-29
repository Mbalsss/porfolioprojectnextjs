// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>My Portfolio</title>
      </head>
      <body>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}

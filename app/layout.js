import Script from 'next/script';
import './globals.css';
import '../styles/tailwind.css';
// import Head from 'next/document';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className="bg-dark">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}

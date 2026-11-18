import "./globals.css";

export const metadata = {
  title: "Souad Eroui | Front-End Developer",
  description: "Portfolio of Souad Eroui, Front-End Developer specializing in Next.js and responsive web interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

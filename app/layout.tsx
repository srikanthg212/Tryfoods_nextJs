import "./globals.css";

export const metadata = {
  title: "Tryfoods - Nourish & Thrive",
  description: "Fresh Mediterranean Bowls delivered daily. Nourish your body, thrive daily with our premium salads and healthy bowls.",
  keywords: "salads, healthy food, Mediterranean bowls, fresh food delivery, tryfoods",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="preload" as="image" href="/background.png" />
      </head>
      <body className="bg-[#f4f8f1] text-gray-800">
        {children}
      </body>
    </html>
  );
}

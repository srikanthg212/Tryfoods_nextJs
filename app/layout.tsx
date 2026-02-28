import "./globals.css";

export const metadata = {
  title: "Tryfoods - Nourish & Thrive",
  description: "Fresh Mediterranean Bowls delivered daily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f4f8f1] text-gray-800">
        {children}
      </body>
    </html>
  );
}

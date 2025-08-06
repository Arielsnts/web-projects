import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-700 h-screen flex items-center justify-center p-4">
        <main className="h-[500px] w-[700px] bg-white rounded-[20px] flex flex-col items-center shadow-md">
          {children}
        </main>
      </body>
    </html>
  );
}

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
    <header>
      <a href="/">
        <img src="/MetalBlog.png" alt="logo" className="logo" style={{ width: '200px', height: 'auto' }} />
      </a>
      <nav>
        <ul>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
        
        <main>
          {children}
        </main>

        <footer>
          <p>Desenvolvido por <a href="https://github.com/Arielsnts" target="_blank">Ariel Santos</a></p>
        </footer>
      </body>
    </html>
  );
}

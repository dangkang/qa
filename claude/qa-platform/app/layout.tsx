import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIマッチング専門家QA - 不動産の疑問をAIと専門家が解決",
  description: "不動産ドメイン特化RAGと専門家のハイブリッドモデルで、消費者の不動産に関する疑問・トラブルに低コストで回答するプラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

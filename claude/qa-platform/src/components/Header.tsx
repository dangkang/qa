"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isDashboard = pathname === "/expert-dashboard";

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-lg font-bold text-dark">
            {isDashboard ? "専門家ポータル" : "AIマッチング専門家QA"}
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {isDashboard ? (
            <>
              <Link href="/expert-dashboard" className="text-sm font-medium text-primary">
                ダッシュボード
              </Link>
              <span className="text-sm text-text-light">田中 太郎</span>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xs font-bold">田</span>
              </div>
            </>
          ) : (
            <>
              <Link href="/" className="text-sm text-text-light hover:text-primary transition-colors">
                Q&A検索
              </Link>
              <Link href="/pricing" className="text-sm text-text-light hover:text-primary transition-colors">
                料金プラン
              </Link>
              <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                ログイン
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

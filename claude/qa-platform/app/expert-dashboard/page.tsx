"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";

const sidebarItems = [
  { label: "割り当て質問", count: 3, color: "bg-warning" },
  { label: "対応中", count: 1, color: "bg-secondary" },
  { label: "完了", count: 24, color: "bg-accent" },
];

function ExpertDashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        router.push("/pricing?auto=true");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isAuto, router]);

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-dark">
            宅建士ダッシュボード
          </h1>
          <p className="text-text-light text-sm mt-1">
            田中 太郎（宅地建物取引士）
          </p>
        </motion.div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-52 shrink-0"
          >
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {sidebarItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
                    i === 1
                      ? "bg-secondary/5 border-l-4 border-secondary"
                      : "hover:bg-light-bg border-l-4 border-transparent"
                  } ${i < sidebarItems.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span
                    className={`text-sm font-medium ${
                      i === 1 ? "text-secondary" : "text-text"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`${item.color} text-white text-xs font-bold px-2 py-0.5 rounded-full`}
                  >
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-text-light mb-2">今月の実績</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">回答数</span>
                  <span className="font-medium text-dark">12件</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">平均評価</span>
                  <span className="font-medium text-gold">★ 4.6</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">収入</span>
                  <span className="font-medium text-dark">¥19,800</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Area: Two Column */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {/* Left Column: User Question */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h3 className="text-sm font-bold text-dark mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-secondary/10 rounded flex items-center justify-center text-xs text-secondary">
                  Q
                </span>
                ユーザーの質問
              </h3>

              <div className="bg-light-bg rounded-lg p-4 mb-4">
                <p className="text-sm text-text leading-relaxed">
                  退去時のクリーニング特約について、6年住んでいた場合の原状回復費用の相場感と、大家との交渉の進め方を教えてください。
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-medium text-text-light">
                  追加情報
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-light-bg rounded-lg p-3">
                    <p className="text-xs text-text-light">所在地</p>
                    <p className="text-sm font-medium text-dark">東京都</p>
                  </div>
                  <div className="bg-light-bg rounded-lg p-3">
                    <p className="text-xs text-text-light">契約年数</p>
                    <p className="text-sm font-medium text-dark">6年</p>
                  </div>
                </div>
                <div className="bg-light-bg rounded-lg p-3 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-text-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm text-text">契約書.pdf</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: AI Draft + Expert Edit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h3 className="text-sm font-bold text-dark mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-accent/10 rounded flex items-center justify-center text-xs text-accent">
                  A
                </span>
                AI下書き ＋ 宅建士編集
              </h3>

              <div className="space-y-3 text-sm leading-relaxed">
                {/* AI Generated Text */}
                <p className="text-text">
                  <span className="text-xs text-text-light bg-light-bg px-1.5 py-0.5 rounded mr-1">
                    AI
                  </span>
                  6年間居住後のクリーニング特約3万円の請求は、争う余地があります。
                </p>

                <p className="text-text">
                  <span className="text-xs text-text-light bg-light-bg px-1.5 py-0.5 rounded mr-1">
                    AI
                  </span>
                  6年居住の場合、壁紙・カーペット等の残存価値は大幅に低下しています。ガイドラインの耐用年数表に基づくと、6年でほぼ残存価値1円となります。
                </p>

                {/* Expert Added */}
                <div className="border-l-4 border-secondary pl-4 py-2 bg-secondary/5 rounded-r-lg">
                  <p className="text-secondary font-medium text-xs mb-1">
                    ▼ 専門家が追記
                  </p>
                  <p className="text-text">
                    ただし、クリーニング特約については耐用年数の考え方が直接適用されるわけではない点に注意が必要です。クリーニングは「次の入居者のための費用」という性質があるため、経年劣化とは別の論点となります。
                  </p>
                </div>

                <p className="text-text">
                  <span className="text-xs text-text-light bg-light-bg px-1.5 py-0.5 rounded mr-1">
                    AI
                  </span>
                  最高裁判例（H17.12.16）に照らすと、特約自体は具体的な金額が明記されている場合、有効とされる可能性が高いです。
                </p>

                {/* Expert Comment */}
                <div className="bg-gold/5 border border-gold/20 rounded-lg p-3">
                  <p className="text-xs font-medium text-gold mb-1">
                    💬 専門家コメント
                  </p>
                  <p className="text-text text-sm">
                    東京都の場合、東京ルールにより契約時に重要事項説明で退去時の費用負担について明確に説明を受けている必要があります。この説明が不十分だった場合、特約の効力を争うことが可能です。契約時の書類を確認してみてください。
                  </p>
                </div>

                <p className="text-text">
                  <span className="text-xs text-text-light bg-light-bg px-1.5 py-0.5 rounded mr-1">
                    AI
                  </span>
                  交渉が難航する場合は、消費生活センター（188番）への相談をお勧めします。
                </p>
              </div>

              {/* Time Savings */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-6 bg-accent/5 border border-accent/20 rounded-lg p-4 text-center"
              >
                <p className="text-accent font-bold text-lg">
                  AI下書きにより作業時間 80%短縮
                </p>
                <p className="text-xs text-text-light mt-1">
                  従来30分 → AI下書き活用で約6分
                </p>
              </motion.div>

              {/* Send Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="mt-4"
              >
                <Link
                  href={`/pricing${isAuto ? "?auto=true" : ""}`}
                  className="block w-full py-3 bg-primary text-white rounded-xl font-medium text-sm text-center hover:bg-primary/90 transition-colors"
                >
                  回答を送信する
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertDashboardPage() {
  return (
    <Suspense>
      <ExpertDashboardContent />
    </Suspense>
  );
}

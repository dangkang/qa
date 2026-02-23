"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import TypeWriter from "@/components/TypeWriter";

const popularTags = [
  "敷金返還",
  "原状回復",
  "家賃値下げ",
  "住宅ローン控除",
  "隣人トラブル",
  "契約更新",
];

const stats = [
  { label: "累計回答数", value: "12,847件" },
  { label: "専門家", value: "23名" },
  { label: "平均満足度", value: "4.6/5.0" },
];

const recentQA = [
  {
    question: "賃貸マンションの更新料は法的に支払い義務がありますか？",
    category: "契約更新",
    answers: 3,
    date: "2025年7月14日",
  },
  {
    question: "隣室の騒音がひどい場合、家賃の減額請求は可能ですか？",
    category: "隣人トラブル",
    answers: 2,
    date: "2025年7月13日",
  },
  {
    question: "中古マンション購入後に瑕疵が見つかった場合の対処法は？",
    category: "売買トラブル",
    answers: 5,
    date: "2025年7月12日",
  },
];

const DEMO_QUESTION =
  "賃貸マンションを退去する際、敷金は全額返還されますか？原状回復費用はどこまで負担する必要がありますか？";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";
  const [typingStarted, setTypingStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingStarted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleTypingComplete = useCallback(() => {
    setTimeout(() => {
      setIsLoading(true);
      setTimeout(() => {
        router.push(`/answer${isAuto ? "?auto=true" : ""}`);
      }, 1500);
    }, 500);
  }, [router, isAuto]);

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-dark mb-4 leading-tight"
          >
            不動産の疑問を
            <span className="text-primary">AI</span>と
            <span className="text-primary">専門家</span>が解決します
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-light text-lg mb-10"
          >
            法規・判例データベースに基づくAI回答と、資格を持つ専門家による確認済み回答
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 focus-within:border-primary transition-colors p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-text-light mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <div className="flex-1 min-h-[60px] text-left text-text text-base leading-relaxed">
                  {typingStarted ? (
                    <TypeWriter
                      text={DEMO_QUESTION}
                      speed={60}
                      onComplete={handleTypingComplete}
                    />
                  ) : (
                    <span className="text-text-light">
                      質問を入力してください... 例：敷金は全額返ってくる？
                    </span>
                  )}
                </div>
              </div>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 flex items-center gap-2 text-secondary"
                >
                  <div className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-medium">
                    AIが回答を生成中...
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Popular Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mt-6"
          >
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-text-light hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
              >
                <p className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-text-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Q&A */}
      <section className="py-8 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-xl font-bold text-dark mb-6"
          >
            最新のQ&A
          </motion.h2>
          <div className="grid grid-cols-3 gap-4">
            {recentQA.map((qa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-3">
                  {qa.category}
                </span>
                <p className="text-sm font-medium text-dark leading-relaxed mb-3 line-clamp-3">
                  {qa.question}
                </p>
                <div className="flex items-center justify-between text-xs text-text-light">
                  <span>{qa.answers}件の回答</span>
                  <span>{qa.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}

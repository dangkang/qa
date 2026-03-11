"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";

const POPULAR_TAGS = [
  "敷金返還",
  "原状回復",
  "家賃値上げ",
  "住宅ローン控除",
  "隣人トラブル",
  "契約更新",
];

const RECENT_QA = [
  {
    category: "敷金・原状回復",
    question: "退去時のクリーニング費用は誰が負担する？",
    answerPreview: "通常損耗は貸主負担が原則です。ただし特約がある場合...",
    date: "2025年7月14日",
    badge: "AI回答済み",
  },
  {
    category: "家賃",
    question: "契約更新時に家賃を値上げされた場合の対処法は？",
    answerPreview: "借地借家法第32条により、不相当な値上げは拒否できます...",
    date: "2025年7月13日",
    badge: "宅建士回答済み",
  },
  {
    category: "契約",
    question: "賃貸借契約の連帯保証人はどこまで責任を負う？",
    answerPreview: "2020年民法改正により、極度額の定めが必要です...",
    date: "2025年7月12日",
    badge: "AI回答済み",
  },
];

const DEMO_QUESTION =
  "賃貸マンションを退去する際、敷金は全額返還されますか？原状回復費用はどこまで負担する必要がありますか？";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";
  const [isTyping, setIsTyping] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const startDemo = useCallback(() => {
    setIsTyping(true);
  }, []);

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(startDemo, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAuto, startDemo]);

  const handleTypingComplete = useCallback(() => {
    setSearchValue(DEMO_QUESTION);
    setIsTyping(false);
    setShowLoading(true);
    setTimeout(() => {
      router.push(isAuto ? "/answer?auto=true" : "/answer");
    }, 2000);
  }, [router, isAuto]);

  const handleSearch = () => {
    if (searchValue.trim()) {
      setShowLoading(true);
      setTimeout(() => router.push("/answer"), 1500);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-dark leading-tight"
          >
            不動産の疑問、
            <span className="text-primary">AI</span>と
            <span className="text-accent">専門家</span>が解決します
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-text-light max-w-2xl mx-auto"
          >
            不動産ドメイン特化AIが法規・判例に基づいて即時回答。
            より深い相談は宅建士が、法的判断は弁護士がサポートします。
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="flex items-center bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus-within:border-primary transition-colors shadow-lg">
                <svg
                  className="w-5 h-5 text-text-light mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {isTyping ? (
                  <div className="flex-1 text-left text-text text-lg">
                    <TypeWriter
                      text={DEMO_QUESTION}
                      speed={40}
                      onComplete={handleTypingComplete}
                      showCursor={true}
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="質問を入力してください... 例：敷金は全額返ってくる？"
                    className="flex-1 text-lg text-text placeholder-text-light/50 outline-none bg-transparent"
                  />
                )}
                <button
                  onClick={isAuto ? startDemo : handleSearch}
                  className="ml-3 px-6 py-2 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors shrink-0"
                >
                  質問する
                </button>
              </div>
            </div>

            {showLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex items-center justify-center gap-2 text-primary"
              >
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-medium">
                  AIが回答を生成中...
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Popular Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            <span className="text-sm text-text-light mr-1">人気：</span>
            {POPULAR_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-light-bg text-sm text-text-light rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { label: "累計回答数", value: "12,847", unit: "件" },
              { label: "専門家", value: "23", unit: "名" },
              { label: "平均満足度", value: "4.6", unit: "/5.0" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 text-center border border-gray-100"
              >
                <p className="text-3xl font-bold text-primary">
                  {stat.value}
                  <span className="text-lg text-text-light ml-1">
                    {stat.unit}
                  </span>
                </p>
                <p className="text-sm text-text-light mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Q&A */}
      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-dark mb-6">最新のQ&A</h2>
          <div className="grid grid-cols-3 gap-4">
            {RECENT_QA.map((qa, index) => (
              <motion.div
                key={qa.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15 }}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                    {qa.category}
                  </span>
                  <span className="text-xs text-text-light">{qa.date}</span>
                </div>
                <h3 className="font-medium text-dark text-sm leading-snug mb-2">
                  {qa.question}
                </h3>
                <p className="text-xs text-text-light leading-relaxed">
                  {qa.answerPreview}
                </p>
                <div className="mt-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      qa.badge === "AI回答済み"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {qa.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}

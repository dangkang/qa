"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ExpertCard from "@/components/ExpertCard";

const experts = [
  {
    name: "田中 太郎",
    title: "宅地建物取引士",
    experience: "10年経験",
    rating: 4.8,
    reviews: 127,
    avatarColor: "bg-primary",
  },
  {
    name: "佐藤 花子",
    title: "弁護士（不動産専門）",
    experience: "15年経験",
    rating: 4.9,
    reviews: 89,
    avatarColor: "bg-dark",
  },
];

function ExpertAskContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        router.push("/expert-answer?auto=true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isAuto, router]);

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => {
      router.push(`/expert-answer${isAuto ? "?auto=true" : ""}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-dark mb-2">
            専門家に相談する
          </h1>
          <p className="text-text-light mb-8">
            AI回答に加え、資格を持つ専門家が個別に確認・回答します
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left: Question Form */}
          <div className="col-span-2 space-y-6">
            {/* Question */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <label className="block text-sm font-medium text-dark mb-2">
                質問内容
              </label>
              <div className="w-full p-4 bg-light-bg rounded-lg text-sm text-text leading-relaxed border border-gray-200">
                上記の敷金返還について、契約書にはクリーニング特約があります。退去時にクリーニング代3万円を請求されていますが、6年住んでいた場合、この特約は有効でしょうか？
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <label className="block text-sm font-medium text-dark mb-4">
                追加情報
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-light mb-1">
                    物件所在地
                  </label>
                  <div className="p-3 bg-light-bg rounded-lg text-sm text-text border border-gray-200">
                    東京都
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-text-light mb-1">
                    契約年数
                  </label>
                  <div className="p-3 bg-light-bg rounded-lg text-sm text-text border border-gray-200">
                    6年
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-text-light mb-1">
                  添付ファイル
                </label>
                <div className="p-3 bg-light-bg rounded-lg text-sm text-text border border-gray-200 flex items-center gap-2">
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
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                  契約書.pdf
                  <span className="text-xs text-accent ml-1">
                    アップロード済み
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Difficulty & Cost */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 text-gold text-sm font-medium rounded-full">
                    <span>🟠</span> AI判定：個別判断が必要な質問
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-text-light">推定費用</p>
                  <p className="text-lg font-bold text-dark">
                    ¥2,000〜¥3,000
                  </p>
                  <p className="text-xs text-text-light">
                    専門家の確認・編集付き
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Expert Selection */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-sm font-medium text-dark"
            >
              対応可能な専門家
            </motion.p>
            {experts.map((expert, i) => (
              <ExpertCard
                key={expert.name}
                {...expert}
                delay={0.6 + i * 0.2}
                selected={i === 0}
              />
            ))}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="pt-4"
            >
              <button
                onClick={handleSend}
                disabled={isSending}
                className="w-full py-3.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    送信中...
                  </span>
                ) : (
                  "質問を送信する（¥2,000）"
                )}
              </button>
            </motion.div>

            {isSending && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-sm text-secondary font-medium">
                  質問を送信しました。AIが下書きを生成し、専門家が確認中です...
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertAskPage() {
  return (
    <Suspense>
      <ExpertAskContent />
    </Suspense>
  );
}

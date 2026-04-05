"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import ExpertCard from "@/components/ExpertCard";

function ExpertAskContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      router.push(isAuto ? "/expert-answer?auto=true" : "/expert-answer");
    }, 2500);
  };

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(handleSubmit, 3000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuto]);

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-dark mb-8"
        >
          宅建士に相談する
        </motion.h1>

        {/* Question Textarea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 p-6 mb-6"
        >
          <label className="block text-sm font-medium text-dark mb-2">
            質問内容
          </label>
          <textarea
            className="w-full h-32 px-4 py-3 border border-gray-200 rounded-lg text-text text-sm leading-relaxed resize-none focus:outline-none focus:border-primary transition-colors"
            defaultValue="退去時のクリーニング特約について、6年住んでいた場合の原状回復費用の相場感と、大家との交渉の進め方を教えてください。"
            readOnly
          />
        </motion.div>

        {/* Additional Info Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 p-6 mb-6"
        >
          <h3 className="text-sm font-medium text-dark mb-4">追加情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Location */}
            <div>
              <label className="block text-xs text-text-light mb-1">
                物件所在地
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-text bg-white appearance-none focus:outline-none focus:border-primary transition-colors cursor-default"
                  defaultValue="東京都"
                  disabled
                >
                  <option value="東京都">東京都</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-text-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Contract Years */}
            <div>
              <label className="block text-xs text-text-light mb-1">
                契約年数
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-text focus:outline-none focus:border-primary transition-colors"
                defaultValue="6年"
                readOnly
              />
            </div>
          </div>

          {/* Attached File */}
          <div className="mt-4">
            <label className="block text-xs text-text-light mb-1">
              添付ファイル
            </label>
            <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg bg-light-bg">
              <svg
                className="w-4 h-4 text-text-light shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <span className="text-sm text-text">契約書.pdf</span>
            </div>
          </div>
        </motion.div>

        {/* Difficulty Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold/10 border border-gold/30 rounded-lg">
            <span className="text-sm text-gold font-medium">
              AI判定：実務経験が必要な質問 → 宅建士が対応
            </span>
          </div>
        </motion.div>

        {/* Estimated Cost */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-white rounded-xl border border-gray-200 p-5 mb-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-light">見積もり費用</span>
            <span className="text-lg font-bold text-dark">
              ¥1,800
              <span className="text-xs font-normal text-text-light ml-1">
                （宅建士の確認・編集付き）
              </span>
            </span>
          </div>
        </motion.div>

        {/* Expert Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-sm font-medium text-dark mb-3">
            対応可能な宅建士
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExpertCard
              name="田中 太郎"
              title="宅地建物取引士"
              experience="10年経験"
              rating={4.8}
              reviewCount={127}
              delay={0.5}
            />
            <ExpertCard
              name="鈴木 一郎"
              title="宅地建物取引士"
              experience="8年経験"
              rating={4.7}
              reviewCount={95}
              delay={0.6}
            />
          </div>
        </motion.div>

        {/* Submit Button / Loading State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-medium text-primary">
                質問を送信しました。AIが下書きを生成し、宅建士が確認中です...
              </span>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors text-base"
            >
              質問を送信する（¥1,800）
            </button>
          )}
        </motion.div>
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

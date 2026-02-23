"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import StatusTimeline from "@/components/StatusTimeline";
import Link from "next/link";

const timelineSteps = [
  { label: "質問送信" },
  { label: "AI下書き生成" },
  { label: "専門家確認・編集" },
  { label: "回答完了" },
];

function ExpertAnswerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";
  const [showAnswer, setShowAnswer] = useState(false);

  const handleTimelineComplete = useCallback(() => {
    setTimeout(() => setShowAnswer(true), 500);
  }, []);

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        router.push("/expert-dashboard?auto=true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isAuto, router]);

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 border border-gray-200 mb-8"
        >
          <h2 className="text-lg font-bold text-dark text-center mb-8">
            回答ステータス
          </h2>
          <StatusTimeline
            steps={timelineSteps}
            autoAdvance={true}
            advanceInterval={1800}
            onAllComplete={handleTimelineComplete}
          />
        </motion.div>

        {/* Expert Answer */}
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 border border-gray-200"
          >
            {/* Expert Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  田
                </div>
                <div>
                  <p className="font-bold text-dark">田中 太郎</p>
                  <p className="text-xs text-text-light">
                    宅地建物取引士 / 回答日：2025年7月15日
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
                ✓ 専門家が確認済み
              </span>
            </div>

            <div className="border-t border-gray-100 pt-6">
              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-dark mb-3">結論</h3>
                <p className="text-text leading-relaxed text-[15px] mb-6">
                  6年間居住後のクリーニング特約3万円の請求は、争う余地があります。
                </p>
              </motion.div>

              {/* Detail */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-lg font-bold text-dark mb-3">詳細</h3>
                <p className="text-text leading-relaxed text-[15px] mb-4">
                  お客様のケースでは以下の点を考慮する必要があります：
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-dark text-sm mb-2">
                      1. 経年劣化の考慮
                    </h4>
                    <p className="text-text leading-relaxed text-[15px]">
                      6年居住の場合、壁紙・カーペット等の残存価値は大幅に低下しています。ガイドラインの耐用年数表に基づくと、6年でほぼ残存価値1円となります。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-dark text-sm mb-2">
                      2. クリーニング特約の有効性
                    </h4>
                    <p className="text-text leading-relaxed text-[15px]">
                      最高裁判例（H17.12.16）に照らすと、特約自体は具体的な金額が明記されている場合、有効とされる可能性が高いです。ただし、3万円という金額の妥当性は別途検討が必要です。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-dark text-sm mb-2">
                      3. 東京都の条例
                    </h4>
                    <p className="text-text leading-relaxed text-[15px]">
                      東京都「賃貸住宅紛争防止条例」（東京ルール）により、契約時に退去時の費用負担について書面で説明を受けている必要があります。
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Recommended Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-6 bg-secondary/5 rounded-xl p-5 border border-secondary/20"
              >
                <h3 className="text-base font-bold text-dark mb-3">
                  推奨アクション
                </h3>
                <p className="text-text leading-relaxed text-[15px]">
                  まず契約書の特約条項を確認し、具体的な範囲と金額が明記されているか確認してください。記載が曖昧な場合は、特約の有効性を主張して書面交渉が可能です。交渉が難航する場合は、消費生活センター（188番）への相談をお勧めします。
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between"
            >
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-light-bg rounded-lg text-sm text-text-light hover:text-text transition-colors">
                  👍 役に立った
                </button>
                <button className="px-4 py-2 bg-light-bg rounded-lg text-sm text-text-light hover:text-text transition-colors">
                  追加質問する
                </button>
              </div>
              <Link
                href={`/expert-dashboard${isAuto ? "?auto=true" : ""}`}
                className="text-sm text-secondary hover:underline"
              >
                専門家ダッシュボード（裏側を見る） →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ExpertAnswerPage() {
  return (
    <Suspense>
      <ExpertAnswerContent />
    </Suspense>
  );
}

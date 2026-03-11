"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import StatusTimeline from "@/components/StatusTimeline";

const TIMELINE_STEPS = [
  { label: "質問送信", completed: false },
  { label: "AI下書き生成", completed: false },
  { label: "宅建士確認・編集", completed: false },
  { label: "回答完了", completed: false },
];

function ExpertAnswerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnswer(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        router.push("/lawyer-search?auto=true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isAuto, router]);

  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Status Timeline */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <StatusTimeline
            steps={TIMELINE_STEPS}
            animateSequentially={true}
            animationDelay={1500}
          />
        </div>

        {/* Expert Answer */}
        {showAnswer && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Answer Header */}
            <div className="bg-[#0B4F6C] px-8 py-6">
              <h1 className="text-2xl font-bold text-white">宅建士回答</h1>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-white/80 text-sm">
                <span>回答者：田中 太郎（宅地建物取引士）</span>
                <span className="hidden sm:inline">|</span>
                <span>回答日：2025年7月15日</span>
              </div>
            </div>

            {/* Answer Body */}
            <div className="px-8 py-8">
              {/* 結論 */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-[#0A2342] mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#20BF55] rounded-full inline-block" />
                  結論
                </h2>
                <p className="text-[#1A1A2E] leading-relaxed">
                  6年間居住後のクリーニング費用3万円については、交渉で減額できる可能性が高いです。以下、実務的な交渉ポイントをお伝えします。
                </p>
              </section>

              {/* 詳細 */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-[#0A2342] mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#20BF55] rounded-full inline-block" />
                  詳細
                </h2>
                <div className="space-y-5">
                  <div className="pl-4 border-l-2 border-gray-200">
                    <h3 className="font-bold text-[#1A1A2E] mb-1">
                      1. 経年劣化の考慮
                    </h3>
                    <p className="text-[#1A1A2E] leading-relaxed">
                      6年居住の場合、壁紙・カーペット等の残存価値は大幅に低下しています。ガイドラインの耐用年数表に基づくと、6年でほぼ残存価値1円となります。
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-gray-200">
                    <h3 className="font-bold text-[#1A1A2E] mb-1">
                      2. クリーニング特約の一般的な取り扱い
                    </h3>
                    <p className="text-[#1A1A2E] leading-relaxed">
                      実務上、具体的な金額が明記されている特約は認められることが多いです。ただし、3万円という金額の妥当性は物件の広さや状態により異なります。
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-gray-200">
                    <h3 className="font-bold text-[#1A1A2E] mb-1">
                      3. 東京都の条例
                    </h3>
                    <p className="text-[#1A1A2E] leading-relaxed">
                      東京都「賃貸住宅紛争防止条例」（東京ルール）により、契約時に退去時の費用負担について書面で説明を受けている必要があります。
                    </p>
                  </div>
                </div>
              </section>

              {/* 推奨アクション */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-[#0A2342] mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#20BF55] rounded-full inline-block" />
                  推奨アクション
                </h2>
                <ol className="space-y-3">
                  <li className="flex gap-3 text-[#1A1A2E] leading-relaxed">
                    <span className="shrink-0 w-6 h-6 bg-[#0B4F6C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    契約書の特約条項を確認し、具体的な範囲と金額の記載があるか確認
                  </li>
                  <li className="flex gap-3 text-[#1A1A2E] leading-relaxed">
                    <span className="shrink-0 w-6 h-6 bg-[#0B4F6C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    東京都の「賃貸住宅紛争防止条例」の説明書面を受け取っているか確認
                  </li>
                  <li className="flex gap-3 text-[#1A1A2E] leading-relaxed">
                    <span className="shrink-0 w-6 h-6 bg-[#0B4F6C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    上記を踏まえ、大家または管理会社に書面で減額交渉を申し入れ
                  </li>
                </ol>
              </section>

              {/* Tip */}
              <div className="bg-[#F4F7FA] rounded-xl p-5 border border-gray-200">
                <p className="text-[#1A1A2E] leading-relaxed">
                  <span className="mr-1">💡</span>
                  交渉が難航する場合は、消費生活センター（188番）への相談をお勧めします。
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-8 space-y-4">
              {/* Verified Badge */}
              <div className="flex items-center gap-2 bg-[#20BF55]/10 text-[#20BF55] font-medium px-4 py-3 rounded-xl">
                <span className="text-lg">✅</span>
                <span>宅建士が確認済み</span>
              </div>

              {/* Lawyer Search Link */}
              <Link
                href="/lawyer-search"
                className="flex items-center justify-center gap-2 w-full bg-[#0A2342] text-white font-medium px-6 py-4 rounded-xl hover:bg-[#0A2342]/90 transition-colors text-center"
              >
                <span>⚖️</span>
                <span>不動産に強い弁護士を探す</span>
              </Link>
            </div>
          </motion.article>
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

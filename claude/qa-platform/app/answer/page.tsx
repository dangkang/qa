"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import StreamingText from "@/components/StreamingText";
import CitationCard from "@/components/CitationCard";
import Link from "next/link";

const answerSections = [
  {
    type: "heading" as const,
    content: "回答",
  },
  {
    type: "paragraph" as const,
    content:
      "敷金の返還と原状回復費用については、以下のルールが適用されます。",
  },
  {
    type: "heading" as const,
    content: "1. 敷金は原則として全額返還されます",
  },
  {
    type: "paragraph" as const,
    content:
      "賃貸借契約が終了した場合、賃貸人（大家）は敷金から賃借人の債務（未払い賃料等）を差し引いた残額を返還する義務があります。",
  },
  {
    type: "citation" as const,
    content:
      "根拠：民法第622条の2第1項「賃貸人は、敷金を受け取っている場合において、（中略）その受け取った敷金の額から賃貸借に基づいて生じた賃借人の賃貸人に対する金銭の給付を目的とする債務の額を控除した残額を返還しなければならない。」",
  },
  {
    type: "heading" as const,
    content: "2. 通常損耗（経年劣化）は貸主負担です",
  },
  {
    type: "paragraph" as const,
    content:
      "普通に生活していて生じた損耗（壁紙の日焼け、畳の擦れ、家具設置によるカーペットのへこみ等）は、原状回復の対象外です。",
  },
  {
    type: "citation" as const,
    content:
      "根拠：国土交通省「原状回復をめぐるトラブルとガイドライン」（改訂版）「賃借人の居住、使用により発生した建物価値の減少のうち、賃借人の故意・過失、善管注意義務違反、その他通常の使用を超えるような使用による損耗・毀損を復旧すること」という原状回復の定義",
  },
  {
    type: "heading" as const,
    content: "3. 特約がある場合の注意点",
  },
  {
    type: "paragraph" as const,
    content:
      "契約書において「スクリーニング費用は借主負担」等の特約がある場合、一定の条件を満たせば有効とされます。ただし、消費者契約法第10条により、消費者の利益を一方的に害する条項は無効となる場合があります。",
  },
  {
    type: "citation" as const,
    content:
      "参考判例：最高裁平成17年12月16日判決 通常損耗補修特約が成立するためには、賃借人が補修費用を負担することになる通常損耗の範囲が賃貸借契約書等に具体的に明記されている必要がある。",
  },
  {
    type: "warning" as const,
    content:
      "この回答はAIが法規・判例データベースから自動生成した一般的な法律情報です。個別の契約内容や地域の慣行により異なる場合があります。",
  },
];

const relatedQuestions = [
  "退去時のクリーニング費用は誰が負担？",
  "ペット可物件で退去する際の注意点は？",
  "敷金返還の請求期限はいつまで？",
];

const citations = [
  { label: "民法第622条の2", description: "敷金の返還に関する規定" },
  {
    label: "国交省ガイドライン",
    description: "原状回復をめぐるトラブルとガイドライン（改訂版）",
  },
  {
    label: "最高裁 H17.12.16",
    description: "通常損耗補修特約の成立要件に関する判決",
  },
];

function AnswerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        router.push("/expert-ask?auto=true");
      }, 15000);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuto]);

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Difficulty Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
                <span>🟢</span> AI判定：一般的な質問（FAQ型）
              </span>
            </motion.div>

            {/* Question Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200 mb-6"
            >
              <p className="text-xs text-text-light mb-2">あなたの質問</p>
              <p className="text-base font-medium text-dark leading-relaxed">
                賃貸マンションを退去する際、敷金は全額返還されますか？原状回復費用はどこまで負担する必要がありますか？
              </p>
            </motion.div>

            {/* AI Answer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">AI</span>
                </div>
                <span className="text-sm font-medium text-dark">
                  AI回答
                </span>
                <span className="text-xs text-text-light">
                  ・法規・判例データベースより自動生成
                </span>
              </div>

              <StreamingText sections={answerSections} startDelay={0.8} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="w-72 shrink-0 space-y-6">
            {/* Feedback */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="bg-white rounded-xl p-5 border border-gray-200"
            >
              <p className="text-sm font-medium text-dark mb-3">
                この回答は役に立ちましたか？
              </p>
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-light-bg rounded-lg text-sm hover:bg-accent/10 hover:text-accent transition-colors">
                  👍 はい
                </button>
                <button className="flex-1 py-2 bg-light-bg rounded-lg text-sm hover:bg-warning/10 hover:text-warning transition-colors">
                  👎 いいえ
                </button>
              </div>
            </motion.div>

            {/* Related Questions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="bg-white rounded-xl p-5 border border-gray-200"
            >
              <p className="text-sm font-medium text-dark mb-3">
                関連する質問
              </p>
              <ul className="space-y-2">
                {relatedQuestions.map((q, i) => (
                  <li
                    key={i}
                    className="text-sm text-secondary hover:underline cursor-pointer"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA: Two-layer model */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="space-y-3"
            >
              <div className="bg-accent/5 border-2 border-accent/30 rounded-xl p-5">
                <p className="font-bold text-dark mb-1 text-sm">🏠 不動産取引の実務相談</p>
                <p className="text-xs text-text-light mb-3">
                  原状回復の相場感や交渉の進め方など、宅建士が実務的にアドバイス
                </p>
                <Link
                  href={`/expert-ask${isAuto ? "?auto=true" : ""}`}
                  className="block w-full py-2.5 bg-accent text-white rounded-lg text-sm font-medium text-center hover:bg-accent/90 transition-colors"
                >
                  宅建士に質問する（¥500〜3,000）
                </Link>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                <p className="font-bold text-dark mb-1 text-sm">⚖️ 法的判断が必要な場合</p>
                <p className="text-xs text-text-light mb-3">
                  契約条項の有効性や損害賠償など、弁護士に直接ご相談ください
                </p>
                <Link
                  href={`/lawyer-search${isAuto ? "?auto=true" : ""}`}
                  className="block w-full py-2.5 bg-white text-dark border-2 border-gray-300 rounded-lg text-sm font-medium text-center hover:border-primary hover:text-primary transition-colors"
                >
                  不動産に強い弁護士を探す →
                </Link>
              </div>
            </motion.div>

            {/* Citations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.9 }}
            >
              <p className="text-sm font-medium text-dark mb-3">
                引用された法規・判例
              </p>
              <div className="space-y-2">
                {citations.map((c, i) => (
                  <CitationCard
                    key={i}
                    label={c.label}
                    description={c.description}
                    delay={2.0 + i * 0.15}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AnswerPage() {
  return (
    <Suspense>
      <AnswerContent />
    </Suspense>
  );
}

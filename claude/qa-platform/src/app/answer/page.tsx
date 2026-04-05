"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import StreamingText from "@/components/StreamingText";
import CitationCard from "@/components/CitationCard";

const QUESTION =
  "賃貸マンションを退去する際、敷金は全額返還されますか？原状回復費用はどこまで負担する必要がありますか？";

const ANSWER_SECTIONS: {
  type: "heading" | "paragraph" | "citation" | "divider" | "warning" | "cta";
  content: string;
  subContent?: string;
}[] = [
  {
    type: "heading",
    content: "回答",
  },
  {
    type: "heading",
    content: "1. 敷金は原則として全額返還されます",
  },
  {
    type: "paragraph",
    content:
      "賃貸借契約が終了した場合、賃貸人（大家）は敷金から賃借人の債務（未払い賃料等）を差し引いた残額を返還する義務があります。",
  },
  {
    type: "citation",
    subContent: "根拠：民法第622条の2第1項",
    content:
      "「賃貸人は、敷金を受け取っている場合において、その受け取った敷金の額から賃貸借に基づいて生じた賃借人の賃貸人に対する金銭の給付を目的とする債務の額を控除した残額を返還しなければならない。」",
  },
  {
    type: "heading",
    content: "2. 通常損耗（経年劣化）は貸主負担です",
  },
  {
    type: "paragraph",
    content:
      "普通に生活していて生じる損耗（壁紙の日焼け、畳の摩耗、家具設置によるカーペットのへこみ等）は、原状回復の対象外です。",
  },
  {
    type: "citation",
    subContent:
      "根拠：国土交通省「原状回復をめぐるトラブルとガイドライン」（再改訂版）",
    content:
      "ガイドラインでは、「原状回復」を「賃借人の居住、使用により発生した建物価値の減少のうち、賃借人の故意・過失、善管注意義務違反、その他通常の使用を超えるような使用による損耗・毀損を復旧すること」と定義しています。",
  },
  {
    type: "heading",
    content: "3. 特約がある場合の注意点",
  },
  {
    type: "paragraph",
    content:
      "契約書に原状回復やクリーニング費用に関する特約がある場合でも、消費者契約法第10条により、消費者の利益を一方的に害する条項は無効となる場合があります。特約が有効となるためには、賃借人が特約の内容を十分に認識し、義務負担の意思表示をしていることが必要です。",
  },
  {
    type: "citation",
    subContent: "参考判例：最高裁平成17年12月16日判決",
    content:
      "通常損耗補修特約が成立するためには、賃借人が補修費用を負担することになる通常損耗の範囲が賃貸借契約書の条項自体に具体的に明記されているか、仮に契約書に明記されていなくても口頭により説明し、賃借人がその旨を明確に認識していることが必要であると判示しています。",
  },
  {
    type: "divider",
    content: "",
  },
  {
    type: "warning",
    content:
      "⚠️ この回答はAIが法規・判例データベースから自動生成した一般的な法律情報です。個別の契約内容や地域の慣行により異なる場合があります。",
  },
  {
    type: "cta",
    content:
      "🏠 不動産取引の実務に関する詳しい相談 → 「宅建士に質問する」（¥1,800/質問）",
  },
  {
    type: "cta",
    content:
      "⚖️ 契約条項の有効性や法的判断が必要な場合 → 「弁護士を探す」（外部相談）",
  },
];

const RELATED_QUESTIONS = [
  "退去時のクリーニング費用は特約で負担させられる？",
  "ペット不可物件でペットを飼った場合の原状回復費用は？",
  "敷金返還をめぐるトラブルの相談先は？",
];

function AnswerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";
  const [streamingComplete, setStreamingComplete] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    if (isAuto && streamingComplete) {
      const timer = setTimeout(() => {
        router.push("/expert-ask?auto=true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAuto, streamingComplete, router]);

  const handleStreamingComplete = () => {
    setStreamingComplete(true);
  };

  return (
    <div className="min-h-screen bg-light-bg">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Difficulty Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-accent/15 text-accent text-sm font-medium rounded-full border border-accent/30">
            📊 AI判定：一般的な質問（FAQ型）
          </span>
        </motion.div>

        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Question Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-100 p-6 mb-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-bold">Q</span>
                </div>
                <div>
                  <p className="text-sm text-text-light mb-1">あなたの質問</p>
                  <p className="text-lg font-medium text-dark leading-relaxed">
                    {QUESTION}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Answer Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-dark">
                    AI回答（不動産ドメイン特化RAG）
                  </p>
                  <p className="text-xs text-text-light">
                    法規・判例データベースに基づく自動生成回答
                  </p>
                </div>
              </div>

              <StreamingText
                sections={ANSWER_SECTIONS}
                speed={12}
                onComplete={handleStreamingComplete}
              />
            </motion.div>

            {/* CTA Buttons */}
            {streamingComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => router.push("/expert-ask")}
                  className="flex-1 py-4 px-6 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors text-center shadow-sm"
                >
                  🏠 宅建士に質問する
                </button>
                <button
                  onClick={() => router.push("/lawyer-search")}
                  className="flex-1 py-4 px-6 bg-white text-dark font-medium rounded-xl border-2 border-gray-200 hover:border-primary/40 hover:text-primary transition-colors text-center"
                >
                  ⚖️ 不動産に強い弁護士を探す
                </button>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="w-80 shrink-0 space-y-6">
            {/* Feedback */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-dark mb-3">
                この回答は役に立ちましたか？
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setFeedbackGiven("up")}
                  className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    feedbackGiven === "up"
                      ? "bg-accent/10 border-accent/30 text-accent"
                      : "border-gray-200 text-text-light hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  👍 役に立った
                </button>
                <button
                  onClick={() => setFeedbackGiven("down")}
                  className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    feedbackGiven === "down"
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "border-gray-200 text-text-light hover:border-red-200 hover:text-red-500"
                  }`}
                >
                  👎 改善が必要
                </button>
              </div>
              {feedbackGiven && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-text-light mt-2 text-center"
                >
                  フィードバックありがとうございます
                </motion.p>
              )}
            </motion.div>

            {/* Related Questions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-dark mb-3">
                関連する質問
              </p>
              <div className="space-y-2">
                {RELATED_QUESTIONS.map((q, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                    className="p-3 bg-light-bg rounded-lg hover:bg-primary/5 cursor-pointer transition-colors group"
                  >
                    <p className="text-sm text-text group-hover:text-primary transition-colors leading-snug">
                      {q}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cited Laws & Precedents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-dark mb-3">
                引用された法規・判例
              </p>
              <div className="space-y-3">
                <CitationCard
                  icon="📜"
                  title="民法第622条の2第1項"
                  description="敷金の返還義務に関する規定"
                  delay={1.0}
                />
                <CitationCard
                  icon="📋"
                  title="国土交通省ガイドライン"
                  description="原状回復をめぐるトラブルとガイドライン（再改訂版）"
                  delay={1.2}
                />
                <CitationCard
                  icon="⚖️"
                  title="最高裁平成17年12月16日判決"
                  description="通常損耗補修特約の成立要件に関する判例"
                  delay={1.4}
                />
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

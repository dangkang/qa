"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PricingCard from "@/components/PricingCard";

function PricingContent() {
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-dark text-center"
        >
          料金プラン
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-text-light text-center"
        >
          あなたに合ったプランをお選びください
        </motion.p>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-4 gap-6">
          {/* Card 1: 無料プラン */}
          <PricingCard
            title="無料プラン"
            price="¥0"
            features={[
              { label: "Q&A閲覧・検索", included: true },
              { label: "AI即時回答", included: false },
              { label: "宅建士スポット相談", included: false },
              { label: "弁護士検索", included: false },
            ]}
            ctaLabel="無料で始める"
            delay={0.3}
          />

          {/* Card 2: Basic (highlighted) */}
          <PricingCard
            title="Basic"
            price="¥980"
            priceNote="/月"
            features={[
              { label: "Q&A閲覧・検索", included: true },
              { label: "AI即時回答", included: true },
              { label: "宅建士スポット相談", included: "別途¥1,800/質問" },
              { label: "弁護士検索", included: true },
            ]}
            highlighted={true}
            ctaLabel="Basicを始める"
            delay={0.4}
          />

          {/* Card 3: Pro */}
          <PricingCard
            title="Pro"
            price="¥1,980"
            priceNote="/月"
            features={[
              { label: "Q&A閲覧・検索", included: true },
              { label: "AI即時回答", included: true },
              { label: "宅建士スポット相談", included: "月1回無料 + ¥1,800/質問" },
              { label: "弁護士検索", included: true },
            ]}
            ctaLabel="Proを始める"
            delay={0.5}
          />

          {/* Card 4: 弁護士を探す */}
          <PricingCard
            title="弁護士を探す"
            price="掲載料制"
            priceNote="（弁護士負担）"
            features={[
              { label: "Q&A閲覧・検索", included: true },
              { label: "AI即時回答", included: true },
              { label: "宅建士スポット相談", included: "—" },
              { label: "弁護士直接相談", included: "弁護士と直接契約" },
            ]}
            ctaLabel="弁護士を探す"
            delay={0.6}
          />
        </div>

        {/* Comparison Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center text-text-light text-sm max-w-3xl mx-auto leading-relaxed"
        >
          弁護士相談（1時間5,000〜10,000円）と比べ、不動産実務の一般的な質問ならAI即時回答（月額980円〜）で解決。宅建士の個別確認が必要な場合もスポット¥1,800で対応。法的判断が必要な場合は、不動産に強い弁護士を簡単に見つけられます。
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <button className="px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg">
            まずは無料で始める
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Suspense>
      <PricingContent />
    </Suspense>
  );
}

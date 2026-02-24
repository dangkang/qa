"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";

const plans = [
  {
    name: "無料プラン",
    price: "¥0",
    priceUnit: "",
    ctaLabel: "まずは無料で始める",
    highlighted: false,
    features: [
      { label: "Q&A閲覧・検索", included: true },
      { label: "AI即時回答", included: false },
      { label: "宅建士回答", included: false },
      { label: "弁護士検索", included: false },
      { label: "弁護士直接相談", included: false },
    ],
  },
  {
    name: "ライトプラン",
    price: "¥500",
    priceUnit: "/月",
    ctaLabel: "ライトプランを始める",
    highlighted: true,
    features: [
      { label: "Q&A閲覧・検索", included: true },
      { label: "AI即時回答", included: true },
      { label: "宅建士回答", included: false },
      { label: "弁護士検索", included: true },
      { label: "弁護士直接相談", included: false },
    ],
  },
  {
    name: "宅建士相談",
    price: "¥500〜3,000",
    priceUnit: "/質問",
    ctaLabel: "宅建士に相談する",
    highlighted: false,
    features: [
      { label: "Q&A閲覧・検索", included: true },
      { label: "AI即時回答", included: true },
      { label: "宅建士回答", included: true },
      { label: "弁護士検索", included: true },
      { label: "弁護士直接相談", included: false },
    ],
  },
  {
    name: "弁護士を探す",
    price: "掲載料制",
    priceUnit: "",
    ctaLabel: "弁護士を検索する",
    highlighted: false,
    features: [
      { label: "Q&A閲覧・検索", included: true },
      { label: "AI即時回答", included: true },
      { label: "宅建士回答", included: "—" },
      { label: "弁護士検索", included: "—" },
      { label: "弁護士直接相談", included: "弁護士と直接契約" },
    ],
  },
];

function PricingContent() {
  return (
    <div className="min-h-screen bg-light-bg">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-dark mb-3">料金プラン</h1>
          <p className="text-text-light text-lg">
            あなたに合ったプランで不動産の疑問を解決
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-4 gap-5 mb-12">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              {...plan}
              delay={0.3 + i * 0.2}
            />
          ))}
        </div>

        {/* Comparison Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white rounded-xl p-8 border border-gray-200 text-center"
        >
          <p className="text-text-light text-sm mb-2">コスト比較</p>
          <p className="text-xl font-bold text-dark mb-4">
            弁護士相談（1時間5,000〜10,000円）と比べ、
            <span className="text-primary">宅建士相談なら¥500〜3,000</span>
            で解決
          </p>
          <p className="text-text-light text-sm max-w-xl mx-auto">
            不動産実務の一般的な質問なら宅建士相談で解決。法的判断が必要な場合も、当プラットフォームから不動産に強い弁護士を簡単に見つけられます。
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-center mt-10"
        >
          <button className="px-10 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            まずは無料で始める
          </button>
          <p className="text-xs text-text-light mt-3">
            クレジットカード不要・30秒で登録完了
          </p>
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

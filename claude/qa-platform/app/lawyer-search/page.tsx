"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const lawyers = [
  {
    name: "佐藤 花子",
    title: "弁護士",
    specialty: "不動産トラブル専門 / 15年経験",
    focus: ["敷金返還", "立退き", "欠陥住宅"],
    pricing: "初回相談30分無料 / 正式依頼 ¥5,000〜",
    rating: 4.9,
    reviews: 89,
    avatarColor: "bg-dark",
  },
  {
    name: "山田 健一",
    title: "弁護士",
    specialty: "不動産・借地借家法専門 / 12年経験",
    focus: ["原状回復", "賃料交渉", "契約解除"],
    pricing: "初回相談 ¥3,000（30分）/ 正式依頼 ¥8,000〜",
    rating: 4.7,
    reviews: 64,
    avatarColor: "bg-primary",
  },
  {
    name: "高橋 美咲",
    title: "弁護士",
    specialty: "消費者問題・不動産紛争 / 10年経験",
    focus: ["敷金トラブル", "瑕疵担保", "管理組合紛争"],
    pricing: "初回相談無料（電話30分）/ 正式依頼 ¥5,000〜",
    rating: 4.8,
    reviews: 52,
    avatarColor: "bg-gold",
  },
];

function LawyerSearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        router.push("/expert-dashboard?auto=true");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isAuto, router]);

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-dark mb-2">
            不動産トラブルに強い弁護士を探す
          </h1>
          <p className="text-text-light">
            個別の法的判断が必要な場合は、弁護士に直接ご相談ください
          </p>
        </motion.div>

        {/* Search Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-xl p-5 border border-gray-200 mb-8"
        >
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label className="block text-xs text-text-light mb-1">分野</label>
              <div className="p-3 bg-light-bg rounded-lg text-sm text-text border border-gray-200 flex items-center justify-between cursor-pointer">
                <span>敷金・原状回復</span>
                <svg className="w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-xs text-text-light mb-1">地域</label>
              <div className="p-3 bg-light-bg rounded-lg text-sm text-text border border-gray-200 flex items-center justify-between cursor-pointer">
                <span>東京都</span>
                <svg className="w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <button className="px-8 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              検索
            </button>
          </div>
        </motion.div>

        {/* Lawyer Cards */}
        <div className="space-y-4">
          {lawyers.map((lawyer, i) => (
            <motion.div
              key={lawyer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-16 h-16 ${lawyer.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0`}
                >
                  {lawyer.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-dark text-lg">
                        {lawyer.name}
                        <span className="text-sm font-normal text-text-light ml-2">
                          {lawyer.title}
                        </span>
                      </h3>
                      <p className="text-sm text-text-light">
                        {lawyer.specialty}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gold">⭐</span>
                      <span className="text-sm font-medium text-dark">
                        {lawyer.rating}
                      </span>
                      <span className="text-xs text-text-light">
                        （{lawyer.reviews}件のQ&A回答）
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {lawyer.focus.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-text">
                      <span className="text-text-light">料金：</span>
                      {lawyer.pricing}
                    </p>
                    <button className="px-5 py-2.5 bg-white border-2 border-dark text-dark rounded-lg text-sm font-medium hover:bg-dark hover:text-white transition-colors flex items-center gap-1.5">
                      📞 直接問い合わせる
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="mt-8 bg-light-bg border border-gray-200 rounded-xl p-5"
        >
          <p className="text-xs text-text-light leading-relaxed text-center">
            ※ 弁護士への相談は弁護士と直接のご契約となります。
            当プラットフォームは弁護士の紹介・仲介は行っておりません。
            掲載は弁護士による広告掲載です。
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function LawyerSearchPage() {
  return (
    <Suspense>
      <LawyerSearchContent />
    </Suspense>
  );
}

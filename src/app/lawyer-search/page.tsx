"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LawyerCard from "@/components/LawyerCard";

const LAWYERS = [
  {
    name: "佐藤 花子",
    specialty: "不動産トラブル専門",
    experience: "15年経験",
    focusAreas: ["敷金返還", "立退き", "欠陥住宅"],
    pricing: "初回相談30分無料 / 正式依頼 ¥5,000〜",
    rating: 4.9,
    reviewCount: 89,
  },
  {
    name: "山本 健一",
    specialty: "不動産・建築紛争",
    experience: "12年経験",
    focusAreas: ["欠陥住宅", "建築瑕疵", "近隣紛争"],
    pricing: "初回相談無料 / 正式依頼 ¥10,000〜",
    rating: 4.7,
    reviewCount: 56,
  },
  {
    name: "木村 美咲",
    specialty: "賃貸トラブル専門",
    experience: "8年経験",
    focusAreas: ["敷金返還", "立退き交渉", "家賃滞納"],
    pricing: "初回相談30分 ¥3,000 / 正式依頼 ¥5,000〜",
    rating: 4.8,
    reviewCount: 72,
  },
];

function LawyerSearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
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
    <div className="min-h-screen pb-16">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-dark"
          >
            不動産トラブルに強い弁護士を探す
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-text-light"
          >
            個別の法的判断が必要な場合は、弁護士に直接ご相談ください
          </motion.p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-text">分野：</label>
              <select
                defaultValue="敷金・原状回復"
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-text bg-white focus:outline-none focus:border-primary"
              >
                <option>敷金・原状回復</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-text">地域：</label>
              <select
                defaultValue="東京都"
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-text bg-white focus:outline-none focus:border-primary"
              >
                <option>東京都</option>
              </select>
            </div>
            <button className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
              検索
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lawyer Cards */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-5">
            {LAWYERS.map((lawyer, index) => (
              <LawyerCard
                key={lawyer.name}
                name={lawyer.name}
                specialty={lawyer.specialty}
                experience={lawyer.experience}
                focusAreas={lawyer.focusAreas}
                pricing={lawyer.pricing}
                rating={lawyer.rating}
                reviewCount={lawyer.reviewCount}
                delay={0.4 + index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-4">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="bg-gray-100 rounded-lg p-4"
          >
            <p className="text-sm text-text-light">
              ※
              弁護士への相談は弁護士と直接のご契約となります。当プラットフォームは弁護士の紹介・仲介は行っておりません。掲載は弁護士による広告掲載です。
            </p>
          </motion.div>
        </div>
      </section>
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

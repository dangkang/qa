"use client";

import { useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

function ExpertDashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuto = searchParams.get("auto") === "true";

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        router.push("/pricing?auto=true");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isAuto, router]);

  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#E0F2FE] border-b border-[#BAE6FD] px-6 py-2.5 text-center"
      >
        <span className="text-sm text-[#0B4F6C] font-medium">
          {"💡 AI下書きにより作業時間を80%短縮"}
        </span>
      </motion.div>

      {/* Header Stats - 今月の実績 */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-[#0A2342]">
                エキスパートダッシュボード
              </h1>
              <p className="text-sm text-[#64748B] mt-0.5">
                宅地建物取引士 田中 一郎
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="text-sm font-medium text-[#64748B] mr-2">
                今月の実績
              </span>
              <div className="flex gap-3">
                {[
                  { label: "回答数", value: "12", unit: "件" },
                  { label: "収入", value: "¥11,880", unit: "" },
                  { label: "平均評価", value: "4.6", unit: "/5.0" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F4F7FA] rounded-lg px-4 py-2.5 text-center min-w-[120px] border border-gray-100"
                  >
                    <p className="text-lg font-bold text-[#0B4F6C]">
                      {stat.value}
                      <span className="text-xs text-[#64748B] ml-0.5">
                        {stat.unit}
                      </span>
                    </p>
                    <p className="text-xs text-[#64748B]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-[220px_1fr] gap-6">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-50">
                <h2 className="text-sm font-bold text-[#0A2342]">質問一覧</h2>
              </div>
              <nav className="py-1">
                {/* Active Item */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B4F6C]/5 border-l-3 border-[#0B4F6C] cursor-pointer">
                  <span className="text-sm font-medium text-[#0B4F6C]">
                    割り当て質問
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-[#0B4F6C] bg-[#0B4F6C]/10 rounded-full px-1.5 py-0.5">
                      3
                    </span>
                  </span>
                </div>
                {/* Other Items */}
                <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <span className="text-sm text-[#1A1A2E]">対応中</span>
                  <span className="text-xs text-[#64748B] bg-gray-100 rounded-full px-1.5 py-0.5">
                    1
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <span className="text-sm text-[#1A1A2E]">完了</span>
                  <span className="text-xs text-[#64748B] bg-gray-100 rounded-full px-1.5 py-0.5">
                    24
                  </span>
                </div>
              </nav>
            </div>

            {/* Sidebar Tips */}
            <div className="mt-4 bg-[#20BF55]/5 rounded-xl border border-[#20BF55]/20 p-4">
              <p className="text-xs font-medium text-[#20BF55] mb-1">
                ヒント
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                AI下書きをベースに専門知見を追加すると、回答品質が向上します。
              </p>
            </div>
          </motion.div>

          {/* Main Content - Two Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Left Column: Question & Info */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-medium rounded-full">
                    新着
                  </span>
                  <span className="text-xs text-[#64748B]">
                    2025年7月14日 14:32
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#0A2342] mb-3 leading-relaxed">
                  ユーザーからの質問
                </h3>
                <div className="bg-[#F4F7FA] rounded-lg p-4">
                  <p className="text-sm text-[#1A1A2E] leading-relaxed">
                    退去時のクリーニング特約について、6年住んでいた場合の原状回復費用の相場感と、大家との交渉の進め方を教えてください。
                  </p>
                </div>
              </div>

              {/* Attached Information */}
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="text-sm font-bold text-[#0A2342] mb-3">
                  添付情報
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between py-2 px-3 bg-[#F4F7FA] rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#64748B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-xs text-[#64748B]">
                        物件所在地
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#1A1A2E]">
                      東京都
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-[#F4F7FA] rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#64748B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs text-[#64748B]">契約年数</span>
                    </div>
                    <span className="text-sm font-medium text-[#1A1A2E]">
                      6年
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-[#F4F7FA] rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#64748B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-xs text-[#64748B]">添付</span>
                    </div>
                    <span className="text-sm font-medium text-[#01BAEF] cursor-pointer hover:underline">
                      契約書.pdf
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: AI Draft + Expert Edits */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#01BAEF]/10 rounded-md flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-[#01BAEF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-[#0A2342]">
                      AI下書き
                    </h3>
                    <span className="text-xs text-[#64748B] bg-[#F4F7FA] px-2 py-0.5 rounded-full">
                      自動生成
                    </span>
                  </div>
                  <span className="text-xs text-[#20BF55] font-medium">
                    編集中
                  </span>
                </div>

                {/* AI Generated Text (normal) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-4"
                >
                  <p className="text-sm text-[#1A1A2E] leading-relaxed">
                    6年間居住後のクリーニング費用については、ガイドラインの耐用年数表に基づくと残存価値は大幅に低下しています。
                  </p>
                </motion.div>

                {/* Expert Addition (blue text with blue left border) */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="border-l-[3px] border-[#01BAEF] pl-4 py-2 mb-4 bg-[#01BAEF]/[0.03] rounded-r-lg"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] text-[#01BAEF] font-medium bg-[#01BAEF]/10 px-1.5 py-0.5 rounded">
                      宅建士が追記
                    </span>
                  </div>
                  <p className="text-sm text-[#01BAEF] leading-relaxed">
                    東京都の物件であれば「賃貸住宅紛争防止条例」（東京ルール）が適用されます。契約時にこの条例に基づく説明書面を受け取っているか確認してください。これが交渉の重要なポイントになります。
                  </p>
                </motion.div>

                {/* Expert Comment (speech bubble) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="relative bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-xl p-4"
                >
                  {/* Speech bubble arrow */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-[#F59E0B]/5 border-l border-t border-[#F59E0B]/20 transform rotate-45" />
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-[#F59E0B]/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#F59E0B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-[#F59E0B]">
                      専門家コメント
                    </span>
                  </div>
                  <p className="text-sm text-[#1A1A2E] leading-relaxed">
                    この特約の金額は物件の広さ（1K想定）に対してやや高めです。相場は2万円前後。
                  </p>
                </motion.div>
              </div>

              {/* Send Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="flex justify-end"
              >
                <button
                  onClick={() => {
                    if (!isAuto) {
                      router.push("/pricing");
                    }
                  }}
                  className="px-6 py-2.5 bg-[#0B4F6C] text-white text-sm font-medium rounded-xl hover:bg-[#0B4F6C]/90 transition-colors shadow-sm flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  回答を送信
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertDashboard() {
  return (
    <Suspense>
      <ExpertDashboardContent />
    </Suspense>
  );
}

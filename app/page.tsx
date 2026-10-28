const steps = [
  "오늘의 일기를 씁니다",
  "AI가 감정을 분석합니다",
  "어울리는 노래 3곡을 추천받습니다",
  "기분을 표현한 짤이 만들어집니다",
  "카드로 저장하고 공유합니다",
];

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm dark:bg-zinc-900">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">무드카드</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          오늘의 기분을 노래와 짤로 남기는 AI 기분 일기장
        </p>
        <ol className="mt-8 space-y-3">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700 dark:bg-violet-900 dark:text-violet-200">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-zinc-500">준비 중입니다. SP2(11/18)에 첫 버전을 공개합니다.</p>
      </div>
    </main>
  );
}

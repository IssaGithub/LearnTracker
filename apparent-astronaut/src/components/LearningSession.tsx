import { useState } from 'preact/hooks';

type LearningSessionProps = {
  title?: string;
};

export default function LearningSession({
  title = 'Mini-Lern-Session'
}: LearningSessionProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 1200);
  };

  return (
    <div
      class={`relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition ${
        isSuccess ? 'ring-4 ring-green-300/60' : 'ring-1 ring-slate-200'
      }`}
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-wide text-slate-400">
            Sofort-Feedback
          </p>
          <h3 class="mt-1 text-lg font-semibold text-slate-800">{title}</h3>
        </div>
        <span
          class={`rounded-full px-3 py-1 text-xs font-semibold ${
            isSuccess
              ? 'bg-green-100 text-green-700'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          {isSuccess ? 'Erfolg!' : 'Bereit'}
        </span>
      </div>

      <p class="mt-3 text-sm text-slate-600">
        Schliesse die Session ab und erhalte direktes visuelles Feedback.
      </p>

      <button
        type="button"
        onClick={handleSuccess}
        class="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Session abschliessen
      </button>

      {isSuccess && (
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute inset-0 bg-green-200/20 animate-pulse"></div>
          <div class="absolute left-6 top-6 h-2 w-2 rounded-full bg-yellow-300 animate-bounce"></div>
          <div class="absolute right-10 top-10 h-3 w-3 rounded-full bg-pink-300 animate-bounce"></div>
          <div class="absolute left-10 bottom-8 h-2 w-2 rounded-full bg-indigo-300 animate-bounce"></div>
          <div class="absolute right-6 bottom-6 h-2 w-2 rounded-full bg-emerald-300 animate-bounce"></div>
        </div>
      )}
    </div>
  );
}

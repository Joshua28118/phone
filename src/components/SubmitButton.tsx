"use client";

interface SubmitButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

export default function SubmitButton({
  loading = false,
  disabled = false,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      aria-busy={loading}
      className="
        w-full
        bg-white text-[#0d0d0f]
        font-semibold text-sm tracking-wide
        rounded-xl
        px-4 py-3
        transition-all duration-200
        hover:bg-white/90
        active:scale-[0.98]
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141417]
        disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100
        cursor-pointer
      "
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Submitting…
        </span>
      ) : (
        "Submit"
      )}
    </button>
  );
}

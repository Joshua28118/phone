"use client";

import { ChangeEvent } from "react";

interface PhoneInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export default function PhoneInput({
  id,
  value,
  onChange,
  disabled = false,
  error,
}: PhoneInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-white/50 tracking-wide"
      >
        Nomor WhatsApp
      </label>
      <input
        id={id}
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder="08xxxxxxxxxx"
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete="tel"
        inputMode="tel"
        className="
          w-full
          bg-white/[0.04]
          border border-white/[0.08]
          rounded-xl
          px-4 py-3
          text-base text-white/90
          placeholder:text-white/20
          outline-none
          transition-all duration-200
          focus:border-white/20
          focus:bg-white/[0.06]
          focus:ring-2 focus:ring-white/[0.06]
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm text-red-400/80"
        >
          {error}
        </p>
      )}
    </div>
  );
}

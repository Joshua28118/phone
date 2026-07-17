"use client";

import { FormEvent, useState } from "react";
import PhoneInput from "./PhoneInput";
import SubmitButton from "./SubmitButton";
import { FormState, SubmitResponse } from "@/types";

function validatePhone(phone: string): string | null {
  const cleaned = phone.replace(/\s+/g, "");
  if (!cleaned) return "Nomor lo mana??";
  if (!/^[0-9+\-()]{7,15}$/.test(cleaned))
    return "Format nomornya aneh, coba lagi.";
  return null;
}

export default function PhoneForm() {
  const [phone, setPhone] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneError, setPhoneError] = useState<string | undefined>(undefined);
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState<string | undefined>(undefined);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validatePhone(phone);
    if (validationError) {
      setPhoneError(validationError);
      return;
    }

    setPhoneError(undefined);
    setServerError(undefined);
    setFormState("loading");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, contactName }),
      });

      const data: SubmitResponse = await res.json();

      if (res.ok && data.success) {
        setFormState("success");
      } else {
        setServerError(data.message || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setServerError("Network error. Please check your connection.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <p
        className="text-2xl font-bold text-white text-center py-4"
        role="status"
        aria-live="polite"
      >
        tengkyu 🫶🏼
      </p>
    );
  }

  const isLoading = formState === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Phone number submission form"
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contactName"
          className="text-sm font-medium text-white/50 tracking-wide"
        >
          Preferable contact name
        </label>
        <input
          id="contactName"
          type="text"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          placeholder="untuk di contact ku"
          disabled={isLoading}
          autoComplete="name"
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
      </div>

      <PhoneInput
        id="phone"
        value={phone}
        onChange={(val) => {
          setPhone(val);
          if (phoneError) setPhoneError(undefined);
        }}
        disabled={isLoading}
        error={phoneError}
      />

      <div className="flex flex-col items-center gap-3">
        <SubmitButton loading={isLoading} disabled={isLoading} />

        {serverError && (
          <p role="alert" aria-live="assertive" className="text-sm text-red-400/80 text-center">
            {serverError}
          </p>
        )}
      </div>
    </form>
  );
}

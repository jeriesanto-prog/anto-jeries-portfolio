"use client";

import { useState, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";

type FormState = { kind: "idle" | "success" | "error"; message: string };

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ kind: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setFormState({ kind: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your message could not be sent.");
      form.reset();
      setFormState({ kind: "success", message: "Thanks for reaching out. I’ll be in touch soon!" });
    } catch (error) {
      setFormState({
        kind: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">
          Your name
          <input
            className="form-input"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            minLength={2}
            maxLength={100}
            required
          />
        </label>
        <label className="form-label">
          Email address
          <input
            className="form-input"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            maxLength={254}
            required
          />
        </label>
        <label className="form-label sm:col-span-2">
          Message
          <textarea
            className="form-input min-h-36 resize-y"
            name="message"
            placeholder="Tell me a little about what’s on your mind..."
            minLength={10}
            maxLength={5000}
            required
          />
        </label>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button className="button-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              Sending <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Send Message <Send size={15} aria-hidden="true" />
            </>
          )}
        </button>
        <p
          className={`text-sm ${formState.kind === "error" ? "text-rose-300" : "text-emerald-300"}`}
          role="status"
          aria-live="polite"
        >
          {formState.message}
        </p>
      </div>
    </form>
  );
}

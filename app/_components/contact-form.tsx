"use client";

import { useSearchParams } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { CONTACT_EMAIL, interests } from "../_content";
import { SubmitButton } from "./button-link";

type Status = "idle" | "sent" | "unconfigured";

const fieldClass =
  "peer w-full border-b border-olive/30 bg-transparent py-3 text-[17px] font-light text-olive outline-none transition-[border-color] duration-300 ease-out focus:border-olive user-invalid:border-terracotta";

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] tracking-[0.2em] uppercase">
        {label}
        {!required && <span className="tracking-normal normal-case"> (opcional)</span>}
      </label>
      <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} className={fieldClass} />
      {error && <p className="hidden text-xs text-terracotta peer-user-invalid:block">{error}</p>}
    </div>
  );
}

const validInterest = (value: string | null) =>
  interests.some((option) => option.value === value) ? (value as string) : "undecided";

// Without a backend, sending means opening the visitor's mail app with the
// request already written, addressed to CONTACT_EMAIL.
export function ContactForm({ initialInterest = "undecided" }: { initialInterest?: string }) {
  const [interest, setInterest] = useState(() => validInterest(initialInterest));
  const [status, setStatus] = useState<Status>("idle");
  const messageId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!CONTACT_EMAIL) {
      setStatus("unconfigured");
      return;
    }

    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const interestLabel = interests.find((option) => option.value === get("interest"))?.label ?? "";
    const phone = get("phone");
    const location = get("location");
    const message = get("message");

    const body = [
      `Nom: ${get("name")}`,
      `Correu: ${get("email")}`,
      ...(phone ? [`Telèfon: ${phone}`] : []),
      `Allotjament: ${get("property")}`,
      ...(location ? [`Població o comarca: ${location}`] : []),
      `Interès: ${interestLabel}`,
      ...(message ? ["", message] : []),
    ].join("\n");
    const subject = `Sol·licitud de diagnòstic: ${get("property")}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8">
        <Field label="Nom i cognoms" name="name" required autoComplete="name" error="Escriu el teu nom." />
        <Field
          label="Correu electrònic"
          name="email"
          type="email"
          required
          autoComplete="email"
          error="Escriu una adreça de correu vàlida."
        />
        <Field
          label="Nom de l’allotjament"
          name="property"
          required
          autoComplete="organization"
          error="Escriu el nom de l’allotjament."
        />
        <Field label="Població o comarca" name="location" autoComplete="address-level2" />
        <Field label="Telèfon" name="phone" type="tel" autoComplete="tel" />
      </div>

      <fieldset>
        <legend className="text-[11px] tracking-[0.2em] uppercase">Què t’interessa?</legend>
        <div className="mt-5 flex flex-wrap gap-2">
          {interests.map((option) => (
            <label
              key={option.value}
              className="cursor-pointer border border-olive/30 px-4 py-2.5 text-sm font-light transition-[background-color,color,border-color,scale] duration-300 ease-out hover:border-olive active:scale-[0.97] active:duration-150 has-[:checked]:border-olive has-[:checked]:bg-olive has-[:checked]:text-paper has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-olive motion-reduce:active:scale-100"
            >
              <input
                type="radio"
                name="interest"
                value={option.value}
                checked={interest === option.value}
                onChange={() => setInterest(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="text-[11px] tracking-[0.2em] uppercase">
          Explica’ns el teu projecte<span className="tracking-normal normal-case"> (opcional)</span>
        </label>
        <textarea id={messageId} name="message" rows={4} className={`${fieldClass} resize-y`} />
      </div>

      <div className="flex flex-col items-start gap-6">
        <SubmitButton>Enviar sol·licitud</SubmitButton>
        <p aria-live="polite" className="max-w-md text-[15px] leading-relaxed font-light">
          {status === "sent" && "Hem obert el teu programa de correu amb la sol·licitud redactada. Només cal que l’enviïs."}
          {status === "unconfigured" &&
            "Aquest formulari encara no té cap adreça de destinació configurada, així que la sol·licitud no s’ha enviat."}
        </p>
      </div>
    </form>
  );
}

// Reads ?nivell= so a tier's "Consultar" link arrives with that tier selected.
// Rendered inside <Suspense> on the page, with a plain form as the fallback.
export function ContactFormFromSearchParams() {
  const searchParams = useSearchParams();
  return <ContactForm initialInterest={searchParams.get("nivell") ?? undefined} />;
}

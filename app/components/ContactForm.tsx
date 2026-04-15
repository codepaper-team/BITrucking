'use client';

import { useState } from 'react';
import { company } from '@/app/lib/company';
import { requestOptions } from '@/app/lib/contact';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setState('success');
      form.reset();
    } catch (err) {
      setState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (state === 'success') {
    return (
      <div className="panel p-6 sm:p-8">
        <div className="rounded-[1.5rem] border border-amber-500/30 bg-amber-500/10 p-5 text-sm leading-7 text-graphite-100">
          Thanks for reaching out. Your request has been submitted and our team will review the project details.
        </div>
      </div>
    );
  }

  return (
    <div className="panel p-6 sm:p-8">
      <div className="mb-6 space-y-3">
        <p className="eyebrow">Project Details</p>
        <h2 className="text-3xl uppercase tracking-[0.05em] text-white">Tell us about your build</h2>
        <p className="text-sm leading-7 text-graphite-300">
          Please give us a call, or fill out the form below, and we will get back to you immediately.
        </p>
      </div>

      {state === 'error' ? (
        <div className="mb-5 rounded-[1.5rem] border border-red-500/30 bg-red-500/10 p-4 text-sm leading-7 text-red-300">
          {errorMessage}
        </div>
      ) : null}

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-graphite-200">
            Name
            <input
              required
              autoComplete="name"
              className="field-input"
              name="name"
              placeholder="Your name"
              type="text"
            />
          </label>

          <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-graphite-200">
            Company
            <input
              autoComplete="organization"
              className="field-input"
              name="company"
              placeholder="Company name"
              type="text"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-graphite-200">
            Email
            <input
              required
              autoComplete="email"
              className="field-input"
              name="email"
              placeholder="name@company.com"
              type="email"
            />
          </label>

          <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-graphite-200">
            Phone
            <input
              autoComplete="tel"
              className="field-input"
              name="phone"
              placeholder={company.phoneDisplay}
              type="tel"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-graphite-200">
          Request Type
          <select className="field-input" name="requestType">
            {requestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-graphite-200">
          Project Scope
          <textarea
            required
            className="field-input min-h-[180px]"
            name="message"
            placeholder="Tell us about the truck, the equipment, the timeline, or any finishing requirements."
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-graphite-400">
            Share a few project details and the BI Truck & Body team can follow up on scope, equipment needs, and timing.
          </p>
          <button className="btn-primary whitespace-nowrap" disabled={state === 'submitting'} type="submit">
            {state === 'submitting' ? 'Sending...' : 'Request a Quote'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

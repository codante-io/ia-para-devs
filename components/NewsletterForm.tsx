'use client';

import { useActionState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { subscribeToNewsletter } from '@/lib/newsletter-actions';

interface NewsletterFormProps {
  formId: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
}

export default function NewsletterForm({
  formId,
  placeholder = 'Digite seu email',
  buttonText = 'Assinar Newsletter',
  successMessage = 'Obrigado! Você foi inscrito com sucesso.',
  className = '',
}: NewsletterFormProps) {
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    undefined
  );

  // Se foi bem-sucedido, mostra mensagem de sucesso
  if (state?.success) {
    return (
      <div className={`${className}`}>
        <div
          className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm mb-4"
          role="alert"
        >
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-green-800 text-sm font-medium flex-1">
            {state.message || successMessage}
          </p>
        </div>
        <div className="text-center">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="border-green-500 text-green-700 hover:bg-green-50 hover:border-green-600"
          >
            Assinar outro email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className={`space-y-4 ${className}`}>
      <input type="hidden" name="formId" value={formId} />

      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          name="email"
          placeholder={placeholder}
          required
          disabled={pending}
          className="flex-1 h-12 text-lg px-6 bg-white min-w-0"
          aria-describedby={state?.error ? 'error-message' : undefined}
        />
        <Button
          type="submit"
          disabled={pending}
          className="whitespace-nowrap h-12 px-6 text-lg font-semibold bg-brand"
        >
          {pending ? 'Enviando...' : buttonText}
        </Button>
      </div>

      {state?.error && (
        <div
          className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm"
          role="alert"
        >
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p id="error-message" className="text-red-800 text-sm font-medium">
            {state.error}
          </p>
        </div>
      )}
    </form>
  );
}

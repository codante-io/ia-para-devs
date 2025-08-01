# Kit (ConvertKit) Integration Guide

This project includes a complete Kit (ConvertKit) email newsletter integration using **Next.js 15 Server Actions** and **React 19 `useActionState`**.

## Setup

1. **Get your Kit API credentials:**

   - Visit [Kit Account Settings](https://app.convertkit.com/account_settings/advanced_settings)
   - Copy your API key
   - Create a form in Kit and note the form ID from the URL

2. **Configure environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your credentials:

   ```env
   CONVERTKIT_API_KEY=your_api_key_here
   NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_form_id_here
   ```

## Usage

### Basic Newsletter Form

```tsx
import NewsletterForm from '@/components/NewsletterForm';

export default function MyPage() {
  return (
    <NewsletterForm
      formId={process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID!}
      placeholder="Enter your email"
      buttonText="Subscribe"
    />
  );
}
```

### Custom Styling

```tsx
<NewsletterForm
  formId="your_form_id"
  placeholder="Digite seu email"
  buttonText="Inscreva-se"
  successMessage="Obrigado! Você foi inscrito com sucesso."
  className="custom-newsletter-form"
/>
```

### Using Server Actions Directly in Forms

```tsx
import { subscribeToNewsletter } from '@/lib/newsletter-actions';

export default function CustomForm() {
  return (
    <form action={subscribeToNewsletter}>
      <input type="hidden" name="formId" value="your_form_id" />
      <input type="email" name="email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

## Modern React 19 Features

### useActionState Hook

The form uses React 19's `useActionState` hook for seamless server action integration:

```tsx
const [state, formAction, pending] = useActionState(
  subscribeToNewsletter,
  undefined
);

return (
  <form action={formAction}>
    <input type="email" name="email" disabled={pending} />
    <button disabled={pending}>{pending ? 'Enviando...' : 'Subscribe'}</button>
    {state?.error && <p>{state.error}</p>}
  </form>
);
```

### FormData Handling

Server actions automatically receive `FormData`:

```ts
export async function subscribeToNewsletter(
  prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  const email = formData.get('email') as string;
  const formId = formData.get('formId') as string;

  // Kit API v4 requires two steps:
  // 1. Create/update subscriber
  // 2. Add subscriber to form
}
```

## Features

- ✅ **Next.js 15 Server Actions** (no API routes needed)
- ✅ **React 19 useActionState** hook
- ✅ **Native HTML forms** with progressive enhancement
- ✅ **TypeScript support** with proper typing
- ✅ **Built-in validation** (email format, required fields)
- ✅ **Error handling** for duplicate emails and API errors
- ✅ **Loading states** with `pending` from useActionState
- ✅ **Responsive design** with Tailwind CSS
- ✅ **Accessibility** with proper ARIA attributes
- ✅ **Portuguese error messages**
- ✅ **Zero external dependencies**

## Architecture

### Modern Stack

- **Server Actions**: Replace API routes for form handling
- **useActionState**: React 19 hook for form state management
- **FormData**: Native browser API for form data handling
- **Progressive Enhancement**: Works without JavaScript

### Components

- `NewsletterForm`: Client component using useActionState
- `newsletter-actions.ts`: Server action with FormData processing

### No API Routes

This implementation doesn't use API routes, following Next.js 15 best practices by using Server Actions directly.

## Error Handling

The integration handles:

- **Client-side validation**: Email format validation
- **Server-side validation**: Required fields, email format
- **API errors**: Already subscribed, network errors
- **User feedback**: Clear error messages in Portuguese
- **Accessibility**: Error messages with proper ARIA attributes

## Security & Best Practices

- ✅ Server-side validation
- ✅ Environment variable protection
- ✅ Input sanitization
- ✅ CSRF protection (built into Server Actions)
- ✅ Type safety with TypeScript
- ✅ Progressive enhancement

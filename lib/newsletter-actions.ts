'use server';

interface ActionState {
  message?: string;
  success?: boolean;
  error?: string;
}

export async function subscribeToNewsletter(
  prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  try {
    const email = formData.get('email') as string;
    const formId = formData.get('formId') as string;

    if (!email || !formId) {
      return {
        success: false,
        error: 'Email e Form ID são obrigatórios',
      };
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Por favor, digite um email válido',
      };
    }

    const apiKey = process.env.CONVERTKIT_API_KEY;
    if (!apiKey) {
      console.error('CONVERTKIT_API_KEY not found in environment variables');
      return {
        success: false,
        error: 'Erro de configuração do servidor',
      };
    }

    console.log('🔄 Starting Kit API integration...');
    console.log('📧 Email:', email.trim());
    console.log('📋 Form ID:', formId);

    // Step 1: Create or update subscriber
    console.log('🔄 Step 1: Creating/updating subscriber...');
    const subscriberPayload = {
      email_address: email.trim(),
      state: 'active',
    };
    console.log('📤 Subscriber payload:', subscriberPayload);

    const subscriberResponse = await fetch(
      'https://api.kit.com/v4/subscribers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': apiKey,
        },
        body: JSON.stringify(subscriberPayload),
      }
    );

    console.log('📥 Subscriber response status:', subscriberResponse.status);
    console.log('📥 Subscriber response headers:', Object.fromEntries(subscriberResponse.headers.entries()));

    if (!subscriberResponse.ok) {
      const errorData = await subscriberResponse.json().catch(() => ({}));
      console.error('❌ Kit API subscriber creation error:', errorData);
      return {
        success: false,
        error: 'Falha ao processar email. Tente novamente.',
      };
    }

    const subscriberData = await subscriberResponse.json();
    console.log('✅ Subscriber created/updated:', subscriberData);

    // Step 2: Add subscriber to form
    console.log('🔄 Step 2: Adding subscriber to form...');
    const formPayload = {
      email_address: email.trim(),
    };
    console.log('📤 Form payload:', formPayload);
    console.log('🎯 Form endpoint:', `https://api.kit.com/v4/forms/${formId}/subscribers`);

    const formResponse = await fetch(
      `https://api.kit.com/v4/forms/${formId}/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': apiKey,
        },
        body: JSON.stringify(formPayload),
      }
    );

    console.log('📥 Form response status:', formResponse.status);
    console.log('📥 Form response headers:', Object.fromEntries(formResponse.headers.entries()));

    if (!formResponse.ok) {
      const errorData = await formResponse.json().catch(() => ({}));
      console.error('❌ Kit API form subscription error:', errorData);

      // Check for already subscribed error
      if (
        formResponse.status === 400 &&
        (errorData.errors?.some((error: string) => 
          error.toLowerCase().includes('already') ||
          error.toLowerCase().includes('subscribed')
        ) || errorData.message?.includes('already'))
      ) {
        return {
          success: false,
          error: 'Este email já está inscrito na newsletter',
        };
      }

      return {
        success: false,
        error: 'Falha ao inscrever na newsletter. Tente novamente.',
      };
    }

    const formResponseData = await formResponse.json();
    console.log('✅ Subscriber added to form successfully:', formResponseData);
    console.log('🎉 Integration completed successfully!');

    return {
      success: true,
      message: 'Obrigado! Você foi inscrito com sucesso na newsletter.',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: 'Erro interno do servidor. Tente novamente.',
    };
  }
}

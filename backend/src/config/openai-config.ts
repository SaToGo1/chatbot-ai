// import Configuration from 'openai'
import OpenAI from 'openai';

export function configureOpenAIClient() {
  console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
  console.log('OPEN_AI_ORGANIZATION:', process.env.OPEN_AI_ORGANIZATION);

  const openAIClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPEN_AI_ORGANIZATION,
  })

  return openAIClient;
}

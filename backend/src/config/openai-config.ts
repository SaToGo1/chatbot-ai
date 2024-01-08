// import Configuration from 'openai'
import OpenAI from 'openai';

export const openAIClient = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET,
  organization: process.env.OPEN_AI_ORGANIZATION,
})


// export function configureOpenAI() {
//   const config = new Configuration({
//     apiKey: process.env.OPEN_AI_SECRET,
//     organization: process.env.OPEN_AI_ORGANIZATION,
//   })

//   return config;
// }

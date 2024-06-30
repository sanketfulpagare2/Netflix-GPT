import OpenAI from 'openai';



const openai = new OpenAI({
  apiKey:"my api key", // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default openai
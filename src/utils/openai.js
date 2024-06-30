import OpenAI from 'openai';



const openai = new OpenAI({
  apiKey:"My API Key", // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default openai
import OpenAI from 'openai';
import { OPENAI_API } from './constants';


const openai = new OpenAI({
  apiKey:OPENAI_API, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default openai
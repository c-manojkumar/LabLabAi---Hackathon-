const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function detectSpam(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Is the following message spam or not spam: ${message}`,
  });
  const answer = completion.data.choices[0].text;
  return answer.trim();
}

export default detectSpam;
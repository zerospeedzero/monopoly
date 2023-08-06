
import { openai } from "@/utils/openai";
import { supabase } from "@/utils/supabase";
import { ChatCompletionRequestMessage } from "openai-edge";

export const injectCustomData = async (
  messages
) => {
  const lastMessage = messages.pop();
  if (!lastMessage) {
    return messages;
  }
  const input = lastMessage.content;
  const embeddingResponse = await (
    await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: input,
    })
  ).json();
  const [{ embedding }] = embeddingResponse.data;
  const { data: documents } = await supabase.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.7, // Choose an appropriate threshold for your data
    match_count: 7, // Choose the number of matches
  });
  console.log(documents)
  if (documents.length == 0) {
    return [{role: "user", content: "Just reply this question is not related to this website and Monopoly Academy can not provide the answer."}];
  }
  let contextText = "";
  for (let i = 0; i < documents.length; i++) {
    const document = documents[i];
    const content = document.content;
    contextText += `${content.trim()}---\n`;
  }
  const prompt = `
        You are a representative that is very helpful when it comes to talking about Monopoly academic! Only ever answer
        truthfully and be as helpful as you can!"
        Context: ${contextText}
        Question: """
        ${input}
        """
        Answer as simple text:
      `;
  return [
    ...messages,
    {
      role: "user",
      content: prompt,
    },
  ];
};
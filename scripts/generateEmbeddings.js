import { getDocuments } from "./getDocuments.js";
import { openai } from "../utils/openai.js";
import { supabase } from "../utils/supabase.js";

export async function generateEmbeddings() {
  const documents = await getDocuments(); // Your custom function to load docs
  for (const document of documents) {
    // OpenAI recommends replacing newlines with spaces for best results
    const input = document.pageContent.replace(/\n/g, " ");
    try {
      const embeddingResponse = await (
        await openai.createEmbedding({
          model: "text-embedding-ada-002",
          input,
        })
      ).json();
      await new Promise(r => setTimeout(r, 30000));
      console.log(embeddingResponse)
      const [{ embedding }] = embeddingResponse.data;
      // In production we should handle possible errors
      await supabase.from("documents").insert({
        content: input,
        embedding,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

generateEmbeddings();
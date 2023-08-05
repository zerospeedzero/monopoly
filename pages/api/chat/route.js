// app/api/chat/route.ts

import { openai } from "@/utils/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
export const runtime = "experimental-edge";

// export async function POST(req: Request) {
export default async function POST({req}) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
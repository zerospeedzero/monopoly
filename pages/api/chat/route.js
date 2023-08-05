// app/api/chat/route.ts

import { openai } from "@/utils/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { injectCustomData } from "./injectCustomData";
export const runtime = "experimental-edge";

// export async function POST(req: Request) {
export default async function handler(req, res) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
  console.log(messages)
  const messagesWithCustomData = await injectCustomData(messages);
  console.log(messagesWithCustomData)
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messagesWithCustomData,
  });
  console.log(response)
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
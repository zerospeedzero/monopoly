// app/api/chat/route.ts

import { openai } from "@/utils/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { injectCustomData } from "./injectCustomData";
export const runtime = "experimental-edge";

export default async function handler(req, res) {
  const { messages } = await req.json();
  const messagesWithCustomData = await injectCustomData(messages);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messagesWithCustomData,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
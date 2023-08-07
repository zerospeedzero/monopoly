
"use client";
import { useChat } from "ai/react";

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat/route",
  });

  return (
    <div className="relative bg-gray-100 h-[calc(100vh-200px)] p-8 overflow-y-scroll flex flex-col justify-end rounded shadow-md m-auto w-full">
      <img className="absolute top-[10%] left-[20%]  opacity-20" src="icon_lightbulb.png"/>
      <ul className="space-y-2">
        {messages.map((m, index) => (
          <li key={index} className="p-2 rounded bg-white shadow text-gray-700">
            <span className="font-semibold">
              {m.role === "user" ? "User: " : "GPT: "}
            </span>
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Please input your question here and our trained model will try to answer you ...
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 rounded border shadow-sm"
          />
        </label>
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

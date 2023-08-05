import Chat from "@/components/Chat";

export const runtime = "experimental-edge";

export default function Page() {
  return (
    <div className="h-full w-full p-8 flex">
      <Chat />
    </div>
  );
}

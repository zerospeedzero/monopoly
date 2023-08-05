import Chat from "@/components/Chat";

export const runtime = "experimental-edge";

export default function Page() {
  return (
    <div className="h-screen w-screen p-[120px] flex bg-white/80">
      <Chat />
    </div>
  );
}

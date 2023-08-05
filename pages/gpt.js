import Chat from "@/components/Chat";

export const runtime = "experimental-edge";

export default function Page() {
  return (
    <div className="h-screen w-screen pt-[120px] flex flex-col bg-white/80">
      <h2 className="text-center text-3xl p-8">Monopoly Academy embedding for GPT</h2>
      <div className="max-w-[60rem] mx-auto">
        <Chat />
      </div>
    </div>
  );
}

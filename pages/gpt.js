import Chat from "@/components/Chat";

export const runtime = "experimental-edge";

export default function Page() {
  return (
    <div className="h-screen w-screen pt-[120px] flex bg-white/80">
      <div className="max-w-[60rem] mx-auto">
        <Chat />
      </div>
    </div>
  );
}

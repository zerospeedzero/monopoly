import Board from "@/components/Board"
export default function gpt() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/50 z-[-5]"></div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <p className="pt-[250px] text-5xl">Welcome to Monopoly eLearning</p>
        </div>
        <Board/>
      </div>
      
    </>
  )
}

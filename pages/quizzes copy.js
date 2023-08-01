
import Quiz from "@/components/Quiz"
export default function quizzes() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/90 z-[-5]"></div>
      <div className='pt-[90px] max-w-[1000px] mx-auto'>
        <div className="flex flex-col justify-center items-center">
          <Quiz module="beginner"/>
        </div>
      </div>
    </>
  )
}

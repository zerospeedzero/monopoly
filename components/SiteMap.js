import React from 'react'

const Introduction = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='max-w-[50rem] bg-white rounded-lg p-4 opacity-90 shadow-lg shadow-gray-300'>
        <h1 className='text-3xl mb-4'>Site Map</h1>
        <p>Monopoly Academy, we are developing a website to teach the general public how to play Monopoly. Our goal is to guide users through
        various stages of gameplay.</p>
        <h2 className='text-xl py-2'>Our Goals:</h2>
        <p>1. Create Interest: Captivate users with stunning graphics, 3D images, and animations.</p>
        <p>2. Beginner Modules: Teach basic rules and steps for fun gameplay with family and friends.</p>
        <p>3. Tactics Modules: Offer advanced strategies to increase users&apos; chances of winning.</p>
        <p>4. Quizzes: Assess users&apos; knowledge in each module with corresponding quizzes.</p>
        <p>5. AI Robot Challenge: Test users&apos; mastery with an AI opponent.</p>
        <p>6. Educational AI Model: Envision the future of education with an AI model using GPT technology to answer
            questions.</p>

        <p>By following this learning path, users can unlock the full potential of Monopoly gameplay while experiencing
            innovative advancements in e-learning technology.</p>

      </div>
    </div>
  )
}

export default Introduction
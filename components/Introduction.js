import React from 'react'
const Introduction = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'
    >
      <div className='max-w-[40rem] bg-white rounded-lg p-4 opacity-90 shadow-lg shadow-gray-300'>
        <h1 className='text-3xl mb-4'>Introduction</h1>
        <p className='mb-4'>Monopoly is a popular <strong>multi-player</strong> board game where players roll dice to move around the board, buy properties, and build houses and hotels. The goal is to collect rent from opponents and drive them into <strong>bankruptcy</strong>.</p>
        <p className='mb-4'>Players can gain or lose money through cards and tax squares, and they receive a salary when passing <strong>&quot;Go&quot;</strong>. The game has various versions, spin-offs, and media adaptations, with international popularity. It originated from The Landlord&apos;s Game by <strong>Lizzie Magie in 1903</strong>, promoting the idea of rewarding individuals in the economy rather than monopolies.</p>
        <p className='mb-4'> The current rules are based on one set from <strong>The Landlord&apos;s</strong> Game. Published by Parker Brothers in 1935, the game&apos;s name stems from the economic concept of a monopoly, dominating a market.</p> 
      </div>
    </div>
  )
}

export default Introduction
import React from 'react'
import PiggyRecordItem from './PiggyRecordItem'

function PiggyRecord() {
    let data = [];

    for(let i = 0; i < 11; i++){
        data = [...data, {id: i}];
    };

  return (
    <>
    {data.length > 10 ? (
        <div className='flex h-64 w-64 items-center flex-col gap-2 pl-2'>
            <div className='text-lg'>Records</div>
            <div className='flex flex-col w-full gap-2 overflow-auto scrollbar-thin scrollbar-thumb-pigney-lemon/80 scrollbar-track-pigney-purple/30 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
                {data.map(x => <PiggyRecordItem key={x.id} />)}
            </div>
            <div className='self-end pr-4 font-light'>view more</div>
        </div>
    ) : (
        <div className='flex h-60 w-64 items-center flex-col gap-2 pl-2'>
            <div className='text-lg'>Records</div>
            <div className='flex flex-col w-full gap-2 overflow-auto scrollbar-thin scrollbar-thumb-pigney-lemon/80 scrollbar-track-pigney-purple/30 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
                {data.map(x => <PiggyRecordItem key={x.id} />)}
            </div>
        </div>
    )}
    </>
  )
}

export default PiggyRecord
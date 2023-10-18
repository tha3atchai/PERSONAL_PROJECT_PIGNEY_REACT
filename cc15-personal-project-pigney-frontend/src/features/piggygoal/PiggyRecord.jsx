import React from 'react'
import PiggyRecordItem from './PiggyRecordItem'
import { useAuth } from '../../hooks/use-auth';
import { useParams } from 'react-router-dom';

function PiggyRecord() {
    const {piggygoalsId} = useParams();
    const {dataRecord} = useAuth();

    let count = 0;
    dataRecord.myRecord.map(x => x.piggyId === +piggygoalsId ? count += 1 : x);

  return (
    <>
    {count > 10 ? (
        <div className='flex h-64 w-64 items-center flex-col gap-2 pl-2'>
            <div className='text-lg'>Records</div>
            <div className='flex flex-col w-full gap-2 overflow-auto scrollbar-thin scrollbar-thumb-pigney-lemon/80 scrollbar-track-pigney-purple/30 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
                {dataRecord.myRecord.sort((a, b) => b.id - a.id).map(x => x.piggyId === +piggygoalsId ? <PiggyRecordItem key={x.id} {...x} /> : null)}
            </div>
            <div className='self-end pr-4 font-light'>view more</div>
        </div>
    ) : (
        <div className='flex h-60 w-64 items-center flex-col gap-2 pl-2'>
            <div className='text-lg'>Records</div>
            <div className='flex flex-col w-full gap-2 overflow-auto scrollbar-thin scrollbar-thumb-pigney-lemon/80 scrollbar-track-pigney-purple/30 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
                {dataRecord.myRecord.sort((a, b) => b.id - a.id).map(x => x.piggyId === +piggygoalsId ? <PiggyRecordItem key={x.id} {...x} /> : null)}
            </div>
        </div>
    )}
    </>
  )
}

export default PiggyRecord
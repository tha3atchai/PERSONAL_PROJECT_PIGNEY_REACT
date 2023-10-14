import React from 'react'
import CreateGoalButton from '../auth/CreateGoalButton'
import PiggyGoal from './PiggyGoal';
import Corousel from '../../components/Corousel';
import { Link } from 'react-router-dom';

function MyPiggyGoals() {
    const data = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
    ];

    let slides = [];
    slides = data.map(x => [...slides, <PiggyGoal key={x.id}/>]);

  return (
    <>
        <div className='flex flex-col justify-center items-center gap-6'>
            <div className='flex gap-6 justify-center items-center'>
                <div className='text-4xl'>MY PIGGY GOALS</div>
                <Link to={"/piggygoals/27"}>
                    <CreateGoalButton /> 
                </Link>
            </div>
            <div className='w-[580px]'>
                <Corousel slides={slides} />
            </div>
        </div>
    </>
  )
}

export default MyPiggyGoals
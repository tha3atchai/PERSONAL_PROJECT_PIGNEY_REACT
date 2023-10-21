import React from 'react'
import axios from "../../config/axios";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

function DeleteGoal({onSuccess}) {
  const navigate = useNavigate();
  const {fetchData, dataUser} = useAuth();
  const {piggygoalsId} = useParams();
  // const [sum, setSum] = useState();
  // let data = [
  //   {q: 10 , price: 10},
  //   {q: 10 , price: 10},
  //   {q: 10 , price: 10},
  //   {q: 10 , price: 10},
  // ]

  // let result = 0;

  // data.map(x => sum += (x.q * x.price));
  // setSum(result);

  const deleteGoal = async() => {
    await axios.delete(`/piggygoals/delete/${piggygoalsId}`);
    navigate(`/profile/${dataUser.user.id}`);
    fetchData();
    onSuccess();
  };

  return (
    <>
       <div className='flex flex-col gap-2 p-2'>
            <div className='py-3 px-4 mt-4 rounded-full border-2 bg-pigney-red hover:bg-pigney-red/80'>
                <button onClick={deleteGoal} className='w-full text-center text-xl text-white'>YES</button>
            </div>
            <div className='py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple'>
                <button onClick={onSuccess} className='w-full text-center text-xl text-white '>NO</button>
            </div>
        </div> 
    </>
  )
}

export default DeleteGoal
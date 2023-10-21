import React, { useState } from 'react';
import {useAuth} from "../../hooks/use-auth";
import Avatar from '../../components/Avatar';
import PictureForm from './PictureForm';
import Loading2 from '../../components/Loading2';
import { useParams } from 'react-router-dom';

function EditProfileForm({onSuccess, type}) {
    const {piggygoalsId} = useParams();
    const [loading, setLoading] = useState(false);
    const { dataUser , updateProfile, setDataUser, fetchData, dataGoal, setDataGoal, updateGoalImage} = useAuth();

    const myGoal = dataGoal.myGoal.find(x => x.id === +piggygoalsId);

    const uploadProfileImage = input => {
        const formData = new FormData();
        formData.append("profileImage", input);
        setLoading(true);
        updateProfile(formData).then(res => {
          setDataUser({...dataUser, ...res.data});
          fetchData();
          onSuccess();
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          setLoading(false);
        });
    };

    
    const uploadGoalImage = input => {
      const formData = new FormData();
      formData.append("goalImage", input);
      setLoading(true);
      updateGoalImage(formData, +piggygoalsId).then(res => {
        setDataGoal({...dataGoal, ...res.data});
        fetchData();
        onSuccess();
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      });
  };


  return (
    <>
    {type === "goal" ? (
      <>
        {loading && <Loading2 />}
          <PictureForm
            initialSrc={myGoal.goalImage}
            onSave={uploadGoalImage}
          >
            {(src, onClick) => (
              <div className='py-4' onClick={onClick}>
                <Avatar rounded='xl' src={src} />
              </div>
            )}
        </PictureForm>
      </>
    ) : (
      <>
    {loading && <Loading2 />}
        <PictureForm
          initialSrc={dataUser.user.profileImage}
          onSave={uploadProfileImage}
        >
          {(src, onClick) => (
            <div className='py-4' onClick={onClick}>
              <Avatar rounded='xl' src={src} />
            </div>
          )}
        </PictureForm>
      </>
    )}
    </>
  )
}

export default EditProfileForm
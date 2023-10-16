import React from 'react';
import {useAuth} from "../../hooks/use-auth";
import Avatar from '../../components/Avatar';
import PictureForm from './PictureForm';

function EditProfileForm({onSuccess}) {
    const { dataUser , updateProfile, setDataUser, fetchData} = useAuth();

    const uploadProfileImage = input => {
        const formData = new FormData();
        formData.append("profileImage", input);
        updateProfile(formData).then(res => {
            setDataUser({...dataUser, ...res.data});
            fetchData();
            onSuccess();
        }).catch(err => {
            console.log(err);
        });
    };

  return (
    <>
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
  )
}

export default EditProfileForm
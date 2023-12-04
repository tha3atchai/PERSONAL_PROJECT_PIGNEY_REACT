import React from "react";
import Avatar from "../../components/Avatar";
import PictureForm from "./PictureForm";
import Loading2 from "../../components/Loading2";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../stores/slices/authSlice";
import {
  setUserInDataRecordUser,
  updateGoalImage,
} from "../../stores/slices/goalSlice";

function EditProfileForm({ onSuccess, type }) {
  const dispatch = useDispatch();
  const { piggygoalsId } = useParams();
  const { loading, dataUser } = useSelector(state => state.auth);
  const loading2 = useSelector(state => state.goal.loading);
  const { dataGoal } = useSelector(state => state.goal);

  const myGoal = dataGoal.myGoal.find(x => x.id === +piggygoalsId);

  const uploadProfileImage = input => {
    const formData = new FormData();
    formData.append("profileImage", input);
    dispatch(updateProfile(formData))
      .unwrap()
      .then(res => {
        dispatch(setUserInDataRecordUser(res));
        onSuccess();
      });
  };

  const uploadGoalImage = input => {
    const formData = new FormData();
    formData.append("goalImage", input);
    dispatch(updateGoalImage({ body: formData, piggyId: +piggygoalsId })).then(
      () => {
        onSuccess();
      }
    );
  };

  return (
    <>
      {type === "goal" ? (
        <>
          {loading2 && <Loading2 />}
          <PictureForm initialSrc={myGoal.goalImage} onSave={uploadGoalImage}>
            {(src, onClick) => (
              <div className="py-4" onClick={onClick}>
                <Avatar rounded="xl" src={src} />
              </div>
            )}
          </PictureForm>
        </>
      ) : (
        <>
          {loading && <Loading2 />}
          <PictureForm
            initialSrc={dataUser.profileImage}
            onSave={uploadProfileImage}
          >
            {(src, onClick) => (
              <div className="py-4" onClick={onClick}>
                <Avatar rounded="xl" src={src} />
              </div>
            )}
          </PictureForm>
        </>
      )}
    </>
  );
}

export default EditProfileForm;

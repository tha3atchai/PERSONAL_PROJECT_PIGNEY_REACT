import React from "react";
import PictureForm from "../profile/PictureForm";
import Avatar from "../../components/Avatar";

function EditPiggyImageForm({ onSuccess, setInput, input }) {
  const uploadGoalImage = imageData => {
    setInput({ ...input, goalImage: imageData });
    onSuccess();
  };

  return (
    <>
      <PictureForm onSave={uploadGoalImage}>
        {(src, onClick) => (
          <div className="py-4" onClick={onClick}>
            <Avatar rounded="xl" src={src} />
          </div>
        )}
      </PictureForm>
    </>
  );
}

export default EditPiggyImageForm;

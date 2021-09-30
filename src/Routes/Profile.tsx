import React, { useState } from "react";
import { Iprops, TFormEvent, TChangeEvent } from "types";

const Profile = ({ userObj, refreshUser }: Iprops) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onChange = (event: TChangeEvent) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event: TFormEvent) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
        <input type="submit" value="사용자 업데이트 " placeholder="Update profile" />
      </form>
    </>
  );
};

export default Profile;

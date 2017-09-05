export const CHANGE_UI = "CHANGE_UI";

export const changeUi = change => {
  return {
    type: CHANGE_UI,
    change
  };
};


export const createForm = () => {
  return changeUi('create');
};
export const editForm = () => {
  return changeUi("edit");
};
export const listsDropDown = () => {
  return changeUi("lists");
};
export const settingsDropdown = () => {
  return changeUi("settings");
};
export const profileForm = () => {
  return changeUi("profile");
};
export const clearUi = () => {
  return changeUi(null);
};

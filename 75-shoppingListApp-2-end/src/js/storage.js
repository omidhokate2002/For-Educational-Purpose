export const saveToStore = function ({ shoppingList, completedList }) {
  window.localStorage.setItem(
    "shoppingApp_Active",
    JSON.stringify(shoppingList)
  );

  window.localStorage.setItem(
    "shoppingApp_completed",
    JSON.stringify(completedList)
  );
};

export const getFromStore = function () {
  const getActive = window.localStorage.getItem("shoppingApp_active");
  const getCompleted = window.localStorage.getItem("shoppingApp_Completed");

  return {
    active: getActive ? JSON.parse(getActive) : [],
    completed: getCompleted ? JSON.parse(getCompleted) : [],
  };
};

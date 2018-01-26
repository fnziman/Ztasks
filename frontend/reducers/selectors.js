export const ListsAsArray = ({ lists }) => {
  return (
    Object.keys(lists).map(key => lists[key])
  );
};
export const TasksAsArray = ({ tasks }) => {
  return (
    Object.keys(tasks).map(key => tasks[key])
  );
};

export const today = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  if (month < 10) {
    month = '0' + (month + 1);
  }
  let date = currentDate.getDate();
  if (date < 10) {
    date = '0' + (date);
  }
  return (year + "-" + month + "-" + date);
};
export const tomorrow = () => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1); //set to tomorrow
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  if (month < 10) {
    month = '0' + (month + 1);
  }
  let date = currentDate.getDate();
  if (date < 10) {
    date = '0' + (date);
  }
  return (year + "-" + month + "-" + date);
};
export const thisWeek = () => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 6); //set to 'within week'
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  if (month < 10) {
    month = '0' + (month + 1);
  }
  let date = currentDate.getDate();
  if (date < 10) {
    date = '0' + (date);
  }
  return (year + "-" + month + "-" + date);
};

export const todayTasks = (tasks) => {
  let result = [];
  result = tasks.filter(task => {
    return (task.due_date === today());
  });
  return result;
};
export const tomorrowTasks = (tasks) => {
  let result = [];

  result = tasks.filter(task => {
    return (task.due_date === tomorrow());
  });
  return result;
};
export const thisWeekTasks = (tasks) => {
  let result = [];

  result = tasks.filter(task => {
    return (task.due_date <= thisWeek());
  });
  return result;
};
export const complete = tasks => {
  return tasks.filter(task => task.completed);
};
export const incomplete = tasks => {
  return tasks.filter(task => !task.completed);
};
export const listTasks = (tasks, listId) => {
  return tasks.filter(task => task.list_id === listId);
};

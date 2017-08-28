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

export const asArray = ({ lists }) => {
  return (
    Object.keys(lists).map(key => lists[key])
  );
};

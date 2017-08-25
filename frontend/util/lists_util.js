export const createList = (list) => {
  return $.ajax({
    url: "/api/lists",
    method: "POST",
    data: { list },
  });
};
export const fetchSingleList = (listId) => {
  return $.ajax({
    url: `/api/lists/${listId}`,
    method: "GET",
  });
};

export const fetchLists = () => {
  return $.ajax({
    url: "/api/lists",
    method: "GET",
  });
};

export const editList = (list) => {
  return $.ajax({
    url: `/api/lists/${list.id}`,
    method: "PATCH",
    data: { list },
  });
};

export const deleteList = (listId) => {
  return $.ajax({
    url: `/api/lists/${listId}`,
    method: "DELETE",
  });
};

export const createTask = (task) => {
  return $.ajax({
    url: "/api/tasks",
    method: "POST",
    data: { task },
  });
};
export const fetchSingleTask = (taskId) => {
  return $.ajax({
    url: `/api/tasks/${taskId}`,
    method: "GET",
  });
};

export const fetchTasks = () => {
  return $.ajax({
    url: "/api/tasks",
    method: "GET",
  });
};

export const editTask = (task) => {
  return $.ajax({
    url: `/api/tasks/${task.id}`,
    method: "PATCH",
    data: { task },
  });
};

export const deleteTask = (taskId) => {
  return $.ajax({
    url: `/api/tasks/${taskId}`,
    method: "DELETE",
  });
};

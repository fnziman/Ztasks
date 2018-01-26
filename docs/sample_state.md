```js
{
  session: {
    currentUser: {
      id: 1,
      username: "demo-login",
      first_name: "Frankie",
      last_name: "Ziman",
    }
  },
  entities: {
    lists {
      1: {
        id: 1,
        title: "Personal",
        author_id: 1,
        task_ids: [1, 5, 7, 9],
      },
      2: {
        id: 2,
        title: "Work",
        author_id: 1,
        task_ids: [2, 4, 6, 8],
      },
    },
    tasks: {
      1: {
        id: 1,
        title: "Pick up pizza for dinner",
        due_date: "5/30/2017",
        completed: false,
        time_estimate: 20,
        notes: "make sure to get anchovies"
        list_id: 1,
      }
      2: {
        id: 2,
        title: "Pick up coffee for the boss",
        due_date: "5/16/2017",
        completed: false,
        time_estimate: 20,
        notes: null,
        list_id: 2,
      }
    },
  },
}


```

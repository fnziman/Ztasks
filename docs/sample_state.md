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
        title: "Pick up coffee for the buss",
        due_date: "5/16/2017",
        completed: false,
        time_estimate: 20,
        notes: null,
        list_id: 2,
      }
    },
  },
  ui: {
    sidebar: true, //defaults to true
    lists_dropdown: false, //defaults to false
    settings: false, //settings drop down defaults to false
    list_create_form: false,
    list_edit_form: false,
    // currentList ? is this necessary or can i find it from the path
    // currentTask ? is this necessary or can i find it from the path
  }
}


```

## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Header
    + Search
    + Profile
    + Sign Out

  - SidebarContainer


  + TaskContainer


**TaskContainer**
  - TaskHeader
  - NewTask
  - TaskIndex
    + TaskIndexItem
    - TaskItemDetail
    - ListDetail

**ListContainer**
  - AllTasks
  - TodayTasks
  - TomorrowTasks
  - ThisWeekTasks

  - NewList
  - ListIndex
    + ListIndexItem

**Sidebar**
  - AllTasks
  - NewList
  + ListIndex
    - ListIndexItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/lists/:listId" | "ListContainer" |
| "/lists/:listId/tasks/:taskId" | "TaskContainer" |
| "/all" | "ListContainer" |
| "/today" | "ListContainer" |
| "/tomorrow" | "ListContainer" |
| "/week" | "ListContainer" |

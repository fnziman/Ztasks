# Database Schema

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
first_name  | string    | not null
last_name   | string    | not null
username    | string    | not null, indexed, unique
email       | string    | not null, indexed, unique
password_digest | string | not null
session_token | string   | not null, indexed, unique
created_at  | datetime  | not null
updated_at  | datetime  | not null

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
user_id     | integer   | not null, foreign key, indexed
created_at  | date      | not null
updated_at  | date      | not null

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
notes       | text      | 
due_date    | date      | not null
completed   | boolean   | not null, default: false
list_id     | integer   | not null, foreign key, indexed
time_estimate | integer |
created_at  | date      | not null
updated_at  | date      | not null

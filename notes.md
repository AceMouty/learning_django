# Creating a project and virtual env

  ```
  => pipenv install Django
  ```
  Running this will install Django and setu a virtual env

  ```
  Django-admin startproject <project_name>
  ```
  This will create a project for you will all files and boiler plate needed

# Getting into the virtual env

  ```
  => pipenv shell
  ```
  This will get you into the virtual env, use exit to fully close out of the env.

# Starting the server

  ```
  => python <project_name>/settings.py runserver
  ```
  This will start your server and log output in the console.

# Adding an app to the project

  ```
  => cd <project_name>
  => python manage.py startapp <app_name>
  ```

  A website project can have multiple apps running in it. These apps are all their own thing within the website / project
  You can take a single one of these apps and drop them into multiple websites.
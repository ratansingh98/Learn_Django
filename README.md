# Learn Django

The following are the project and courses I followed to learn it.

- LinkedIn Course [Learning Django](https://www.linkedin.com/learning/learning-django-2) is taken to make project named **wisdompets**.
Here I learned:
    - **File Structure of project:** 
        - manage.py : Run commands for our project.
        - \_\_init\_\_.py : Tells python that folder cotain python code.
        - wsgi.py/asgi.py : Provides hooks to web server.
        - settings.py : Configure django project.
        - urls.py : Routes web requests based on URL.
    - **Commands** :
        - `python3 manage.py runserver` : Runs the server.
        - `python3 manage.py <APP Name>` : Add Django app to project.
    - **File Structure of apps:** 
        - apps.py: Controls settings specific to the app.
        - models.py: Provides datalayer to construct our database schema and queries.
        - admin.py: Defines administation interface to see and edit data realted to app.
        - url.py: Url routing of the app.
        - views.py: Defines the logic and control flow for handling requests and defines the HTTP responses that are returned.
        - Tests.py: Used to write test case for the app.
        - Migrations: Used to migrate the database as we create and change database schema over time.

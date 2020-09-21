# Learn Django

The following are the project and courses I followed to learn it.

- LinkedIn Course [Learning Django](https://www.linkedin.com/learning/learning-django-2) is taken to make project named **wisdompets**.
Here I learned:
    - **File Structure of project:** 
        - ***manage.py*** : Run commands for our project.
        - ***\_\_init\_\_.py*** : Tells python that folder cotain python code.
        - ***wsgi.py/asgi.py*** : Provides hooks to web server.
        - ***settings.py*** : Configure django project.
        - ***urls.py*** : Routes web requests based on URL.
        - **Commands** :
            - `django-admin startproject <Project-Name>` : To create djnago project.
            - `python3 manage.py runserver` : Runs the server.
            - `python3 manage.py <APP Name>` : Add Django app to project.
    - **File Structure of apps:** 
        - ***apps.py***: Controls settings specific to the app.
        - ***models.py***: Provides datalayer to construct our database schema and queries.
        - ***admin.py***: Defines administation interface to see and edit data realted to app.
        - ***url.py***: Url routing of the app.
        - ***views.py***: Defines the logic and control flow for handling requests and defines the HTTP responses that are returned.
        - ***Tests.py***: Used to write test case for the app.
        - ***Migrations***: Used to migrate the database as we create and change database schema over time.
    - **MVC Architecture**: 
        MVC separates an application into three components - Model, View, and Controller. 
        - **Model**: It defines attribute, schema and underline structure of database table
        - **View**: It provide logic and control flow of project. It uses HTTP.
        - **Templates**: It defines presentation using HTML.
        - **URL Patterns**: It defines routing of urls.
    - **Django Field**:
        Django uses field class types to determine a few things
        - The column type, which tells the database what kind of data to store (e.g. INTEGER, VARCHAR, TEXT).
        - The default HTML widget to use when rendering a form field .
        - The minimal validation requirements, used in Django’s admin and in automatically-generated forms.

        In general we are categorise in 2 types:
        - Model data types field.
        - Relationship Fields.
    - **Data Migration**:
    Migrations are Django’s way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema. 
        - **migrate**, which is responsible for applying and unapplying migrations.
        - **makemigrations**, which is responsible for creating new migrations based on the changes you have made to your models.
        - **sqlmigrate**, which displays the SQL statements for a migration.
        - **showmigrations**, which lists a project’s migrations and their status.
        - **Commands** :
            - `python3 manage.py makemigrations` : To add models to the database.
            - `python3 manage.py migrate` : Pushes changes to models.
    
    - **Django Admin**:
        - Django admin application can use your models to automatically build a site area that you can use to create, view, update, and delete records.
        - To add data into models, we can write a script to do so. Here we created a script named ***load_pet_data.py*** placed in ***management/commands*** which is executed using this command.
        `python3 manage.py load_pet_data`.
        - To access admin page, we requre super user. It can be created using this command `python3 manage.py superuser`.
    - **ORM**:
        - One of the most powerful features of Django is its **Object-Relational Mapper (ORM)**, which enables you to interact with your database, like you would with SQL. In fact, Django's ORM is just a pythonical way to create SQL to query and manipulate your database and get results in a pythonic fashion.

        - To access the shell interface of ORM, we can use this command `python3 manage.py shell`. We can use instance of model call to access objects and filter out our results.
        Example
            - Pet.objects.all()
            - Pet.objects.all()[0].name
            - Pet.objects.get(id=2)
    - **URL Patterns**:
        We will define flow of control of pages. 
        - First we need to create view function in views file.
        - Then, we can added urls corresponding to views.

    - **Templates**:
        Templates contains HTML files and Jinja or filter tags is used for accesing python variables in templates.
        - We use `{{ Text }}` to diplay inside the html.
        - We use `{% Text %}` to run python code.

    - **Template Inheritance**:
        We can use a base template for inherit its layout and add our logic into it. By using ```{% block content %} {% endblock %}```.
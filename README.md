# Learn Django

The following are the project and courses I followed to learn it.

1. LinkedIn Course [Learning Django](https://www.linkedin.com/learning/learning-django-2) is taken to make project named **wisdompets**.
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

    - **Adding Javascript and static files**:
        - We can use ` <script src="{% static 'filename' %}"></script>` command in our html file to add/link static libraries and files.

2. LinkedIn Course [Building a Personal Portfolio with Django](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django) is taken to make project named **portfolio**.
    I created ticket website is a project which have individual apps like events, blog, accounts.
    - **Installing postgres**:
    Postgres is an object-relational database,this means that Postgres includes features like table inheritance and function overloading, which can be important to certain applications. Postgres also adheres more closely to SQL standards.
    Download and install PostgreSQL from [here](https://www.postgresql.org/download/).

    - **Commands of PSQL**:
        - To create database use `CREATE DATABASE portfoliodb;`
        - To connect with psql you will need to add these in **setting.py** 's DATABASE dictionary.
            ```        
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': '<DATABASE NAME>',
            'USER': '<USER-Name',
            'PASSWORD': '<PASSOWORD>',
            'HOST': 'localhost', #Default
            'POST': '5432', #Default
            ```
    - **Dealing with static files**:
        - In older version static files can be added to urlpatterns using `+ static(settings.STATIC_URL, document_root =settings.STATIC_ROOT)`
        - **Collectstatic** collects the static files into *STATIC_ROOT*.
             ` python3 manage.py collectstatic`
    - **get_list_or_404**: This is used view page, which checks if the primary key exists or not.

3. LinkedIn Course [Django: Forms](https://www.linkedin.com/learning/django-forms) is taken to make project named **nandiasgarden**.   
    - **Form**: It allow a visitor to do things like enter text, select options, manipulate objects or controls, and so on, and then send that information back to the server.

    - **Methods**: There are 2 basic methods of form GET and POST.
        - **Get**: It bundles the submitted data into a string, and uses this to compose a URL. It is suitable for things like a web search form, because the URLs that represent a GET request can easily be bookmarked, shared, or resubmitted.
        - **POST**: In POST the browser bundles up the form data, encodes it for transmission, sends it to the server, and then receives back its response. It is used for secure operations like transaction with database, large quantities of data, or for binary data, such as an image.
    
    - **CSRF**: The CSRF middleware and template tag provides easy-to-use protection against Cross Site Request Forgeries. This type of attack occurs when a malicious website contains a link, a form button or some JavaScript that is intended to perform some action on your website, using the credentials of a logged-in user who visits the malicious site in their browser. 
    To enable it use `<form method="post">{% csrf_token %}`.

    - **Djnago Form**: Form can be create using python code, refer `form.py` in project folder. It is much cleaner way to making it.

    - **Model Form**: If you’re building a database-driven app, chances are you’ll have forms that map closely to Django models.
        - ```>>> from django.forms import ModelForm
            >>> from myapp.models import Article

            # Create the form class.
            >>> class ArticleForm(ModelForm):
            ...     class Meta:
            ...         model = Article
            ...         fields = ['pub_date', 'headline', 'content', 'reporter']```
          
        - **Widgets**: A widget is Django’s representation of an HTML input element. The widget handles the rendering of the HTML, and the extraction of data from a GET/POST dictionary that corresponds to the widget. Whenever you specify a field on a form, Django will use a default widget that is appropriate to the type of data that is to be displayed. 
    
        - **Formset**: A formset is a layer of abstraction to work with multiple forms on the same page. It can be best compared to a data grid.

        - **Form style** We can change form view by providing functions as `<FORM>.as_<type>` in html.

4. LinkedIn Course [Test-Driven Development in Django](https://www.linkedin.com/learning/test-driven-development-in-django) is taken to learn fundamentals of testing and made project named **Testing**.
    - **Testing**: Software Testing is evaluation of the software against requirements gathered from users and system specifications. Testing is conducted at the phase level in software development life cycle or at module level in program code. Software testing comprises of Validation and Verification.
    There are two areas of test:
        - **Functional tests**: Deal with the way a user will interact with your project.
        - **Unit tests**: Ensure that small pieces of your project are working as they should.

    - **Selenium**: Selenium is a portable framework for testing web applications. Selenium provides a playback tool for automated functional tests without the need to learn a test scripting language.
        - **Install** using `sudo apt install firefox-geckodriver` for firefox. and `pip install selenium`

    - **Django Test Command** : `python3 manage.py test`.
    
    - **Test database** : `'TEST_NAME':os.path.join(BASE_DIR,'test_db.sqlite3')`, put this in database list to create and delete a dummy every time database executes.

    - **Ajax testing**: In ajax pages are not switched or redirected instead, data or components get updated. In that case, we have to use wait. `time.sleep(5)`. 


5. [Django rest framework](https://www.django-rest-framework.org/tutorial/quickstart/) docs is followed to learn about it. Project name is **rest_project**.

    - **REST** is acronym for REpresentational State Transfer. It is an architectural style that defines a set of rules in order to create Web Services. In a client-server communication, REST suggests to create an object of the data requested by the client and send the values of the object in response to the user. 
    - **Setting Up** : `pip install djangorestframework` and add `rest_framework` in INSTALLED_APPS list of settings.py.

    - **Serializers**: Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types. 
    There are 2 ways of doing it, using **ModelSerializers**  and **Serializers class**.
        - **SnippetSerializer** serializes data into dictionary.
            example : `{'id': 2, 'title': '', 'code': 'print("hello, world")\n', 'linenos': False, 'language': 'python', 'style': 'friendly'}`

        - **JSONRenderer**  renders the data into json.
            example : `# b'{"id": 2, "title": "", "code": "print(\\"hello, world\\")\\n", "linenos": false, "language": "python", "style": "friendly"}'`
    
        - **Deserialization**: Converting parse a stream into Python native datatypes.
            - Using **JSONParser** convert data stream to python object.
                Example: `# <Snippet: Snippet object>`
    - **Requests and Responses**: 
        - **Request objects:** REST framework introduces a Request object that extends the regular HttpRequest, and provides more flexible request parsing. The core functionality of the Request object is the `request.data` attribute, which is similar to `request.POST`.

        - **Response objects:** REST framework also introduces a Response object, which is a type of TemplateResponse that takes unrendered content and uses content negotiation to determine the correct content type to return to the client.

        - **Status Code**;  REST framework provides more explicit identifiers for each status code, such as HTTP_400_BAD_REQUEST in the status module. It's a good idea to use these throughout rather than using numeric identifiers. For more refer [here](https://www.restapitutorial.com/httpstatuscodes.html).

       - **API views**:  The wrappers also provide behavior such as returning 405 Method Not Allowed responses when appropriate, and handling any ParseError exceptions that occur when accessing request.data with malformed input.
            REST framework provides two wrappers you can use to write API views.

            - The `@api_view` decorator for working with function based views.
            - The `APIView` class for working with class-based views.

        - **Format suffixes**: Using format suffixes gives us URLs that explicitly refer to a given format, and means our API will be able to handle URLs. SUch as `http://127.0.0.1:8000/snippets.json` and `http://127.0.0.1:8000/snippets.api`.

    - **Class Based Views**:
        We can also write our API views using class-based views, rather than function based views. 

        - Using **Class based views**: It looks similar to traditional way of defining everything.

        - Using **mixins**: The create/retrieve/update/delete operations  are pretty similar for any model-backed API views we create. Those bits of common behaviour are implemented in REST framework's mixin classes.

        - Using **generic class-based views**: REST framework provides a set of already mixed-in generic views that we can use to trim down our views.py module even more. Shortest and best implementation.
    
    - **Authentication & Permissions**: We have to restrict users for performing any operations using api. So for that we use Authentications and permissions in our application.
        - **Adding information to our model**: Only the allowed user have access to view his data, for that we need to add relation to it.

        - **Adding endpoints for our User models**: To perform CRUD operations on user.

        - **Associating Snippets with Users**: We need to bind our snippets data to users functionality.
        - **Updating our serializer**: Add the owner field to the serializer definition in serializers.py

        - **Adding required permissions to views**: Now that code snippets are associated with users, we want to make sure that only authenticated users are able to create, update and delete code snippets.

        - **Adding login to the Browsable API**: We can add a login view for use with the browsable API, by editing the URLconf in our project-level urls.py file.

        - **Object level permissions**: All code snippets to be visible to anyone, but also make sure that only the user that created a code snippet is able to update or delete it. We to need to create a custom permission.

    - **Relationships & Hyperlinked APIs**: We improved the cohesion and discoverability of our API, by instead using hyperlinking for relationships.
        - **Creating an endpoint for the root of our API**
        - **Creating an endpoint for the highlighted snippets**
        - **Hyperlinking the API**:  We'll modify our serializers to extend `HyperlinkedModelSerializer` instead of the existing `ModelSerializer`.
        The HyperlinkedModelSerializer has the following differences from ModelSerializer:

            - It does not include the id field by default.
            - It includes a url field, using HyperlinkedIdentityField.
            - Relationships use HyperlinkedRelatedField, instead of PrimaryKeyRelatedField.
        
    - **Adding pagination**: We can change the default list style to use pagination, by modifying our `tutorial/settings.py` file slightly. Add the following setting:
        ```
        REST_FRAMEWORK = {
        'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
        'PAGE_SIZE': 10
        }
        ```

    - **ViewSets & Routers**: 
        - **ViewSet** classes are almost the same thing as View classes, except that they provide operations such as read, or update, and not method handlers such as get or put.
        - **Router** class which handles the complexities of defining the URL conf for you.

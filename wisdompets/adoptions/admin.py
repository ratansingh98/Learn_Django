from django.contrib import admin
from .models import Pet


# Display  fields on django admin
@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
    list_display=["name",'species','breed','age','sex','submission_date']

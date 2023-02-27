# Generated by Django 4.1.7 on 2023-02-21 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_alter_contactmodel_importance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactmodel',
            name='importance',
            field=models.CharField(choices=[('2', 'Poco Importante'), ('3', 'Duda'), ('1', 'Relativamente Importante'), ('0', 'Muy Importante')], max_length=1),
        ),
    ]
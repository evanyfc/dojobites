# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-10-26 20:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojobites_app', '0002_auto_20161026_1311'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choice',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dojobites_app.Restaurant'),
        ),
    ]

from rest_framework import serializers
import random

from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    group = serializers.SerializerMethodField()
    password2 = serializers.CharField()

    class Meta:
        model = User
        fields = ["username", "email", "group", "password", "password2"]
        extra_kwargs = {
            "password": {"write_only": True, "style": {"input_type": "password"}},
            "password2": {"write_only": True, "style": {"input_type": "password"}},
        }
        read_only_fields = ["group"]

    def get_group(self):
        groups = ["Developer", "Maintainer", "Product owner", "Desinger"]
        return groups[random.randint(0, len(groups - 1))]

    def create(self, validated_data):
        validated_data.pop("password2")
        return User.objects.create(**validated_data)

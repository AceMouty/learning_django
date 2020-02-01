from rest_framework import serializers
from leads.models import Lead

# Create a serializer, this will serve JSON data


class LeadSearializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

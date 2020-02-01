from leads.models import Lead
from rest_framework import viewsets, permissions
from .searilizers import LeadSearializer

# Lead Viewset


class LeadViewset(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSearializer

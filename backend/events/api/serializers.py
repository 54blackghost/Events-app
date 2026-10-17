from rest_framework import serializers
from ..models import Event


class EventModelSerializer(serializers.ModelSerializer):
   class Meta:
       model = Event
       fields = ['id', 'name', 'description', 'qr_code', 'date']



# class EventModelSerializer(serializers.ModelSerializer):
#     qr_code = serializers.SerializerMethodField()

#     class Meta:
 #        model = Event
 #        fields = ['id', 'name', 'description', 'qr_code', 'date']

 #    def get_qr_code(self, obj):
 #        request = self.context.get('request')
 #        if obj.qr_code and request:
 #            return request.build_absolute_uri(obj.qr_code.url)
 #        return obj.qr_code.url if obj.qr_code else None

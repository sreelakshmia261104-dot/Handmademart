from rest_framework import serializers

from .models import Register, Order, Wishlist

class RegisterSerializer(serializers.ModelSerializer):

    class Meta:

        model = Register

        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):

    class Meta:

        model = Order

        fields = '__all__'
class WishlistSerializer(serializers.ModelSerializer):

    class Meta:

        model = Wishlist

        fields = '__all__'
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Register, Order
from .serializers import RegisterSerializer, OrderSerializer

from .models import Wishlist
from .serializers import WishlistSerializer

@api_view(['POST'])
def register(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():

        user = serializer.save()

        return Response({

            'message': 'User Registered Successfully',

            'id': user.id,
            'username': user.username,
            'email': user.email,
            'mobile': user.mobile

        })

    return Response(serializer.errors)


@api_view(['POST'])
def login(request):

    email = request.data.get('email')
    password = request.data.get('password')

    user = Register.objects.filter(
        email=email,
        password=password
    ).first()

    if user:

        return Response({
            'message':'Login Success',
            'email':user.email,
            'username':user.username,
            'mobile':user.mobile
        })

    else:

        return Response({
            'message':'Invalid Credentials'
        }, status=400)


@api_view(['POST'])
def placeorder(request):

    print(request.data)
    print(request.FILES)

    serializer = OrderSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response({
            'message':'Order Placed Successfully'
        })

    return Response(serializer.errors)


@api_view(['POST'])
def myorders(request):

    email = request.data.get('user_email')

    orders = Order.objects.filter(
        user_email=email
    )

    serializer = OrderSerializer(
        orders,
        many=True
    )

    return Response(serializer.data)

@api_view(['POST'])

def addwishlist(request):

    serializer = WishlistSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response({

            'message':'Added to Wishlist'

        })

    return Response(serializer.errors)


@api_view(['POST'])

def getwishlist(request):

    email = request.data.get('user_email')

    wishlist = Wishlist.objects.filter(
        user_email=email
    )

    serializer = WishlistSerializer(
        wishlist,
        many=True
    )

    return Response(serializer.data)


@api_view(['POST'])

def removewishlist(request):

    id = request.data.get('id')

    Wishlist.objects.filter(id=id).delete()

    return Response({

        'message':'Removed Successfully'

    })
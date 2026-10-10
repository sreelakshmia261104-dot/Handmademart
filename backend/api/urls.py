from django.urls import path

from .views import (
    register,
    login,
    placeorder,
    myorders,
    addwishlist,
    getwishlist,
    removewishlist
)
urlpatterns = [

    path('register/', register),

    path('login/', login),

    path('placeorder/', placeorder),

    path('myorders/', myorders),

    path('addwishlist/', addwishlist),

    path('getwishlist/', getwishlist),

    path('removewishlist/', removewishlist),

]
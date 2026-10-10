from django.db import models

class Register(models.Model):

    username = models.CharField(max_length=30)

    mobile = models.CharField(max_length=10)

    email = models.CharField(max_length=40)

    password = models.CharField(max_length=30)

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return self.username


class Order(models.Model):

    user_email = models.CharField(
        max_length=100,
        null=True,
        blank=True
    )

    product_name = models.CharField(max_length=100)

    product_price = models.CharField(max_length=20)

    buyer_name = models.CharField(max_length=100)

    address = models.TextField()

    phone = models.CharField(max_length=15)

    productimage = models.ImageField(
        upload_to='orders/',
        null=True,
        blank=True
    )

    ordered_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return self.product_name


class Wishlist(models.Model):

    user_email = models.CharField(max_length=100)

    product_name = models.CharField(max_length=100)

    product_price = models.CharField(max_length=20)

    description = models.TextField()

    productimage = models.CharField(max_length=300)

    added_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return self.product_name
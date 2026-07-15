from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Order, OrderItem
from .serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)
    
    def create(self, request, *args, **kwargs):
        # Create order from cart data
        cart_items = request.data.get('items', [])
        subtotal = request.data.get('subtotal')
        tax = request.data.get('tax')
        shipping = request.data.get('shipping')
        total = request.data.get('total')
        
        order = Order.objects.create(
            user=request.user,
            subtotal=subtotal,
            tax=tax,
            shipping=shipping,
            total=total,
        )
        
        # Add items to order
        for item in cart_items:
            OrderItem.objects.create(
                order=order,
                product_id=item['product_id'],
                quantity=item['quantity'],
                price=item['price']
            )
        
        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)

from django.core.management.base import BaseCommand
from products.models import Product

class Command(BaseCommand):
    help = 'Add sample products to database'

    def handle(self, *args, **options):
        products_data = [
            {
                'title': 'iPhone 15',
                'price': 999.99,
                'description': 'Latest Apple smartphone with advanced features',
                'category': 'electronics',
                'image': 'https://via.placeholder.com/300',
                'rating': 4.8,
                'reviews': 250,
                'discount': 10,
            },
            {
                'title': 'Samsung Galaxy S24',
                'price': 899.99,
                'description': 'Premium Android smartphone',
                'category': 'electronics',
                'image': 'https://via.placeholder.com/300',
                'rating': 4.7,
                'reviews': 180,
                'discount': 15,
            },
            {
                'title': 'Cotton T-Shirt',
                'price': 29.99,
                'description': '100% cotton comfortable t-shirt',
                'category': 'clothing',
                'image': 'https://via.placeholder.com/300',
                'rating': 4.5,
                'reviews': 50,
                'discount': 5,
            },
            {
                'title': 'Python Programming Book',
                'price': 49.99,
                'description': 'Learn Python from basics to advanced',
                'category': 'books',
                'image': 'https://via.placeholder.com/300',
                'rating': 4.9,
                'reviews': 320,
                'discount': 20,
            },
            {
                'title': 'Gold Bracelet',
                'price': 199.99,
                'description': '18K gold bracelet with diamonds',
                'category': 'jewelry',
                'image': 'https://via.placeholder.com/300',
                'rating': 4.8,
                'reviews': 90,
                'discount': 0,
            },
        ]

        for product_data in products_data:
            product, created = Product.objects.get_or_create(
                title=product_data['title'],
                defaults=product_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'✅ Added: {product.title}'))
            else:
                self.stdout.write(self.style.WARNING(f'⚠️ Already exists: {product.title}'))

        self.stdout.write(self.style.SUCCESS('✅ All products added!'))
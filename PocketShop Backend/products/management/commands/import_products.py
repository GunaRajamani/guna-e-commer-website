import csv
from django.core.management.base import BaseCommand
from products.models import Product

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str)

    def handle(self, *args, **options):
        with open(options['csv_file']) as f:
            reader = csv.DictReader(f)
            for row in reader:
                Product.objects.create(**row)
        self.stdout.write('✅ Products imported!')
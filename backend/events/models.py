from django.db import models
import qrcode
from io import BytesIO
from django.core.files.base import  ContentFile
from PIL import Image
# Create your models here.





class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    qr_code = models.ImageField(upload_to='qrcodes/', blank=True)
    date = models.DateTimeField()

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        # Generate QR code for the event 
        if not self.qr_code:
           # Générer le QR code de l'événement
            qrcode_img = qrcode.make(self.name)
            # Récupérer les dimensions réelles du QR code
            width, height = qrcode_img.size
            # Créer un fond blanc aux mêmes dimensions
            canvas = Image.new("RGB", (width, height), "white")
            # Coller le QR code sur le fond blanc
            canvas.paste(qrcode_img.convert("RGB"), (0, 0))
            fname = f'qr_code-{self.name}.png'
            buffer = BytesIO()
            canvas.save(buffer, format='PNG')
            self.qr_code.save(fname, ContentFile(buffer.getvalue()), save=False)
        super().save(*args, **kwargs)
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter


IMAGE_DIR = Path(__file__).resolve().parent / "images"

for source in sorted(IMAGE_DIR.glob("real-*.png")):
    image = Image.open(source).convert("RGB")
    enlarged = image.resize((image.width * 2, image.height * 2), Image.Resampling.LANCZOS)
    enlarged = enlarged.filter(ImageFilter.UnsharpMask(radius=1.2, percent=145, threshold=3))
    enlarged = ImageEnhance.Contrast(enlarged).enhance(1.04)
    enlarged.save(source, "PNG", optimize=True)
    print(f"{source.name}: {enlarged.width}x{enlarged.height}")

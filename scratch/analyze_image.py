import os
from PIL import Image

image_path = r"c:\Users\Javeria\Desktop\Alkhidmat_foundation_lahore\src\assets\featured_causes_section(Home_Page)\palestine_.jpeg"
if os.path.exists(image_path):
    img = Image.open(image_path)
    width, height = img.size
    print(f"Image size: {width}x{height}")
    
    # Check top 5 rows
    for y in range(min(5, height)):
        row_colors = [img.getpixel((x, y)) for x in range(min(10, width))]
        print(f"Row {y} sample pixels: {row_colors}")
else:
    print("File does not exist")

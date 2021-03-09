from PIL import Image

layer1 = Image.open("1615130311722.jpg").convert('RGBA')  # mask
layer2 = Image.open('02_clipped_rev_1.png').convert('RGBA')
#layer1.show()

print(layer2.size)

layer1 = layer1.resize((layer2.size[0], layer2.size[1]))
print(layer1.size)
final = Image.new("RGBA", layer2.size)             # 合成的image

final = Image.alpha_composite(final, layer1)
#final.show()
final = Image.alpha_composite(final, layer2)
final.show()
final=final.convert('RGB')
#final.show()
final.save('image_mask.jpg')
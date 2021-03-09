import numpy as np
from PIL import Image
import torch.nn.functional as F
from torchvision import transforms
import torch

img = Image.open('cop.png').convert('L')  # 单通道打开
gt = Image.open('77.png').convert('L')  # 单通道
# img = img.resize((gt.size[0], gt.size[1])) #若大小不统一
print(img.size)
print(gt.size)
gt = np.array(gt)
img = np.array(img)
gt = (gt == 255)  # 将白转化为1，label
print(gt)
img = (img == 255)

mask = (img >= 0) & (img < 2)  # 检索mask
a = 2 * gt[mask].astype(int) + img[mask]

# print(temp)
hist = np.bincount(2 * gt[mask].astype(int) + img[mask], minlength=2 ** 2).reshape(2, 2)
print(hist)
iou = np.diag(hist) / (hist.sum(axis=1) + hist.sum(axis=0) - np.diag(hist))
miou = np.nanmean(iou)
print(miou)

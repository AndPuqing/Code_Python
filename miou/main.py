import numpy as np
from PIL import Image
import torch.nn.functional as F
from torchvision import transforms
import torch
import matplotlib.pyplot as plt

img = Image.open('out147.png').convert('L')  # 单通道打开
gt = Image.open('147.png').convert('L')  # 单通道
# img = img.resize((gt.size[0], gt.size[1])) #若大小不统一
gt = np.array(gt)
img = np.array(img)
gt = (gt == 0)  # 将背景置为1,便于检索
img = (img >= 0) & (img < 100)  # 背景向上二值


def fast_hist(a, b, n):  # a是转化成一维数组的标签，形状(H×W,)；b是转化成一维数组的预测特征图，形状(H×W,)；n是类别数目
    k = (a >= 0) & (a <= n)  # k是一个一维bool数组，形状(H×W,)；目的是找出标签中需要计算的类别,0是目标，1是背景
    temp = n * a[k].astype(int) + b[k]  # 检索
    plt.imshow(np.resize(temp, (300, 400)))  # 可视化
    plt.show()
    # 得出混淆矩阵TP=(0,0),FP=(0,1),FN=(1,0),FN(1,1)
    return np.bincount(n * a[k].astype(int) + b[k], minlength=n ** 2).reshape((2, 2))


def per_class_iu(hist):  # 计算mIoU，hist的形状(n, n)
    '''
	核心代码
	'''
    # 原有为多种类miou计算,现为iou计算
    return hist[0, 0] / (hist[0, 0] + hist[0, 1] + hist[1, 0])  # 返回值形状(n,)


def compute_mIoU(pred, label, n_classes=2):
    hist = np.zeros((n_classes, n_classes))  # hist初始化为全零，在这里的hist的形状是[n_classes, n_classes]
    # flatten()为将图片resize成一维数组
    hist += fast_hist(label.flatten(), pred.flatten(), n_classes)  # 对一张图片计算 n_classes×n_classes 的hist矩阵，并累加
    print(hist)
    IoU = per_class_iu(hist)
    print("miou=" + str(IoU * 100))
    return IoU


compute_mIoU(img, gt)

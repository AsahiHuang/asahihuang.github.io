---
title: Thinkpad-P51-Hackintosh
date: 2019-08-04 10:04:30
tags: 黑苹果
categories: Hackintosh
thumbnail: https://images-asahih-com.s3.ap-northeast-1.amazonaws.com/blog/2020/04/06/hG2Muio%20%281%29.png
---

Mojave 14.6

<!--more-->

![无视10.15](https://files.catbox.moe/kzk7o9.png)

## EFI

针对本机型在GitHub上传过一个EFI针对10.14.2
https://github.com/AsahiHuang/ThinkPadP51-Hackintosh

目前已经更新到10.14.6，更新前注意更新clover版本，老版本alc睡眠唤醒会造成无声，请更新lilu组建，详细方法见上面链接

![](https://files.catbox.moe/zapc56.png)

## 配置

本机的主要配置信息： 

| 设备 | 描述|
| ------ | --------- |
| CPU | i7-7700HQ	|
| 显卡   | HD630     |
| 屏幕 	| 4k（京东方） |
| 内存 | 16G	|
| 硬盘 | sm961 |



## 注意

如果你的机型和我差不多的话最方便的办法把下载的镜像写入u盘后直接替换我的EFI文件，**注意包括序列号在内的SMBIOS信息已移除自行修改** 

至于说原生网卡的好处，配合aw解锁啦

![](https://files.catbox.moe/41sb70.png)



## 更新

> 2019.10.7 更新
>
> 版本升级到10.15 完美支持sidecar
>
> ![mac端](https://files.catbox.moe/6skbe8.png)
>
> ![iPad端](https://files.catbox.moe/omzhkn.PNG)



AsahiHuang
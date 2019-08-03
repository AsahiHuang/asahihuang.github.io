---
title: 用hexo写博客
date: 2019-06-19 14:49:56
tags: hexo
---

# 用Hexo写博客

##  安装

``` 
$ npm install -g hexo
```

在git bush中安装hexo

<!--more-->

## 初始化

新建一个hexo文件夹,用来存放所有代码.

```
$ hexo init	//初始化
```

hexo 会自动下载需要文件.

```
hexo g //生成
hexo s //启动本地服务
```

打开浏览器访问 http://localhost:4000 即可看到内容

## 修改主题

​	找到官方主题:https://hexo.io/themes/ 下载到hexo目录的theme文件下

```
git clone #主题仓库地址*  /theme
```

修改根目录的_config.yml 中的 **theme: landsape** 改为 **theme: #NewThemeName# **

如果出现莫名其妙问题可通过**hexo clean **来清理,在生成并发布

## 上传到GitHub

```
$ hexo d
```

首先,ssh key配置好,其次,配置_config.yml中有关deploy的部门: 

```
deploy:
  type: git
  repository: git@github.com:#githubID#/#githubID#.github.io.git
  branch: master
```

#内为替换内容,也就是你的GitHub用户名

其次还需要在git bash输入

```
npm install hexo-deployer-git --save
```

现在输入**hexo d ** 就会将本次有改动的代码全部提交,没有改动的不会

提交完成后原仓库内的文件都没了,存放在了source文件夹.

## 常用hexo 命令

```
hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成静态页面至public目录
hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo deploy #部署到GitHub
hexo help  # 查看帮助
hexo version  #查看Hexo的版本
```

```
hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy
```

```
hexo s -g #生成并本地预览
hexo d -g #生成并上传
```

## 写博客

在git bash定位到hexo的根目录

```
$ hexo new 'my-first-blog'
```

hexo就会在**_posts **下生成相关的md文件,然后再markdown编辑器上编写

一般完整的格式:

````
---
title: postName #文章页面上的显示名称，一般是中文
date: 2013-12-02 15:30:16 #文章生成时间，一般不改，当然也可以任意修改
categories: 默认分类 #分类
tags: [tag1,tag2,tag3] #文章标签，可空，多标签请用格式，注意:后面有个空格
description: 附加一段文章摘要，字数最好在140字以内，会出现在meta的description里面
---

以下是正文 
````

### 让博文列表不显示全部内容

默认情况下,生成的目录会显示全部的文章内容,可以再合适的位置加上

```
<!--more-->
```

即可



参考:<https://www.cnblogs.com/liuxianan/p/build-blog-website-by-hexo-github.html#%E4%BD%BF%E7%94%A8hexo%E5%86%99%E5%8D%9A%E5%AE%A2>


















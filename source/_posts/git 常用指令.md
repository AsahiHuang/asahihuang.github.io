---
title: git常用指令
date: 2019-06-19 15:28:28
tags: git
---

## 初始配置

```
git config --global user.name "username"
git config --global user.email "email"

--global参数可以保证机器上所有的git仓库使用这个配置
```

然后输入
<!--more-->

```
ssh-keygen
```

## 分支

   查看分支：git branch
   创建分支：git branch name
   切换分支：git checkout name

   创建+切换分支：git checkout –b name
   合并某分支到当前分支：git merge name
   删除分支：git branch –d name



## 远程仓库(github)

1. 创建ssh key

2. github上add ssh key

3. github上创建新的仓库

4. 根据GitHub仓库链接 

	```
	git remote add origin https://github.com/AsahiHuang/Data_Structure.git
	```

5. 将本地仓库推送到远程仓库 ,git push,实际将当前分支推送到远程

	> 由于远程库是空的，我们第一次推送master分支时，加上了 –u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

6. 现在,只要本地作提交,可通过

	```
	git push origin master
	```

	把本地master分支的最新修改推送到GitHub

## 文件修改回退

```
git reset  –hard HEAD~100
```

指向上次修改的指针

或者

```
git checkout  -- filename
```

把filename文件在工作区的修改全部撤销

> 这里有两种情况
>
> 1. 文件自动修改后，还没有放到暂存区，使用 撤销修改就回到和版本库一模一样的状态。
> 2. 另外一种是文件已经放入暂存区了，接着又作了修改，撤销修改就回到添加暂存区后的状态。

再没有commit前,通过此命令也可将删除的文件(rm filename)恢复

## 远程仓库克隆

```
git clone 远程仓库地址
```

即可在本地生成一个版本库

## 分支策略

​	常合并分支时，git一般使用”Fast forward”模式，在这种模式下，删除分支后，会丢掉分支信息，现在我们来使用带参数 –no-ff来禁用”Fast forward”模式

```
git merge –-no-ff  -m "注释" 合并分支
```

> 分支策略：首先master主分支应该是非常稳定的，也就是用来发布新版本，一般情况下不允许在上面干活，干活一般情况下在新建的dev分支上干活，干完后，比如上要发布，或者说dev分支代码稳定后可以合并到主分支master上来。

## bug分支

​	在开发中，会经常碰到bug问题，那么有了bug就需要修复，在Git中，分支是很强大的，每个bug都可以通过一个临时分支来修复，修复完成后，合并分支，然后将临时的分支删除掉。
比如我在开发中接到一个404 bug时候，我们可以创建一个404分支来修复它，但是当前的dev分支上的工作到一半还没有提交,此时无法切换分支.

​	Git提供了**stash** 功能,可以把当前的工作现场隐藏,等恢复现场后继续工作

```
git stash
```

此时工作区的状态时干净的

切换回主分支,新建一个临时分支,修复完成后,回到主分支并合并,删除临时分支

现在回到dev分支

此时工作区时干净的,可通过

```
git stash list
```

查看,

Git把stash内容存在某个地方了，但是需要恢复一下,两种办法:

1. git stash apply恢复，恢复后，stash内容并不删除，你需要使用命令git stash drop来删除
2. 另一种方式是使用git stash pop,恢复的同时把stash内容也删除了。





## 历史

1. 查看日志

	```
	git log
	```

	

2. 修改日志

	最近一次commit的修改:

	```
	git commit --amend
	```

	
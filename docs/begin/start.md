# 快速开始

首先我们需要一个浏览器，目前只支持Chromium内核的浏览器，而且短期内不会增加更多的浏览器内核支持，推荐使用以下几款浏览器

- Chrome
- SRWare Iron
- Edge

::: info
SRWare Iron 可以看作一款轻量版Chrome，不会自动升级，很多人都推荐过，目前也是我专门用来玩gbf的浏览器。
:::

同时，因为插件中使用的一些浏览器API要求，浏览器的最低版本需要116。

## 获取插件

点击下载最新版本的[压缩包](https://github.com/Waaatanuki/Chrome-Extension-Tarou/releases/download/3.2.11/Chrome-Extension-Tarou.v3.2.11.zip)，解压缩以后有个Chrome-Extension-Tarou文件夹，里面就是插件文件。

将该文件夹移动到一个固定位置，比如E:\gbf\Chrome-Extension-Tarou，之后尽量不要改动位置。

## 加载插件

::: info
演示截图为Iron浏览器，Chrome差不多，Edge稍有区别但也差别不大。
:::

- 打开浏览器的管理扩展程序页面

  ![alt text](/assets/img/start-img1.png)

- 打开右上角`开发者模式`

  ![alt text](/assets/img/start-img2.png)

- 点击`加载已解压的扩展程序`选择Chrome-Extension-Tarou文件夹，加载太郎插件

  ![alt text](/assets/img/start-img3.png)

- 看到这个插件面板就说明加载成功

  ![alt text](/assets/img/start-img4.png)

## 更新插件

假设插件存放在E:\gbf\Chrome-Extension-Tarou

- 删除Chrome-Extension-Tarou文件夹
- 把新下载的压缩包解压后的Chrome-Extension-Tarou文件夹放到E:\gbf，使插件路径依然保持E:\gbf\Chrome-Extension-Tarou
- 在浏览器的管理扩展程序页面重新加载插件<Badge type="danger" text="重要" />

  ![alt text](/assets/img/start-img5.png)

::: warning
有问题就点点这个重载按钮，可以解决99%的问题。
:::

## 浏览器启动项

### --silent-debugger-extension-api

有些数据需要调用插件的debuggerAPI，这时候页面顶部会提示`Tarou已开始调试此浏览器`，这个提示信息不能关闭，但是可以通过这个命令来隐藏

### --disable-backgrounding-occluded-windows

该命令可以让浏览器在后台也能运行，比如点了FA之后用别的页面盖住，还能继续动。这个启动项跟插件无关，但是比较常用就也放在这了

### 如何添加启动项命令

::: details Windows
右击浏览器图标在属性-目标最后追加启动项命令

![alt text](/assets/img/start-img6.png)

命令之间有个空格，添加完之后类似于 ...chrome.exe" --silent-debugger-extension-api --disable-backgrounding-occluded-windows

![alt text](/assets/img/start-img10.png)

Edge需要额外关闭上方浏览器设置中的两个选项，关闭后杀掉浏览器进程再次启动生效。
:::

::: details macOS

1. 打开启动台-其他-自动操作，或者在终端里输入`open -a "Automator"`
   ![alt text](/assets/img/start-img7.png)

2. 选择`应用程序`-`实用工具`-`运行Shell脚本`
   ![alt text](/assets/img/start-img8.png)

3. 在Shell脚本框中根据使用的浏览器输入命令，`浏览器地址 --silent-debugger-extension-api --disable-backgrounding-occluded-windows`
   ![alt text](/assets/img/start-img9.png)

   上图是我自己使用的Iron浏览器地址，不同版本不同浏览器的位置可能不一样，需要根据实际情况填写浏览器的最终执行程序地址。

   ::: warning
   如果路径中有空格，需要在空格前加上反斜杠。比如Chrome的执行文件地址通常是`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome`

4. 点击菜单-文件-存储，保存为应用程序，以后通过这个程序启动浏览器就会带着启动项命令。

:::

# TKScript

`GreaseMonkey`油猴脚本与`BrowserAddon`浏览器扩展，如果觉得不错，点个`star`吧 😁
本项目fork自[https://github.com/WindrunnerMax/TKScript](https://github.com/WindrunnerMax/TKScript)，大家有问题可以在本项目issues。也可以前往原项目处issues。本项目后期可能会和原项目走向不同的发展方向，但唯一可以保证的是，会持续不断地更新~

## Tips

使用油猴脚本需要首先安装`GreaseMonkey/TamperMonkey`扩展。

## Release

如果需要从源码构建脚本与扩展，请使用`pnpm`安装依赖，如果不需要这步操作，可以直接在上方表格点击安装按钮即可安装打包好的脚本与扩展。版本库中`dist`为脚本打包目录，其中仅`copy`、`site-director`、`copy-currency`脚本需`rollup`打包使用，其他脚本直接安装即可。浏览器扩展的打包位置为各自`monorepo package`下的`build`目录，调试开发过程需要主动指定浏览器加载目标位置。

```bash
$ pnpm install
$ pnpm run build
$ pnpm run build:force-copy
$ pnpm run build:force-copy:gecko
```

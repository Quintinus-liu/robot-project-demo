# 机器人视频素材展示

这是一个可直接部署到 GitHub Pages 的静态展示页，入口文件是 `index.html`。

## 本地预览

直接双击 `index.html` 即可在浏览器中预览。也可以在本目录启动任意静态服务器。

## 上传到 GitHub

```powershell
git init
git lfs install
git add .
git commit -m "Add robot video showcase"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

在 GitHub 仓库里打开 `Settings` -> `Pages`，选择 `Deploy from a branch`，分支选 `main`，目录选 `/root`。

## 文件体积提示

`宇树g1视频素材/视频1.mp4` 和 `宇树g1视频素材/视频2.mp4` 超过 GitHub 普通文件 100MB 限制，已在 `.gitignore` 中排除，没有上传到仓库。

要让线上页面播放这两个大视频，需要先把它们压缩到 100MB 以下再普通提交，或上传到 GitHub Releases、对象存储、网盘直链等外部地址，然后把 `script.js` 里的对应 `src` 改成外链。其他小于 100MB 的视频可以直接随仓库发布。

压缩包和 PPTX 没有被网页使用，已在 `.gitignore` 中排除，避免重复上传。

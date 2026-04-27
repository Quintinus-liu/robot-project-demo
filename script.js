const videos = [
  {
    title: "双手抓水果",
    group: "乐聚机器人",
    key: "leju",
    src: "",
    size: "74.8 MB",
    note: "该视频体积较大，当前线上版本待补传或改为外链。"
  },
  {
    title: "强化学习走路 1",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/强化学习走路1.mp4",
    size: "2.4 MB"
  },
  {
    title: "强化学习走路 2",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/强化学习走路2.mp4",
    size: "0.8 MB"
  },
  {
    title: "抓拐杖",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/抓拐杖.mp4",
    size: "1.1 MB"
  },
  {
    title: "抓桃子",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/抓桃子.mp4",
    size: "3.4 MB"
  },
  {
    title: "抓梨子",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/抓梨子.mp4",
    size: "2.3 MB"
  },
  {
    title: "抓橘子",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/抓橘子.mp4",
    size: "2.1 MB"
  },
  {
    title: "抓瓶子",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/抓瓶子.mp4",
    size: "0.7 MB"
  },
  {
    title: "抓芒果",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/抓芒果.mp4",
    size: "2.9 MB"
  },
  {
    title: "抓香蕉",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/抓香蕉.mp4",
    size: "2.1 MB"
  },
  {
    title: "综合演示长视频",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/长视频.mp4",
    size: "38.0 MB"
  },
  {
    title: "AEG Bot 家居整理",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "",
    size: "61.3 MB",
    note: "该视频体积较大，当前线上版本待补传或改为外链。"
  },
  {
    title: "抓取盆",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/grasp_basin.mp4",
    size: "2.4 MB"
  },
  {
    title: "抓取易拉罐",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/grasp_can.mp4",
    size: "1.6 MB"
  },
  {
    title: "抓取黏土",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/grasp_clay.mp4",
    size: "1.5 MB"
  },
  {
    title: "抓取杯子",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/grasp_cup.mp4",
    size: "2.1 MB"
  },
  {
    title: "抓取颈部模型",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/grasp_neck.mp4",
    size: "1.9 MB"
  },
  {
    title: "抓取纸巾",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/grasp_tissue.mp4",
    size: "2.3 MB"
  },
  {
    title: "抓取 UM 物体",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/grasp_um.mp4",
    size: "2.0 MB"
  },
  {
    title: "多目标抓取",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/multi_obj_grasp.mp4",
    size: "4.4 MB"
  },
  {
    title: "钢琴交互演示",
    group: "湘江智伴",
    key: "xiangjiang",
    src: "湘江智伴视频材料/video_piano_2.mp4",
    size: "19.5 MB"
  },
  {
    title: "宇树 G1 演示 1",
    group: "宇树 G1",
    key: "unitree",
    src: "",
    size: "115.6 MB",
    note: "原视频超过 GitHub 100MB 单文件限制，需压缩后上传或改为外链。"
  },
  {
    title: "宇树 G1 演示 2",
    group: "宇树 G1",
    key: "unitree",
    src: "",
    size: "121.0 MB",
    note: "原视频超过 GitHub 100MB 单文件限制，需压缩后上传或改为外链。"
  },
  {
    title: "宇树 G1 片段 A",
    group: "宇树 G1",
    key: "unitree",
    src: "宇树g1视频素材/9d3ccda20958659475eff1478a1f6e3d.mp4",
    size: "1.9 MB"
  },
  {
    title: "宇树 G1 片段 B",
    group: "宇树 G1",
    key: "unitree",
    src: "宇树g1视频素材/5be8c4e03cd04c7b020866b4d231f7ab.mp4",
    size: "0.5 MB"
  }
];

const gallery = document.querySelector("#gallery");
const searchInput = document.querySelector("#searchInput");
const tabs = document.querySelectorAll(".tab");
const videoCount = document.querySelector("#videoCount");
const dialog = document.querySelector("#videoDialog");
const dialogVideo = document.querySelector("#dialogVideo");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogGroup = document.querySelector("#dialogGroup");
const closeButton = document.querySelector(".close-button");

let activeFilter = "all";

function tagClass(key) {
  if (key === "unitree") return "unitree";
  if (key === "xiangjiang") return "xiangjiang";
  if (key === "leju") return "leju";
  return "";
}

function renderGallery() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = videos.filter((video) => {
    const matchesFilter = activeFilter === "all" || video.key === activeFilter;
    const matchesSearch = `${video.title} ${video.group}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  videoCount.textContent = videos.length;

  if (!filtered.length) {
    gallery.innerHTML = '<p class="empty">没有找到匹配的视频素材。</p>';
    return;
  }

  gallery.innerHTML = filtered
    .map((video, index) => `
      <article class="video-card ${video.key}-card">
        <div class="media-frame">
          ${video.src
            ? `<video src="${video.src}" muted playsinline preload="metadata"></video>`
            : `<div class="video-placeholder">待压缩或外链</div>`}
        </div>
        <div class="card-body">
          <div class="tag-row">
            <span class="group-tag ${tagClass(video.key)}">${video.group}</span>
            <span>${video.size}</span>
          </div>
          <h2 class="card-title">${video.title}</h2>
          ${video.note ? `<p class="card-note">${video.note}</p>` : ""}
          <button class="open-button" type="button" data-index="${videos.indexOf(video)}" ${video.src ? "" : "disabled"}>播放视频</button>
        </div>
      </article>
    `)
    .join("");
}

function openVideo(video) {
  if (!video.src) return;
  dialogVideo.src = video.src;
  dialogTitle.textContent = video.title;
  dialogGroup.textContent = `${video.group} · ${video.size}`;
  dialog.showModal();
  dialogVideo.play().catch(() => {});
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    activeFilter = tab.dataset.filter;
    renderGallery();
  });
});

searchInput.addEventListener("input", renderGallery);

gallery.addEventListener("click", (event) => {
  const button = event.target.closest(".open-button");
  if (!button) return;
  openVideo(videos[Number(button.dataset.index)]);
});

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("close", () => {
  dialogVideo.pause();
  dialogVideo.removeAttribute("src");
  dialogVideo.load();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

renderGallery();

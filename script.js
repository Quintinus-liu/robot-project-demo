const videos = [
  {
    title: "双手抓水果",
    group: "乐聚机器人",
    key: "leju",
    src: "乐聚机器人视频素材/双手抓水果.mp4",
    size: "74.8 MB"
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
    src: "湘江智伴视频材料/aeg_bot_rearrangement.mp4",
    size: "61.3 MB"
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
    src: "宇树g1视频素材/视频1.mp4",
    size: "115.6 MB"
  },
  {
    title: "宇树 G1 演示 2",
    group: "宇树 G1",
    key: "unitree",
    src: "宇树g1视频素材/视频2.mp4",
    size: "121.0 MB"
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

const projects = [
  {
    key: "xiangjiang",
    number: "Project 01",
    period: "2024.08 - 2024.12",
    category: "居家服务机器人",
    name: "湘江智伴自研机器人",
    description: "围绕居家服务场景展开，覆盖多目标抓取、家居整理、钢琴交互等任务，突出环境理解与服务执行。"
  },
  {
    key: "leju",
    number: "Project 02",
    period: "2025.07 - 2025.11",
    category: "陪护与安全监护机器人",
    name: "乐聚机器人",
    description: "聚焦双臂抓取、强化学习行走与多类水果物体操作，体现机器人在精细操作和运动控制上的综合能力。"
  },
  {
    key: "unitree",
    number: "Project 03",
    period: "2025.11 - 2026.04",
    category: "人形机器人平台",
    name: "宇树 G1",
    description: "展示人形机器人本体动作与运动表现，作为项目中具身智能平台能力的补充展示。"
  }
];

const gallery = document.querySelector("#gallery");
const dialog = document.querySelector("#videoDialog");
const dialogVideo = document.querySelector("#dialogVideo");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogGroup = document.querySelector("#dialogGroup");
const closeButton = document.querySelector(".close-button");
const imageDialog = document.querySelector("#imageDialog");
const dialogImage = document.querySelector("#dialogImage");
const imageCloseButton = document.querySelector(".image-close-button");
const activityImages = document.querySelectorAll(".activity-grid img");

function tagClass(key) {
  if (key === "unitree") return "unitree";
  if (key === "xiangjiang") return "xiangjiang";
  if (key === "leju") return "leju";
  return "";
}

function renderGallery() {
  const visibleProjects = projects.map((project) => ({
    ...project,
    videos: videos.filter((video) => video.key === project.key)
  }));

  if (!visibleProjects.length) {
    gallery.innerHTML = '<p class="empty">没有找到匹配的视频素材。</p>';
    return;
  }

  gallery.innerHTML = visibleProjects
    .map((project) => `
      <section class="project-section ${project.key}-section">
        <div class="project-heading">
          <div>
            <p class="project-meta">${project.number} · ${project.period} · ${project.category}</p>
            <h2>${project.name}</h2>
          </div>
          <p class="project-description">${project.description}</p>
        </div>
        <h3 class="video-label">项目视频</h3>
        <div class="project-videos ${project.key}-videos">
          ${project.videos.map((video) => renderVideoCard(video)).join("")}
        </div>
      </section>
    `)
    .join("");
}

function renderVideoCard(video) {
  return `
    <article class="video-card ${video.key}-card ${video.src ? "" : "is-unavailable"}" data-index="${videos.indexOf(video)}">
      <div class="media-frame">
        ${video.src
          ? `
            <video src="${video.src}" controls playsinline preload="metadata"></video>
            <button class="expand-button" type="button" aria-label="放大播放" title="放大播放" data-index="${videos.indexOf(video)}">⛶</button>
          `
          : `<div class="video-placeholder">待压缩或外链</div>`}
      </div>
      <div class="card-body">
        <h2 class="card-title">${video.title}</h2>
        ${video.note ? `<p class="card-note">${video.note}</p>` : ""}
      </div>
    </article>
  `;
}

function openVideo(video) {
  if (!video.src) return;
  dialogVideo.src = video.src;
  dialogTitle.textContent = video.title;
  dialogGroup.textContent = `${video.group} · ${video.size}`;
  dialog.showModal();
  dialogVideo.play().catch(() => {});
}

gallery.addEventListener("click", (event) => {
  const button = event.target.closest(".expand-button");
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

activityImages.forEach((image) => {
  image.addEventListener("click", () => {
    openImage(image);
  });
});

function openImage(image) {
  dialogImage.src = image.src;
  dialogImage.alt = image.alt;
  imageDialog.showModal();
}

imageCloseButton.addEventListener("click", () => imageDialog.close());

imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

imageDialog.addEventListener("close", () => {
  dialogImage.removeAttribute("src");
  dialogImage.removeAttribute("alt");
});

renderGallery();

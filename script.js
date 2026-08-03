const projects = [
  {
    key: "home-service",
    number: "01",
    eyebrow: "Home Service Robotics",
    name: "居家服务与智能陪伴机器人",
    summary: "面向家庭养老陪护场景，构建从环境感知、目标定位到抓取、交互与安全守护的闭环能力。湘江智伴侧重服务任务验证，乐聚人形机器人侧重双臂操作、轮椅辅助与具身策略落地。",
    highlights: ["RGB-D 感知与开放词汇目标识别", "7DoF 抓取位姿生成与路径求解", "轮椅辅助、跌倒检测与语音陪护"],
    result: "完成多类居家任务演示，覆盖物品整理、多目标抓取、轮椅辅助与双臂精细操作。",
    groups: [
      { label: "湘江智伴 · 服务任务", videos: [
        ["家居整理", "aeg_bot_rearrangement.mp4", "面向居家环境的自主整理任务"],
        ["抓取面盆", "grasp_basin.mp4", "大尺寸日用品抓取"],
        ["抓取易拉罐", "grasp_can.mp4", "日常物品稳定抓取"],
        ["多目标抓取", "multi_obj_grasp.mp4", "连续目标识别与抓取"],
        ["钢琴交互", "video_piano_2.mp4", "人机互动与任务执行展示"]
      ]},
      { label: "乐聚机器人 · 操作与辅助", videos: [
        ["双手抓水果", "双手抓水果.mp4", "双臂协同抓取任务"],
        ["抓拐杖", "抓拐杖.mp4", "面向陪护物品的精细抓取，完成“数据采集-数据标注-模型训练-实机部署”全链路验证"],
        ["抓瓶子", "抓瓶子.mp4", "视觉引导下的目标操作"],
        ["推轮椅", "推轮椅_web.mp4", "轮椅辅助与稳定随动"],
        ["跌倒检测", "跌倒检测.mp4", "基于人体骨架时序特征、目标检测并设计语义确认机制，实现跌倒检测"]
      ]}
    ]
  },
  {
    key: "motion-learning",
    number: "02",
    eyebrow: "Motion Retargeting & Imitation Learning",
    name: "人形机器人运动重定向与模仿学习",
    summary: "构建“动作采集 - 动作重定向 - 策略训练 - 真机部署”闭环，处理人体与机器人结构差异、接触约束和 Sim2Real 迁移带来的执行稳定性问题。",
    highlights: ["GMR 动作重定向与轨迹修正", "关节极限、速度与足端接触约束", "BeyondMimic 策略训练与 G1 真机部署"],
    result: "完成原始动作数据处理、重定向、策略训练、仿真验证和真机部署链路。",
    groups: [
      { label: "宇树 G1 · 真机运动展示", videos: [
        ["G1 运动展示 1", "视频1.mp4", "人形机器人真机动作表现"],
        ["后旋踢", "后旋踢_web.mp4", "全身协调与快速踢击动作控制"],
        ["上台阶", "上台阶_web.mp4", "面向复杂地形的步态与平衡控制"],
        ["G1 运动展示 4", "视频4_web_v2.mp4", "验证“光学动捕数采-动作提取-动作重定向-策略训练-实机部署”全链路"]
      ]}
    ]
  },
  {
    key: "teleoperation",
    number: "03",
    eyebrow: "Whole-body Teleoperation",
    name: "人形机器人混合遥操作与全身平衡控制",
    summary: "面向上半身遥操作、下半身自主平衡场景，搭建动作捕捉遥操、强化学习平衡、仿真验证与真机部署的一体化流程。",
    highlights: ["Noitom 惯性动捕与 14DoF 手臂 retarget", "IsaacLab 下肢强化学习平衡策略", "MuJoCo 仿真与真机控制链路"],
    result: "实现动捕动作采集与回放，并完成上半身实时跟随、下半身行走与转向控制的联调验证。",
    groups: [
      { label: "动捕遥操 · 动作采集与跟随", videos: [
        ["动捕遥操作展示 1", "0d221b98d882a49b6e94600c6e9a7ee8.mp4", "上半身动作跟随与遥操作，下半身强化学习保持平衡和移动"],
        ["动捕遥操作展示 2", "762c61e68603bfede644d5968038b084.mp4", "遥操灵巧手"]
      ]}
    ]
  },
  {
    key: "imitation-vla",
    number: "04",
    eyebrow: "Imitation Learning & Multimodal Policy",
    name: "机器人模仿学习与多模态操作",
    summary: "围绕机器人操作任务，结合松灵机器人 ACT 行为克隆训练与 Pi0.5 多模态策略演示，展示从示范数据、策略学习到真实设备执行的完整链路。",
    highlights: ["ACT 示范数据采集与行为克隆", "Pi0.5 多模态感知与动作生成", "真实机器人策略部署与任务执行"],
    result: "完成 ACT 与 Pi0.5 相关视频展示，覆盖模仿学习训练和机器人操作策略执行。",
    groups: [
      { label: "ACT 与 Pi0.5 · 策略训练与执行", videos: [
        ["松灵机器人 ACT 训练演示", "da80d1af77617ff490a48593b47e4521.mp4", "基于 ACT 采集示范数据并训练机器人完成目标动作，展示策略在真实设备上的执行效果", "松灵机器人视频素材"],
        ["Pi0.5 操作策略演示", "47c0e57f7ae999f9063a1cd12e29247f_raw.mp4", "展示 Pi0.5 相关多模态策略在机器人操作任务中的执行过程", "pi0.5"]
      ]}
    ]
  }
];

const folderByProject = { "home-service": "", "motion-learning": "宇树g1视频素材", teleoperation: "动捕遥操", "imitation-vla": "" };
const homeFolders = { "湘江智伴 · 服务任务": "湘江智伴视频材料", "乐聚机器人 · 操作与辅助": "乐聚机器人视频素材" };
const gallery = document.querySelector("#gallery");
const dialog = document.querySelector("#videoDialog");
const dialogVideo = document.querySelector("#dialogVideo");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogGroup = document.querySelector("#dialogGroup");
const dialogNote = document.querySelector("#dialogNote");
const imageDialog = document.querySelector("#imageDialog");
const dialogImage = document.querySelector("#dialogImage");

function videoPath(project, group, filename, folderName) {
  const folder = folderName || group.folder || homeFolders[group.label] || folderByProject[project.key];
  return `${folder}/${filename}`;
}

function renderVideo(project, group, video) {
  const [title, filename, note, folderName] = video;
  const src = videoPath(project, group, filename, folderName);
  return `<article class="video-card">
    <div class="media-frame"><video src="${encodeURI(src)}" controls muted playsinline preload="metadata"></video><button class="expand-button" type="button" aria-label="放大播放 ${title}" title="放大播放" data-src="${encodeURI(src)}" data-title="${title}" data-group="${group.label}" data-note="${note}">&#x26F6;</button></div>
    <div class="card-body"><h4>${title}</h4><p>${note}</p></div>
  </article>`;
}

function renderProject(project) {
  return `<section class="project-section ${project.key}">
    <div class="project-heading"><div class="project-title-block"><div class="project-kicker"><span class="project-index">项目 ${project.number}</span><p class="eyebrow">${project.eyebrow}</p></div><h2>${project.name}</h2></div><p class="project-summary">${project.summary}</p></div>
    <div class="project-details"><ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul><p><strong>项目成果</strong>${project.result}</p></div>
    ${project.groups.map((group) => `<section class="video-group"><h3>${group.label}</h3><div class="project-videos">${group.videos.map((video) => renderVideo(project, group, video)).join("")}</div></section>`).join("")}
  </section>`;
}

gallery.innerHTML = projects.map(renderProject).join("");

function enforceMute(video) {
  video.muted = true;
  video.addEventListener("volumechange", () => {
    if (!video.muted) video.muted = true;
  });
}

document.querySelectorAll("video").forEach(enforceMute);

gallery.addEventListener("click", (event) => {
  const button = event.target.closest(".expand-button");
  if (!button) return;
  dialogVideo.src = button.dataset.src;
  dialogTitle.textContent = button.dataset.title;
  dialogGroup.textContent = button.dataset.group;
  dialogNote.textContent = button.dataset.note;
  dialogVideo.muted = true;
  dialog.showModal();
  dialogVideo.play().catch(() => {});
});

document.querySelector(".close-button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => { dialogVideo.pause(); dialogVideo.removeAttribute("src"); dialogVideo.load(); });
document.querySelectorAll(".activity-grid img").forEach((image) => image.addEventListener("click", () => {
  dialogImage.src = image.src;
  dialogImage.alt = image.alt;
  imageDialog.showModal();
}));
document.querySelector(".image-close-button").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", (event) => { if (event.target === imageDialog) imageDialog.close(); });
imageDialog.addEventListener("close", () => { dialogImage.removeAttribute("src"); dialogImage.removeAttribute("alt"); });

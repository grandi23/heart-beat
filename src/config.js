export default {
  /**
   * ====================================
   *            站点功能【必需】
   * ====================================
   */

  /**
   * 站点标题
   */
  title: '蝉時雨',
  subtitle: '蝉鸣如雨，花宵道中',

  /**
   * Github Issues 配置【文章、说说、书单、友链】, Github Issues api: https://developer.github.com/v3/issues/
   */
  // 博客仓库
  blog: 'https://api.github.com/repos/chanshiyucx/Blog',
  // token 从中间任意位置拆开成两部分，避免 github 代码检测失效
  pre: '0ad1a0539c5b96fd18fa',
  suf: 'aaafba9c7d1362a5746c',
  // 额外的限制参数【作者和状态】
  open: 'creator=chanshiyucx&state=open',
  closed: 'creator=chanshiyucx&state=closed',

  /**
   * Gittalk 配置【评论功能】，详细文档参见：https://github.com/gitalk/gitalk
   */
  gitalkOption: {
    clientID: '864b1c2cbc4e4aad9ed8',
    clientSecret: '6ca16373efa03347e11a96ff92e355c5cea189bb',
    repo: 'Comment',
    owner: 'chanshiyucx',
    admin: ['chanshiyucx'],
    distractionFreeMode: false // 是否开始无干扰模式【背景遮罩】
  },

  /**
   * leancloud 配置 【文章浏览次数】
   */
  leancloud: {
    appId: 'b6DWxsCOWuhurfp4YqbD5cDE-gzGzoHsz',
    appKey: 'h564RR5uVuJV5uSeP7oFTBye'
  },

  /**
   * 文章打赏
   */
  reward: [
    {
      type: '支付宝',
      qr: 'https://i.loli.net/2018/12/09/5c0cc4646388f.png'
    },
    {
      type: '微信',
      qr: 'https://i.loli.net/2018/12/09/5c0cc46309b68.png'
    }
  ],

  /**
   * ====================================
   *            页面配置【自定义】
   * ====================================
   */

  /**
   * 归档配置
   */
  archivesOption: {
    enableGitalk: false,
    qoute: '文章千古事，得失寸心知'
  },

  /**
   * 分类页面【与 Github Issues 的 Milestone 对应】
   */
  catsOption: {
    enableGitalk: false,
    qoute: '行云流水，落笔生花',
    list: [
      {
        name: '事件簿', // name 和 Milestone 必须一致
        text: '今天又是和平的一天~',
        img: 'https://i.loli.net/2018/12/09/5c0cc2e59a322.jpg'
      },
      {
        name: '技术向',
        text: '技术什么的真是不懂啦',
        img: 'https://i.loli.net/2018/12/09/5c0cc2e8305b1.jpg'
      },
      {
        name: '笔记本',
        text: '诶！？我刚刚想说什么来着',
        img: 'https://i.loli.net/2018/12/09/5c0cc2eabee8e.jpg'
      },
      {
        name: '代码库',
        text: 'Write the code, Change the World',
        img: 'https://i.loli.net/2018/12/09/5c0cc2ed1ef66.jpg'
      },
      {
        name: '分享境',
        text: '偷偷给你看点东西',
        img: 'https://i.loli.net/2018/12/09/5c0cc2efb6814.jpg'
      },
      {
        name: '自言语',
        text: '欲言又止，止言又欲',
        img: 'https://i.loli.net/2018/12/09/5c0cc2f1f254f.jpg'
      }
    ]
  },

  /**
   * 标签配置
   */
  tagsOption: {
    enableGitalk: false,
    qoute: '列卒周匝，星罗云布'
  },

  /**
   * 说说页面
   */
  moodOption: {
    enableGitalk: true,
    qoute: '欲言又止，止言又欲'
  },

  /**
   * 书单页面
   */
  booksOption: {
    enableGitalk: true,
    qoute: '吾生也有涯，而知也无涯'
  },

  /**
   * 友链页面
   */
  friendsOption: {
    enableGitalk: true,
    qoute: '青青子衿，悠悠我心'
  },

  /**
   * 关于页面
   */
  aboutOption: {
    enableGitalk: true,
    qoute: '蝉鸣如雨，花宵道中',
    avatar: 'https://i.loli.net/2018/12/09/5c0cc2b4e0195.png',
    info: [
      // 个人介绍
      {
        icon: 'user',
        text: '蝉時雨'
      },
      {
        icon: 'envira',
        text: '蝉鸣如雨，花宵道中'
      },
      {
        icon: 'university',
        text: 'University of Electronic Science and Technology of China (UESTC)'
      },
      {
        icon: 'graduation-cap',
        text: 'Communication&Information Engineering'
      }
    ],
    contact: [
      // 联系方式
      {
        icon: 'https://i.loli.net/2018/12/09/5c0cc5147e2e5.png',
        link:
          'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=5dTU19HQ3NXc1tSllJTLhoqI'
      },
      {
        icon: 'https://i.loli.net/2018/12/09/5c0cc516d9d5f.png',
        link: 'https://github.com/chanshiyucx'
      },
      {
        icon: 'https://i.loli.net/2018/12/09/5c0cc518dc4f4.png',
        link: 'https://www.zhihu.com/people/ichanshiyu/activities'
      },
      {
        icon: 'https://i.loli.net/2018/12/09/5c0cc51ae4f0c.png',
        link: 'https://music.163.com/#/user/home?id=103060582'
      }
    ]
  },

  /**
   * 动态背景 Backstretch
   * 配置参数详见： https://github.com/jquery-backstretch/jquery-backstretch
   */
  backstretch: {
    bgImg: [
      'https://i.loli.net/2018/12/09/5c0cc0f409d63.jpg',
      'https://i.loli.net/2018/12/09/5c0cc0faef46c.jpg',
      'https://i.loli.net/2018/12/09/5c0cc1010f9e5.jpg',
      'https://i.loli.net/2018/12/09/5c0cc108c3b5c.jpg',
      'https://i.loli.net/2018/12/09/5c0cc10d3d771.jpg',
      'https://i.loli.net/2018/12/09/5c0cc111f30a3.jpg',
      'https://i.loli.net/2018/12/09/5c0cc1159ea42.jpg',
      'https://i.loli.net/2018/12/09/5c0cc11b0691b.jpg',
      'https://i.loli.net/2018/12/09/5c0cc12115c2e.jpg',
      'https://i.loli.net/2018/12/09/5c0cc1268cd42.jpg'
    ],
    bgOption: {
      duration: 10000,
      fade: 1000,
      animateFirst: false
    }
  },

  /**
   * 音乐播放器, 在 skPlayer 基础上修改，详见： http://www.chengfeilong.com/skPlayer/
   */
  skPlayerOption: {
    bgImg: 'https://i.loli.net/2018/12/09/5c0cc2b905841.png',
    autoplay: false, // 自动播放, 默认为 false, true/false
    listshow: true, // 列表显示, 默认为 true, true/false
    mode: 'listloop', // 循环模式, 默认为 'listloop', 【'listloop', 列表循环; 'singleloop', 单曲循环】
    source: [
      // 自定义歌单
      {
        name: 'うたかたの风と蝉时雨',
        author: 'Little Planet',
        src: 'https://share.dmca.gripe/CNa34GbCpGlVSKQm.mp3',
        cover: 'https://i.loli.net/2018/12/09/5c0cc3ca1081b.jpg'
      },
      {
        name: '春の凑に ~ Lost shiners',
        author: '莲弾奏结界',
        src: 'https://link.hhtjim.com/163/714830.mp3',
        cover: 'https://i.loli.net/2018/12/09/5c0cc3cc582ce.jpg'
      },
      {
        name: '夏阳炎',
        author: '天威梦方',
        src: 'https://share.dmca.gripe/j1tVdcq1NXbeFC2w.mp3',
        cover: 'https://i.loli.net/2018/12/09/5c0cc3cee372a.jpg'
      },
      {
        name: '秋风のとおり道',
        author: '风神华伝',
        src: 'https://link.hhtjim.com/163/766272.mp3',
        cover: 'https://i.loli.net/2018/12/09/5c0cc3d13844a.jpg'
      },
      {
        name: '冬のわすれもの',
        author: 'ハルノカゼ',
        src: 'https://link.hhtjim.com/163/729461.mp3',
        cover: 'https://i.loli.net/2018/12/09/5c0cc3d36349c.jpg'
      }
    ]
  },

  /**
   * 加载动画
   */
  loadingImg: 'https://i.loli.net/2018/12/09/5c0cc2b04c976.gif',

  /**
   * 主题配色，目前主要用于文章、说说、关于等卡片配色，以后可能会有其他用途
   * 推荐一个好看的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#DC9FB4', // 撫子
    '#E16B8C', // 紅梅
    '#3A8FB7', // 千草
    '#8F77B5', // 紫苑
    '#6A4C9C', // 桔梗
    '#60373E', // 紫鳶
    '#6F3381', // 菖蒲
    '#005CAF', // 瑠璃
    '#855B32', // 煎茶
    '#D05A6E', // 今様
    '#E79460', // 洗柿
    '#91AD70', // 柳染
    '#516E41', // 青丹
    '#1B813E', // 常磐
    '#33A6B8', // 浅葱
    '#2EA9DF', // 露草
    '#E03C8A' // 躑躅
  ],

  /**
   * 文章封面配图
   */
  covers: [
    'https://i.loli.net/2018/12/09/5c0cc1bbbb6d0.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1bf5191e.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1c2ea2e4.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1c6e89f2.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1cb11699.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1d069835.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1d4c3000.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1d915ab6.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1dd58fb2.jpg',
    'https://i.loli.net/2018/12/09/5c0cc1e157dc6.jpg',

    'https://i.loli.net/2018/12/09/5c0cc23a8d17c.jpg',
    'https://i.loli.net/2018/12/09/5c0cc23d0edde.jpg',
    'https://i.loli.net/2018/12/09/5c0cc240c44b4.jpg',
    'https://i.loli.net/2018/12/09/5c0cc2447b075.jpg',
    'https://i.loli.net/2018/12/09/5c0cc2487465c.jpg',
    'https://i.loli.net/2018/12/09/5c0cc24e1809d.jpg',
    'https://i.loli.net/2018/12/09/5c0cc25263879.jpg',
    'https://i.loli.net/2018/12/09/5c0cc2575b058.jpg'
  ]
}

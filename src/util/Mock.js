/**
 * @file
 * @author
 **/
import Mock from 'mockjs';

Mock.setup({ timeout: '200-300' });
//登录验证地址
Mock.mock('/qaz/denglu', {
    status: 200,
    data: {
        login: 1,
    }
});
//初始化加载地址
Mock.mock('http://localhost:3000/ssy', {
    status: 200,
    data: [
        {
            img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            text: '技术',
            workName: ['java', 'php', 'WEB前端', '数据挖掘', 'C++', 'python', 'Android', 'ios']
        }, {
            img: 'http://www.zhipin.com/v2/h5/wap/images/product.png',
            text: '产品',
            workName: ['java', 'php', 'WEB前端', '数据挖掘', 'C++', 'python', 'Android', 'ios']
        }, {
            img: 'http://www.zhipin.com/v2/h5/wap/images/designer.png',
            text: '设计',
            workName: ['java', 'php', 'WEB前端', '数据挖掘', 'C++', 'python', 'Android', 'ios']
        }, {
            img: 'http://www.zhipin.com/v2/h5/wap/images/market.png',
            text: '市场',
            workName: ['java', 'php', 'WEB前端', '数据挖掘', 'C++', 'python', 'Android', 'ios']
        }, {
            img: 'http://www.zhipin.com/v2/h5/wap/images/operate.png',
            text: '运营',
            workName: ['java', 'php', 'WEB前端', '数据挖掘', 'C++', 'python', 'Android', 'ios']
        }, {
            img: 'http://www.zhipin.com/v2/h5/wap/images/senior.png',
            text: '只能/高级管理',
            workName: ['java', 'php', 'WEB前端', '数据挖掘', 'C++', 'python', 'Android', 'ios']
        }

    ]
});

//SearchHomePage

Mock.mock('http://localhost:3000/ssy?pageNumber=1&pageIndex=10&query=web', {
    status: 200,
    data: [
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address:'杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'JAVA',
            corporate_name: '杭州一名公司',
            company_address: '金华',
            job_wahes: '11K-17K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img.bosszhipin.com/beijin/mcs/bar/brand/899.jpg',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'PHP',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img.bosszhipin.com/beijin/mcs/bar/brand/260086.jpg',
            hr_name: '小红',
            hr_position: '人事专员'
        },
        {
            job_name: 'GO工程师',
            corporate_name: '杭州二名公司',
            company_address: '杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img.bosszhipin.com/beijin/mcs/chatphoto/20171125/caaec24ae4cc5f44c452c3e25dc854f0bfffc1d8f27bcace556df805d74863b8_s.jpg',
            hr_name: '小丽',
            hr_position: '人事专员'
        },
        {
            job_name: 'RUST',
            corporate_name: '杭州三名公司',
            company_address: '杭州',
            job_wahes: '16K-27K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '张小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img2.bosszhipin.com/mcs/chatphoto/20160309/399587a3e283bebd1deefac22f6e99c4612c816a11f2ec7593825aab96724622_s.jpg',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img.bosszhipin.com/beijin/mcs/bar/brand/567.jpg',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img.bosszhipin.com/beijin/mcs/bar/brand/81099.jpg',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img.bosszhipin.com/beijin/mcs/bar/brand/81099.jpg',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6K-7K',
            working_life: '3-5',
            education: '本科',
            hr_img: 'https://img.bosszhipin.com/beijin/mcs/chatphoto/20170614/8465c6a7467e7574571a64f7006627de5cc3147b9284ada1ca9616bb1aa7bf7a_s.jpg',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        }
    ]
});
Mock.mock('http://localhost:3000/ssy?pageNumber=2&pageIndex=20&query=web', {
    status: 200,
    data: [
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        },
        {
            job_name: 'web前端',
            corporate_name: '杭州一名公司',
            company_address: '杭州',
            job_wahes: '6-7',
            working_life: '3-5',
            education: '本科',
            hr_img: 'http://www.zhipin.com/v2/h5/wap/images/technology.png',
            hr_name: '黄小姐',
            hr_position: '人事专员'
        }
    ]
});


Mock.mock('/bloglist/2', {
    status: 2000,
    data: {
        totalNumber: 207,
        currentPage: 1,
        pageNumber: 18,
        blogList: [{ blogId: 13, title: 'first blog', titleImgUrl: './images/20ev2.jpg', introduce: '这是来自第二页的问候' },
        { blogId: 14, title: 'second blog', titleImgUrl: './images/123.PNG', introduce: '这是来自第二页的问候' },
        { blogId: 15, title: 'third blog', titleImgUrl: './images/321.jpg', introduce: '这是来自第二页的问候' },
        { blogId: 16, title: 'first blog', titleImgUrl: './images/20ev2.jpg', introduce: '这是来自第二页的问候' },
        { blogId: 17, title: 'second blog', titleImgUrl: './images/123.PNG', introduce: '这是来自第二页的问候' },
        { blogId: 18, title: 'third blog', titleImgUrl: './images/321.jpg', introduce: '这是来自第二页的问候' },
        { blogId: 19, title: 'first blog', titleImgUrl: './images/20ev2.jpg', introduce: '这是来自第二页的问候' },
        { blogId: 20, title: 'second blog', titleImgUrl: './images/123.PNG', introduce: '这是来自第二页的问候' },
        { blogId: 21, title: 'third blog', titleImgUrl: './images/321.jpg', introduce: '这是来自第二页的问候' },
        { blogId: 22, title: 'first blog', titleImgUrl: './images/20ev2.jpg', introduce: '这是来自第二页的问候' },
        { blogId: 23, title: 'second blog', titleImgUrl: './images/123.PNG', introduce: '这是来自第二页的问候' },
        { blogId: 24, title: 'first blog', titleImgUrl: './images/20ev2.jpg', introduce: '这是来自第二页的问候' },]
    }
});

Mock.mock('/qaz/DetailsArticle?', {
    status: 2000,
    data: {
        blog: {
            blogId: 1,
            title: '滕王阁序',
            type: '杂文',
            tag: ['王勃', '唐朝', '名篇佳作'],
            content: '豫章故郡， 洪都新府。 星分翼轸， 地接衡庐。 襟三江而带五湖， 控蛮荆而引瓯越。 物华天宝， 龙光射牛斗之墟； 人杰地灵， 徐孺下陈蕃之榻。 雄州雾列， 俊采星驰。 台隍枕夷夏之交， 宾主尽东南之美。 都督阎公之雅望， 棨戟遥临； 宇文新州之懿范， 襜帷暂驻。 十旬休假， 胜友如云； 千里逢迎， 高朋满座。 腾蛟起凤， 孟学士之词宗； 紫电青霜， 王将军之武库。 家君作宰， 路出名区； 童子何知， 躬逢胜饯。\n' +
                '时维九月， 序属三秋。 潦水尽而寒潭清， 烟光凝而暮山紫。 俨骖騑于上路， 访风景于崇阿； 临帝子之长洲， 得天人之旧馆。 层峦耸翠， 上出重霄； 飞阁流丹， 下临无地。 鹤汀凫渚， 穷岛屿之萦回； 桂殿兰宫， 即冈峦之体势。\n' +
                '披绣闼， 俯雕甍， 山原旷其盈视， 川泽纡其骇瞩。 闾阎扑地， 钟鸣鼎食之家； 舸舰迷津， 青雀黄龙之舳。 云销雨霁， 彩彻区明。 落霞与孤鹜齐飞， 秋水共长天一色。 渔舟唱晚， 响穷彭蠡之滨； 雁阵惊寒， 声断衡阳之浦。\n' +
                '遥襟甫畅， 逸兴遄飞。 爽籁发而清风生， 纤歌凝而白云遏。 睢园绿竹， 气凌彭泽之樽； 邺水朱华， 光照临川之笔。 四美具， 二难并。 穷睇眄于中天， 极娱游于暇日。 天高地迥， 觉宇宙之无穷； 兴尽悲来， 识盈虚之有数。 望长安于日下， 目吴会于云间。 地势极而南溟深， 天柱高而北辰远。 关山难越， 谁悲失路之人？ 萍水相逢， 尽是他乡之客。 怀帝阍而不见， 奉宣室以何年？\n' +
                '嗟乎！ 时运不齐， 命途多舛。 冯唐易老， 李广难封。 屈贾谊于长沙， 非无圣主； 窜梁鸿于海曲， 岂乏明时？ 所赖君子见机， 达人知命。 老当益壮， 宁移白首之心？ 穷且益坚， 不坠青云之志。 酌贪泉而觉爽， 处涸辙以犹欢。 北海虽赊， 扶摇可接； 东隅已逝， 桑榆非晚。 孟尝高洁， 空余报国之情； 阮籍猖狂， 岂效穷途之哭！\n' +
                '勃， 三尺微命， 一介书生。 无路请缨， 等终军之弱冠； 有怀投笔， 慕宗悫之长风。 舍簪笏于百龄， 奉晨昏于万里。 非谢家之宝树， 接孟氏之芳邻。 他日趋庭， 叨陪鲤对； 今兹捧袂， 喜托龙门。 杨意不逢， 抚凌云而自惜； 钟期既遇， 奏流水以何惭？\n' +
                '呜乎！ 胜地不常， 盛筵难再； 兰亭已矣， 梓泽丘墟。 临别赠言， 幸承恩于伟饯； 登高作赋， 是所望于群公。 敢竭鄙怀， 恭疏短引； 一言均赋， 四韵俱成。 请洒潘江， 各倾陆海云尔：\n' +
                '滕王高阁临江渚， 佩玉鸣鸾罢歌舞。\n' +
                '画栋朝飞南浦云， 珠帘暮卷西山雨。\n' +
                '闲云潭影日悠悠， 物换星移几度秋。\n' +
                '阁中帝子今何在？ 槛外长江空自流。',
            titleImgUrl: './images/1.PNG'
        }
    }
});


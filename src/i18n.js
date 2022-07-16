import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en_us',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en_us: {
                translation: {
                    description: {
                        name: 'Jiaxiu Li ( Leo )',
                        intro: 'Software Engineer & Music Lover',
                        about: 'About',
                        edu: 'Education',
                        work: 'Work Experience',
                        project: 'Projects',
                        other_con: 'Other',
                        about_hi: 'Hi there, I am Leo.',
                        about_welcome: 'Welcome to my personal website.',
                        about_Iam: 'I am :',
                        about_graduate: 'A Master graduate from University of Windsor.',
                        about_current: 'Currently a front-end developer with 2 years work exprience.',
                        about_learn: 'Currently learning back-end development skills about nodeJS and GraphQL.',
                        about_deploy: 'Trying to complete a full-stack web application and deploy it on AWS.',
                        about_passion: 'Passionate to continuously explor new development skills and have fun from it.',
                        about_music: 'A music lover who plays mutiple musical instruments and was a drummer in a band.',
                        about_techStack: 'Tech Stack :',
                        CSSpre: 'CSS pre-processor',
                        database: 'Database',
                        other_lib: 'Other Tools & Libs',
                        program_lang: 'Programming Languages',
                        plat_editor: 'Platforms & Editors',
                        // about_content: `Hi there, My name is Jiaxiu Li. Welcome to my personal website. I am currently a front-end
                        // developer with 1 year+ work exprience and trying to learn full-stack skills and build full-stack projects on AWS. 
                        // There are two things that make me enjoyable, programming and playing music,
                        // one is my career and the other one is the interest in my life. I think I am lucky because I have passion
                        // and love in what I do as a job.`,
                        hut_name: 'Hunan University of Technology',
                        hut_loc: 'Hunan Province, China',
                        hut_major : 'Internet of Things',
                        uw_name: 'University of Windsor',
                        uw_loc: 'Ontario, Canada',
                        uw_major : 'Applied Computing',
                        edu_undergraduate: 'Undergraduate',
                        edu_postgraduate: 'Postgraduate',
                        undergraduate_p1: `During my undergraduate years, I majored in IoT(Internet of Things) Engineering, which is a combination of 
                        software and hardware.`,
                        undergraduate_p2: `I attended lots of interesting experiments in the lab of our university, like let the curtains 
                        close or open automatically according to the intensity of the light.`,
                        undergraduate_p3: `Through these experiences, I found I am more 
                        interested in software development than hardware and started to realize the charm of data structures and
                        algorithms gradually.`,
                        undergraduate_p4: `So, I decided to get a further study in software development and I came to Canada to do this.`,
                        postgraduate_p1: `My major in Univeristy of Windsor was Applied Computing, which focuses on practical development 
                        techniques.`,
                        postgraduate_p2: `I did a 
                        lot of projects with my group in Univeristy of Windsor, my work was mainly about front-end part in these projects, I 
                        started to become interested in front-end and to learn front-end knowledge.`,
                        postgraduate_p3: `For 3 months, I completed a full stack web application using Django, which brought me a huge sense 
                        of achievement and is a proof of my strong learning ability.`,
                        postgraduate_p4: `That was the origin of my front-end development career in the future.`,
                        edu_core_course: 'Core Courses',
                        edu_story: 'My Story',
                        edu_c: 'POP Programming(C)',
                        edu_java: 'OOP Programming(Java)',
                        edu_dataStructure: 'Data Structure',
                        edu_network: 'Computer Networks',
                        edu_OS: 'Principles of Operating System',
                        edu_database: 'Database Theory',
                        edu_communication: 'Principle of Communication',
                        edu_chip: 'Mono-Chip Computers & Interface Technique',
                        edu_sensor: 'Fundamentals of Sensors & Application',
                        edu_algorithm: 'Advanced Algorithms',
                        edu_acc: 'Advanced Computing Concepts',
                        edu_adt: 'Advanced Database Topics',
                        edu_software: 'Advanced Software Eng. Topics',
                        edu_sysPro: 'Advanced Systems Programming',
                        edu_security: 'Networking and Data Security',
                        // postgraduate_p3: `I think front-end is an interface between the users and the back-end service, the quality of the front-end may directly 
                        // affect the user's impression of the overall software product.`,
                        // postgraduate_p4: `So high quality code writing and perfect interactive 
                        // experience is what I have been pursuing as a front-end developer.`,
                        // postgraduate_p5: `I've always believed that software development is 
                        // more like creating a work of art and every detail should be paid attention to.`,
                        fullTime: 'Permanent Full-time',
                        intern: 'Internship',
                        partTime: 'Part-time (remote)',
                        atPresent: 'at present',
                        atPresent_work: 'at present',
                        suspend: 'suspended',
                        work_content: `After I graduated from University of Windsor and got my Master's degree, I worked as a front-end engineer and I have been 
                        continuously learning development skills. Now, I am trying to develop a complete web application by my own 
                        out of my work, including both front-end and back-end and deploy it on a cloude server.
                        I believe that I will continue to explore technology and get happiness from it in the future, and continue to grow 
                        into a more mature software engineer.`,
                        company_name_li_auto: `Li Auto Inc.`,
                        frontendEng: 'Front end Engineer',
                        frontendDev: 'Front end Developer',
                        fullStackdDev: 'Full Stack Developer',
                        liAutoLoc: 'Beijing, China',
                        li_auto_intro: 'Li Auto Inc. is a leader in China’s new energy vehicle market. The Company designs, develops, manufactures, and sells premium smart electric vehicles. ',
                        li_auto_work_content: `In Li Auto, I worked in the department called "Energy Efficiency Engineering",
                        which aims to improve the efficiency of all software development departments in the company through technical means, as well as
                        responsible for the development of all internal management systems.`,
                        li_auto_work_content_item1: `Responsible for the development of internal management systems and debug REST APIs, independently in charge of front-end part of at least two projects that used by all employees (around 12,000) in whole company.`,
                        li_auto_work_content_item2: `Participated in the development of the exclusive UI components library for the department of Front-end Development, which improved development efficiency by 60% in UI building.`,
                        li_auto_work_content_item3: `Earned an E (exceptional) grade for the OKR evaluation in the 1st quarter of 2022.`,
                        company_name_yuanfudao: 'Beijing YuanLi Future Technology Co., LTD',
                        yuanfudao_intro: `Yuanfudao is the largest online live courseplatform servicing primary and secondary school students in China, with a paying userbase of over 1 million.`,
                        yuanfudao_work_content: `In Yuanfudao, my department was "user growth group", which develops all sorts of marketing campaigns
                        to promote Yuanfudao app and attract new users to purchase our online courses. "user growth group" was a core department in business of the company.`,
                        yuanfudao_content_item1: 'Responsible for developing to-C web pages of  a variety of marketing campaigns that faced to tens of thousands of customers directly.',
                        yuanfudao_content_item2: 'Optimized animations from .gif picture to flexible and reusable components.',
                        yuanfudao_content_item3: 'Resolved the problem of video full screen under some versions of Android environment by implementing a fake full screen behavior instead of the original behavior of the player.',
                        yuanfudao_content_item4: 'Did code review and unit tests to guarantee the quality of the code in every project.',
                        company_name_maple_data: 'Maple Data Strategy Inc.',
                        maple_data_loc: 'Toronto, ON, Canada',
                        maple_data_intro: 'Maple Data Strategy a leading IT Service and Training provider in Canada. Maple Data Strategy designs customized end to end business application solutions for on-premise, cloud and hybrid environments. ',
                        maple_data_work_content_p1: `In Sep 2020, I got an internship opportunity in Maple Data Strategy, which was an accelerator of my Front end skills learning, I learnt Vue.js and React.js. In
                        Jan 2021, I went back to China and kept working remotely in Maple Data Strategy.`,
                        maple_data_work_content_p2: ` In June 2021, I got my degree certificate from University of Windsor and
                        I decided to find a permanent full-time position of Front-end development. So I continued my work in Maple Data Strategy as a part-time job, around 20 hours pre week.`,
                        maple_data_content_item1: 'Participated in the development of commercial projects.',
                        maple_data_content_item2: 'Responsible for the development of a variety of charts for data visualization using e-charts.',
                        maple_data_content_item3: 'Leader of the charts-dev group of interns, responsible for allocating development tasks and code merging. ',
                        maple_data_content_item4: 'Learnt React.js and Vue.js at internship stage.',
                        introduction: 'Introduction',
                        highlights: 'Highlights',
                        frontend_leader: 'Front end Leader',


                        UWCSSA_desc1: `This is a website for the community of Chinese students and scholars in University of Windsor.`,
                        UWCSSA_desc2: 'The website is still iterating and is currently in version 1.0.',
                        UWCSSA_desc3:`Currently, news can be redacted by a rich text editor and released, activities with a dynamic enrolment form
                         can be created and allow users to join the activity by filling out the form.`,
                        UWCSSA_desc4:`More features are being developed, e.g. second-hand trading, house renting, etc.`,
                        UWCSSA_highlight1: `I am in charge of the whole front end part of this project, lead a group of students in Unversity of Windsor to work together and help them to
                        resolve practical problems in front end.`,
                        UWCSSA_highlight2: 'A rich text editor is implemented using CK-edtior5, which allows users to customize the format and style of text and pictures.',
                        UWCSSA_highlight3: `The feature of dynamic form makes it possible for users to customize the form, including the questions, 
                        the options of the select-type questions, the validation rules of the questions.`,
                        UWCSSA_highlight4: `Smart use of Redux and custom hooks defines global components and methods to improve development efficiency and the style uniformity of the whole project.`,
                        UWCSSA_highlight5: `Rational logic abstraction and a good use of HOC builds efficient reusable components, which reduces code coupling and enhance system stability, 
                        as well as enable the system scalable and sustainable.`,

                        bhpm_desc1: 'This is an online auction system for Bowell Gemology Inc., which is an auction house in Richmond Hill, Canada.',
                        bhpm_desc2: `In this project, I played a role of front end developer. I was responsible for creating the web page and handling front-end and back-end data interaction with GraphQL and rendering.`,
                        bhpm_desc3:`I worked with the development team efficiently, including debugging the interfaces with back-end developers and other front end developer to design reusable components.`,
                        bhpm_highlight1: `AWS AppSync and GraphQL subscriptions were used to implement the updating of real-time data to subscribing Web clients, so that the bidding information
                        can be synchronized to all users in real time.`,
                        bhpm_highlight2: 'Amazon Cognito user pool is used to manage users and the authentication and authorization of the users.',
                        bhpm_highlight3: `All of the network requests and responses were managed by redux (redux toolkit).`,
                        bhpm_highlight4: `Website internationalization is implemented using the npm package called "react-i18next". The website allows switching between English and Chinese.`,

                        NTF_desc1: 'This project is an activity for all employees in Li Auto company to draw a digital collection as gifts, in order to celebrate the company\'s 7th anniversary.',
                        // NTF_desc2: 'The rule of the activity was that users need to answer a couple of questions, after which they can draw their NTF collections.',
                        NTF_desc2: `I was responsible for the front end development of the main flow of the NTF collections drawing. Including answering questions,
                        filpping the card to draw the materials and finally compounding the NTF collections using the materials.`,
                        NTF_desc3: 'There were a few api calls needed and most of the work were interactive animations and the improvement of user experience.',
                        NTF_highlight1: `Interactive animation and user experience are the key points of my part of work.`,
                        NTF_highlight2: 'I designed and used serveral different types of animation libs to achieve natural transitions. As shown in the video.',
                        NTF_highlight3: 'The complex animation of the parts of drawing and compositing is implemented with a well-designed and creative solution.',

                        lifeLink_desc1: `I did this project for myself to learn and practice system design abilities and some back end skills. This is a social media application for people to 
                        post articles and pictures to share their life, and interact with their friends.`,
                        lifeLink_desc2: 'However, after starting the project for a period of time, the project had to be discontinued due to work and other projects.',
                        lifeLink_desc3: `Currently, I have completed some modules, including user authentication and profile, post articles and pictures, browse posts from friends and "like" or "collect" the posts.`,
                        lifeLink_highlight1: `Build the whole APP from 0, including the front end, back end and database, as well as product functions and UI design.`,
                        lifeLink_highlight2: 'Able to think independently and solved technical and logical-designed problems independently.',

                        iconFont_desc1: `This project is a platform that designed to improve collaboration among front end developers, UI designers, and product managers.`,
                        iconFont_desc2: `This platform was developed for Beijing YuanLi Future Technology Co., LTD, used by all research and development staffs in the company, around 20,000+.`,
                        iconFont_desc3: `Its main function is to support the creation of atlas and projects, while users can add an atlas or a project collaborator as an administrator, users can also browse all atlas and favorites ICONS from them.`,
                        iconFont_desc4: `I was a front end developer in this project and responsible for the development of the front end parts of atlas and projects.`,
                        iconFont_desc5: 'I implemented a reusable animation effect of "favorite" that only needed to pass different parameters on different pages in the project.',

                        healthCare_desc1: 'This is a platform that provides online medical service, a full stack project finished by my own in my studenthood!',
                        healthCare_desc2: 'There are two kinds of account, patients and doctors, which is determined when registration by the user. ',
                        healthCare_desc3: `Patients are able to edit their personal profile, add a symptom record and send to a doctor while doctors can reply to the patients. As well as make an 
                        offline appointment and online chat for all registered users.`,
                        healthCare_highlight1: `This project was the starting point of my front end learning. I finished this project in 3 months with few front end knowledge originally, 
                        which is an embodiment of my learning abilities and problem-solving abilities.`,
                        healthCare_highlight2: 'Designed and implemented the function of online chat by polling.',

                        footerName: 'Jiaxiu Li ( Leo )',

                        weChatNo: 'WeChat No: LJX1023704808',
                        china: 'China: ',
                        canada: 'Canada: ',

                        welcomeToVisit: 'Welcome to visit: ',
                        torontoCanada: 'Toronto, Ontario, Canada'

                    }
                }
            },
            zh_cn: {
                translation: {
                    description: {
                        name: '李佳修',
                        intro: '软件工程师 & 音乐爱好者',
                        about: '关于我',
                        edu: '教育经历',
                        work: '工作经历',
                        project: '个人项目',
                        other_con: '其他',
                        about_hi: '你好，我是李佳修',
                        about_welcome: '欢迎来到我的个人网站',
                        about_Iam: '我:',
                        about_graduate: '硕士毕业于加拿大温莎大学',
                        about_current: '目前是一名有两年工作经验的前端工程师，曾就职于国内多家互联网或科技公司',
                        about_learn: '目前正在学习一些GraphQL和NodeJS的后端知识',
                        about_deploy: '正在为温莎大学华人社区开发一个全栈项目，已部署在AWS上上线，正在进行版本迭代',
                        about_passion: '永远有着对新技术探索的热情，并在探索中感到充实，习惯在实践中学习新的技术',
                        about_music: '一位演奏多种乐器的音乐爱好者，曾经在一个乐队中担任鼓手',
                        about_techStack: '技术栈:',
                        CSSpre: 'CSS预处理器',
                        database: '数据库',
                        other_lib: '其他工具类库',
                        program_lang: '编程语言',
                        plat_editor: '平台和编译器',
                        // about_content: `Hi there, My name is Jiaxiu Li. Welcome to my personal website. I am currently a front-end
                        // developer with 1 year+ work exprience and trying to learn full-stack skills and build full-stack projects on AWS. 
                        // There are two things that make me enjoyable, programming and playing music,
                        // one is my career and the other one is the interest in my life. I think I am lucky because I have passion
                        // and love in what I do as a job.`,
                        edu_undergraduate: '大学本科',
                        hut_name: '湖南工业大学',
                        hut_loc: '中国，湖南省',
                        hut_major : '物联网工程',
                        uw_name: '温莎大学（University of Windsor）',
                        uw_loc: '安大略省（Ontario），加拿大（Canada）',
                        uw_major : '应用计算（Applied Computing）',
                        edu_postgraduate: '硕士研究生',
                        undergraduate_p1: `大学本科期间，我的专业是物联网工程（Internet of Things），这是一个软件和硬件相结合的专业，所以我们不仅要学习编程知识，也要学习硬件，通信相关的知识。`,
                        undergraduate_p2: `我在大学的实验室中接触到了许多有趣的实验，使用各种传感器采集数据，再编程对不同数据做出不同的响应。比如使用光照传感器探测光照强度，控制窗帘自动开关，这样简单有趣的实验，让我对智能化有了新的认识。`,
                        undergraduate_p3: `在不断的学习过程中，我发现我对软件更感兴趣。随着学习深度的增加，我逐渐领略到了数据结构与算法的魅力。`,
                        undergraduate_p4: `所以，我决定在本科毕业后继续去加拿大进一步学习软件开发。`,
                        postgraduate_p1: `在温莎大学，我的专业是Applied Computing，这个专业主要是对本科阶段软件工程的进一步学习，并更加看重学生的实践能力。`,
                        postgraduate_p2: `在这段时间里，我完成了许多的实践项目，这也是在本科学习阶段所缺少的东西。在实践中，我对前端开发产生了很大的兴趣，精致的交互与流畅的体验，在我学习前端初期给我带来了很大的兴趣与目标。`,
                        postgraduate_p3: `从前端0基础到第一次使用Django和jQuery完成了一个全栈项目，我用了3个月。这也是一个让我入门前端，对自己的学习能力感到自信，并给我带来了很大成就感的项目。`,
                        postgraduate_p4: `我想，这就是我前端开发之路的起点。`,
                        edu_core_course: '核心课程',
                        edu_story: '我的故事',
                        edu_c: '面向过程编程（C语言）',
                        edu_java: '面向对象编程（Java）',
                        edu_dataStructure: '数据结构',
                        edu_network: '计算机网络',
                        edu_OS: '操作系统原理',
                        edu_database: '数据库原理',
                        edu_communication: '通信原理',
                        edu_chip: '单片机及接口技术',
                        edu_sensor: '传感器原理及应用',
                        edu_algorithm: '高级算法（Advanced Algorithms）',
                        edu_acc: '高级计算理论（Advanced Computing Concepts）',
                        edu_adt: '高级数据库导论（Advanced Database Topics）',
                        edu_software: '高级软件工程导论（Advanced Software Eng. Topics）',
                        edu_sysPro: '高级系统编程（Advanced Systems Programming）',
                        edu_security: '网络与数据安全（Networking and Data Security）',
                        // postgraduate_p3: `I think front-end is an interface between the users and the back-end service, the quality of the front-end may directly 
                        // affect the user's impression of the overall software product.`,
                        // postgraduate_p4: `So high quality code writing and perfect interactive 
                        // experience is what I have been pursuing as a front-end developer.`,
                        // postgraduate_p5: `I've always believed that software development is 
                        // more like creating a work of art and every detail should be paid attention to.`,
                        fullTime: '全职',
                        intern: '实习',
                        partTime: '兼职（远程）',
                        atPresent: '开发中',
                        atPresent_work: '目前',
                        suspend: '暂停开发',
                        work_content: `After I graduated from University of Windsor and got my Master's degree, I worked as a front-end engineer and I have been 
                        continuously learning development skills. Now, I am trying to develop a complete web application by my own 
                        out of my work, including both front-end and back-end and deploy it on a cloude server.
                        I believe that I will continue to explore technology and get happiness from it in the future, and continue to grow 
                        into a more mature software engineer.`,
                        company_name_li_auto: `理想汽车`,
                        frontendEng: '前端研发工程师',
                        frontendDev: '前端开发工程师',
                        fullStackdDev: '全栈开发工程师',
                        liAutoLoc: '中国，北京',
                        li_auto_intro: '理想汽车是中国新能源汽车制造商，设计、研发、制造和销售豪华智能电动汽车，于2015年7月创立，通过产品创新及技术研发，为家庭用户提供安全及便捷的产品及服务。',
                        li_auto_work_content: `在理想汽车，我的部门叫做“能效工程部”，主要通过技术手段研发工具类系统，如在线协同文档，前端组件库，脚手架等，为公司内部其他的部门提升工作效率，同时也负责公司内B端系统的开发。`,
                        li_auto_work_content_item1: `负责B端系统的前端开发与接口联调，担任过至少两个面向全公司所有员工（约12000人）的B端项目的前端负责人，并独立完成项目的前端部分与各部分对接工作。`,
                        li_auto_work_content_item2: `参与B端前端组件库项目，为公共组件库贡献至少10个组件的封装，为B端开发工作效率提升60%，同时所有B端系统的UI统一性也得到了保证。`,
                        li_auto_work_content_item3: `2022年第一季度OKR评分获得“超预期”。`,
                        company_name_yuanfudao: '北京猿力未来科技有限公司',
                        yuanfudao_intro: `猿辅导创立于2012年，是K-12在线教育首个独角兽公司，公司的估值达到155亿美元，在全球教育科技独角兽公司中排名首位。公司旗下拥有猿辅导、小猿搜题、猿题库、小猿口算、斑马AI课等多款在线教育产品。`,
                        yuanfudao_work_content: `在猿辅导，我就职于辅导研发部的“用户增长组”，部门的主要职责是通过营销活动的落地页，引导用户参与活动，如领取购课优惠券，幸运抽奖等，最后促使用户完成购课交易。“用户增长组”属于猿辅导app业务上的核心部门。`,
                        yuanfudao_content_item1: '负责开发各种直接面向用户的toC营销活动的前端页面与接口联调工作，需确保交付质量与保证活动的准时上线。',
                        yuanfudao_content_item2: '封装并优化了一个常用的降价交互效果，由使用.gif图片的方式变成了灵活可复用的组件。',
                        yuanfudao_content_item3: '解决了在某些版本的Android环境下， video player视频全屏会出bug的问题。实现了一个假全屏功能，而不是使用video player的原生全屏功能。',
                        yuanfudao_content_item4: '编写单元测试和组内同事之间的code review，形成了良好的代码写作风格和习惯。',
                        company_name_maple_data: 'Maple Data Strategy Inc.',
                        maple_data_loc: '多伦多（Toronto）, 加拿大（Canada）',
                        maple_data_intro: 'Maple Data Strategy我们是加拿大领先的IT服务提供商。在过去的20多年里，为不同国家不同行业的公司提供了大量的IT解决方案。',
                        maple_data_work_content_p1: `在2020年9月，我获得了在Maple Data Strategy实习的机会，大量的实践练习使我的前端技术飞速成长，我也是在这里学习了React和Vue。2021年1月，我回到了中国，并继续通过远程保持着在Maple Data Strategy的工作。`,
                        maple_data_work_content_p2: `2021年6月，我拿到了温莎大学的毕业和学位证书，所以我通过校招获得了猿辅导的全职offer，成为了一名真正的前端工程师。我继续在Maple Data Strategy做着兼职工作，处理一些零散的需求，大概一周20个小时左右。`,
                        maple_data_content_item1: '参与开发公司内部的商业项目。',
                        maple_data_content_item2: '负责使用e-charts开发用于数据可视化展示的各种图表。',
                        maple_data_content_item3: '担任图表组组长（4 - 5个实习生组成），负责分发开发任务和管理代码合并。',
                        maple_data_content_item4: '在实习阶段学习了React和Vue。',
                        introduction: '项目介绍',
                        highlights: '优点',
                        frontend_leader: '前端负责人',


                        UWCSSA_desc1: `这个项目是用于温莎大学华人学生和学者社区所开发的，方便华人社区了解最新资讯，资源互通等。`,
                        UWCSSA_desc2: '目前上线了1.0版本，新的版本仍在开发迭代。',
                        UWCSSA_desc3:`在当前版本中，只实现了一些基本的功能，管理员可以通过富文本编辑器编写并发布文章和新闻，邮件推送，可以创建活动，实现了一个活动的动态报名表单，活动发起者可以任意编辑表单中的问题和选项以及校验规则。`,
                        UWCSSA_desc4:`更多的功能正在开发，预计未来将加入二手交易以及房屋出租转租等功能。`,
                        UWCSSA_highlight1: `作为这个项目的前端负责人，我带领了一些温莎大学的学生一起构建前端功能，帮助他们积累实践经验，解决实际问题，在实践中学习新的技术。`,
                        UWCSSA_highlight2: '使用CK-edtior5实现了富文本编辑器，允许用户自定义各种格式和样式的文章，也支持插入图片媒体等功能。',
                        UWCSSA_highlight3: `实现了动态表单的功能，允许用户自定义一个表单中有哪些问题，每一个问题的校验规则，以及选择类问题的选项。`,
                        UWCSSA_highlight4: `通过合理的使用reudx和自定义hooks，定义了全局组件和方法来提升开发效率，简化了调用方式，同时也保证了整个系统中通用组件的样式统一，如toast提示。`,
                        UWCSSA_highlight5: `通过合理的逻辑抽取以及HOC的使用构建了高效可重用的组件，减少了代码的耦合度，提升了系统的稳定性，同时增强了系统的可扩展性和可维护性。`,

                        bhpm_desc1: '这是一个在线拍卖系统，为Bowell Gemology Inc.公司所开发，是一个位于加拿大多伦多的华人拍卖行。',
                        bhpm_desc2: `在这个项目中，我担任前端开发的角色。我负责构建前端页面，通过GraphQL与后端进行数据交互，并处理前端数据的渲染。`,
                        bhpm_desc3:`我与开发团队高效地合作，包括与后端开发人员的接口联调工作，能够快速定位问题，以及和其他前端开发人员调试接口，以设计合理的可重用组件。`,
                        bhpm_highlight1: `使用AWS AppSync以及GraphQL订阅实现了服务端到web客户段的消息推送，实时数据更新，从而实现了拍卖信息向所有用户同步的功能。`,
                        bhpm_highlight2: '使用Amazon Cognito进行用户管理，实现注册登录，邮箱验证，以及不同角色用户的权限控制功能。',
                        bhpm_highlight3: `网络请求由Redux toolkit结合GraphQL进行统一管理。`,
                        bhpm_highlight4: `网站国际化是通过npm包“react-i18next”实现的。该网站允许在英文和中文之间切换。`,

                        NTF_desc1: '这个项目是为了庆祝理想汽车成立7周年而做的一个抽奖活动，面向公司所有员工抽取NFT数字藏品。',
                        // NTF_desc2: 'The rule of the activity was that users need to answer a couple of questions, after which they can draw their NTF collections.',
                        NTF_desc2: `我负责了这个项目的前端最主要的部分，抽奖的主流程，包括观看视频后回答问题，问题全部回答正确才能进行抽奖，点击卡片反转抽奖，以及通过抽取的素材合成最终的NFT数字藏品。`,
                        NTF_desc3: '这个项目的前端部分并没有涉及很多前后端的交互，主要是通过动画效果来优化用户的使用体验。',
                        NTF_highlight1: `交互动画和用户体验是前端最重要的部分，需要进行比较复杂的dom操作。`,
                        NTF_highlight2: '结合使用多种不同类型的动画库，包括CSS和JS动画库，设计和实现了流畅自然的过渡效果和交互动画。如视频所示。',
                        NTF_highlight3: '关于抽奖过程以及最终合成NTF数字藏品的复杂动画，我设计了并实现了一个创造性的解决方案。',

                        lifeLink_desc1: `这是一个我自己的一个个人项目，目的是通过实践的方式学习，练习一些后端技术和整体系统设计的思路。这是一个社交媒体，用户可以发布文章和照片来分享他们的生活，在这个web app上与朋友交互。`,
                        lifeLink_desc2: '然而，项目启动一段时间后，由于自己的工作和其他项目的原因，没有时间继续开发这个项目了，所以项目不得不中断。',
                        lifeLink_desc3: `目前，我已经完成了一些模块，包括用户认证和个人资料，发布文章和图片，浏览朋友的帖子，对帖子进行点赞或收藏。`,
                        lifeLink_highlight1: `从0到1设计并构建了整个系统，包括前端后端的接口交互逻辑，数据库的设计，还有UI设计和产品功能的设计。`,
                        lifeLink_highlight2: '在这个项目的开发过程中，能够独立思考并解决所遇到的问题，通过实践项目整体的逻辑设计，也收获了很多。',

                        iconFont_desc1: `这个项目是一个图标管理平台，旨在提高前端开发人员、UI设计师和产品经理之间的协作效率。`,
                        iconFont_desc2: `这个项目是在参加猿辅导为期一个月的校招生培训计划“新牛计划”期间所开发，是由刚入职的校招生组成一个小组进行合作开发，上线之后供全公司研发人员使用。`,
                        iconFont_desc3: `项目的主要功能是支持图集和项目的创建，用户可以作为管理员添加图集或项目合作者，设置图集是否为私密图集，用户还可以浏览所有的公开图集，并收藏其他图集中的图标到自己图集或项目中。`,
                        iconFont_desc4: `在这个项目中，我是前端开发，主要负责图集和项目模块的前端页面开发和接口联调工作。`,
                        iconFont_desc5: '在开发过程中，我实现了一个灵活可以复用的方法，用于在收藏图标进入图集的时候的交互动画，可以灵活的用在项目中的多个页面中，具有良好的可移植性。',

                        healthCare_desc1: '这是一个提供在线医疗服务的平台，是我在学生时代自己完成的一个全栈项目!',
                        healthCare_desc2: '系统分为两种账户类型，医生和病人，由用户在注册的时候选择确定，两种账户有不同的功能。',
                        healthCare_desc3: `首先，医生和病人都有自己的账户信息，可以由用户进行自定义编辑。病人可以添加一个病例，并把这个病例发送给指定的医生，医生在收到后可以回复诊断和治疗方案。同时系统还提供了在线聊天和线下预约的功能。`,
                        healthCare_highlight1: `我一直把这个项目视作我真正入门前端的一个项目，从前端的0基础，到使用jQuery和Python完成这个项目，总共用了3个月的时间，我认为这是我解决问题能力和学习能力的一种体现，完成这个项目给我带来了很大的成就感。`,
                        healthCare_highlight2: '设计和实现了在线聊天功能使用客户段轮询的方式。',

                        footerName: '李佳修的个人网站',

                        weChatNo: '微信号: LJX1023704808',
                        china: '中国: ',
                        canada: '加拿大: ',

                        welcomeToVisit: '欢迎访问: ',
                        torontoCanada: 'Toronto, Ontario, Canada'
                    }
                }
            }
        }
    });

export default i18n;
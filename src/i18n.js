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
                        name: 'Jiaxiu Li',
                        intro: 'Software Engineer & Music Lover',
                        about: 'About',
                        edu: 'Education',
                        work: 'Work Experience',
                        project: 'Projects',
                        other_con: 'Other & Contact',
                        about_hi: 'Hi there, I am Jiaxiu Li.',
                        about_welcome: 'Welcome to my personal website.',
                        about_Iam: 'I am :',
                        about_graduate: 'A Master graduate from University of Windsor.',
                        about_current: 'Currently a front-end developer with 2 years work exprience.',
                        about_learn: 'Currently learning back-end development skills about nodeJS and GraphQL.',
                        about_deploy: 'Trying to complete a full-stack web application and deploy it on AWS.',
                        about_passion: 'Passionate to continuously explor new development skills and have fun from it.',
                        about_music: 'A music lover who plays mutiple musical instruments and was a drummer in a band.',
                        about_techStack: 'Tech Stack :',
                        // about_content: `Hi there, My name is Jiaxiu Li. Welcome to my personal website. I am currently a front-end
                        // developer with 1 year+ work exprience and trying to learn full-stack skills and build full-stack projects on AWS. 
                        // There are two things that make me enjoyable, programming and playing music,
                        // one is my career and the other one is the interest in my life. I think I am lucky because I have passion
                        // and love in what I do as a job.`,
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
                        postgraduate_p3: `For 6 months, I completed a full stack web application using Django, which brought me a huge sense 
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
                        lifeLink_highlight2: 'Able to think independently and solved technical and logical-designed problems independently.'


                    }
                }
            },
            zh_cn: {
                translation: {
                    description: {
                        name: '李佳修',
                        intro: '软件工程师 & 音乐爱好者',
                        about: '关于我',
                        edu: '教育背景',
                        work: '工作经历',
                        project: '项目经历',
                        other_con: '其他信息 & 联系方式',
                        about_hi: 'Hi, 我是李佳修',
                        about_welcome: '欢迎来到我的个人网站',
                        about_Iam: '我:',
                        about_graduate: '硕士毕业于加拿大温莎大学',
                        about_current: '目前是一个有两年工作经验的前端工程师',
                        about_learn: '正好学习NodeJS和GraphQL相关的后端开发知识',
                        about_deploy: '正在开发一个全栈的web应用，并部署在aws上',
                        about_passion: '永远对新的技术保持着不断探索的热情，并从中获得乐趣',
                        about_music: '演奏多种乐器，曾经是一个乐队的鼓手',
                        about_techStack: 'Tech Stack :',
                        // about_content: `Hi there, My name is Jiaxiu Li. Welcome to my personal website. I am currently a front-end
                        // developer with 1 year+ work exprience and trying to learn full-stack skills and build full-stack projects on AWS. 
                        // There are two things that make me enjoyable, programming and playing music,
                        // one is my career and the other one is the interest in my life. I think I am lucky because I have passion
                        // and love in what I do as a job.`,
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
                        postgraduate_p3: `For 6 months, I completed a full stack web application using Django, which brought me a huge sense 
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
                        work_content: `After I graduated from University of Windsor and got my Master's degree, I worked as a front-end engineer and I have been 
                        continuously learning development skills. Now, I am trying to develop a complete web application by my own 
                        out of my work, including both front-end and back-end and deploy it on a cloude server.
                        I believe that I will continue to explore technology and get happiness from it in the future, and continue to grow 
                        into a more mature software engineer.`,
                        company_name_li_auto: `Li Auto Inc.`,
                        frontendEng: 'Front end Engineer',
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
                        yuanfudao_content_item4: 'Did code review and unit tests to guarantee the quality of the code in every project.'
                    }
                }
            }
        }
    });

export default i18n;
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
                        about_current: 'Currently a front-end developer with 1 year+ work exprience.',
                        about_learn: 'Currently learning back-end development skills about nodeJS and GraphQL.',
                        about_deploy: 'Trying to complete a full-stack web application and deploy it on AWS.',
                        about_passion: 'Passionate to continuously explor new development skills and have fun from it.',
                        about_music: 'A music lover who plays mutiple musical instruments and was a drummer in a band.',

                        about_content: `Hi there, My name is Jiaxiu Li. Welcome to my personal website. I am currently a front-end
                        developer with 1 year+ work exprience and trying to learn full-stack skills and build full-stack projects on AWS. 
                        There are two things that make me enjoyable, programming and playing music,
                        one is my career and the other one is the interest in my life. I think I am lucky because I have passion
                        and love in what I do as a job.`,
                        undergraduate: `During my undergraduate years, I majored in IoT(Internet of Things) Engineering, which is a combination of 
                        software and hardware. I did lots of interesting experiments in the lab of our university, like let the curtains 
                        close or open automatically according to the intensity of the light. Through these experiences, I found I am more 
                        interested in software development than hardware and started to realize the charm of data structures and
                        algorithms gradually. So, I decided to get a further study in software development and I came to Canada to do this.`,
                        post_undergraduate: `My major in Univeristy of Windsor was Applied Computing, which focuses on practical development techniques. I did a 
                        lot of projects with my group in Univeristy of Windsor, my work was mainly about front-end part in these projects, I 
                        started to become interested in front-end and that was the origin of my front-end development career in the future.
                        I think front-end is an interface between the users and the back-end service, the quality of the front-end may directly 
                        affect the user's impression of the overall software product. So high quality code writing and perfect interactive 
                        experience is what I have been pursuing as a front-end developer. I've always believed that software development is 
                        more like creating a work of art and every detail should be paid attention to.`,
                        work_content: `After I graduated from University of Windsor and got my Master's degree, I worked as a front-end engineer and I have been 
                        continuously learning development skills. Now, I am trying to develop a complete web application by my own 
                        out of my work, including both front-end and back-end and deploy it on a cloude server.
                        I believe that I will continue to explore technology and get happiness from it in the future, and continue to grow 
                        into a more mature software engineer.`
                    }
                }
            },
            zh_cn: {
                translation: {
                    description: {
                        name: '李佳修',
                        intro: '软件工程师/音乐爱好者',
                        about: '关于我',
                        edu: '教育经历',
                        work: '工作经历',
                        project: '项目经历',
                        other_con: '其他/联系方式',
                        about_content_p1: `大家好，我是李佳修。有两件事让我感到愉快，编程和演奏音乐，
                        一个是我的事业，另一个是我生活中的兴趣。我觉得我很幸运，因为我有激情
                        热爱我的工作。`,
                        about_content_p2: ` 在本科期间，我的专业是物联网工程，它是一个结合软件和硬件。我在学校的实验室里做了很多有趣的实验，比如窗帘
                        根据光线的强度自动关闭或打开。通过这些经历，我发现我更
                        对软件开发比硬件更感兴趣，并开始逐渐的意识到数据结构和算法的魅力。所以，我决定在软件开发方面进一步学习，我来到加拿大做这个。`,
                        about_content_p3: `  我在温莎大学的专业是应用计算，主要研究实用的开发技术。我做了一个
                        我和我的小组在温莎大学的很多项目，我的工作主要是在这些项目的前端部分，我
                        开始对前端产生兴趣，这也是我未来前端开发事业的起点。
                        我认为前端是用户和后端服务之间的一个接口，前端的质量可能直接影响
                        影响用户对整个软件产品的印象。高质量的代码编写和完美的交互
                        经验是我作为一名前端开发人员所追求的。我一直相信软件开发是
                        更像是创造一件艺术品，每一个细节都要注意。`,
                        about_content_p4: `从温莎大学毕业并获得硕士学位后，我从事前端工程师的工作
                        不断学习发展技能。现在，我正试图开发一个完整的网络应用程序由我自己
                        在我的工作之外，包括前端和后端，并将其部署在云服务器上。
                        我相信在未来的日子里，我会继续探索科技，从科技中获得快乐，继续成长
                        成为更成熟的软件工程师。`
                    }
                }
            }
        }
    });

export default i18n;
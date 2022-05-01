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
                        other_con: 'Other & Contact'
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
                        other_con: '其他/联系方式'
                    }
                }
            }
        }
    });

export default i18n;
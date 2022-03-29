module.exports = {
    title: "学习笔记",
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'assets'
            }
        }
    },
    themeConfig: {
        sidebar: 'auto',
        nav: [
            {
                text: '计算机基础',
                items: [
                    { text: '命令行', link: '/cmd/' }
                ]
            },
            { text: 'Github', link: 'https://github.com/lr6/note' },
        ]
    }
}
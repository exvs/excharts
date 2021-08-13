module.exports = {
  title: 'EXCharts',
  themeConfig: {
    nav: [
      { text: 'ECharts like', link: '/echarts-like/' },
      { text: 'D3 in Depth', link: '/d3-in-depth/' }
      // {
      //   text: '多语言',
      //   items: [
      //     { text: '简体中文', link: 'https://cn-vitepress.netlify.app/' },
      //     { text: 'English', link: 'https://vitepress.vuejs.org/' }
      //   ]
      // }
    ],
    sidebar: {
      '/d3indepth/': [
        {
          text: 'D3 in Depth',
          children: [
            {
              text: 'Axes',
              link: '/d3indepth/axes/'
            }
          ]
        }
      ]
    }
  }
}

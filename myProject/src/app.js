import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      
      'pages/index/index',
      'pages/constellation/index',
      'pages/timeMachine/index',
      'pages/my/index',
      'pages/weather/index',
      'pages/joke/index',
      'pages/movie/index',
      'pages/idiom/index'

      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#3366FF',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
  tabBar: {
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: "icon/新闻.png",
      selectedIconPath: "icon/新闻 (1).png"
    },
  {
      pagePath: "pages/constellation/index",
      text: "星座",
      iconPath: "icon/星座.png",
      selectedIconPath: "icon/星座 (1).png"
    },
  {
      pagePath: "pages/timeMachine/index",
      text: "时光机",
      iconPath: "icon/时间.png",
      selectedIconPath: "icon/时间 (1).png"
    },
  {
      pagePath: "pages/my/index",
      text: "我的",
      iconPath: "icon/我 的.png",
      selectedIconPath: "icon/我 的 (1).png"
    }]
  }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

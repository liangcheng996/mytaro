import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  } 
  constructor(){
    super();
    this.state={
     
    }
  }
  render () {
   
    return (
      <View className='index'>
     
      </View>
    )
  }

  componentWillMount () { }
 
 
  componentDidMount () {
 
   }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  
}

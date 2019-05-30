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
       list:[],
       page:1
    }
  }
  render () {
     let {list,page}=this.state
    return (
      <View className='index'>
          <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559129866321&di=4a68f4d91409fb01a5efda7765dace6a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fae6c349ffbb68b0a68c520853e63e745dabd633b2163b-v1fojE_fw658'></Image>
          <View className='changelimit'>
            <Button onClick={this.prevs.bind(this)}>上一页</Button>
            <View>当前页数：{page}</View>
            <Button onClick={this.nexts.bind(this)}>下一页</Button>
          </View>
          <View>
              {
                list.map(item=>{
                  return <View key={item.hashId} className='content'>
                       <View>{item.content}</View>
                       <View className='date'>{item.updatetime}</View>
                  </View>
                })
              }
          </View>
           <View className='changelimit'>
             <Button onClick={this.prevs.bind(this)}>上一页</Button>
            <View>当前页数：{page}</View>
            <Button onClick={this.nexts.bind(this)}>下一页</Button>
          </View>
      </View>
    )
  }

  componentWillMount () { }
 
  prevs(){
    let index=this.state.page
     if(this.state.page>1){
         index--;
         this.setState({
         page:index
      })
         Taro.request({
       url:'http://v.juhe.cn/joke/content/list.php?sort=desc&page='+index+'&pagesize=10&time=1418816972&key=c44b72f5355546c4005a6242750d8ee1',
       success:(res)=>{
          console.log(res.data.result.data)
          this.setState({
            list:res.data.result.data
          })
       }
       
      })
    }
      
  }
  nexts(){
    let index=this.state.page
         index++
         this.setState({
         page:index
      })
     Taro.request({
       url:'http://v.juhe.cn/joke/content/list.php?sort=desc&page='+index+'&pagesize=10&time=1418816972&key=c44b72f5355546c4005a6242750d8ee1',
       success:(res)=>{
          console.log(res.data.result.data)
          this.setState({
            list:res.data.result.data
          })
       }
       
      })
  }
  componentDidMount () {
     Taro.request({
       url:'http://v.juhe.cn/joke/content/list.php?sort=asc&page='+this.state.page+'&pagesize=10&time=1418816972&key=c44b72f5355546c4005a6242750d8ee1',
       success:(res)=>{
          console.log(res.data.result.data)
          this.setState({
            list:res.data.result.data
          })
       }
       
      })
   }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  
}

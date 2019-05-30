import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '时光机'
  }
  constructor(){
    super();
    this.state={
      time:"2001-8-30",
      month:"1",
      day:"1",
      list:[]
    }
  }
    render () {
      let {time,list}=this.state
        return (
           <View className='index'>
                <Image className="topbanner" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559037512288&di=9f850a301671ec11c776253d0ee31af5&imgtype=0&src=http%3A%2F%2Fm.simayi.net%2Fzb_users%2Fupload%2F2018%2F6%2F2018063066213117.jpg"></Image>
                 <Picker mode="date" value="{time}" start="19" end="12" onChange={this.pickerTime.bind(this)}>
                    <View className="nav">你选择的时间是:{time}</View>
                </Picker>
                <view>
                    <scroll-view scroll-y style="height: auto;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">
                      {
                          list.map((item,i)=>{
                         return <View key={item.id} className="lis"> 
                                 <Image src={item.pic}></Image>
                                 <View>
                                     <View className="title">{item.title}</View>
                                     <View className="name">{item.lunar}</View>
                                     <View className="date">{item.des} </View>
                                 </View>
                            </View>
                       }) 
                      }
                       </scroll-view>
                </view>
          </View>
       )
     }
    pickerTime(event) {
      // console.log(event.detail.value)
      let time=event.detail.value
      let timearr=time.split('-')
      this.setState({
         time: event.detail.value
      })
         Taro.request({
      url:"http://api.juheapi.com/japi/toh?v=1.0&month="+timearr[1]+"&day="+timearr[2]+"&key=42086f989a11b0791d9b7486890fd6c7",
      success:(res)=>{
        //  console.log(res.data.result)
         this.setState({
           list:res.data.result
         })
      }
    })
  }
  componentWillMount () { }

  componentDidMount () {
    Taro.request({
      url:"http://api.juheapi.com/japi/toh?v=1.0&month="+this.state.month+"&day="+this.state.day+"&key=42086f989a11b0791d9b7486890fd6c7",
      success:(res)=>{
        //  console.log(res.data.result)
         this.setState({
           list:res.data.result
         })
      }
    })
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


}

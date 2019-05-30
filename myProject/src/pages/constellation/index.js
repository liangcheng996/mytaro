import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '星座'
  }
  constructor(){
    super();
    this.state={
      imgarr:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559640046&di=c2292691bd585c1df6df197b9f5894b6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.kekenet.com%2F2015%2F0723%2F39721437624029.jpg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559640063&di=43a7e368e799eae81b91046fbe4d275b&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1024h694%2F20180112%2F55fb-fyqnicm2133189.jpg",
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3323079110,157231545&fm=26&gp=0.jpg"          
               ],
      obj:{},
      time:[
        {
        name:"今天",
        id:"today"
      },
      {
        name:"明天",
        id:"tomorrow"
      },
      {
        name:"本周",
        id:"week"
      },
      {
        name:"本月",
        id:"month"
      },
      {
        name:"今年",
        id:"year"
      }
    ],
    default:"双鱼座",
    value:""
            
    }
  }
  render () {
    let {obj,value}=this.state
    return (
      <View className='index'>
         <View className='search'>
            <Input type="text" placeholder="例（双鱼座）" value={value} onInput={this.changeinput.bind(this)}/>
            <Button onClick={this.searchbtn.bind(this)}>搜索</Button>
         </View>
           <Swiper>
               {
                 this.state.imgarr.map((item,i)=>{
                   return <Block key={i}>
                                <Swiper-item>
                                   <Image src={item} class="slide-image"/>
                                </Swiper-item>
                             </Block>
                 })
               }
          </Swiper> 

          <View className="time">  
            {
              this.state.time.map(item=>{
                return <Button key={item.id} hover-class="down" onClick={this.timetype.bind(this,item.id)}>{item.name}</Button>
              })
            }
          </View>
            <scroll-view scroll-y style="height: auto;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">
                
                   <View className='title'>{this.state.default}</View>
                   <View hidden={!obj.QFriend}><Text>最佳配偶</Text>：{obj.QFriend}</View>
                   <View hidden={!obj.all}><Text>满意度</Text>:{obj.all}</View>
                   <View hidden={!obj.health}><Text>健康指数</Text>：{obj.health}</View>
                   <View hidden={!obj.money}> <Text>金钱指数</Text> ：{obj.money}</View>
                   <View hidden={!obj.work}><Text>工作指数</Text>：{obj.work}</View>
                   <View hidden={!obj.love}><Text>恋爱指数</Text>：{obj.love}</View>
                   <View hidden={!obj.summary}>{obj.summary}</View>
             
           </scroll-view>
      </View>
    )
  }
  
  componentWillMount () { 
  
  }

  changeinput(e){
   this.setState({
     value:e.detail.value
   })
  
 }
  searchbtn(){
        Taro.request({
         url:"http://web.juhe.cn:8080/constellation/getAll?consName="+this.state.value+"&type=today&key=3395263e578ce2d8a5d78ff3b85caf3c",
         success:(res)=>{
             console.log(res.data)
             this.setState({
               obj:res.data
             })
         }    
        })
  }
  componentDidMount () {
  
       Taro.request({
         url:"http://web.juhe.cn:8080/constellation/getAll?consName=双鱼座&type=today&key=3395263e578ce2d8a5d78ff3b85caf3c",
         success:(res)=>{
             console.log(res.data)
             this.setState({
               obj:res.data
             })
         }    
        })
   }
    timetype(typeid){
      // console.log(typeid)
      Taro.request({
         url:"http://web.juhe.cn:8080/constellation/getAll?consName=双鱼座&type="+typeid+"&key=3395263e578ce2d8a5d78ff3b85caf3c",
         success:(res)=>{
             console.log(res.data)
             this.setState({
               obj:res.data
             })
         }    
        })
    }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  
}

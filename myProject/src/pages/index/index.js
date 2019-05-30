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
      dllist:[
        {
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558954279130&di=916f4cda35e1adc19d7c6c8a795fc985&imgtype=0&src=http%3A%2F%2Fwww.zhrsoft.com.cn%2Fweixin%2Fplat%2Fapp%2FPublic%2Fuploads%2F583543d1379f5.png",
          title:"天气预报",
          url:'/pages/weather/index'
        },
        {
          image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=362237655,4253546665&fm=26&gp=0.jpg",
          title:"笑话大全1",
          url:'/pages/joke/index'
        },
        {
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558954567838&di=28702081d1320bb0086c890e743bc799&imgtype=0&src=http%3A%2F%2F9.pic.pc6.com%2Fup%2F2014-6%2F201466172131.png",
          title:"成语词典1",
          url:'/pages/idiom/index'
        },
        {
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559549347&di=29775e666a3852e191cd1669085e0582&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.669pic.com%2Felement_pic%2F96%2F11%2F35%2F5%2F3ded5d65c5774e1fd20a46906b54d80a.jpg",
          title:"在线电影票1",
          url:'/pages/movie/index'
        }
      ],
      type:"top",
      list:[],
      typelist:[
         {
        name:"头条",
        id:"top"
      },
        {
        name:"国内",
        id:"guonei"
      },
      {
        name:"社会",
        id:"shehui"
      },
      {
        name:"娱乐",
        id:"yule"
      },
      {
        name:"时尚",
        id:"shishang"
      }
    ]
    }
  }
  render () {
    let {dllist,list}=this.state
    return (
      <View className='index'>
     
             <View className="dls">
                {
                  dllist.map((item,i)=>{
                    return  <View key={i} onClick={this.tonav.bind(this,item.url)}>
                   <Image src={item.image}></Image>
                   <View>{item.title}</View>
                </View>
                  })
                }
             </View>
              
              {/* <View className="content"> */}
                <View className="tuijian">
                     {
                       this.state.typelist.map(item=>{
                         return <Button key={item.id} hover-class="down" onClick={this.types.bind(this,item.id)}>{item.name}</Button>
                       })
                     }
                </View>

                    <scroll-view scroll-y style="height: auto;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">
                            {
                        list.map((item,i)=>{
                         return <View key={item.uniquekey} className="lis" onClick={this.todetail.bind(this,i)}> 
                                 <Image src={item.thumbnail_pic_s}></Image>
                                 <View>
                                     <View className="title">{item.title}</View>
                                     <View className="date">{item.date}</View>
                                     <View className="name">{item.author_name}  <Text  className="cate">{item.category}</Text></View>
                                 </View>
                            </View>
                       }) 
                    }
                     </scroll-view>
                
              {/* </View> */}


      </View>
    )
  }

  componentWillMount () { }
  todetail(i){
       let url=this.state.list[i].url
       console.log(url)
       Taro.navigateTo({
         url:url
       })
  }
      tonav(url){
         Taro.navigateTo({
           url:url
         })
      }
    types(type){
        // console.log(type)
       Taro.request({
      url:"http://v.juhe.cn/toutiao/index?type="+type+"&key=9511527996051d8f659603e06b7712a0",
      success:(res)=>{
          // console.log(res.data.result.data)
          this.setState({
            list:res.data.result.data
          })
      }
    })
    }
  componentDidMount () {
    Taro.request({
      url:"http://v.juhe.cn/toutiao/index?type="+this.state.type+"&key=9511527996051d8f659603e06b7712a0",
      success:(res)=>{
          // console.log(res.data.result.data)
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

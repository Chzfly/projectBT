This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
## 移动端电影票售卖app

------

React、Create React App

> * 首页展示：海报轮播、影片展示列表
> * 城市切换
> * 用户界面
> * 电影详情展示
> * 评论区展示
> * 座位选择
### 项目总结
> * 使用构建工具create-react-app构建项目
> * 样式：使用css预处理器sass编写样式，默认样式引用了normalize.css，将常用单个样式在_util.scss中进行了封装，常用组件样式也在common.scss中进行了分离，利用flex进行自适应布局
> * 通用组件：在components中进行封装
> * 主要部分：在routes文件夹下进行编写
> * 路由：使用react-router-dom中的BrowserRouter和Route
> * 接口：使用了easy-mock进行接口模拟
> * 状态管理： seat部分多个组件共用状态，使用redux管理
#### components通用组件，许多页面都需要的可复用的组件
> * LineLink：单行链接组件
> * CollapsibleText：可折叠和展开的文字段落组件
> * Star：五星评分组件
> * TabMenu：tab切换组件
#### home: 主页面
> * TopBar：城市按钮，搜索区域，扫码按钮
> * MovieItem：电影列表
> * Slide：轮播海报
> * CityLayer：城市切换页面
#### detail: 电影详情页面
> * Artist：演员列表
> * BaseInfo：影片基本信息
> * CommentList：评论列表
> * ScoreDistribute：评分分布
> * TagList：评分分类选项
#### Seat: 选座页面
> * MovieInfo：电影信息
> * SeatSelected：已选座位列表和确认选座按钮
> * SeatSelector：座位图

### 项目展示

<img src="https://github.com/Chzfly/projectBT/blob/master/capture/show.gif"/>

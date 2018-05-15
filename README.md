# pocket-douban
通过react + react-router完成一个'口袋豆瓣'功能.在页面中我们可以获取（或者搜索获取）到豆瓣的图书，电影，音乐列表以及相关的详情信息.

### 首页效果如下,

![image](https://github.com/lestatice2016/pocket-douban/blob/master/screenShots/home.PNG)

### 对应的详情页为,

![image](https://github.com/lestatice2016/pocket-douban/blob/master/screenShots/detailsmovie.PNG)

### 电影搜索页效果为,

![image](https://github.com/lestatice2016/pocket-douban/blob/master/screenShots/movie.PNG)

### 音乐及图书的详情页为,

![image](https://github.com/lestatice2016/pocket-douban/blob/master/screenShots/detailsMusic.PNG) 
![image](https://github.com/lestatice2016/pocket-douban/blob/master/screenShots/detailsBook.PNG)

通过fetch-jsonp拉取豆瓣数据,通过 'scrollTop + clientHeight === scrollHeight 判断是否到达数据最后一项' 来完成下拉加载.

      var imgs = [{"id":0,"src":"img/1.jpg","bigsrc":"img/1.jpg"}, 
      {"id":1,"src":"img/2.jpg","bigsrc":"img/2.jpg"}, 
      {"id":2,"src":"img/3.jpg","bigsrc":"img/3.jpg"}, 
      {"id":3,"src":"img/4.jpg","bigsrc":"img/4.jpg"}, 
      {"id":4,"src":"img/5.jpg","bigsrc":"img/5.jpg"}, 
      {"id":5,"src":"img/6.jpg","bigsrc":"img/6.jpg"}, 
      {"id":6,"src":"img/7.jpg","bigsrc":"img/7.jpg"}, 
      {"id":7,"src":"img/8.jpg","bigsrc":"img/8.jpg"}, 
      {"id":8,"src":"img/9.jpg","bigsrc":"img/9.jpg"}, 
      {"id":9,"src":"img/10.jpg","bigsrc":"img/10.jpg"}, 
      {"id":10,"src":"img/11.jpg","bigsrc":"img/11.jpg"}, 
      {"id":11,"src":"img/12.jpg","bigsrc":"img/12.jpg"}, 
      {"id":12,"src":"img/13.jpg","bigsrc":"img/13.jpg"}, 
      {"id":13,"src":"img/14.jpg","bigsrc":"img/14.jpg"}, 
      {"id":14,"src":"img/15.jpg","bigsrc":"img/15.jpg"}, 
      {"id":15,"src":"img/16.jpg","bigsrc":"img/16.jpg"}, 
      {"id":16,"src":"img/17.jpg","bigsrc":"img/17.jpg"}, 
      {"id":17,"src":"img/18.jpg","bigsrc":"img/18.jpg"}, 
      {"id":18,"src":"img/19.jpg","bigsrc":"img/19.jpg"}, 
      {"id":19,"src":"img/20.jpg","bigsrc":"img/20.jpg"}, 
      {"id":20,"src":"img/21.jpg","bigsrc":"img/21.jpg"}, 
      {"id":21,"src":"img/22.jpg","bigsrc":"img/22.jpg"}, 
      {"id":22,"src":"img/23.jpg","bigsrc":"img/23.jpg"}, 
      {"id":23,"src":"img/24.jpg","bigsrc":"img/24.jpg"}, 
      {"id":24,"src":"img/25.jpg","bigsrc":"img/25.jpg"}, 
      {"id":25,"src":"img/26.jpg","bigsrc":"img/26.jpg"}, 
      {"id":26,"src":"img/27.jpg","bigsrc":"img/27.jpg"}, 
      {"id":27,"src":"img/28.jpg","bigsrc":"img/28.jpg"}, 
      {"id":28,"src":"img/29.jpg","bigsrc":"img/29.jpg"}, 
      {"id":29,"src":"img/30.jpg","bigsrc":"img/30.jpg"}, 
      {"id":30,"src":"img/31.jpg","bigsrc":"img/31.jpg"}, 
      {"id":31,"src":"img/32.jpg","bigsrc":"img/32.jpg"}, 
      {"id":32,"src":"img/33.jpg","bigsrc":"img/33.jpg"}, 
      {"id":33,"src":"img/34.jpg","bigsrc":"img/34.jpg"}, 
      {"id":34,"src":"img/35.jpg","bigsrc":"img/35.jpg"}, 
      {"id":35,"src":"img/36.jpg","bigsrc":"img/36.jpg"}, 
      {"id":36,"src":"img/37.jpg","bigsrc":"img/37.jpg"}, 
      {"id":37,"src":"img/38.jpg","bigsrc":"img/38.jpg"}, 
      {"id":38,"src":"img/39.jpg","bigsrc":"img/39.jpg"}, 
      {"id":39,"src":"img/40.jpg","bigsrc":"img/40.jpg"}, 
      {"id":40,"src":"img/41.jpg","bigsrc":"img/41.jpg"}, 
      {"id":41,"src":"img/42.jpg","bigsrc":"img/42.jpg"}, 
      {"id":42,"src":"img/43.jpg","bigsrc":"img/43.jpg"}, 
      {"id":43,"src":"img/44.jpg","bigsrc":"img/44.jpg"}, 
      {"id":44,"src":"img/45.jpg","bigsrc":"img/45.jpg"}, 
      {"id":45,"src":"img/46.jpg","bigsrc":"img/46.jpg"}, 
      {"id":46,"src":"img/47.jpg","bigsrc":"img/47.jpg"}, 
      {"id":47,"src":"img/48.jpg","bigsrc":"img/48.jpg"}, 
      {"id":48,"src":"img/49.jpg","bigsrc":"img/49.jpg"}, 
      {"id":49,"src":"img/50.jpg","bigsrc":"img/50.jpg"}, 
      {"id":50,"src":"img/51.jpg","bigsrc":"img/51.jpg"}, 
      {"id":51,"src":"img/52.jpg","bigsrc":"img/52.jpg"}, 
      {"id":52,"src":"img/53.jpg","bigsrc":"img/53.jpg"}, 
      {"id":53,"src":"img/54.jpg","bigsrc":"img/54.jpg"}, 
      {"id":54,"src":"img/55.jpg","bigsrc":"img/55.jpg"}, 
      {"id":55,"src":"img/56.jpg","bigsrc":"img/56.jpg"}, 
      {"id":56,"src":"img/57.jpg","bigsrc":"img/57.jpg"}, 
      {"id":57,"src":"img/58.jpg","bigsrc":"img/58.jpg"}, 
      {"id":58,"src":"img/59.jpg","bigsrc":"img/59.jpg"}, 
      {"id":59,"src":"img/60.jpg","bigsrc":"img/60.jpg"}, 
      {"id":60,"src":"img/61.jpg","bigsrc":"img/61.jpg"},]

      var chgTime = 50; //500ms changes

	  var running = true;
	  
      $(function () {


          var getIndx = function () {     //

              var index = Math.floor(Math.random() * (imgs.length));  //Math.random:0-1之间随机; Math.floor:浮点数取整
              if (!getIndx.pindex)   
                  getIndx.pindex = index;
              else {
                  if (getIndx.pindex == index) {
                      return getIndx();
                  }
                  getIndx.pindex = index
              }
              return index;
          }    //getIndx()尾
          
          /*如果只需要随机获取（可重复）的数，那只需要72、81行即可；if-else语句保证不重复*/


          var randFun = function () {

              var index = getIndx();
              $("#img").attr("src", imgs[index].src);
              $("#resImg").css({ "display": ""}).children("img").attr("src", imgs[index].bigsrc).css({ "width": 270 });
              hand = setTimeout(randFun, chgTime);

          }

          var hand = setTimeout(randFun, chgTime);


          $("#btn").bind("click", function () {
          	if(running){   // 如果正在运行，则停止
          		running = false;
                clearTimeout(hand);	  //关闭定时任务
          	}else{ 		//正在停止则重新开始
				running = true;
				hand = setTimeout(randFun, chgTime);   //需要开定时的时候就来一句，每chgTime秒运行一次randFun
          	}
          })
          


      })
  
(function(){
  function writeCode(code){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let stratBtn = document.querySelector('.start')
    
    let druation = 50
    //调速
    let speeds = document.getElementsByClassName('speed')
    let tag = 1 //当前选择的按钮

    for(let i = 0; i < speeds.length; i++){
      speeds[i].onclick = function(){
        speeds[tag].classList.remove('active')
        speeds[i].classList.add('active')
        tag = i
        switch(tag){
          case 0: druation = 5;break;
          case 1: druation = 50;break;
          case 2: druation = 100;break;
          default:
        }
      }
    }
    
    stratBtn.onclick = function(){
      let n = 0
      setTimeout(function run(){
        n++
        container.innerText = code.substring(0,n)
        styleTag.innerText = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n < code.length){
          setTimeout(run,druation)
        }else{
          let end = document.getElementsByClassName('end')[0]
          end.style.display = 'block'
        }
      },druation)
    }
  }
    
 
  var code = `/*先画皮卡丘的鼻子*/
  .nose{
    height: 0px;
    width: 0px;
    
    border: 12px solid ;
    border-color: black transparent transparent transparent;
    border-radius: 50%;
    
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  /*皮卡丘的眼睛*/
  .eye{
    width: 49px;
    height: 49px;
    background: black;
    border-radius: 50%;
    
    position: absolute;
  }
  .eye::after{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid black;
    
    position: absolute;
    left: 5px;
    top: 2px;
  }
  .eye.left{
    right: 50%;
    margin-right: 90px;
  }
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }
  /*皮卡丘的脸*/
  .face{
    width: 68px;
    height: 68px;
    background: red;
    border: 2px solid black;
    border-radius: 50%;
    
    position: absolute;
    top: 85px;
  }
  .face.left{
    right: 50%;
    margin-right: 116px;
  }
  .face.right{
    left: 50%;
    margin-left: 116px;
  }
  /*皮卡丘的上嘴唇*/
  .upperLip{
    height: 25px;
    width: 80px;
    border: 3px solid;
    background: #fEE433;
  
    position: absolute;
    top: 50px;
  
    z-index: 10;
  }
  .upperLip.left{
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
    
    right: 50%;
  }
  .upperLip.right{
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
    
    left:50%;
  }
  /*皮卡丘的下嘴唇*/
  .lowerLip_wrap{
    width: 300px;
    height: 142px;
    
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
  }
  .lowerLip{
    width: 300px;
    height: 3500px;
    background: #990513;
    border: 2px solid black;
    overflow: hidden;
    
    border-radius: 200px/2000px;
    
    position: absolute;
    bottom: 0;
  }
  .lowerLip::after{
    content: '';
    display: block;
    height: 110px;
    width: 100px;
    background: #FC4A62;
    border-radius: 50%;
    
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  /*送你一只皮卡丘*/
  `
  writeCode(code)
})()


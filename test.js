class Card extends HTMLElement{
    constructor(){
        super();
        var templateElem = document.createElement(div);
        templateElem.innerHTML=`
        <template>
            <style>
            .contentInfoLeft{
             height: 270px;
             width:679px;
             font-family: MicrosoftYaHei-Bold;
             min-width: 614px;
             }
            .fl{
               float: left;
                }
            .clearfix:after {
              content: ".";
              display: block;
              height: 0;
              clear: both;
              visibility: hidden;
                 }
            .content-info {
               height: 270px;
               margin-bottom: 10px;
               background-color: #fff;
                }
            .contest-content {
              margin-top: 50px;
              width: 89.8%;
              margin-left: 5%;
              padding-bottom: 50px;

              }
            .content-img-btn {
                    width: 228px;
                }
            .contentActivitybtn {
              background-image: linear-gradient(65deg, #ff941f 5%, #ff1feb);
              width: 120px;
              height: 40px;
              margin: 0 524px 40px 58px;
              line-height: 40px;
              text-align: center;
              cursor: pointer;
              }
              .btnInfo{
                width: 80px;
                height: 28px;
                font-size: 20px;
                color: #fff;
                font-family: PingFangSC-Semibold;
                letter-spacing: 0;
                margin: 6px 20px;
                }
                .content-Img {
                  width: 130px;
                  height: 130px;
                  border-radius: 50%;
                  object-fit: cover;
                  margin: 41px 519px 19px 53px;
                  }
                  .lefttitle {
                    font-size: 36px;
                    font-weight: 700;
                    margin-top: 35px;

                }

                .leftdesc {
                    color: #000;
                    margin-bottom: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 24px;
                }

                .lefttime {
                    margin-bottom: 18px;
                    color: #000;
                    font-size: 24px;
                }

                .leftlike {
                    font-size: 24px;
                    color: #ff621f;
                    font-weight: 700;
                }

                .content-video-info {
                    width: 140px;
                    height: 233.3px;
                    margin: 18px 0px 16px 10px;
                    cursor: pointer;
                }
                 .cover-img {
                    background-size: cover;
                    -moz-background-size: cover;
                    -webkit-background-size: cover;
                    -o-background-size: cover;
                    background-position: 50%;
                    background-repeat: no-repeat;
                }

                .content-video-info-cover {
                    width: 140px;
                    height: 233.3px;
                    object-fit: cover;
                }

                .view-user-info {
                    width: 100%;
                    height: 53.3px;
                    margin-top: -53.3px;
                    background-image: linear-gradient(-180deg, transparent, rgba(0, 0, 0, .63));
                }

                .user-cover-rank {
                    width: 48px;
                }

                .user-nickname-like {
                    width: 92px;
                }

                .content-user-avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    border: 1px solid #fff;
                    margin-top: 9px;
                    margin-right: 99px;
                    margin-left: 11px;
                }

                .content-user-rank-background {
                    width: 25px;
                    height: 10px;
                    margin: -5px 99px 1px 5px;
                    text-align: center;
                }
            </style>
            <div class="content-info clearfix"><!--content-info 就是页面上的一栏-->
                    <div class="contentInfoLeft fl clearfix">
                        <div class="content-img-btn fl">
                            <img src="/image/羊肉.png" alt="最是草原羊肉香" class="content-Img">
                            <a href="#">
                                <div class="contentActivitybtn">
                                    <div class="btnInfo">立即参加</div>
                                </div>
                            </a>
                        </div>
                        <div class="fl left-content">
                            <div title="最是草原羊肉香" class="lefttitle">最是草原羊肉香</div>
                            <div class="leftdesc">活动时间：11月10日—12月15日17:00</div>
                            <div class="lefttime">活动时间：2019.11.10~2019.12.15</div>
                            <div class="leftlike">1062373赞</div>
                        </div>
                    </div>
                   
                   
                </div>
        </template>`;
        //设置数据
        var content=templateElem.querySelector("template").content
        content.querySelector('lefttitle').innerText=this.getAttribute('title');
        content.querySelector('content-Img').setAttribute("src",this.getAttribute("img"));
        this.appendChild(content);
    }
}
window.customElements.define('request-card', Card);
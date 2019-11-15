<template>
    <div class="footer-container">
        <div class="f-con">
            <div class="footer-content">
                <span><a href="###" target="_blank">联系我们</a></span>
                <span><a href="###" target="_blank">版权声明</a></span>
                <span><a href="http://www.scs.gov.cn/" target="_blank">国家工务局</a></span>
                <p>哈尔滨立生教育</p>
                <p>@CopyRright 2016 京ICP备 16019041号-1 京公网安备11010802021910号</p>
            </div>
            <div class="QRcode">
                <img class="QRimg" src="../image/QRcode.png" alt="">
                <img class="QRimg" src="../image/QRcode.png" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .footer-container{
        overflow: hidden;
        width: 100%;
        height: 160px;
        background-color: #17a2b8;
        padding-top: 20px;
        .f-con{
            width: 80%;
            margin: 0 auto;
            .footer-content{
                width: 80%;
                // margin-left: 100px;
                float: left;
                span{
                    margin-right: 10px;
                     a{
                    text-decoration:none;
                    color:#fff;
                    }
                }
                p{
                    margin-top: 10px;
                    color:#fff;
                }  
            }
            .QRcode{
                float: right;
                // background-color: #fff;
                // margin-right: 100px;
                .QRimg{
                    width: 100px;
                    height: 100px;
                    margin-left: 10px;
                }
            }
        }
        
           
    }
</style>
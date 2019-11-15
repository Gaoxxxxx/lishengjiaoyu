<template>
<div>
    <!-- 轮播图 -->
    <rotation-chart></rotation-chart>
    <!-- 教师详情 卡片形式 -->
    
    <div class="teacher-detaile">
        <h2>师资团队</h2>
        <teacher-detaile></teacher-detaile>
    </div>
   
    <!-- 学校概况 图片以轮播图形式进行 -->
    <div class="student-detaile">
        <h2>教学展示</h2>
     <student-show></student-show>
    </div>
     <!-- 文字信息部分 -->
    <div class="detaile-list">
        <h2>公告资料</h2>
        <b-col sm="6" class="b-col">
            <new-ann class='col-xs-5' title='最新公告'></new-ann>
        </b-col>
        <b-col sm="6" class="b-col">
            <new-ann class='col-xs-5' title='高分秘笈'></new-ann>
        </b-col>    
    </div>
    <!-- footer -->
   
</div>
    
</template>
<script>
import RotationChart from '../components/RotationChart';
import TeacherDetaile from '../components/TeacherDetaile';
import NewAnn from '../components/NewAnn';
import StudentShow from '../components/StudentShow';
export default {
    components: {
    RotationChart,
    TeacherDetaile,
    NewAnn,
    StudentShow,
  },
  
}
</script>
<style lang="scss">
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
    .teacher-detaile{
        width: 80%;
        margin: 90px auto;
            h2{
                text-align:center;
                margin-bottom: 40px;
            }
        }
    .detaile-list{
        width: 80%;
        margin: 90px auto;
        h2{
            text-align:center;
            margin-bottom: 40px;
        }
    }
    .b-col{
        display: inline-block;
    }
    .student-detaile{
        width: 100%;
        margin: 0 auto;
           h2{
                text-align:center;
                margin-bottom: 40px;
            }   
    }
    
</style>
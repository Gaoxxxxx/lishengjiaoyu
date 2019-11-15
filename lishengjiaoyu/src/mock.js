import Mock from 'mockjs';
var Random = Mock.Random;

Mock.mock("http://www.douban.com",{
    'list|4':[{
        'img':Random.image('1024x400')
    }],
});

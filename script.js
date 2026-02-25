/**
 * 配置数据 - 来源于你的指令库
 */

// 1. 场景限定句 (纯粹的环境/时间描述)
const sceneSentence = [
    "请在两分钟内", "请在一天的时间里", "在九十小时内", "请在一小时内", "今天之内必须",
    "请在睡前", "请从现在开始", "请在二十四小时内", "请在三十分钟内", "请立刻打开",
    "请在四小时内", "用你最顺手的方式", "在大街上当众", "请在空调房里",
    "请将手边的物品", "请在三小时内", "若你感觉被约束请", "请在晚上九点整",
    "在二十四小时内务必", "请在一分钟之内", "在冬天的户外", "在夏天的烈日下", 
    "请在深夜里", "写作业的过程中", "请在两小时内", "请在今天结束前","在十二小时三十七分钟二十四秒后"
];

// 2. 核心行为句 (动宾结构，通用性强)
const actionSentence = [
    "对着镜子说八百遍我是正常人", "喝下一升的热牛奶",
    "开始三十分钟的剧烈运动", "只用右手写字吃饭和做所有事",
    "去往图书馆拿出一本任意的书", "戴上黑色面具找到一个陌生人",
    "对朋友说痛苦啊你就是我的唯一", "睡十分钟醒十分钟重复二十四小时", 
    "举起一把刀对着墙面划下痕迹", "眨三次眼并用力点一次头", 
    "找到任意白色液体并喝掉", "给见到的第一个熟人一拳",
    "工作十二小时后立刻下班休息", "在最痛苦的时候开怀大笑",
    "听完所有你最喜欢的音乐", "用橡皮当笔写完一次作业", 
    "用叉子当筷子吃完一顿饭", "盯着镜子里的自己直到认不出",
    "学会一支简单的舞蹈并跳出来", "买五十六桶爆米花并全部打开", 
    "吹一小时的冷气不许离开", "连续玩二十四小时的游戏不休息",
    "把这首哈基米音乐完整唱完", "流利说完二十六个英文字母",
    "模仿猫咪的样子让猫睡床你睡猫窝", "喝下一升的温牛奶", 
    "写一篇短篇小说并分享给三个人", "站在垃圾桶上享用你的晚餐", 
    "站在大街上淋一场完整的雨", "给自己放二十四小时的无理由假期",
    "让喜欢的人发现你最奇怪的小癖好", "看完所有你最喜欢的动漫",
    "学会游泳并前往湖边尝试", "免费拿到一颗鸡蛋并好好保存", 
    "和朋友PK并一定要获得胜利", "向星星许愿并两小时内完成愿望", 
    "展示一个你最拿手的后空翻", "把左手和右手的物品互换使用",
    "只吃一半煮好的面条剩下的倒掉", "打开空调调到最低温度", 
    "打开暖气调到最高温度", "在街道垃圾桶旁品尝你的零食", 
    "晒三十分钟的日光浴不遮挡", "在白墙上看出绿色的图案",
    "聆听自己的内心并前往想去的地方", "把任意视频的评论全部看完", 
    "和朋友吵架直到他不再回怼", "刷完一套高考模拟试题并核对答案",
    "听mili的歌并三连", "在漆黑的下水道念出痛苦啊你便是我的唯一",
    "找到一个时长11分45秒的视频并看完", "向暗恋的人表白并向右跳一下",
    "假装自己是警察并对路人说你被逮捕了", "假装自己是明星并让路人找你签名",
    "找到一只山羊并骑在上面两小时", "把自己的内脏挂在家中的墙上，骨头部分可以不用处理。",
    "打开你最喜欢的游戏并给今天第一个登录的游戏充值任意金额。", "点一份外卖若超时就并且只给外卖员一块钱配送费。",
    "请前往附近的医院并跟医生坚持说自己有病并说出症状。",  "在装满热牛奶的泳池中跳一支舞并把泳池里的牛奶喝完。",
    "打开边狱巴士并只用一次通关15牢。", "无视朋友发的所有信息"
];

// 3. 补充要求句 (后缀，增加难度或仪式感)
const supplementSentence = [
    "然后若无其事的离开现场", "选择棕色头发的为优",
    "并且全程不让任何人发现", "骨头部分可以不用处理", "全程保持面无表情不说话",
    "做完之后抬头数十分钟的星星", "优先选择黑色头发的",
    "做这件事时无需有任何犹豫", "完成后一定要拍照留念记录", "不许借助任何的工具和外力",
    "直到完整完成这件事再停止", "整个过程不能被任何人察觉", "一定要自然不刻意",
    "全程保持沉默一句话也不说", "完成后要向我汇报结果", "必须独自一人完成不能找人帮忙",
    "做这件事时要放着哈基米音乐", "完成后把结果发布到你的社交平台"
];

// 4. 彩蛋库 (收纳逻辑强耦合、自带因果、或完整的一句话)
const easterEggs = [
    "不念完自然常数e就不要回家。",
    "请在自己生日当天的凌晨零点，准时祝自己生日快乐。",
    "向你最喜欢的女生表白，直到她明确同意或者拒绝为止。",
    "现在去喝一口水",
    "关闭屏幕",
    "染上黑发并改名，然后找到一位伴侣，白色头发为优。",
    "告诉您所遇到的第34个人，自然常数其实是个整数。",
    "煽动31只蝴蝶的翅膀。",
    "用摄影机记录14区后巷居民的日常生活。",
    "在任意工坊购买一把长度大于12英寸的短剑。",
    "不要去执行任何所谓的指令。",
    "在路口转14个弯，并直走12m",
    "将有生命的画杀死",
    "在屋顶撑伞，并将伞扔到下面人头上",
    "将你路上遇到的第三片树叶放在头上3秒",
    "俯瞰天空13秒",
    "走到最近的十字路口，向对面方向遇见的第三个人挥手。",
    "在向母亲说过晚安以后，数完圆周率然后在十分钟内睡着。",
    "同时向前后分别移动十米",
    "屏住呼吸30!秒",
    "背诵圆周率倒数第六到第七百一十二位，结束之前不准饮水",
    "两分钟内按照完全向北的直线移动一千米",
    "在十二小时三十七分钟二十四秒后，完成一本针织的书",
];

// 乱码库：使用全角/宽字符减少抖动感
const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWSYZ0123456789$#@&*%?±!<>-_\\/[]{}—=+^abcdefghijklmnopqrstuvwsyz"; 
const displayElement = document.getElementById('display-container');
const btn = document.getElementById('trigger-btn');
let isRunning = false;

/**
 * 核心动画函数：乱码逐字锁定
 */
function startScrambleAnimation(targetText) {
    let iteration = 0;
    let frame = 0;
    const stepSpeed = 5; // 稍微加快速度

    function update() {
        let output = "";
        let isAllComplete = true;

        for (let i = 0; i < targetText.length; i++) {
            if (i < Math.floor(iteration)) {
                output += targetText[i];
            } else {
                // 随机乱码
                const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                output += randomChar;
                isAllComplete = false;
            }
        }

        displayElement.innerText = output;

        if (!isAllComplete) {
            if (frame % stepSpeed === 0) {
                // 长句子自动加速锁定
                iteration += targetText.length > 20 ? 1 : 0.6; 
            }
            frame++;
            requestAnimationFrame(update);
        } else {
            isRunning = false;
        }
    }
    update();
}

/**
 * 按钮点击事件
 */
btn.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;

    let finalSentence = "";

    // 10% 概率触发彩蛋库中的完整逻辑句
    if (Math.random() < 0.15) {
        finalSentence = `致：${easterEggs[Math.floor(Math.random() * easterEggs.length)]}`;
    } else {
        // 90% 概率三段式拼装
        const scene = sceneSentence[Math.floor(Math.random() * sceneSentence.length)];
        const action = actionSentence[Math.floor(Math.random() * actionSentence.length)];
        const supplement = supplementSentence[Math.floor(Math.random() * supplementSentence.length)];
        finalSentence = `致：${scene}${action}${supplement}`;
    }

    startScrambleAnimation(finalSentence);
});
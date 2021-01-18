
var documents = [{
    "id": 0,
    "url": "http://happycat.cc/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://happycat.cc/about",
    "title": "About us",
    "body": "你好，谢谢你找到住在德国的CC猫。我是旅居德国的程序员，运营这个网站分享德国工作信息，职场提升，和大家来德国的故事。如果你也想讲讲你的故事，欢迎联系我。我也在制作播客幸福猫，分享旅德中国人的故事。如果你是CS/Info相关专业的德国留学生，咨询德国职业路线/德国找工作，请整理好问题后联系，老学姐很乐意帮忙做规划+内推。如果你是已经工作的IT从业人员，咨询德国工作，请关注微信公众号 CC猫在德国。 联系我: Email：thehappycatpodcast@gmail. com Buy me a Bubble Tea 买杯奶茶嘛  微信扫码给CC猫加个小鱼干"
    }, {
    "id": 2,
    "url": "http://happycat.cc/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://happycat.cc/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 4,
    "url": "http://happycat.cc/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://happycat.cc/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://happycat.cc/reply-message-after-work/",
    "title": "下班后的工作消息要不要回？德国打工人：不回！",
    "body": "2021/01/18 - “不回”的“诗与远方”: 《奇葩说7》第8集的辩题是“下班后的工作消息要不要回？”。在国内工作的朋友们别说我“凡尔赛”，没在国内工作过的我完全不理解为什么下班后还要回消息。下班后根本没人能联系到我😂 初始观众投票几乎平手，非常出乎意料。听完了正方的观点之后，我才理解为什么很多人认为应该回：  不回，错过机会 不回，老板不满 不回，耽误其他人的工作我似乎更幸运，我工作在一个可以轻松说出“不回”的地方。因为有一个不同的视角，因为无法感同身受，我无法轻易的说出在国内工作的朋友们应该“回”还是“不回”。在我看来，这似乎是这个社会所有人应该一起努力改变的事情。 在一个每个人都“不回”的职场里，不回，是理所应当。辩论中说“不回”是诗与远方，在这道辩题面前，我就生活在“诗与远方”里。 工作与生活的边界感: 我对工作与生活的边界感是由身边的同事和这里的法律培养起来的。 和同事喝咖啡聊天的时候谈起了公司手机。一个免费使用的最新款手机，可以随时查看公司邮件，参加会议，确实为工作提供了方便。但聊天中几个德国同事都表示，绝对不会订公司手机。他们完全不想在工作时间外被联系到。 很多同事的私人手机号码从不告诉其他同事。实际上，私人手机号码无需告知公司。即使同事知道我的私人手机号码，我也从未因为工作被联系过。 有天因为工作时间去看医生，下班晚了点，从大楼出来发现整栋楼灯都黑了。发了个朋友圈展示熄灯的办公楼，同事评论，根据工作合同，我们不允许加班。 我的雇佣合同里清楚的写着，我每周只能工作40小时。任何额外的工作时间都需要经过工会批准。去年圣诞节的时候，我做了第一次的On-call duty。因为这是合同外的工作时间，我按照公司内的要求提前7天向工会提交了申请。当时觉得流程繁琐，现在回想，就能理解这些流程的意义。 法律: 下班后。根据《工作时间法》（Arbeitszeitgesetz），工作日的工作时间不应超过8小时，员工没有义务在下班后接电话或回复消息。 周末和节假日。一整天的休假需要做什么？关上公司手机。根据工作时间法，周日和假日不应工作。 度假。民意调查机构Civey代表TüV做的意向调查里显示，80%的被调查者的老板从不期待在假期中能联络到他们。根据联邦劳工法院的判决，雇主只能在面对生存危机，且“不存在任何其他出路的紧急情况”下打电话(Az. 9 AZR – 405/99)。 例外: 以上说的都是像我一样的普普通通打工人的情况。如果你承担非常多的责任，且工资很高，就有下班后在紧急情况下工作的义务。 在某些要求availability的行业中，也存在例外，比如医生、护士、消防员、和7x24小时营业的超市。责任感不能当钱花，所以工作时间外的补贴通常都是正常工资的1. 5-3倍。 Reference: [1] Darf ich meine Mitarbeiter im Urlaub anrufen? "
    }, {
    "id": 7,
    "url": "http://happycat.cc/best-employer-2021/",
    "title": "2021年德国员工最满意雇主",
    "body": "2021/01/14 - Glassdoor根据2019年10月22日 - 2020年10月19日的员工反馈评选出了2021年最佳雇主，评选主要标准是员工对自己所在公司的满意程度。 No. 1 Roche 罗氏制药:  Gutes Arbeitsklima, sehr gute Bezahlung, Work-Life-Balance perfekt. 良好的工作环境，非常好的薪酬，完美的Work-Life-Balance。 No. 2 Google:  Super Arbeitsatmosphäre, nette hilfsbereite Kollegen, kostenloses und fantastisches Essen, Yoga, Massagen, alles dabei. 超级好的工作气氛，友善的乐于提供帮助的同事们，免费且非常棒的食堂，瑜伽，按摩，什么都有了。 No. 3 PUMA:  Tolle Work-Life-Balance, tolle Kollegen, wettbewerbsfähiges Gehalt und zahlreiche Möglichkeiten, neue Dinge zu lernen. 良好的工作与生活平衡，出色的同事，非常有竞争力的薪水，以及大量学习新事物的机会。 No. 4 MHP - A Porsche Company 咨询公司:  Man hat sehr große Entwicklungsmöglichkeiten und viel Spielraum, sich ein passendes Projekt zu suchen. 非常多的发展机会，还有很多寻找合适项目的空间。 No. 5 Siemens Healthineers 西门子医疗:  Tolle Atmosphäre, sehr gute und leistungsgerechte Bezahlung sowie spannende und abwechslungsreiche Aufgaben. 良好的氛围，与工作绩效相关的非常好的报酬以及激动人心的各种工作。 No. 6 Volkswagen 大众汽车:  Flexibilität, neue Handlungsfelder, Entwicklungschancen, Fortbildung, Internationalität. 灵活，新的领域，发展机会，进阶培训，国际化。 No. 7 SAP:  Remote Arbeit wird unterstützt, spannende Projekte, Mitarbeiter stehen im Fokus, zukunftsorientierte Unternehmenswerte. 支持远程工作，激动人心的项目，员工是公司关注的重点，面向未来的公司价值观。 No. 8 Capgemini 凯捷 咨询公司:  Strukturiertes Onboarding trotz Corona, sehr großes Angebot an Weiterbildungen, flexible Arbeitszeit und Work-from-home. 尽管有新冠疫情，仍然有结构化的入职培训。许多培训课程，灵活的工作时间，在家工作。 No. 9 Porsche 保时捷:  Gute Entwicklungsmöglichkeiten und der neuste Stand der Technik. 良好的发展机会和最新的技术。 No. 10 BMW 宝马:  Erfolgreiche Transformation zu nachhaltigem Unternehmen, viele Mitarbeiter-Benefits, hervorragende Arbeitsatmosphäre. 成功转型为可持续发展的公司，许多员工福利，优越的工作氛围。 No. 11 Salesforce:  Die Technologie ist super zukunftsorientiert, das Wohl der Mitarbeiter steht im Vordergrund und Werte werden gelebt. 公司的技术非常先进，员工的幸福感是最重要的，价值被实现。 No. 12 Airbus:  Sehr gute Konditionen, Aufstiegschancen, Weiterbildung und nette Kollegen. 非常好的条件，晋升的机会，进一步的培训和友善的同事。 No. 13 Robert Bosch:  Sehr abwechslungsreiche Tätigkeit, hervorragende Arbeitsbedingungen und sehr gute Entwicklungsmöglichkeiten. 工作内容多种多样，优越的工作条件和非常好的发展机会。 No. 14 European Central Bank:  Gute Work-Life-Balance, es gibt viele Möglichkeiten zum Lernen und viele kompetente und freundliche Leute. 良好的工作与生活平衡，有许多学习的机会，和非常有竞争力且友好的同事。 No. 15 Siemens:  Hohe Selbständigkeit, Weiterbildungen, auf persönliche Interessen wird eingegangen und die Arbeitszeiten sind flexibel. 高度的独立性，进阶培训，个人兴趣会被考虑在内，灵活的工作时间。 No. 16 Infineon Technologies:  Sehr gutes Arbeitsklima, jeder Mitarbeiter wird wertgeschätzt, überdurchschnittliche Bezahlung, international &amp; divers. 非常好的工作氛围，每个员工都受到重视，薪酬高于平均，国际且多元化。 No. 17 Adesso AG 咨询公司:  Gute Community, Obst und Süßigkeiten, erstklassiges Schulungsprogramm und jeder ist ein Teil des Ganzen. 良好的社区，水果和零食，一流的培训计划，每个人都参与其中。 No. 18 PwC 普华永道:  Arbeitskollegen, Lernmöglichkeiten, Networking, Experience, Unterstützung von Managern und Seniors. 同事，学习机会，人脉关系，经验，来自经理和高级同事的支持。 No. 19 Vodafone 沃达丰:  100% Homeoffice, offene Einstellung und Unterstützung für alle Lebenssituationen, positive Unternehmenskultur. 100%在家办公，开放的态度和对所有生活情况的支持，积极的企业文化。 No. 20 Audi:  Sehr gutes Arbeitsklima, tolles Produkt, viele Weiterentwicklungsmöglichkeiten. 非常好的工作氛围，优秀的产品，许多进一步发展的机会。 No. 21 IKEA:  Gute Entwicklungschancen, viele Benefits und eine sehr offene Unternehmenskultur, in der sich jeder einbringen kann. 良好的发展机会，许多福利和非常开放的企业文化，每个人都可以参与其中。 No. 22 Daimler 戴姆勒:  Viele Benefits und Zusatzleistungen, gute Altersversorgung, sicherer Arbeitsplatz und flexible Arbeitszeiten. 许多福利，良好的退休金，有保障的工作岗位和灵活的工作时间。 No. 23 audibene 医疗器械:  Flache Hierarchien, sehr unternehmerisch, positiver Tatendrang und eine DNA, die Mitarbeiter zu entwickeln. 扁平的结构，极富企业家精神，积极进取的精神，非常注重培养员工。 No. 24 Max-Planck-Gesellschaft:  Sehr hohe Qualität von Instrumenten, Software und Chemikalien. Forschung wird auf dem höchsten Niveau bertrieben. 高质量的仪器，软件和化学药品。最高级别的研究。 No. 25 Allianz:  Hervorragende Weiterentwicklungsmöglichkeit innerhalb des Konzerns und eine gute Altersvorsorge. 公司内进一步发展的的机会和良好的养老条件。 "
    }, {
    "id": 8,
    "url": "http://happycat.cc/new-colleague/",
    "title": "新年来了个新同事，我们是这样帮她onboarding的",
    "body": "2021/01/11 - 新年来了个新同事，从其他stack转过来。记录下我们是如何帮助一个对我们的stack不熟悉的新人onboarding的，希望能帮助到到新入职的朋友们呀。  我们小组的tech stack：Microservice （公司自己造的前端框架/JS + Node. js，SQL，Kafka），Git，CI/CD其实就是个普通的用JavaScript写microservice的小组 Brainstorming: 这天的daily scrum提前结束，architect提议大家一起想一想onboarding需要做什么。我们就在一个online white board上写了一大堆posts。 大概就是这样，把所有想到的东西都写上去 比如前年从Java转Node. js的时候大家一起学的网课，一次如何从0建立新repository的pair programming，一个了解小组test strategy的session，需要一个同事帮忙授予新同事所有开发工作需要的权限。 Prioritizing: 有些topic虽然需要了解，但是用到的时候再学就好了。在我们这个小组里，对新同事来说最重要的topic是学习JavaScript，学会使用Git，理解我们的Test Strategy和Test-driven development（TDD）。 其他的Topic，比如Messaging和Kafka，可以在以后遇到的时候通过pair programming快速上手。 Action Items: 优先级和atcion items 新同事在前两个月预计都不会有什么产出，但是学习也是工作的一部分嘛。  我们帮她在JIRA board里建立了她的学习task，方便她tracking自己的进度。 需要同事帮忙setup或者授予权限的地方，建立task，发送meeting request来block时间。 下周刚好有同事做在新的micro service里initialize messaging service的工作，block时间，和新同事一起pair programming。Others: 小组建立两年，期间也陆续有同事加入。我们已经有了一套比较完整的wiki：如何设置IDE的plugin，什么是test strategy，大家一起学过的网课链接和介绍，去年刚刚学习messaging时候的学习笔记和录制的roll out session。 这些文档不仅能帮助新同事，在自己需要查询复习的时候，也很有帮助。 "
    }, {
    "id": 9,
    "url": "http://happycat.cc/a-sprint-retro/",
    "title": "一次轻松的回顾会议：Sprint Retrospective with Memes",
    "body": "2021/01/08 - 这个Sprint期间大多数同事都在休假，不过我们还是做了做了一个很短又很有趣的Sprint Retro。 Memes: Sprint Retrospective: 基本规则，收集Team对这个Sprint的想法，分为good, bad, ugly。bad和ugly的区别是ugly无法在小组内改变。  Happy new year! Find Memes for good and bad things that happened during the last Sprint! Also find something we can’t change within the team (ugly). Good Memes: 来自我：之前提到过我在去年12月25号做了一天的on-call duty。产品release后第一次on-call，像想象中一样，什么都没发生。来自同事：圣诞假期和新年之间的工作日只有我和另一个同事坚守工作岗位，连Daily Scrum都没开。大家都休假的时候工作特别轻松来自同事：休假是快乐的。但因为Corona，圣诞节也不能大规模的和家人朋友聚会。 Bad Memes: 来自Quality Engineer：新年后回来工作第一天，发现数据库down了:)来自同事：新年第一周还非常放松，下周就要回到忙碌的正常工作中了。来自Product Owner：PO表示这个Sprint几乎没什么好deliver的。来自我：这个Sprint做了两三个前端的活，太难了，我可能没有做前端的天赋。 Ugly Memes: 来自同事：欧洲的疫情比想象中持久太多了，这周刚刚宣布延长lockdown直到1月31日。来自同事：每次休假后邮箱里都有几百封邮件等着你看。 感谢我们有趣的Scrum Master，让各种sprint meeting充满了乐趣。 "
    }, {
    "id": 10,
    "url": "http://happycat.cc/episode2/",
    "title": "从四川小村庄到德国汉堡，普通姑娘Lena越努力越幸运的不普通人生",
    "body": "2020/09/30 - 在线收听: 海外听众点这里: 国内听众点这里: 笔记和链接: 本期嘉宾是在德国做互惠生，又继续在这里读研究生的Lena。我们聊了她在互惠生家庭和德国男朋友的两段生活中遭遇的文化冲突，也聊了Lena从中国农村到德国大城市这一路的感悟。: 🕙时间轴 00:30 Lena在互惠生家庭遭遇的culture shock 03:40 简短的自我介绍 04:05 什么是互惠生？ 06:18 如果你也是这种情况，考虑下互惠生项目吧 07:38 和德国家庭一起住，Lena学到了如何与德国人相处 11:00 两件有些心酸的小事，德国的“规则”没那么绝对 19:00 为什么选择来德国？ 20:50 来自家庭的支持 22:31 申请学校 23:20 FH大学的实践性更强吗？ 24:36 和德国男朋友在一起也免不了文化冲突 28:53 回首往事，越努力越幸运Credit感谢刚考完试正在搬家的Lena抽出时间和我一起录了两个多小时的采访。9月一直在参加培训，疯狂加班，这期节目剪了一个多月。感谢Lena的容忍，还没和我绝交😂 🔗Links 豆瓣互惠生小组 https://www. make-it-in-germany. com/en/ 来德国，找一份工作：聊聊德国留学和找工作签证 https://mp. weixin. qq. com/s?__biz=MzI0ODczNTE3Ng==&amp;mid=2247483805&amp;idx=1&amp;sn=db27fd9288e7a64acc55d7931238d99e 德国FH和Uni两种大学的区别，1000字讲清楚德国教育体系 https://mp. weixin. qq. com/s?__biz=MzI0ODczNTE3Ng==&amp;mid=2247484009&amp;idx=1&amp;sn=5c8c2be8db2608fa3f07abb18f903ca2 德国互惠生官方信息     德国联邦劳动局关于Aupair的介绍（德语） https://www. arbeitsagentur. de/unternehmen/arbeitskraefte/au-pair   Au-pair Society e. V. . 德国互惠生协会 https://www. aupair-society. de   经德国互惠生协会审查后成为会员的德国互惠生中介 https://www. aupair-society. de/unseremitglieder   德国联邦劳动局关于Aupair的介绍（英语） https://www. arbeitsagentur. de/datei/au-pair-in-germany-en_ba012998. pdf   德国驻中国使领馆，互惠生签证申请须知 https://china. diplo. de/blob/1341632/d12749addf98e05d81c44ca4157264fc/pdf-merkblatt-natvisum-aupair-data. pdf   "
    }, {
    "id": 11,
    "url": "http://happycat.cc/episode1/",
    "title": "从中关村软件园到德国，程序员也可以拥有诗和远方",
    "body": "2020/08/10 - 在线收听: 海外听众点这里: 国内听众点这里: 笔记和链接: 本期嘉宾是从中关村搬家到德国的程序员老吴，我们聊了他来德国后工作和吃喝玩乐上的改变，最后介绍了他是如何通过找工作签证在德国找到了工作。: 🕙时间轴 00:22 老吴介绍他在国内的工作经历 01:05 在德国上班和在国内上班哪里不一样？ 03:27 选择离开的理由 04:41 出国之后，人人都是中华小当家 05:35 一家之言：什么样的人更适合来德国？ 06:39 谁说好山好水好寂寞，听听我们都在德国玩点什么？ 10:21 来德国的动机 13:25 来德国的准备：辞职，学德语 16:43 找工作签证 Job Seeking Visa （JSV） 18:32 在德国找工作，英语还是德语？ 19:45 语言有多重要？第二个面试 23:26 拿到offer！ 30:06 如果你要来德国，给你一个建议Credit感谢素未谋面的老吴和我一起花了两个多小时录制这期节目，为这期节目取了有诗意的名字🙏感谢小人物播客的阿乐，阿乐录制了一系列播客新手入门教学视频，对一个从没用过音频剪辑软件的人来说非常有帮助。 🔗Links 德国工作移民官方网站 https://www. make-it-in-germany. com/en/ 来德国，找一份工作：聊聊德国留学和找工作签证 https://mp. weixin. qq. com/s?__biz=MzI0ODczNTE3Ng==&amp;mid=2247483805&amp;idx=1&amp;sn=db27fd9288e7a64acc55d7931238d99e 找工作签证 JSV     德国工作移民官方网站关于找工作签证的介绍 https://www. make-it-in-germany. com/en/visa/kinds-of-visa/jobseekers/   德国驻中国使领馆，找工作签证申请须知 https://china. diplo. de/blob/1341664/ba2b3dec2afaff81d872572ead3244fd/pdf-merkblatt-natvisum-arbeitsplatzsuche-data. pdf   "
    }, {
    "id": 12,
    "url": "http://happycat.cc/salary/",
    "title": "在德国做码农，能挣多少钱",
    "body": "2020/05/31 - 先声明：本文内薪酬信息有和在相关公司就职的小伙伴求证过，但所有信息均来自公开数据，没有泄漏公司机密个人隐私。 先划一条baseline: 求职网站Stepstone的2019年薪酬报告指出： IT行业平均薪酬为€60545/年 高等学历教育毕业的雇员的平均薪酬为€65172/年 其中，软件工程师的薪酬随着工作经验的增长，平均工资如下：       工作经验   平均税前工资（欧元/年）         &lt;2年   €46393       3-5年   €54931       6-10年   €60582       &gt;10年   €67975   LinkedIn也调查过德国软件工程师的薪资：       工作经验   中位数税前工资（欧元/年）         &lt;1年   €48000       1-5年   €51000       6-14年   €60000       &gt;15年   €64400    到底能赚多少钱？: 先介绍下四家公司代表： SAP：德国最大的软件公司，主营业务为企业资源管理软件（ERP），在全世界均有业务。 Zalando：德国最大的服装电商，业务遍布欧洲，近年来一直有从海外招聘的案例。 博世（Bosch）：全球最大的汽车零部件供应商之一，主营业务包括汽车（硬件和软件），消费品（包括家用电器和电动工具），工业技术（包括驱动和控制）以及能源和建筑技术。 亚马逊（Amazon）：一家疫情中股价飞涨的公司。 这四家公司对德国IT从业人员来说分属于四种类型： SAP - 传统软件公司Zalando - 互联网公司博世 - 非IT行业公司，制造业公司亚马逊 - 美企 一个软件工程师在这四家公司中可以期待的薪酬（含奖金）       公司/工作经验   &lt;1   1-3   4-6   7-9         SAP   €51611   €56715   €63621   €71538       Zalando   €51812   €54706   €61871   €67318       博世   €58819   €64641   €73382           亚马逊   €60128   €62150   €72150   €72254    随便说说的小结：: 两家传统的德国公司SAP和Bosch严格遵循了工龄越长工资越高，每年涨幅3%的德国薪酬默认规律。 亚马逊遵循着在美国的规则，薪水和工作经验没有直接关系。Zalando这样的互联网公司也模仿美企的套路。 美国背景的互联网公司工资似乎都高一点。 德国汽车行业相关的公司工资高、福利好，只是说德语的比例高。 平均来看，大公司的工资比小公司高。 薪酬也和公司的地理位置相关：法兰克福、慕尼黑、斯图加特、汉堡&gt;杜塞尔多夫、柏林。当然工资高的城市房价也高，工资不高的城市也可能房价高（柏林）。 挺多德国公司都在某个大城市附近的小村小镇。想住大房子养狗养娃的可以考虑下这类公司：SAP、博世。 要努力争取每一次谈薪水和奖金的机会。 大幅度加薪的三条道路：升职、内部转岗、跳槽。 跳槽需谨慎：每年换一家公司的人不太受欢迎。 "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});
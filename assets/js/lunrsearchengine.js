
var documents = [{
    "id": 0,
    "url": "http://happycat.cc/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://happycat.cc/about",
    "title": "关于我",
    "body": "你好，谢谢你找到住在德国的CC猫。我是旅居德国的程序员，运营这个网站分享德国工作信息，职场提升，和大家来德国的故事。如果你也想讲讲你的故事，欢迎联系我。我也在制作播客幸福猫，分享旅德中国人的故事。如果你是CS/Info相关专业的德国留学生，咨询德国职业路线/德国找工作，请整理好问题后联系，老学姐很乐意帮忙做规划+内推。如果你是已经工作的IT从业人员，咨询德国工作，欢迎联系我做付费咨询。 联系我: Email：thehappycatpodcast@gmail. com Buy me a Bubble Tea 买杯奶茶嘛  微信扫码给CC猫加个小鱼干"
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
    "url": "http://happycat.cc/job-searching",
    "title": "德国求职101",
    "body": "1. 德国求职1011. 1 签证，求职渠道怎么来德国：留学，工作，永久居留德国求职渠道：网站、招聘会、猎头1. 2 语言？可以用英语工作吗？英语工作多吗？不会德语，在德国能找到工作吗？结论：码农可以用英语工作，开放职位很多。2. 收入2. 1 德国程序员工资说在前面，想来德国就不要指望拿高薪了，不如踏踏实实留在国内或者去美国。德国收入情况也是和地理位置有关，北边、东边低，南边高。2021年，在德国写代码，能挣多少钱？2. 2 举个例子算税前税后这个大家平时说的税，除了工资税，还包括医疗保险、养老保险、失业保险。公立医疗保险包括了所有你必须的医疗需求。养老保险就没啥好说的，全世界都没解决这个问题，在德国也不可能指望政府的养老保险保障你的退休生活了。。。在德国上班的码农是不怕失业的，政府兜底一年，保证你的生活水平不会发生变化。以2020年为例，例子1: 小明在德国单身，年收入6万，每月5000欧，税后每月2984. 70欧。例子2: 小明在德国一家三口，太太全职，小孩未满18岁，年收入6万，每月5000欧，税后每月3402. 54欧。此外还可以领取每月儿童金204欧。你要是问每月200欧能不能养活一个小孩，大众标准的吃穿+上学足够了，因为上学不花钱。3. 房价？举几个例子租房平均价格，欧元/平米，2020年第一季度慕尼黑 17. 76法兰克福 14. 92柏林 12. 85慕尼黑租个40平单身公寓，加上每月的水电暖网，市内位置还不错的，850欧起。同样的房子在法兰克福，每月700欧起；在柏林660起。当然如果长年健身，且保持警惕的话，可以在便宜的区租到便宜的房子。全世界的每个大城市里总有几个地方，普通弱小的民众不应该半夜三更在那里闲逛。买房很多德国人都是一辈子租房，年过40攒了钱买别墅。现在不一样了，现在利率可低了，低于1%。基本上，码农毕业后工作2-3年，拿到永久居留，攒了点首付，就可以贷款买房了。以柏林为例，柏林市中心，好区，45万欧元可以买到80平（使用面积）两室两厅的新建公寓。德国新建的公寓质量好、能耗低，未来使用过程中很省钱。慕尼黑的房价就不说了，今年还上了全球房价最贵城市排行榜。。。可能在Google上班就买得起新房吧。 联系我: Email：thehappycatpodcast@gmail. com Buy me a Bubble Tea 买杯奶茶嘛  微信扫码给CC猫加个小鱼干"
    }, {
    "id": 5,
    "url": "http://happycat.cc/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://happycat.cc/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "http://happycat.cc/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "http://happycat.cc/salary/",
    "title": "德国程序员赚多少？2021版",
    "body": "2021/02/06 - 这篇文章是CC猫的求职101系列的一篇，提供了德国几个类型公司的工资数据，给想了解德国工作市场的朋友们做个参考。 先划一条baseline: 求职网站Stepstone的2020年薪酬报告指出： IT行业平均薪酬为€60545/年，高等学历教育毕业的雇员的平均薪酬为€65172/年 其中，软件工程师的薪酬随着工作经验的增长，平均工资如下：       工作经验   平均税前工资（欧元/年）         &lt;2年   €46393       3-5年   €54931       6-10年   €60582       &gt;10年   €67975    到底能赚多少钱？: 先介绍下四家公司代表：  SAP：德国软件公司。 Zalando：德国互联网公司。 Bosch：德国制造业公司。 Amazon：美国公司的德国分公司一个软件工程师在这四家公司中可以期待的薪酬（含奖金）       公司   {New Grad 0-1}   {Mid Level 3-5}   {Senior 5-10}         SAP   €51000   €65000   €72000       Zalando   €50181   €64900   €73000       博世   €64064   €76645   €83752       亚马逊   €69720   €86310   €104160   SAP，Amazon，Zalando的工资数据来自Glassdoor，level. fyi以及小伙伴们提供的中位数。 Bosch的工资有每个级别对应的公开数据，采用的数据来自巴符州IG Metall工会：分别为EG12，EG14，EG16, 包括IG Metall提供的平均Leistungszulage 7. 5%，度假金，Sonderzahlung 25%。 我怎么看德国职业市场：: 德国程序员们面对的公司大概分为4种:  德国中小公司 德国大公司: SAP，Bosch，Daimler，Siemens… 模仿美国公司的德国公司: 互联网公司，StartUps… 美国公司能力更重要：德国中小公司 = 德国大公司 &lt; 模仿美国公司的德国公司 = 美国公司 工资更高：德国中小公司 &lt; 德国大公司 = 模仿美国公司的德国公司 « 美国公司 说德语更多：德国中小公司 = 德国大公司 « 模仿美国公司的德国公司 &lt; 美国公司 普通程序员的压力：德国中小公司 = 德国大公司 &lt; 模仿美国公司的德国公司 &lt;= 美国公司 最后想提醒大家，高薪可能代表更多的责任，更大的压力。: 以上比较都是我的个人看法，不能代表所有公司的情况。 "
    }, {
    "id": 9,
    "url": "http://happycat.cc/the-way-to-germany/",
    "title": "怎么来德国：留学，工作，永久居留",
    "body": "2021/01/31 - 今年想花时间写一套系统的德国求职指南，第一篇就粗略的介绍下来德国的几种方式：留学、找工作签证、离岸求职、内部转岗。 在德国读书: 德国留学的性价比很高，免学费（除巴登-符腾堡州每学期1500欧），许多专业的硕士项目都有英语授课，生活费700-1200欧，大城市稍微贵一点。 上学期间可以熟悉德国生活，学德语。前两个学期准备好生活费，好好学习攒学分，之后做点实习就能养活自己，假期整个欧洲随便浪。 毕业后如想留下，一定能找到工作，最快21个月拿到永久居留。如果有其它想法，凭着德国学历回国还是去其他国家也不会有问题。 学生签证附带每周20小时的工作许可，可以在学期中做每周最多20小时的学生工（Working Student），或者选择一年内连续做6个月的实习。毕业论文可以选择在学校做，也可以在公司完成。全职（100%）的学生工作通常有1000-2000欧的月收入。 在德国读博士在德国读博士基本上有3种funding方式： 奖学金，包括CSC，DAAD，洪堡，玛丽居里等，应申请学生签证。 项目资金。  100%，全职职位，工作签证，年收入在40k-50k欧元左右，正常交养老保险，如果有蓝卡资格，最快2年即可以拿到永久居留。 50%，半个职位，工作签证或学生签证，由当地外管局决定。企业博士，公司资助读博，正常领工资，工作签证，交养老保险。 在德国工作:    来德国找工作   找工作签证 Job Searching Visa（JSV），德国政府提供以找工作为目的来德国的签证，时长6个月，要求本科及以上学历，没有语言要求。不少德国本地公司（尤其非IT行业的），不接受离岸申请，持JSV签证找到工作的概率更高。只要语言+技术没问题，一般3个月就找到工作了。JSV需要自己承担成本和风险：食宿费每月850-1200欧，以及6个月内必须找到工作，否则就要离开。   如果下定决心要通过JSV来德国，好心态很重要，除了找工作以外也给自己找点其他目标。学一门语言，在欧洲大陆旅游，结识新的朋友，也是人生中一段愉快的经历。     离岸找工作   离岸找德国工作，拿到合同后换工作签证，0成本，但难度高。接受离岸申请的公司一般都会给relocation package，对求职者来说自然可以剩下一笔不菲的跨过搬家费用，但对许多公司来说，他们并没有这样的预算，这也是为什么许多公司不接受离岸申请的原因。     内部转岗和外派   许多德国企业在其他国家的分公司都有转岗到总部的机会，很多国内企业也有外派到德国的职位。如果你刚好在这样的企业任职，又有来德国的想法，不妨考虑下内部渠道，比其他方式容易许多。  鉴于疫情，不建议大家申请JSV过来，万一没找到工作，回国机票都很难买。 工作签证和永久居留: 蓝卡 Blue Card  本科及以上学历，达到一定要求的年薪，和一份德国的工作合同，就可以拿到欧盟蓝卡。 持蓝卡满21个月+德语B1可以换永久居留。持蓝卡满33个月，不需要德语，也可以换永久居留。 2021年MINT及紧缺专业专业的年薪要求为44304欧元，非紧缺专业为56800欧元。普通工作签证 如果不满足蓝卡的要求，也可以申请普通工作签证.  持工作签证满4年，德语B1，可以换永久居留。 德国毕业的大学生只需2年，可以换永久居留。 德国永久居留 德国的永久居留权。 除特殊情况，离开德国6个月后，德国永久居留失效。"
    }, {
    "id": 10,
    "url": "http://happycat.cc/cost-of-living-in-germany/",
    "title": "月底能存多少钱？德国生活费用计算器",
    "body": "2021/01/26 - 你喜欢充满艺术气息的柏林，还是啤酒超好喝的慕尼黑，或者好多日本拉面店的杜塞尔多夫？在考虑职业规划的时候，搬家并不罕见。然而搬家会对你的财务状况造成怎样的影响？是工作在高薪的慕尼黑可以存下更多钱吗？ StepStone对这些问题进行了调查，并在一份大型成本报告中给出了395个城市和乡镇地区的128,000份薪水和生活费用。结论：工作在高薪的大城市，并不能保证你月底剩下更多的钱。 根据调查结果，在鲁尔区工作能让你的钱包里存下更多钱，这里平均工资高，但租金等生活成本相对较低。而慕尼黑这样的繁华大都市提供了高薪，员工们却不得不在日常生活上花费更多。埃森（Essen）是所有大城市中的最大赢家，在这里工作能比慕尼黑存下3倍的钱。如果从这个角度考虑，法兰克福或斯图加特这样的大城市也没有显著的优势。 如果你是一名在慕尼黑工作的Software Developer，如果搬家到Essen或Karlsruhe，每年可以多存下6000多欧。       城市   税前工资（€/年）   生活成本   余额         Essen   51000   18678   11921       Karlsruhe   56000   21767   11832       Heidelberg   56000   22973   10626       Leipzig   46000   17122   10477       Düsseldorf   56000   23520   10080       Köln   55000   23100   9900       Nürnberg   54000   22680   9720       Hannover   52000   21840   9360       Dresden   46000   18882   8717       Stuttgart   59000   27209   8190       Hamburg   54000   26539   5860       Berlin   52000   26681   4518       Frankfurt   55000   28560   4439       München   59000   31283   4116    这个数据是如何计算的: 该计算基于以下假设：德国员工平均将其净收入的70％用于生活水平的投资：租金40％，生活用品15％，休闲活动10％和通勤5％。适用于任何居住地点和工资金额。净工资按总工资的60％计算。所有薪水数字仅供参考，已四舍五入。 您实际生活条件的费用可能会因您的个人生活方式而异。 生活数据的成本来自immowelt和Numbeo。 工资数据基于StepStone工资数据库（您的个人工资可能与平均工资有所不同。在这种情况下，只需将自动填充的平均工资替换为您的实际工资）。 StepStone生活费用计算器是与杜塞尔多夫大学统计与计量经济学的Prof. Dr. Florian Heiß教授合作完成。  Mein Gehalt（我的工资）会自动填入所选城市的平均值，可按实际需求填入自己的实际工资。 Mein Gehalt 默认选项为Netto（税后工资/净工资，按税前工资的60%计算），可以更改为Brutto（税前工资）。 60%的净工资计算方法只适用于大概估算，只能代表单身/夫妻无孩/1级税卡。     "
    }, {
    "id": 11,
    "url": "http://happycat.cc/reply-message-after-work/",
    "title": "下班后的工作消息要不要回？德国打工人：不回！",
    "body": "2021/01/18 - “不回”的“诗与远方”: 《奇葩说7》第8集的辩题是“下班后的工作消息要不要回？”。在国内工作的朋友们别说我“凡尔赛”，没在国内工作过的我完全不理解为什么下班后还要回消息。下班后根本没人能联系到我😂 初始观众投票几乎平手，非常出乎意料。听完了正方的观点之后，我才理解为什么很多人认为应该回：  不回，错过机会 不回，老板不满 不回，耽误其他人的工作我似乎更幸运，我工作在一个可以轻松说出“不回”的地方。因为有一个不同的视角，因为无法感同身受，我无法轻易的说出在国内工作的朋友们应该“回”还是“不回”。在我看来，这似乎是这个社会所有人应该一起努力改变的事情。 在一个每个人都“不回”的职场里，不回，是理所应当。辩论中说“不回”是诗与远方，在这道辩题面前，我就生活在“诗与远方”里。 工作与生活的边界感: 我对工作与生活的边界感是由身边的同事和这里的法律培养起来的。 和同事喝咖啡聊天的时候谈起了公司手机。一个免费使用的最新款手机，可以随时查看公司邮件，参加会议，确实为工作提供了方便。但聊天中几个德国同事都表示，绝对不会订公司手机。他们完全不想在工作时间外被联系到。 很多同事的私人手机号码从不告诉其他同事。实际上，私人手机号码无需告知公司。即使同事知道我的私人手机号码，我也从未因为工作被联系过。 有天因为工作时间去看医生，下班晚了点，从大楼出来发现整栋楼灯都黑了。发了个朋友圈展示熄灯的办公楼，同事评论，根据工作合同，我们不允许加班。 我的雇佣合同里清楚的写着，我每周只能工作40小时。任何额外的工作时间都需要经过工会批准。去年圣诞节的时候，我做了第一次的On-call duty。因为这是合同外的工作时间，我按照公司内的要求提前7天向工会提交了申请。当时觉得流程繁琐，现在回想，就能理解这些流程的意义。 法律: 下班后。根据《工作时间法》（Arbeitszeitgesetz），工作日的工作时间不应超过8小时，员工没有义务在下班后接电话或回复消息。 周末和节假日。一整天的休假需要做什么？关上公司手机。根据工作时间法，周日和假日不应工作。 度假。民意调查机构Civey代表TüV做的意向调查里显示，80%的被调查者的老板从不期待在假期中能联络到他们。根据联邦劳工法院的判决，雇主只能在面对生存危机，且“不存在任何其他出路的紧急情况”下打电话(Az. 9 AZR – 405/99)。 例外: 以上说的都是像我一样的普普通通打工人的情况。如果你承担非常多的责任，且工资很高，就有下班后在紧急情况下工作的义务。 在某些要求availability的行业中，也存在例外，比如医生、护士、消防员、和7x24小时营业的超市。责任感不能当钱花，所以工作时间外的补贴通常都是正常工资的1. 5-3倍。 Reference: [1] Darf ich meine Mitarbeiter im Urlaub anrufen? "
    }, {
    "id": 12,
    "url": "http://happycat.cc/best-employer-2021/",
    "title": "2021年德国员工最满意雇主",
    "body": "2021/01/14 - Glassdoor根据2019年10月22日 - 2020年10月19日的员工反馈评选出了2021年最佳雇主，评选主要标准是员工对自己所在公司的满意程度。 No. 1 Roche 罗氏制药:  Gutes Arbeitsklima, sehr gute Bezahlung, Work-Life-Balance perfekt. 良好的工作环境，非常好的薪酬，完美的Work-Life-Balance。 No. 2 Google:  Super Arbeitsatmosphäre, nette hilfsbereite Kollegen, kostenloses und fantastisches Essen, Yoga, Massagen, alles dabei. 超级好的工作气氛，友善的乐于提供帮助的同事们，免费且非常棒的食堂，瑜伽，按摩，什么都有了。 No. 3 PUMA:  Tolle Work-Life-Balance, tolle Kollegen, wettbewerbsfähiges Gehalt und zahlreiche Möglichkeiten, neue Dinge zu lernen. 良好的工作与生活平衡，出色的同事，非常有竞争力的薪水，以及大量学习新事物的机会。 No. 4 MHP - A Porsche Company 咨询公司:  Man hat sehr große Entwicklungsmöglichkeiten und viel Spielraum, sich ein passendes Projekt zu suchen. 非常多的发展机会，还有很多寻找合适项目的空间。 No. 5 Siemens Healthineers 西门子医疗:  Tolle Atmosphäre, sehr gute und leistungsgerechte Bezahlung sowie spannende und abwechslungsreiche Aufgaben. 良好的氛围，与工作绩效相关的非常好的报酬以及激动人心的各种工作。 No. 6 Volkswagen 大众汽车:  Flexibilität, neue Handlungsfelder, Entwicklungschancen, Fortbildung, Internationalität. 灵活，新的领域，发展机会，进阶培训，国际化。 No. 7 SAP:  Remote Arbeit wird unterstützt, spannende Projekte, Mitarbeiter stehen im Fokus, zukunftsorientierte Unternehmenswerte. 支持远程工作，激动人心的项目，员工是公司关注的重点，面向未来的公司价值观。 No. 8 Capgemini 凯捷 咨询公司:  Strukturiertes Onboarding trotz Corona, sehr großes Angebot an Weiterbildungen, flexible Arbeitszeit und Work-from-home. 尽管有新冠疫情，仍然有结构化的入职培训。许多培训课程，灵活的工作时间，在家工作。 No. 9 Porsche 保时捷:  Gute Entwicklungsmöglichkeiten und der neuste Stand der Technik. 良好的发展机会和最新的技术。 No. 10 BMW 宝马:  Erfolgreiche Transformation zu nachhaltigem Unternehmen, viele Mitarbeiter-Benefits, hervorragende Arbeitsatmosphäre. 成功转型为可持续发展的公司，许多员工福利，优越的工作氛围。 No. 11 Salesforce:  Die Technologie ist super zukunftsorientiert, das Wohl der Mitarbeiter steht im Vordergrund und Werte werden gelebt. 公司的技术非常先进，员工的幸福感是最重要的，价值被实现。 No. 12 Airbus:  Sehr gute Konditionen, Aufstiegschancen, Weiterbildung und nette Kollegen. 非常好的条件，晋升的机会，进一步的培训和友善的同事。 No. 13 Robert Bosch:  Sehr abwechslungsreiche Tätigkeit, hervorragende Arbeitsbedingungen und sehr gute Entwicklungsmöglichkeiten. 工作内容多种多样，优越的工作条件和非常好的发展机会。 No. 14 European Central Bank:  Gute Work-Life-Balance, es gibt viele Möglichkeiten zum Lernen und viele kompetente und freundliche Leute. 良好的工作与生活平衡，有许多学习的机会，和非常有竞争力且友好的同事。 No. 15 Siemens:  Hohe Selbständigkeit, Weiterbildungen, auf persönliche Interessen wird eingegangen und die Arbeitszeiten sind flexibel. 高度的独立性，进阶培训，个人兴趣会被考虑在内，灵活的工作时间。 No. 16 Infineon Technologies:  Sehr gutes Arbeitsklima, jeder Mitarbeiter wird wertgeschätzt, überdurchschnittliche Bezahlung, international &amp; divers. 非常好的工作氛围，每个员工都受到重视，薪酬高于平均，国际且多元化。 No. 17 Adesso AG 咨询公司:  Gute Community, Obst und Süßigkeiten, erstklassiges Schulungsprogramm und jeder ist ein Teil des Ganzen. 良好的社区，水果和零食，一流的培训计划，每个人都参与其中。 No. 18 PwC 普华永道:  Arbeitskollegen, Lernmöglichkeiten, Networking, Experience, Unterstützung von Managern und Seniors. 同事，学习机会，人脉关系，经验，来自经理和高级同事的支持。 No. 19 Vodafone 沃达丰:  100% Homeoffice, offene Einstellung und Unterstützung für alle Lebenssituationen, positive Unternehmenskultur. 100%在家办公，开放的态度和对所有生活情况的支持，积极的企业文化。 No. 20 Audi:  Sehr gutes Arbeitsklima, tolles Produkt, viele Weiterentwicklungsmöglichkeiten. 非常好的工作氛围，优秀的产品，许多进一步发展的机会。 No. 21 IKEA:  Gute Entwicklungschancen, viele Benefits und eine sehr offene Unternehmenskultur, in der sich jeder einbringen kann. 良好的发展机会，许多福利和非常开放的企业文化，每个人都可以参与其中。 No. 22 Daimler 戴姆勒:  Viele Benefits und Zusatzleistungen, gute Altersversorgung, sicherer Arbeitsplatz und flexible Arbeitszeiten. 许多福利，良好的退休金，有保障的工作岗位和灵活的工作时间。 No. 23 audibene 医疗器械:  Flache Hierarchien, sehr unternehmerisch, positiver Tatendrang und eine DNA, die Mitarbeiter zu entwickeln. 扁平的结构，极富企业家精神，积极进取的精神，非常注重培养员工。 No. 24 Max-Planck-Gesellschaft:  Sehr hohe Qualität von Instrumenten, Software und Chemikalien. Forschung wird auf dem höchsten Niveau bertrieben. 高质量的仪器，软件和化学药品。最高级别的研究。 No. 25 Allianz:  Hervorragende Weiterentwicklungsmöglichkeit innerhalb des Konzerns und eine gute Altersvorsorge. 公司内进一步发展的的机会和良好的养老条件。 "
    }, {
    "id": 13,
    "url": "http://happycat.cc/new-colleague/",
    "title": "新年来了个新同事，我们是这样帮她onboarding的",
    "body": "2021/01/11 - 新年来了个新同事，从其他stack转过来。记录下我们是如何帮助一个对我们的stack不熟悉的新人onboarding的，希望能帮助到到新入职的朋友们呀。  我们小组的tech stack：Microservice （公司自己造的前端框架/JS + Node. js，SQL，Kafka），Git，CI/CD其实就是个普通的用JavaScript写microservice的小组 Brainstorming: 这天的daily scrum提前结束，architect提议大家一起想一想onboarding需要做什么。我们就在一个online white board上写了一大堆posts。 大概就是这样，把所有想到的东西都写上去 比如前年从Java转Node. js的时候大家一起学的网课，一次如何从0建立新repository的pair programming，一个了解小组test strategy的session，需要一个同事帮忙授予新同事所有开发工作需要的权限。 Prioritizing: 有些topic虽然需要了解，但是用到的时候再学就好了。在我们这个小组里，对新同事来说最重要的topic是学习JavaScript，学会使用Git，理解我们的Test Strategy和Test-driven development（TDD）。 其他的Topic，比如Messaging和Kafka，可以在以后遇到的时候通过pair programming快速上手。 Action Items: 优先级和atcion items 新同事在前两个月预计都不会有什么产出，但是学习也是工作的一部分嘛。  我们帮她在JIRA board里建立了她的学习task，方便她tracking自己的进度。 需要同事帮忙setup或者授予权限的地方，建立task，发送meeting request来block时间。 下周刚好有同事做在新的micro service里initialize messaging service的工作，block时间，和新同事一起pair programming。Others: 小组建立两年，期间也陆续有同事加入。我们已经有了一套比较完整的wiki：如何设置IDE的plugin，什么是test strategy，大家一起学过的网课链接和介绍，去年刚刚学习messaging时候的学习笔记和录制的roll out session。 这些文档不仅能帮助新同事，在自己需要查询复习的时候，也很有帮助。 "
    }, {
    "id": 14,
    "url": "http://happycat.cc/a-sprint-retro/",
    "title": "一次轻松的回顾会议：Sprint Retrospective with Memes",
    "body": "2021/01/08 - 这个Sprint期间大多数同事都在休假，不过我们还是做了做了一个很短又很有趣的Sprint Retro。 Memes: Sprint Retrospective: 基本规则，收集Team对这个Sprint的想法，分为good, bad, ugly。bad和ugly的区别是ugly无法在小组内改变。  Happy new year! Find Memes for good and bad things that happened during the last Sprint! Also find something we can’t change within the team (ugly). Good Memes: 来自我：之前提到过我在去年12月25号做了一天的on-call duty。产品release后第一次on-call，像想象中一样，什么都没发生。来自同事：圣诞假期和新年之间的工作日只有我和另一个同事坚守工作岗位，连Daily Scrum都没开。大家都休假的时候工作特别轻松来自同事：休假是快乐的。但因为Corona，圣诞节也不能大规模的和家人朋友聚会。 Bad Memes: 来自Quality Engineer：新年后回来工作第一天，发现数据库down了:)来自同事：新年第一周还非常放松，下周就要回到忙碌的正常工作中了。来自Product Owner：PO表示这个Sprint几乎没什么好deliver的。来自我：这个Sprint做了两三个前端的活，太难了，我可能没有做前端的天赋。 Ugly Memes: 来自同事：欧洲的疫情比想象中持久太多了，这周刚刚宣布延长lockdown直到1月31日。来自同事：每次休假后邮箱里都有几百封邮件等着你看。 感谢我们有趣的Scrum Master，让各种sprint meeting充满了乐趣。 "
    }, {
    "id": 15,
    "url": "http://happycat.cc/bildungsurlaub/",
    "title": "德国打工福利：每年5天进修假（Bildungsurlaub）",
    "body": "2021/01/04 - 没有哪个职业不需要持续学习专业技术或软技能，终身学习已经不是一个新的事实了。 德国政府通过进修假期（Bildungsurlaub）促进员工终身学习的积极性，5天带薪假期用于自由选择主题的学习（与假期休假无关）。进修费用由雇员（培训费）和雇主（工资）分担：雇主通过公司可获得的新获得的知识，而我们打工人则有机会学习新技术或新技能。 谁可以休进修假？: 德国各个联邦州对于进修假期的规定不同，但总体看只有公司雇员，公务员和职业培训生（Auszubildende）可以申请进修假期。       联邦州   假期         巴符州   5天/年       拜仁州   –       柏林   10天/2年       勃兰登堡州   10天/2年       不来梅   10天/2年       黑森州   10天/2年       梅前州   5天/年       下萨克森州   10天/2年       北威州   10天/2年       莱法州   10天/2年       萨尔州   6天/年       拜仁州   –       萨安州   10天/2年       石荷州   10天/2年       图林根州   5天/年   同情下萨克森州和拜仁州的小伙伴，你们没有这个福利。 如何申请进修假？:  确认你所在州申请进修假期的条件（搜索bildungsurlaub+州）； 向培训机构确认该培训被认可； 尽早告知雇主休进修假期的意向，并确认休假时间。根据公司规定，递交相应的书面申请，得到确认后即可。在中小公司工作的小伙伴们务必尽早申请进修假期，部分联邦州规定，当公司人数过少或已批准部分员工的进修假期，雇主有权拒绝休假申请。 培训费、住宿费、交通费等需自费，但这些费用都可以报税，记得收好票据。 哪里找培训课程？: 培训课程覆盖广泛，从基础的计算机课程，编程，沟通，语言，各种软技能，到瑜伽，冥想。不管和你的职业是否（强）相关，只要被本州认可就可以申请。语言旅行（language travel）也被认可。 本地的Volkshochschule （VHS）。VHS是德国的业余大学，提供短期的各类课程，从跳舞、烹饪、到语言课程，都能找到。 两个可以查找培训课程的网站：    bildungsurlaub. de     bildung. de  带薪学习，天天向上！ "
    }, {
    "id": 16,
    "url": "http://happycat.cc/retro-to-2020/",
    "title": "德国打工人｜2020年，我的10个改变",
    "body": "2020/12/31 -    在家工作   2020年3月开始在家办公，起初两个人都在客厅工作，两个显示器放在餐桌上，家的气氛好像都没那么温馨了。下半年的时候想通了，两个卧室分别放了桌子，让餐桌回到吃饭的功能，生活和工作界限分明。不过说真的，我还是更喜欢在办公室上班：在家办公四个月，为什么我又自愿回去上班了？     露营   2020年3月到现在完全没坐过飞机，出去玩住宾馆或民宿也有诸多顾虑，就冒出了露营的想法。6月份买了个可以放在车里的充气床垫，开着车去了Titisee露营，早上醒来睁开眼，就是湖光山色，无与伦比的体验。之后买了帐篷，陆续去了Bodensee，黑森林的Nagold，计划明年复活节前后继续露营。 黑森林Titisee     徒步   2020年3月Lockdown开始，憋在家里，生活和工作都充满了不适应。有天在卧室，看到窗外的山，不如去爬山！陆陆续续的走遍了家周围的几座山，露营的时候可以花上一整天徒步旅行。走路的时候，看树，看草，看鸟，看山，看水，把所有烦恼都抛下。 慕尼黑远郊Tegernsee     喝不同的酒   一定是和疫情宅在家有关，今年喝了好多酒。喝完了一瓶1L的Bombay Sapphire Gin，一瓶Baileys，队友喝完了两瓶Whiskey，去年在Mosel囤的Riesling存货喝完了，今年夏天又去买了半箱。啤酒也没少喝，成箱的往家里搬。今年最喜欢的量产啤酒是Riegele的Weizen Doppel Bock。刚刚尝试IPA，虽然苦，但是热带水果的香气盖过了一切。     参加软技能培训   感谢公司开始重视程序员文化，非常荣幸被选中参与了为期10周的软硬技能培训。其中5周soft skill培训，学到的内容都很有用，我还在慢慢的整理：想升职加薪？和你的老板好好沟通。5周参与start up的软件设计，从收集用户需求到画出high fidelity mockup，中间许多琐碎的步骤是我作为一个developer所不了解的。一个产品从0到user story，已经走了很远。     主动社交   疫情意味着面对面社交的机会更少了，认清这个现实后，主动发起社交就很重要了。     制作播客   制作播客耗时耗力，不是很确定自己是否可以坚持下去。已经制作的两期反响都很好，全平台共计上千人收听。播客对我来说就是和人聊天，聊天都很愉快，只是剪辑的过程过于痛苦了😂   幸福猫#01 肉翻经验分享：从中关村软件园到德国，程序员也可以拥有诗和远方   幸福猫#02 从四川小村庄到德国汉堡，普通姑娘Lena越努力越幸运的不普通人生     更多自驾游   队友去年12月从公司leasing了一辆hatchback，包油卡。为了不让油卡的钱浪费掉，今年即使有疫情，我们俩也努力的自驾出去玩。特别感谢队友，家里唯一的司机，五六百公里的路也一口气开完。明年一定努力考驾照，一起开去挪威。     开始投资理财   3月大跌前入市，菜鸡买股票哭成傻鸡。改走ETF定投，不会挣大钱，能跑赢通胀就算赢。今年最重大的决策是除了自住房，加了一个投资房。   德国职场人应该知道的8种理财方法，看到就是赚到     在家的时间更久   在家的时间更久，对家居的想法就更多。虽然去年5月才装修完，今年也添置了不少小东西：把咖啡杯挂起来的杯架，调料抽屉里的隔断，钉在墙上的花盆架，居家办公室的折叠桌，衣柜里的收纳盒。住得久一点，才知道自己到底需要什么。  再次感谢队友，疫情期间有人陪我在家，有人陪我出去玩。 "
    }, {
    "id": 17,
    "url": "http://happycat.cc/job-searching-in-germany/",
    "title": "德国求职渠道：网站、招聘会、猎头",
    "body": "2020/12/08 - 很多朋友和同学初接触德国求职的时候，都会有去哪里找工作的疑问。这篇文章总结了德国求职用得到的网站，以及其他求职渠道。 求职网站:    LinkedIn   如果你的求职目标是大公司，国际化的公司，或者是说英语的职位，或者想了解求职市场的行情，我首先推荐LinkedIn Jobs。   LinkedIn也是一个职场社交网站。完整的LinkedIn履历会吸引猎头和HR找到你，邀请你投递简历，参加面试。LinkedIn也方便你找到同行、校友，帮你找到内推的门路。     StepStone   StepStone是一个总部在柏林的在线招聘平台，上面的英语工作和德语工作比例大约2/8开，英语工作申请者记得要筛选“English”方便查看。   Stepstone   StepStone上大公司的招聘广告很多，德国本土中小公司也偏好选择在StepStone上发布信息。对德国在读的学生来说，相比于LinkedIn，StepStone上面的实习和学生工求职信息也更多一些。     Xing   德国本土LinkedIn，如果你计划找德语工作，建议像所有德国职场人士一样，创建一个Xing的profile。     Stackoverflow   StackOverflow是专业IT行业问答平台，聚集了大量的专业IT人才，也就聚集了大量对人才有需求的公司。StackOverflow上的工作会比较明确的说明是否接受远程申请，是否提供Visa Sponsor，是否可以remote。这点对于海外申请者来说非常方便。   StackOverflow Jobs   德国外的申请者经常要考虑工作岗位是否提供Visa Sponsor，但欧洲对于工作签证比较宽松。以德国举例来说，只要有一份工作合同，就可以拿到工作签证，最快两年后就可以拿到德国永久居留。     Startups   如果非常喜欢创业公司，不妨试试以下几家求职网站：          Berlin Startup Jobs           Germany Startup Jobs       招聘会: 如果你是JSV签证的持有者，有意向留在德国工作的留德学生，或者在找实习/学生工，不要错过招聘会，很多参加大型招聘会的公司会安排现场面试。    学校招聘会   在读学生千万不要错过这个了解行业和用人单位的机会，说不定还能找到实习岗位或者写论文的机会。此外，bonding这个机构经常在各大高校举办招聘会或求职培训活动，建议还在学校读书的同学们多了解，多参与。     社会招聘会   德国大大小小的城市每年都会至少会举办多次招聘会，当然，大城市参展的公司比小城市多很多。搜索城市名字 + Jobmesse + 行业（e. g. IT，Medizin）就可以找到官方网站。   SinoJobs每年举办的中德招聘会对有意回国，或是需要中国人才的德国企业来说也很有吸引力。   自疫情以来，许多招聘会都转为线上，其实更方便大家参加招聘会了。  猎头:    Honeypot. io   Honeypot是一家猎头公司，帮助对欧洲工作感兴趣的IT从业人员和开发者找到欧洲顶级科技公司的工作。推荐给没有时间主动求职的小伙伴们。   Honeypot. io     LinkedIn   这里又提到了LinkedIn，我认为LinkedIn是最容易接触到猎头和HR的平台了。完整的履历和一些曝光度就能让你每周都收到几封猎头和HR的消息。有机会更新一些使用LinkedIn提高曝光度的小技巧。  "
    }, {
    "id": 18,
    "url": "http://happycat.cc/working-in-germany-and-speaking-english/",
    "title": "不会德语，在德国能找到工作吗？",
    "body": "2020/10/09 - 能！德国有很多只说英文的职位和公司。柏林、慕尼黑这样的大城市里有大量的英文职位，国际化的本地公司，开放的Startup，其他国家公司的德国分公司，总能找到适合你的职位。此外，大公司聚集的小城镇也有不少不讲德语的外国人。 虽然不是美加澳新这样的传统移民国家，但从数据上，已经变成了移民净流入国。 与其担心有没有英语职位，不如自己搜索看看？ 德国求职渠道：网站、招聘会、猎头 例外：如果你的职业不那么全球通用，比如会计、律师，那你可能要谨慎考虑直接在海外找工作了。 怎么判断这个职位是说英语的？: 如果职位用英语发布，有没有写明对德语的要求，那就是英语的职位啦。 有些职位会写，Fluent in German preferred，别慌，也投递试试，说不定会因为你高超的技术水平发合同给你。 在德国生活一定要学德语吗？: 不是的，但我建议你学一点，方便自己的生活。 我在汉堡读书的时候，不会德语也不说德语，不影响学习和日常生活。但或多或少的，不说本地语言，总会有点不方便。 如果你短期内没有学习德语的打算，不如选一个国际化的大都市。    更容易结交到和你一样，不讲德语或愿意讲英语的朋友；     政府机构、饭店、宾馆、商场等各类平时会接触的工作人员多多少少都可以讲英语，某些商场甚至还有中文导购；     大城市的国际化程度更高，市民更适应周一越南菜，周二泰国菜，周三中餐馆的生活，也就更接受多元文化。  什么样的英语水平可以在德国工作？: 听可以不带字幕，完全理解英文专业公开课。 能听懂生活类科技类的英文YouTube视频/Podcast。 说可以无障碍表达自己的想法。 语句简单，口音不标准，都不是问题。德国人说英语也有德语口音。 试试用英文做一个自我介绍：你是谁，你从哪里毕业，你目前的工作内容，为什么想要来德国工作，是否可以流畅表达？ 读流畅阅读本专业的英文技术文档。 写能满足以上三条，应该也可以写简单工作邮件啦，我有的时候也会一边查词典一点写工作邮件🙈 "
    }, {
    "id": 19,
    "url": "http://happycat.cc/episode2/",
    "title": "从四川小村庄到德国汉堡，普通姑娘Lena越努力越幸运的不普通人生",
    "body": "2020/09/30 - 在线收听: 海外听众点这里: 国内听众点这里: 笔记和链接: 本期嘉宾是在德国做互惠生，又继续在这里读研究生的Lena。我们聊了她在互惠生家庭和德国男朋友的两段生活中遭遇的文化冲突，也聊了Lena从中国农村到德国大城市这一路的感悟。: 🕙时间轴 00:30 Lena在互惠生家庭遭遇的culture shock 03:40 简短的自我介绍 04:05 什么是互惠生？ 06:18 如果你也是这种情况，考虑下互惠生项目吧 07:38 和德国家庭一起住，Lena学到了如何与德国人相处 11:00 两件有些心酸的小事，德国的“规则”没那么绝对 19:00 为什么选择来德国？ 20:50 来自家庭的支持 22:31 申请学校 23:20 FH大学的实践性更强吗？ 24:36 和德国男朋友在一起也免不了文化冲突 28:53 回首往事，越努力越幸运Credit感谢刚考完试正在搬家的Lena抽出时间和我一起录了两个多小时的采访。9月一直在参加培训，疯狂加班，这期节目剪了一个多月。感谢Lena的容忍，还没和我绝交😂 🔗Links 豆瓣互惠生小组 https://www. make-it-in-germany. com/en/ 来德国，找一份工作：聊聊德国留学和找工作签证 https://mp. weixin. qq. com/s?__biz=MzI0ODczNTE3Ng==&amp;mid=2247483805&amp;idx=1&amp;sn=db27fd9288e7a64acc55d7931238d99e 德国FH和Uni两种大学的区别，1000字讲清楚德国教育体系 https://mp. weixin. qq. com/s?__biz=MzI0ODczNTE3Ng==&amp;mid=2247484009&amp;idx=1&amp;sn=5c8c2be8db2608fa3f07abb18f903ca2 德国互惠生官方信息     德国联邦劳动局关于Aupair的介绍（德语） https://www. arbeitsagentur. de/unternehmen/arbeitskraefte/au-pair   Au-pair Society e. V. . 德国互惠生协会 https://www. aupair-society. de   经德国互惠生协会审查后成为会员的德国互惠生中介 https://www. aupair-society. de/unseremitglieder   德国联邦劳动局关于Aupair的介绍（英语） https://www. arbeitsagentur. de/datei/au-pair-in-germany-en_ba012998. pdf   德国驻中国使领馆，互惠生签证申请须知 https://china. diplo. de/blob/1341632/d12749addf98e05d81c44ca4157264fc/pdf-merkblatt-natvisum-aupair-data. pdf   "
    }, {
    "id": 20,
    "url": "http://happycat.cc/invest-in-germany/",
    "title": "德国打工人，如何理财？",
    "body": "2020/09/01 - 刚刚工作，是不是觉得手里的钱一下子多了好多！在德国也要保持中华民族爱存钱的好传统哦，这篇文章帮大家整理了职场新人应该了解的基本理财方法，快看看有哪些是你还不知道的！ 不过，在理财之前，你应该先回答3个问题    理财的目的？      积累更多资产，用于购置房屋或者环游世界   为退休生活做保障   攒一笔短期应急的钱   灾难准备金      有多少钱可以用于理财？      确定你想要或者可以留出多少收入用于理财。这个范围的确定和你的理财目标相关，比如最初可以用10%来尝试。      必要的银行账户      Girokonto，现金账户，用于日常支出的银行账户，一般无利息或利息极低   Spar/Tagesgeldkonto，存款账户/活期存款账户，有利息，用于长期或暂时保管现金   Aktiendepot，股票账户，如果股票是你投资计划的一部分   存款账户两种可以考虑用于理财的存款账户：    活期存款账户(Tagesgeldkonto)   短到中期投资   由于当前的超低利率，活期存款账户只适合需要灵活存取的情况     定期存款账户(Festgeldkonto)   中到长期投资   定期存款的期限最短1个月，最多10年，是一种不灵活且利润低的投资  我在网上比较之后，发现目前德国境内Tagesgeldkonto利率在0. 05%-0. 1%左右。 除了考虑赚微薄的利息开户外，更重要的是换一家没有管理费的Girokonto，能够实打实的节省每年几十欧。 股票账户(Aktiendepot)中到长期投资 除了购买某个公司的股票外，也可以考虑同时投资多个公司的股票以降低风险，比如每月定期投资基金，或指数基金ETF。VL的钱也可以用于投资基金（详见下文VL）。 股票是一种灵活且可以盈利的投资方式，但是你必须要了解投资股票的风险。 投资型人寿保险(Kapitalgebundene Lebensversicherung)中到长期投资 投资型人寿保险是保险和投资的结合，具有税收优势，合同结束时只需要对一半的盈利上税。人寿保险只会在合同到期或被保险人去世时支付，如果有紧急情况需要用到这笔钱，将不得不承受一定的损失。 建房储蓄(Bausparen)中到长期投资 建房储蓄合同是一种现在存钱，未来买房/建房的储蓄方式。 分为两个阶段，储蓄阶段和贷款阶段。举个例子，计划为未来买房准备10万欧元，和银行签订Bauspar合同，每月向账户里存钱，存款达到5万欧元后，从银行拿到10万欧元：自己存的5万和一笔按照签订合同时的低利率5万欧元的贷款。 一般购房需要还款15年，甚至20年以上，通过Bauspar可以为未来锁定一个优惠利率，这个优惠利率比和银行签订15年或20年的贷款合同的利率要低得多。 VL(Vermögenwirksame Leistungen)长期投资 许多德国公司会为雇员提供VL储蓄计划：公司每月为你提供最多40欧元的现金，你有多种选择来使用这笔钱：每月定投基金、存到Bauspar账户中、还房屋贷款、或者简单的存到你的银行账户中。 如果你还不知道VL，和公司里有经验的同事或HR打听一下，不要浪费这笔钱，公司白给的，一年累积下来也有几百块了。 工作时间账户(Arbeitszeitkonto)长期投资 许多德国公司都有Arbeitszeitkonto，记录你的工作时间和加班时间。 为什么这是一种投资方法呢？ 你可以把你的奖金、加班时间、甚至工资的一部分转入这个账户，来购买时间。购买的时间可以以后折现，也可以用来提前退休，或突发情况下急需休假。 尽早做这件事情，职场萌新的每小时工资比已经拥有丰富工作经验的人们低多了，相当于投资自己的工资涨幅。 自己的职场发展，比任何一家公司的股票都值得信赖吧。 公司股票短期/长期投资 许多公司都提供给员工购买公司股票的优惠。在有折扣的情况下，能买多少就买多少，既然入职这家公司，说明你好这家公司的未来发展。哪怕买到手就卖，也是赚的。 养老保险长期投资 除了政府提供的退休保险（Rentenversicherung）外，在公司就职的员工还有由公司提供的养老保险选择：    企业养老保险 Betriebliche Altersversorge，   在一些公司也叫做Mitarbeiterfinanzierte Altersversorge。这种养老保险遵循的是Entgeltunwandlungen （Deferred Compensation），员工自付一半保险费，企业补贴一半 （也有公司是1/3，2/3），员工自付部分免税、免法定医疗保险费。退休后领取的养老金部分再交法定医疗保险费。   企业养老保险是德国养老保险体系中重要的组成部分，如果确定要在德国养老，请务必仔细考虑是否参加企业养老保险。   同时也应该注意自己所在公司的企业养老保险的规定，换公司是否可以转移，是否可以转移雇主所交的部分，交多少年可以开始领取。     公司资助的养老保险保险 Unternehmensfinanzierte Altersversorge，   这些保险完全由公司支付，不需要员工付费。免费的，不要就是浪费！通常有以下选择：          Berufsunfähigkeitsversorgung 职业伤残保险           Hinterbliebenenversorgung 意外身亡保险           Altersversorge 养老保险        注意意外身亡保险: 只有直系亲属和婚姻关系可以获得这笔钱。   职业伤残保险和意外身亡保险的额度应覆盖你已经有的贷款。  "
    }, {
    "id": 21,
    "url": "http://happycat.cc/episode1/",
    "title": "从中关村软件园到德国，程序员也可以拥有诗和远方",
    "body": "2020/08/10 - 在线收听: 海外听众点这里: 国内听众点这里: 笔记和链接: 本期嘉宾是从中关村搬家到德国的程序员老吴，我们聊了他来德国后工作和吃喝玩乐上的改变，最后介绍了他是如何通过找工作签证在德国找到了工作。: 🕙时间轴 00:22 老吴介绍他在国内的工作经历 01:05 在德国上班和在国内上班哪里不一样？ 03:27 选择离开的理由 04:41 出国之后，人人都是中华小当家 05:35 一家之言：什么样的人更适合来德国？ 06:39 谁说好山好水好寂寞，听听我们都在德国玩点什么？ 10:21 来德国的动机 13:25 来德国的准备：辞职，学德语 16:43 找工作签证 Job Seeking Visa （JSV） 18:32 在德国找工作，英语还是德语？ 19:45 语言有多重要？第二个面试 23:26 拿到offer！ 30:06 如果你要来德国，给你一个建议Credit感谢素未谋面的老吴和我一起花了两个多小时录制这期节目，为这期节目取了有诗意的名字🙏感谢小人物播客的阿乐，阿乐录制了一系列播客新手入门教学视频，对一个从没用过音频剪辑软件的人来说非常有帮助。 🔗Links 德国工作移民官方网站 https://www. make-it-in-germany. com/en/ 来德国，找一份工作：聊聊德国留学和找工作签证 https://mp. weixin. qq. com/s?__biz=MzI0ODczNTE3Ng==&amp;mid=2247483805&amp;idx=1&amp;sn=db27fd9288e7a64acc55d7931238d99e 找工作签证 JSV     德国工作移民官方网站关于找工作签证的介绍 https://www. make-it-in-germany. com/en/visa/kinds-of-visa/jobseekers/   德国驻中国使领馆，找工作签证申请须知 https://china. diplo. de/blob/1341664/ba2b3dec2afaff81d872572ead3244fd/pdf-merkblatt-natvisum-arbeitsplatzsuche-data. pdf   "
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
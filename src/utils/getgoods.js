import { v4 as uuidv4 } from 'uuid';
let inventory;
let inventoryDefault = [
    {
        categories: ['首页','新品上市'], name: '灰木软沙发2.0', price: '1000', image: '/products/couch1.png', description: '停留一会儿。这款木架灰色软沙发搭配柔软的皮革靠背和座垫,久坐不会 sink in。随着时间流逝,这款棕色全革沙发将呈现出书卷气和舒适特点。和你的爱人(不论人或宠物)亲密依偎,品一碗爆米花。这个沙发真的很难让人起身离开。皮革上的自然色差、皱褶都是这款革的独特特征,经常使用会呈现出复古舒适的样子。', brand: '杰森·包恩', currentInventory: 4
    },
    {
        categories: ['首页','沙发', '客厅'], name: '卡梅尔棕色沙发', price: '1000', image: '/products/couch5.png', description: '停留一会儿。这款木架灰色软沙发搭配柔软的皮革靠背和座垫,久坐不会 sink in。随着时间流逝,这款棕色全革沙发将呈现出书卷气和舒适特点。和你的爱人(不论人或宠物)亲密依偎,品一碗爆米花。这个沙发真的很难让人起身离开。皮革上的自然色差、皱褶都是这款革的独特特征,经常使用会呈现出复古舒适的样子。', brand: '杰森·包恩', currentInventory: 2
    },
    {
        categories: ['首页','新品上市', '沙发'], name: '时尚皮革沙发', price: '800', image: '/products/couch6.png', description: '非常讨人喜欢。这款白桦色的斯文爱情座椅看起来舒适优雅,就像是度假中的高档女士会穿的毛衣。这款白色长椅子带有套缝的座垫,柔软的靠垫和扶手,实木腿脚,可以轻松营造梦想中的优雅空间。想怎么放都行,搭配花草、ottoman、配套椅子,或者8只狗。随你的喜好。', brand: '杰森·包恩', currentInventory: 8
    },
    {
        categories: ['新品上市', '沙发'], name: '塞提斯灰色爱情座椅', price: '900', image: '/products/couch7.png', description: '你知道你爸爸那件非凡的老爷机夹克吗?这款纳瓦纳达科塔色调的皮革沙发就是那件夹克的沙发版。超级柔软的填充绒垫,固体木角框架,以及随着时间推移愈发精致的皮革痕迹,让你每次坐上它都会感觉很酷很宁静。搭配一条羊皮毯子会更好看,我们敢这么说。经过使用,这种皮革会变得更柔软、起皱,绒垫也会呈现出精心使用过的样子,就像你最喜欢的皮衣。', brand: '杰森·包恩', currentInventory: 10
    },
    {
        categories: ['特卖', '沙发'], name: '斯文棕色哑光', price: '1200', image: '/products/couch8.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 7
    },
    {
        categories: ['特卖', '沙发'], name: '奥蒂斯麦色沙发', price: '500', image: '/products/couch9.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 13
    },
    {
        categories: ['特卖', '沙发'], name: '塞尼棕色三人座', price: '650', image: '/products/couch10.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 9
    },
    {
        categories: ['沙发', '客厅'], name: '詹姆逊杰克豪华躺椅', price: '1230', image: '/products/couch11.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 24
    },

    {
        categories: ['沙发'], name: '银河蓝沙发', price: '800', image: '/products/couch2.png', description: '非常讨人喜欢。这款白桦色的斯文爱情座椅看起来舒适优雅,就像是度假中的高档女士会穿的毛衣。这款白色长椅子带有套缝的座垫,柔软的靠垫和扶手,实木腿脚,可以轻松营造梦想中的优雅空间。想怎么放都行,搭配花草、ottoman、配套椅子,或者8只狗。随你的喜好。', brand: '杰森·包恩', currentInventory: 43
    },
    {
        categories: ['新品上市', '沙发'], name: '马库斯绿色爱情座椅', price: '900', image: '/products/couch3.png', description: '你知道你爸爸那件非凡的老爷机夹克吗?这款纳瓦纳达科塔色调的皮革沙发就是那件夹克的沙发版。超级柔软的填充绒垫,固体木角框架,以及随着时间推移愈发精致的皮革痕迹,让你每次坐上它都会感觉很酷很宁静。搭配一条羊皮毯子会更好看,我们敢这么说。经过使用,这种皮革会变得更柔软、起皱,绒垫也会呈现出精心使用过的样子,就像你最喜欢的皮衣。', brand: '杰森·包恩', currentInventory: 2
    },
    {
        categories: ['特卖', '沙发'], name: '达比特哑黑色', price: '1200', image: '/products/couch4.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', currentInventory: 14
    },

    {
        categories: ['特卖', '椅子'], name: '拥抱蓝', price: '300', image: '/products/chair1.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 12
    },
    {
        categories: ['特卖', '椅子'], name: '北欧躺椅', price: '825', image: '/products/chair2.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 13
    },
    {
        categories: ['特卖', '椅子'], name: '塞尼哑光橙色', price: '720', image: '/products/chair3.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 33
    },
    {
        categories: ['特卖', '椅子'], name: '阿比斯科绿色躺椅', price: '2000', image: '/products/chair4.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 23
    },
    { categories: ['特卖', '椅子'], name: '牛仔单人椅', price: '1100', image: '/products/chair5.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 13 },
    { categories: ['特卖', '椅子'], name: '莱沃棕色休闲椅', price: '600', image: '/products/chair6.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 15 },

    { categories: ['特卖', '椅子'], name: '动漫色调躺椅', price: '775', image: '/products/chair7.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 44 },
    { categories: ['特卖', '椅子'], name: '约书亚·琼斯红色椅子', price: '1200', image: '/products/chair8.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 17 },
    { categories: ['特卖', '椅子'], name: '黑沙躺椅', price: '1600', image: '/products/chair9.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 28 },
    { categories: ['特卖', '椅子'], name: '薄荷米色工作椅', price: '550', image: '/products/chair10.png', description: '你不需要出门也可以很粗旷。这款雪茄色原皮沙发采用坚固的实木框架和原始缝制,呈现马尔波罗男士的外观。这款棕色皮革沙发无论在山间小屋还是公寓都非常温馨。皮革会随使用变得越来越漂亮:像是昆虫叮咬、已愈合的伤疤和皮肤纹理的差异都反映了真正的复古感。跨上它,拿过遥控器吧。', brand: '杰森·包恩', currentInventory: 31 }
]



async function getGoods() {
    //TODO: 从数据库中获取商品信息
    inventory = inventoryDefault.map(item => {
        return {
            ...item,
            id: uuidv4()
        }
    })
    const response = new Response(JSON.stringify(inventory), {
        status: 200,
        headers: {
          'Content-type': 'application/json'
        }
      });
      return Promise.resolve(response);
}



export default getGoods;

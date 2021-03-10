import React, {useCallback, useEffect, useState} from 'react'
import Footer from '../../components/footer'
import './index.scss'

const News = props => {
    const [height, setHeight] = useState(document.body.clientHeight);

    const onResize = useCallback(() => {
        setHeight(document.body.clientHeight)
    }, [])

    useEffect(() => {
        // setScrollTop(Math.max(document.documentElement.scrollTop, document.body.scrollTop))
        window.addEventListener('resize', onResize);
        return (() => {
            window.removeEventListener('resize', onResize)
        })
    }, [])

    const splitArray = (aim, size) => {
        const result = [];
        let tempArray;
        for (let count = 0; count < aim.length; count++) {
            if (count % size === 0) {
                if (tempArray) {
                    result.push(tempArray);
                }
                tempArray = [];
            }

            tempArray[tempArray.length] = aim[count];
            if (count + 1 === aim.length) {
                result.push(tempArray);
            }
        }
        return result;
    }

    const newsList = [
        {
            url: 'https://honganstatic.cls.cn/assets/web/news1.png',
            time: '2021-1-22',
            title: '15个全球最有影响力的大数据公司',
            content: '大数据公司早已具有影响世界的能力，只不过这些现实并没有放到正面的大舞台上才让人们觉得这些公司很低调。而如今，低调已不再需要，是时候展现大数据在这个时代的威力了。'
        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news2.png',
            time: '2021-1-22',
            title: '中国电子科技大会在京召开',
            content: '12月12日，中国电子科技创新大会在北京召开。大会以“科技引领未来 创新驱动发展”为主题，深入贯彻落实习近平总书记在网络安全和信息化工作座谈会上的重要讲话，全面总结中国电子“十二五”科技创新工作，明确方向，部署今后三年科技创新重点任务。'

        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news3.png',
            time: '2021-1-22',
            title: '移动应用分析新战略——"数据+"',
            content: '阿里巴巴移动事业群PP助手总经理张博认为，伴随着移动互联网用户的需求进一步细分，移动应用分发和用户需求产生错位的现象越来越常见，反映在用户的行为特征上就是自主性逐渐增强，使用应用商店的生命周期开始缩短。这种形势下，要同时满足用户和开发者的需求，应用商店必须做到个性化精准分发。'
        },
        {
            url: 'https://honganstatic.cls.cn/assets/web/news4.png',
            time: '2021-1-22',
            title: '第十届天翼智能生态产业高峰论坛',
            content: '昨天，第十届天翼智能生态产业高峰论坛在广州举行。在5G和AI技术不断创新与突破的智能时代，中国电信联合各方生态注智，产业协同，资源互补，共创商业模式终端研应用开发，在整个终端产业推动和引领5G商用上市。'

        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news5.png',
            time: '2021-1-22',
            title: '突破科技，超越梦想',
            content: '目前人类对地球进行着过快的开发，占用着大量的地球资源。人口不断增加的同时，我们对能源也有着不断增加的需求，那么这能否实现可持续地发展呢？这需要工程界和学术界寻找新的方法从而将新能源的效能最大化，并寻找保存能源的方法。只有通过国际合作，才能实现人类的可持续发展。'
        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news6.png',
            time: '2021-1-22',
            title: '赢响',
            content: '2017年10月12日，“赢响——腾讯区域营销解决方案战略发布会暨招商会”在重庆隆重举行，腾讯网络媒体事业群副总裁栾娜女士，腾讯网络媒体事业群区域拓展部总经理赵强先生，CTR总裁助理、媒介智讯总经理、媒介融合研究院执行副院长赵梅女士出席会议，五百余位营销大咖与行业精英莅临现场。'

        }
    ]

    return (
        <div className="news-wrap">
            <div className='news-title'>新闻动态</div>
            <div className='news-article-wrap'>
                {
                    splitArray(newsList, 3).map((item, i) => {
                        const result = item.map((v, index) => (
                            <div
                                className='news-article-item' key={index}
                                onClick={() => {
                                    window.open(`/news/${v.title}/${index}`, '_blank')
                                }}
                            >
                                <div
                                    className='news-article-item-image-box'
                                    style={{height: (height - 42 - 70 - 204 - 176 - 40) / 2}}
                                >
                                    <img
                                        alt='' src={v.url}
                                        className='news-article-item-image'
                                    />
                                    <div className='news-article-item-date'>{v.time}</div>
                                </div>
                                <div className='news-article-item-content-box'>
                                    <div className='news-article-item-content-title'>{v.title}</div>
                                    <div className='t-o-e l-c-1 news-article-item-content-desc'>
                                        {v.content}
                                    </div>
                                </div>
                            </div>
                        ))
                        return (<div className='news-article-box' key={i}>{result}</div>)
                    })
                }
            </div>
            <div className='news-footer-wrap'>
                <Footer/>
            </div>
        </div>
    )
}

export default News;
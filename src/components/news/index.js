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
            title: '这是一个新闻标题',
            content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。是伸缩容器有能力让它的伸缩项目改变它的宽是伸缩容器有能力让它的伸缩项目改变它的宽是伸缩容器有能力让它的伸缩项目改变它的宽'
        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news2.png',
            time: '2021-1-22',
            title: '这是一个新闻标题',
            content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'

        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news3.png',
            time: '2021-1-22',
            title: '这是一个新闻标题',
            content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'
        },
        {
            url: 'https://honganstatic.cls.cn/assets/web/news4.png',
            time: '2021-1-22',
            title: '这是一个新闻标题',
            content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'

        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news5.png',
            time: '2021-1-22',
            title: '这是一个新闻标题',
            content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'
        }, {
            url: 'https://honganstatic.cls.cn/assets/web/news6.png',
            time: '2021-1-22',
            title: '这是一个新闻标题',
            content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'

        }
    ]

    let calcHeight = 0;
    if (height >= 937) calcHeight = 195;
    else if (height >= 851) calcHeight = 155;
    else if (height >= 749) calcHeight = 103;
    else if (height >= 624) calcHeight = 190;
    else if (height >= 535) calcHeight = 100;
    else if (height >= 469) calcHeight = 35;

    return (
        <div className="news-wrap">
            <div className='news-title'>新闻动态</div>
            <div className='news-article-wrap'>
                {
                    (height <= 376 ? [] : (splitArray(newsList, height < 537 ? 2 : 3).filter((item, i) => height < 626 ? i === 0 : true))).map((item, i) => {
                        const result = item.map((v, index) => (
                            <div
                                className='news-article-item' key={index}
                                onClick={() => {
                                    window.open('/news', '_blank')
                                }}
                            >
                                <div className='news-article-item-image-box' style={{height: calcHeight}}>
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
            <div style={{marginTop: height <= 376 ? 110 : 32}}>
                <Footer/>
            </div>
        </div>
    )
}

export default News;
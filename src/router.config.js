/**
 * Created by 海枯 on 2017/5/23.
 */
// 按需加载
const Channel = resolve => require(['./components/page/Channel.vue'], resolve)
const ChannelDetail = resolve => require(['./components/page/ChannelDetail.vue'], resolve)

export const routes = [
    {
        path: '/channel',
        component: Channel
    },
    {
        path: '/channelDetail',
        component: ChannelDetail
    }
]
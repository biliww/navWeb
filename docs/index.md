---
layout: home
layoutClass: 'my-home-layout-class'

hero:
  name: biliww
  text: 云想衣裳花想容 春风拂槛露华浓~
  tagline:
  image:
    src: /logo.png
    alt: biliww
  actions:
    - text: 博客
      link: https://blog.wangpl.cn
    - text: 聊天室
      link: https://blog.wangpl.cn/imNetty
    - text: 导航收藏
      link: /nav/
      theme: alt
#    - text: 测试页
#      link: /test
#      theme: alt
features:
  - icon: 📖
    title: 物语
    details: netty聊天室
    link: https://blog.wangpl.cn
    linkText: 聊天室
---

<style>
/*爱的魔力转圈圈*/
.my-home-layout-class .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.my-home-layout-class .details small {
  opacity: 0.8;
}

.my-home-layout-class .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>

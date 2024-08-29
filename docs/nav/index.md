---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip
该导航由 [biliww](https://blog.wangpl.cn/) 开发，如有引用、借鉴的请保留版权声明：<https://blog.wangpl.cn/>
:::

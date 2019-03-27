<template>
  <div>
     <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {

    }
  }
}

</script>
<style lang="scss" scoped>


</style>

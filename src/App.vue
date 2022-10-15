<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-system-bar
          color="blue"
          style="-webkit-app-region: drag;">
        와이파이, 안테나 자린가??
      </v-system-bar>
      <v-app-bar
          color="blue"
          density="compact"
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>닦달!</v-toolbar-title>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>


      <v-navigation-drawer
          v-model="drawer"
          bottom
          temporary
      >
        <v-list>

          <h2>가나다라</h2>


          <v-divider></v-divider>
          <v-list-item
              v-for="item in items"
              :key="item.value"
              :to="item.value"
              :title="item.title"
              :prepend-icon="item.icon"
          >
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-main>
        <v-card-text>
          <router-view/>

          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: '홈',
        value: '/',
        icon: 'mdi-home',
      },
      {
        title: '어바웃!',
        value: '/about',
        icon: 'mdi-forum',
      },
      {
        title: '링크없음',
        value: 'fizz',
        icon: 'mdi-home',
      },
      {
        title: '테스트테스트',
        value: 'buzz',
        icon: 'mdi-home',
      },
    ],
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.body {
}

</style>

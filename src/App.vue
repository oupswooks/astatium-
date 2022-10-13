<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
          color="blue"
          density="compact"
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-tabs
            v-model="tab"
        >
          <v-tab value="home">HOME</v-tab>
          <v-tab value="one">보안퀴즈</v-tab>
          <v-tab value="edu">보안동영상시청</v-tab>
          <v-tab value="three">점수확인</v-tab>
        </v-tabs>

        <v-spacer></v-spacer>

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
          <v-list-item
              v-for="item in items"
              :key="item.value"
              :to="item.value"
              :title="item.title"
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
        title: 'Foo',
        value: '/',
      },
      {
        title: 'Bar',
        value: '/about',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
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
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

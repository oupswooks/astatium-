<template>
  <v-container  fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="sensor in sensors" :key="sensor.title" xs12 md6 lg3>
          <v-card width="95%">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>{{ sensor.title }}</v-card-title>
            <v-card-text>받아온값 :
              <v-row align="center">
                <v-col
                    class="text-h5"
                    cols="6"
                >
                  {{ sensor.value }}&deg;C
                </v-col>
                <v-col cols="6">
                  <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                      alt="Sunny image"
                      width="48"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="blue">값 로드</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: () => ({
    sensors: [
      {
        title: '안방',
        value: '0',
        icon: 'mdi-home',
      },
      {
        title: '거실',
        value: '0',
        icon: 'mdi-forum',
      },
      {
        title: '운동방',
        value: '0',
        icon: 'mdi-home',
      },
    ],

  })
}
</script>

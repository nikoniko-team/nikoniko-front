<template>
  <v-card class="mx-auto">
    <v-card-title>Últimos Comentários</v-card-title>
    <v-card-text>
      <v-list three-line>
        <template v-for="(item, index) in comments">
          <v-list-item :key="item.id">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.author}}</v-list-item-title>
              <v-list-item-subtitle>{{item.comment}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="index + 1 < comments.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {},
  data: () => ({
    comments: [
      {
        id: 1,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        author: 'Ali Connors',
        comment: 'Lorem ipsum generator',
      },
      {
        id: 2,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        author: 'Ali Connors',
        comment: 'Lorem ipsum generator',
      },
    ],
  }),
};
</script>

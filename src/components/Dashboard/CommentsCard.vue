<template>
  <v-card class="mx-auto">
    <v-card-title>Últimos Comentários</v-card-title>
    <v-card-text>
      <v-list three-line>
        <template v-for="(item, index) in comments">
          <v-list-item :key="item.id * 4">
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
        avatar: 'https://picsum.photos/201',
        author: 'Mickey',
        comment: 'Baixo engajamento da equipe',
      },
      {
        id: 2,
        avatar: 'https://picsum.photos/200',
        author: 'Minnie',
        comment: 'O Goofy não faz nada',
      },
      {
        id: 3,
        avatar: 'https://picsum.photos/202',
        author: 'Goofy',
        comment: 'Gosto muito de tecnologias novas',
      },
    ],
  }),
};
</script>

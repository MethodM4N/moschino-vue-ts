<template>
  <main id="main" class="site-main">
    <article class="portfolio hentry" v-if="!apiError">
      <header class="entry-header">
        <div class="entry-thumbnail">
          <img
            min-height="13rem"
            :src="post.image"
            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt="изображение"
          />
        </div>
        <h1 class="entry-title">{{ post.title }}</h1>
      </header>
      <div class="entry-content">
        <p>{{ post.preview }}</p>
        <blockquote>
          <p>
            {{ post.description }}
          </p>
        </blockquote>
      </div>
    </article>

    <Error-message v-else>Произошла непредвиденная ошибка при загрузке постов</Error-message>

    <nav class="navigation post-navigation" role="navigation">
      <h1 class="screen-reader-text">Post navigation</h1>
      <div class="nav-links">
        <div class="nav-previous">
          <router-link to="/" rel="prev"> <span class="meta-nav">←</span> Back</router-link>
        </div>
      </div>
    </nav>
    <!-- .navigation -->
  </main>
</template>

<script lang="ts">
import ErrorMessage from '@/components/UI/ErrorMessage.vue';
import { fetchPostById } from '@/api/postApi';
import { TPostById } from '@/types/types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostById',
  components: {
    ErrorMessage,
  },
  data() {
    return {
      post: {} as TPostById,
      totalPages: 0,
      page: 1,
      limit: 6,
      apiError: false,
    };
  },
  methods: {},
  mounted() {
    if (typeof this.$route.params.id === 'string') {
      fetchPostById(this.$route.params.id)
        .then((data) => {
          this.apiError = false;
          if (data) {
            this.post = data;
          }
        })
        .catch((e) => (this.apiError = true));
    }
  },
});
</script>

<style scoped>
.portfoliogrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  justify-items: stretch;
}
</style>

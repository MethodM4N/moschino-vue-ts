<template>
  <article class="hentry">
    <header class="entry-header">
      <div class="entry-thumbnail">
        <a @click="$router.push(`/post/${post.id}`)"
          ><img
            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt="изображение"
            :src="post.image"
            @load="$emit('onImgLoad', 1)"
            @error="$emit('onImgLoad', -1)"
        /></a>
      </div>
      <h2 class="entry-title">
        <a @click="$router.push(`/post/${post.id}`)" rel="bookmark">{{ post.title }}</a>
      </h2>
      <p class="portfoliotype">{{ post.preview }}</p>
    </header>
  </article>
</template>

<script lang="ts">
import { TPost } from '@/types/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PostItem',

  props: {
    post: {
      type: Object as PropType<TPost>,
      required: true,
    },
  },
});
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>

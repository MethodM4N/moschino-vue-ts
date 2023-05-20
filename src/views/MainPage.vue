<template>
  <div class="container" id="page">
    <div id="content" class="site-content">
      <div id="primary" class="content-area column full">
        <main id="main" class="site-main" v-if="!apiError">
          <div class="grid portfoliogrid">
            <Skeleton
              v-for="skelet in skeleton"
              :key="skelet"
              v-show="!imgLoading.boolean"
            ></Skeleton>
            <article class="hentry" v-for="post in posts" :key="post.id">
              <header class="entry-header" v-show="!apiLoading && imgLoading.boolean">
                <div class="entry-thumbnail">
                  <a @click="$router.push(`/post/${post.id}`)"
                    ><img
                      class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt="изображение"
                      :src="post.image"
                      @load="onImgLoad(1)"
                      @error="onImgLoad(-1)"
                  /></a>
                </div>
                <h2 class="entry-title">
                  <a @click="$router.push(`/post/${post.id}`)" rel="bookmark">{{ post.title }}</a>
                </h2>
                <p class="portfoliotype">{{ post.preview }}</p>
              </header>
            </article>
          </div>

          <nav class="pagination">
            <a
              class="page-numbers"
              :class="{ current: page === pageNumber }"
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              @click="changePage(pageNumber)"
              >{{ pageNumber }}
            </a>
          </nav>
          <br />
        </main>
        <Error-message v-else>Произошла непредвиденная ошибка при загрузке постов</Error-message>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ErrorMessage from '@/components/UI/ErrorMessage.vue';
import Skeleton from '@/components/UI/Skeleton.vue';
import { fetchPosts, fetchTotalPages } from '@/api/postApi';
import { TPost } from '@/types/types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    ErrorMessage,
    Skeleton,
  },
  data() {
    return {
      posts: [] as TPost[],
      skeleton: [...new Array(6)],
      postsValue: 0,
      totalPages: 0,
      page: 10,
      limit: 6,
      apiError: false,
      apiLoading: false,
      imgLoading: {
        imgCount: [] as number[],
        boolean: false,
      },
    };
  },
  methods: {
    changePage(pageNumber: number) {
      this.page = pageNumber;
    },
    nextPage() {
      this.page++;
    },
    onImgLoad(value: number) {
      this.imgLoading.imgCount.push(value);
      console.log(this.imgLoading.imgCount.length);
      if (this.imgLoading.imgCount.length === 6) {
        this.imgLoading.boolean = true;
      } else if (
        this.page === this.totalPages &&
        this.imgLoading.imgCount.length === Math.floor(this.postsValue / this.totalPages)
      ) {
        this.imgLoading.boolean = true;
      }
    },
    fetchData() {
      this.imgLoading.boolean = false;
      this.imgLoading.imgCount = [];
      this.apiLoading = true;
      Promise.all([fetchPosts(this.page, this.limit), fetchTotalPages()])
        .then((data) => {
          this.apiError = false;
          if (data[0] && data[1]) {
            this.posts = data[0];
            this.totalPages = Math.ceil(data[1] / this.limit);
            this.postsValue = data[1];
          }
        })
        .catch((e) => (this.apiError = true))
        .finally(() => (this.apiLoading = false));
    },
  },
  beforeMount() {
    this.fetchData();
  },
  watch: {
    page(value) {
      this.imgLoading.boolean = false;
      this.imgLoading.imgCount = [];
      this.apiLoading = true;
      fetchPosts(value, this.limit)
        .then((data) => {
          this.apiError = false;
          if (data) {
            this.posts = data;
          }
        })
        .catch((e) => (this.apiError = true))
        .finally(() => (this.apiLoading = false));
    },
  },
});
</script>

<style scoped>
.portfoliogrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  justify-content: center;
  justify-items: stretch;
}

@media (max-width: 500px) {
  .portfoliogrid {
    grid-template-columns: 1fr;
  }
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 2px;
}

a {
  cursor: pointer;
}
</style>

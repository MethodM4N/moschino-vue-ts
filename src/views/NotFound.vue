<template>
  <section className="page404">
    <h2 className="page404__title">404</h2>
    <h3 className="page404__info">Страница не найдена</h3>
    <router-link to="/" className="page404__redirect-button"> Назад </router-link>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
  components: {},
});
</script>

<style scoped>
.page404 {
  margin: 0;
  padding: 100px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page404__redirect-button {
  padding: 10px 40px;
  margin: 0 0 60px;
  border: solid 1px #0f0f0f;
  border-radius: 5px;
  background-color: #ffffff;
  text-decoration: none;
  color: #0f0f0f;
  font-size: 24px;
  line-height: 16.94px;
  font-weight: 400;
  cursor: pointer;
}

.page404__title {
  margin: 0 0 20px;
  padding: 0;
  color: #000000;
  font-size: 180px;
  line-height: 169.43px;
  font-weight: 400;
}

.page404__info {
  margin: 0 0 100px;
  padding: 0;
  color: #a0a0a0;
  font-size: 20px;
  line-height: 19.36px;
  font-weight: 400;
}
</style>

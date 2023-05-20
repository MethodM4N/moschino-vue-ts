<template>
  <div className="content__error">
    <h2><slot></slot></h2>
    <p>Мы уже занимаемся этой проблемой, попробуйте повторить попытку немного позднее</p>
  </div>
</template>

<style scoped>
.content__error {
  height: 42rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  text-align: center;
}

p {
  text-align: center;
}
</style>

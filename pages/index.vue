<template>
  <main>
    <h1>
      Krado CSS
    </h1>
    <iframe src="/example.html" frameborder="0"></iframe>
  </main>
</template>

<script>
export default {
  head () {
    return {
      titleTemplate: '',
      title: 'Krado - A CSS Framework'
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 100%;
  height: 780px;
  border: solid 1px #ccc;
}
</style>

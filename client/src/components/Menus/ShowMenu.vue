<template>
  <div>
    <h1>Show User</h1>
    <p>Menu ID: {{ menuId }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuId: null
    }
  },
  created () {
    // ดึงค่า userId จาก URL
    console.log("created userId",this.userId)
  },
  mounted () {
    // ดึงค่า userId จาก URL
    this.userId = this.$route.params.userId
    console.log("mounted userId",this.userId)
  }
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
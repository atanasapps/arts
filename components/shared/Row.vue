<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.row {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
<template>
  <div class="user" >
          <h3>{{user.id}}. {{user.name}} - {{user.age}}</h3>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    user: { type: Array, default:[]}
  },
  data() {
    return {
      text: "user"
    };
  }
};
</script>

<style>
</style>

<template>
  <div class="list-user">
    <User 
    v-for="user in list_user" 
    v-bind:key="user.id"
    v-bind:user="user"
    />
  </div>
</template>

<script>
import User from "./CompUser.vue";
export default {
  name: "list-user",
  props: {
    list_user: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      lol: "List-user"
    };
  },
  components: {
    User
  }
};
</script>

<style></style>

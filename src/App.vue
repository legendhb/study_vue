<template>
    <ol>
        aaa
        <TodoItem v-for="item in todoList" v-bind:todo="item" v-bind:key="item.id"></TodoItem>
    </ol>
</template>
<script>
  import TodoItem from "./components/TodoItem";
  export default {
    name: "app",
    components: {TodoItem},
  }
</script>
<template>
    <div>
        <Header></Header>
        <Main></Main>
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
};
</script>

<style lang="scss"></style>

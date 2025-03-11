<script>
export default {
  data() {
    return {
      mode: "Dark",
    };
  },
  methods: {
    toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
      this.mode = isDark ? "Light" : "Dark";
    },
  },
  mounted() {
    if (localStorage.getItem("dark-mode") === "enabled") {
      document.documentElement.classList.add("dark");
      this.mode = "Light";
    }
  },
};
</script>

<template>
  <button
    class="bg-zinc-400 dark:bg-zinc-600 hover:bg-zinc-500 dark:hover:bg-zinc-500 transition-colors duration-100 ease-in p-3 rounded-lg text-[#d2cfd0] dark:text-[#292727]"
    @click="toggleDarkMode"
  >
    {{ mode }} Mode
  </button>
</template>

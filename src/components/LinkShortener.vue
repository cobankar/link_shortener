<script setup lang="ts">
import { reactive } from "vue";
import short from "../api/short";

type BitlyResponse = {
  created_at: string;
  id: string;
  link: string;
  long_url: string;
  archived: boolean;
  references: {
    group: string;
  };
};

var link = reactive({ long: "", short: "" });

const handleSubmit = () => {
  short(link.long)
    .then((response) => response.json())
    .then((data: BitlyResponse) => {
      console.log("success", data);
      link.short = data.id;
    });
  link.long = "";
};

const handleCopyLink = () => {
  navigator.clipboard.writeText(link.short);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>Enter your link</label>
    <input v-model="link.long" />
    <button>Shorten</button>
  </form>
  <div class="response" v-if="link.short">
    <div>Your link</div>
    <div id="link">{{ link.short }}</div>
    <button @click="handleCopyLink">Copy Link</button>
  </div>
</template>

<style scoped>
form,
.response {
  display: flex;
  gap: 1em;
  margin-top: 2em;
  width: auto;
}

.response :first-child {
  margin-right: auto;
}
</style>

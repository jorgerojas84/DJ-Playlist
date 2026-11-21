<script setup>
import { ref } from "vue";
import { usePlaylistStore } from "../stores/playlistStore";

const playlistStore = usePlaylistStore();

const title = ref("");
const artist = ref("");

function addSong() {
  if (title.value.trim() && artist.value.trim()) {
    playlistStore.addSong(title.value, artist.value);
    title.value = "";
    artist.value = "";
  }
}
</script>

<template>
  <div>
    <h2>Add a Song</h2>

    <input v-model="title" placeholder="Song Title" />
    <input v-model="artist" placeholder="Artist Name" />

    <button @click="addSong">Add Song</button>

    <h3>Example Songs</h3>
    <button
      @click="playlistStore.addSong('Party All The Time', 'Eddie Murphy')"
    >
      Party All The Time
    </button>
    <button @click="playlistStore.addSong('More Than Words', 'Extreme')">
      More Than Words
    </button>
    <button @click="playlistStore.addSong('Pinky Up', 'KATZEYE')">
      Pinky Up
    </button>
  </div>
</template>

<script setup>
import { usePlaylistStore } from "../stores/playlistStore";

const playlistStore = usePlaylistStore();
</script>

<template>
  <div>
    <h2>My Playlist</h2>

    <p v-if="playlistStore.songs.length === 0">No songs added yet.</p>

    <ul v-else>
      <li v-for="song in playlistStore.songs" :key="song.id">
        {{ song.title }} - {{ song.artist }}

        <button @click="playlistStore.removeSong(song.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

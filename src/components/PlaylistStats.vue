<script setup>
import { usePlaylistStore } from "../stores/playlistStore";

const playlistStore = usePlaylistStore();
</script>

<template>
  <div>
    <h2>Playlist Folder Total Songs</h2>
    <p>Total Songs: {{ playlistStore.totalSongs }}</p>
  </div>
</template>

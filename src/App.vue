<script setup>
import AddSong from "./components/AddSong.vue";
import SongList from "./components/SongList.vue";
import PlaylistStats from "./components/PlaylistStats.vue";
</script>

<template>
  <div>
    <h1>DJ Playlist Organizer</h1>
    <img src="./assets/dj-picture.jpg" class="dj-picture" alt="DJ Picture" />
    <AddSong />
    <SongList />
    <PlaylistStats />
    <img src="./assets/dj-picture2.jpg" class="dj-picture" alt="DJ Concert" />
  </div>
</template>

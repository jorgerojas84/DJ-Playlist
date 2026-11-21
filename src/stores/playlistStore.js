import { defineStore } from "pinia";

export const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    songs: [],
  }),

  getters: {
    totalSongs: (state) => state.songs.length,
  },
  actions: {
    addSong(title, artist) {
      this.songs.push({
        id: Date.now(),
        title: title,
        artist: artist,
      });
    },
    removeSong(id) {
      this.songs = this.songs.filter((song) => song.id !== id);
    },
  },
});

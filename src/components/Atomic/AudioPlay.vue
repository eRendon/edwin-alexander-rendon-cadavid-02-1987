<template>
  <div class="audio-player lg:flex">
    <div class="bg-gray-100 justify-center mt-3 lg:mt-0 flex gap-5 rounded-lg p-4 items-center">
      <button class="font-bold flex" @click="togglePlay">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
        </svg>

        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
      <div class="time">
        {{ currentTime }} / {{ duration }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';

const props = defineProps<{
  urlAudio: string
}>()

const audio = new Audio(props.urlAudio);

const isPlaying = ref(false);
const currentTime = ref('0:00');
const duration = ref('0:00');

const updateCurrentTime = () => {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
  currentTime.value = `${minutes}:${seconds}`;
};

const updateDuration = () => {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
  duration.value = `${minutes}:${seconds}`;
};

const togglePlay = () => {
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
};

audio.addEventListener('play', () => {
  isPlaying.value = true;
});

audio.addEventListener('pause', () => {
  isPlaying.value = false;
});

audio.addEventListener('timeupdate', updateCurrentTime);

audio.addEventListener('loadedmetadata', updateDuration);

onUnmounted(() => {
  audio.removeEventListener('timeupdate', updateCurrentTime);
  audio.removeEventListener('loadedmetadata', updateDuration);
  audio.pause();
});
</script>

<style scoped>
.audio-player {
  align-items: center;
  gap: 10px;
}

.time {
  font-family: monospace;
}
</style>

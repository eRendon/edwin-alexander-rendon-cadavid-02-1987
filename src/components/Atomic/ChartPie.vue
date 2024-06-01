<template>
  <Pie :data="chartData" :options="chartOptions"></Pie>
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref } from 'vue'
ChartJS.register(ArcElement, Tooltip, Legend)
const props = defineProps<{
  stats: number[]
  labels: string[]
}>()

const statColors = ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#FFCD56', '#4BC0C0'];

const chartData = ref({
  labels: props.labels,
  datasets: [
    {
      label: 'Stats',
      backgroundColor: statColors.slice(0, props.stats.length),
      borderColor: statColors.slice(0, props.stats.length),
      borderWidth: 1,
      data: props.stats
    }
  ]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
}

</script>

<style scoped>

</style>

<template>
  <Pie :data="chartData" :options="chartOptions"></Pie>
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js'
import { ref } from 'vue'
ChartJS.register(ArcElement, Tooltip, Legend)
const props = defineProps<{
  stats: number[]
  labels: string[]
}>()

const statColors = ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#FFCD56', '#4BC0C0'];

const chartData = ref<ChartData<'bar'>>({
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

const chartOptions = ref<ChartOptions<'bar'>>({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 20,
        padding: 15,
        textAlign: 'center',
        font: {
          size: 12
        }
      }
    },
  }
})

</script>

<style scoped>

</style>

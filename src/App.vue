<script setup>
import { ref, computed } from 'vue'
import { shuffle, chunk } from 'lodash-es';
import { formatName } from './formatName.js';

const playersString =
	ref('potato, carrot, onion, parsley, cucumber, beet');
const players = computed(
  () => playersString.value.split(',')
  	.map(player => player.trim())
  	.filter(player => player)
);

const playerCountPerTeam = ref(3);
  
const teams = computed(
  () => chunk(shuffle(players.value), playerCountPerTeam.value)
);
  
const remakeTeams = () => playersString.value += ' ';
</script>

<template>
  Player names (comma separated)
  <input v-model="playersString">
  
  Players per team
  <input v-model="playerCountPerTeam">
  
  <ul v-for="(team, index) in teams" :key="index">
    Team {{ index + 1 }}:
    <li v-for="(player, playerIndex) in team" :key="playerIndex">
    		{{ formatName(player) }}
    </li>
  </ul>
  
  <button @click="remakeTeams">
    Remake
  </button>
</template>

<style>
  input {
    display: block;
    margin: 16px;
    min-width: 640px;
  }
</style>
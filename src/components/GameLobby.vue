<template>
  <div>
    <h1>Players:</h1>
    <div>
      <ul>
        <li v-for="player in players"
          :key="player.uid"> {{ player.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { auth, database } from "../firebaseConfig";
import { ref as dbRef, set, onDisconnect, onChildAdded, onValue } from 'firebase/database'
import { ref } from 'vue';
import { useUsernameStore } from "@/stores/username";
import { storeToRefs } from "pinia";

let playerId;
let playerRef;
let allPlayersRef = dbRef(database, 'players');

const usernameStore = useUsernameStore()
const { username } = storeToRefs(usernameStore);

signInAnonymously(auth)
  .then((response) => {
    console.log("signed in");
    console.log(response);
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

let players = ref({});
onValue(allPlayersRef, (snapshot) => {
  console.log("All Players value changed");
  players.value = snapshot.val();
});

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    // user logged in
    playerId = user.uid;
    playerRef = dbRef(database, `players/${playerId}`);

    set(playerRef, {
      name: username.value,
    });

    onDisconnect(playerRef).remove();

  } else {
    // user logged out
  }
});

onChildAdded(allPlayersRef, (snapshot) => {
  console.log("Child Added");
  const addedPlayer = snapshot.val();
});

</script>

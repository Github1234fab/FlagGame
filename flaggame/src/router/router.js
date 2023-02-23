import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import GameCard from "../components/GameCard.vue";
import Error from "../views/Error.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/game",
      component: Game,
    },
    {
      path: "/game_card",
      component: GameCard,
    },
    {
      path: "/error",
      component: Error,
    },
  ],
});

export default router;

import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./redux/game/gameSlice";
import leaderboardReducer from "./redux/leaderboard/leaderboardSlice";

const store = configureStore({
	reducer: {
		game: gameReducer,
		leaderboard: leaderboardReducer,
	},
});

export default store;
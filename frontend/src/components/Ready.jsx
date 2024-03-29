import { useDispatch, useSelector } from "react-redux";
import { resumeGame, startGame } from "../redux/game/gameSlice";

function Ready() {
	const game = useSelector((state) => state.game);

	const dispatch = useDispatch();

	function handleRestart() {
		dispatch(startGame(game.email));
	}

	function handleResume() {
		dispatch(resumeGame());
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="mb-4 flex flex-col gap-4 justify-center items-center">
				<h2>Email: {game.email}</h2>
				<h2>High Score: {game.currentHighScore}</h2>
			</div>
			<div className="flex flex-col gap-3">
				{game.pointer !== -1 && (
					<button
						className="btn bg-[#1098ad] hover:bg-transparent"
						onClick={handleResume}
					>
						Resume
					</button>
				)}
				<button
					className="btn bg-[#ffa94d] hover:bg-transparent"
					onClick={handleRestart}
				>
					New Game
				</button>
			</div>
		</div>
	);
}

export default Ready;
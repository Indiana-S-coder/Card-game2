# 😸 Exploding Kitten

## Description

Welcome! The objective of this project is to build a web-based, single-player card game. The game consists of 4 different types of cards - Cat card 😼, Defuse card 🙅‍♂️, Shuffle card 🔀, and Exploding kitten card 💣. The game is won by drawing all 5 cards from the deck without drawing the Exploding kitten card.

## Rules

- If the card drawn from the deck is a cat card, then the card is removed from the deck.
- If the card is exploding kitten (bomb) then the player loses the game.
- If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.
- If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.

## Tech Stack

- Frontend: React (with Redux), Vite, Yarn
- Backend: Golang, Redis

## Getting Started

### Prerequisites

- Node.js
- Yarn
- Go
- Redis

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Indiana-S-coder/Card-game2.git
   
2. Install NPM packages
   ```sh
    cd frontend
    yarn install

3. Start the frontend server
   ```sh
    yarn dev

4. Navigate to the backend directory
   ```sh
    cd ../backend

5. Run the backend server
   ```sh
    go run main.go

> [!NOTE]
> Environment variables for backend: REDIS_ADDRESS=redis-14720.c301.ap-south-1-1.ec2.cloud.redislabs.com
REDIS_PASSWORD=xkjST9y18vklJd98GzmeGsOB7pL9DOrO.
> Environment variables for frontend: VITE_API = https://emitrr-assignment-backend-1.onrender.com

## Usage
Once both servers are running, navigate to http://localhost:3000 (or whatever your Vite server’s address is) in your web browser to start playing the game.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project
1. Create your Feature Branch (``git checkout -b feature/AmazingFeature``)
2. Commit your Changes (``git commit -m 'Add some AmazingFeature'``)
3. Push to the Branch (``git push origin feature/AmazingFeature``)
4. Open a Pull Request

## Contact
Bharti Patel - [linkedin](https://linkedin.com/in/bhartipatel2503) - bhartipatel2503@gmail.com

Project Link: https://github.com/Indiana-S-coder/Card-game2


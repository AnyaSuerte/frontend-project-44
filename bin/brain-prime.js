#!/usr/bin/env node
import userName from '../src/cli.js';
import primeGame from '../src/games/prime-game.js';

console.log(primeGame(userName));

#!/usr/bin/env node
import userName from '../src/cli.js';
import parityGame from '../src/games/parity-game.js';

console.log(parityGame(userName));

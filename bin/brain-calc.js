#!/usr/bin/env node
import userName from '../src/cli.js';
import calcGame from '../src/games/calc-game.js';

console.log(calcGame(userName));

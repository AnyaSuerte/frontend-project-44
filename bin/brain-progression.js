#!/usr/bin/env node
import userName from '../src/cli.js';
import progressionGame from '../src/games/progression-game.js';

console.log(progressionGame(userName));

#!/usr/bin/env node
import userName from '../src/cli.js';
import gcdGame from '../src/games/gcd-game.js';

console.log(gcdGame(userName));

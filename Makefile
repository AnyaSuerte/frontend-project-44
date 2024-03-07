install:
	npm ci
games:
	node bin/brain-games.js
games-parity:
	node bin/brain-even.js
games-calc:
	node bin/brain-calc.js
games-gcd:
	node bin/brain-gcd.js
games-progression:
	node bin/brain-progression.js
games-prime:
	node bin/brain-prime.js	
publish:
	npm publish --dry-run	
test:
	npm test -- --coverage --coverageProvider=v8
lint:
	npx eslint .
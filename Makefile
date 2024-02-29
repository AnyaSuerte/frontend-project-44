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
publish:
	npm publish --dry-run	
test-coverage:
	npm test -- --coverage --coverageProvider=v8
lint:
	npx eslint .
install:
	npm ci
games:
	node bin/brain-games.js
games-parity:
	node bin/brain-even.js
publish:
	npm publish --dry-run	
test-coverage:
	npm test -- --coverage --coverageProvider=v8
lint:
	npx eslint .
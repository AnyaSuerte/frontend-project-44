install:
	npm ci
games:
	node bin/brain-games.js
publish:
	npm publish --dry-run	
test-coverage:
	npm test -- --coverage --coverageProvider=v8
pnpm init
touch .gitignore


pnpm add @commitlint/config-conventional @commitlint/cli -D
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
pnpm add husky -D
pnpm husky install

#"scripts": {
 #   "prepare": "husky install"
#},

pnpm husky add .husky/commit-msg 'pnpm commitlint --edit $1'
pnpm add commitizen -D
pnpm commitizen init cz-conventional-changelog --pnpm --dev --exact

# "scripts": {
 # "commit": "git-cz"
# }

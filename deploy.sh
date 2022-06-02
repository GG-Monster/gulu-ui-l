rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:GG-Monster/Vue-UI.git &&
git push -f -u origin main &&
cd -
echo https://gg-monster.github.io/Vue-UI/index.html

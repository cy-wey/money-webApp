rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:cy-wey/money-website.git &&
git push -f -u origin main &&
git branch -M main &&
git remote add origin git@github.com:cy-wey/money-website.git &&
git push -f -u origin main &&
cd -
echo https://cy-wey.github.io/money-website/index.html
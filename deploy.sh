rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "updated" &&
git branch -M main &&
git remote add origin git@gitee.com:wang_shiyang123/migu-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://aalldd.github.io/migu-ui-website/index.html

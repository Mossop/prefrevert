cd chrome
find * | grep -v \\.svn | zip -u@0 prefrevert.jar
cd ..
find * | grep -v "^chrome/" | grep -v \\.svn | grep -v build.sh | zip -u@9 prefrevert.xpi
zip -u9 prefrevert.xpi chrome/prefrevert.jar

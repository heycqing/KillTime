#清除旧coverage报告
rimraf coverage && rimraf .nyc_output

#运行测试和收集新的coverage报告
nyc --reporter=html npm test

#按版本分类报告
mkdir -p coverage_archive/$npm_package_version 
cp -r coverage/* coverage_archive/$npm_package_version

#在浏览器打开报告预览
npm-run-all --parallel cover-serve cover-open
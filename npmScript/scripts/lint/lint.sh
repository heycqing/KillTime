# 检查js文件
eslint 'static/**/*.js' --fix

# 检查样式文件
stylelint 'static/**/*.js' --fix

# 检查html文件

# 运行所有检查命令
npm-run-all --parallel lint:*
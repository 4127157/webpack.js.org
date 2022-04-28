"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3849],{3849:function(a,e,t){t.r(e),t(7378);var n=t(2682);function s(){return(s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}function o(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",s({components:e},t),(0,n.kt)("p",null,"Let's start by clearing up a common misconception. Webpack is a module bundler like ",(0,n.kt)("a",{href:"http://browserify.org/",parentName:"p"},"Browserify")," or ",(0,n.kt)("a",{href:"https://brunch.io/",parentName:"p"},"Brunch"),". It is ",(0,n.kt)("em",{parentName:"p"},"not a task runner")," like ",(0,n.kt)("a",{href:"https://www.gnu.org/software/make/",parentName:"p"},"Make"),", ",(0,n.kt)("a",{href:"https://gruntjs.com/",parentName:"p"},"Grunt"),", or ",(0,n.kt)("a",{href:"https://gulpjs.com/",parentName:"p"},"Gulp"),". Task runners handle automation of common development tasks such as linting, building, or testing your project. Compared to bundlers, task runners have a higher level focus. You can still benefit from their higher level tooling while leaving the problem of bundling to webpack."),(0,n.kt)("p",null,"Bundlers help you get your JavaScript and stylesheets ready for deployment, transforming them into a format that's suitable for the browser. For example, JavaScript can be ",(0,n.kt)("a",{href:"/plugins/terser-webpack-plugin/",parentName:"p"},"minified")," or ",(0,n.kt)("a",{href:"/guides/code-splitting",parentName:"p"},"split into chunks")," and ",(0,n.kt)("a",{href:"/guides/lazy-loading",parentName:"p"},"lazy-loaded")," to improve performance. Bundling is one of the most important challenges in web development, and solving it well can remove a lot of pain from the process."),(0,n.kt)("p",null,"The good news is that, while there is some overlap, task runners and bundlers can play well together if approached in the right way. This guide provides a high-level overview of how webpack can be integrated into some of the more popular task runners."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"npm-scripts",parentName:"h2"}),"NPM Scripts",(0,n.kt)("a",{href:"#npm-scripts","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Often webpack users use npm ",(0,n.kt)("a",{href:"https://docs.npmjs.com/misc/scripts",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"scripts"))," as their task runner. This is a good starting point. Cross-platform support can become a problem, but there are several workarounds for that. Many, if not most users, get by with npm ",(0,n.kt)("inlineCode",{parentName:"p"},"scripts")," and various levels of webpack configuration and tooling."),(0,n.kt)("p",null,"So while webpack's core focus is bundling, there are a variety of extensions that can enable you to use it for jobs typical of a task runner. Integrating a separate tool adds complexity, so be sure to weigh the pros and cons before going forward."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"grunt",parentName:"h2"}),"Grunt",(0,n.kt)("a",{href:"#grunt","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"For those using Grunt, we recommend the ",(0,n.kt)("a",{href:"https://www.npmjs.com/package/grunt-webpack",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"grunt-webpack"))," package. With ",(0,n.kt)("inlineCode",{parentName:"p"},"grunt-webpack")," you can run webpack or ",(0,n.kt)("a",{href:"https://github.com/webpack/webpack-dev-server",parentName:"p"},"webpack-dev-server")," as a task, get access to stats within ",(0,n.kt)("a",{href:"https://gruntjs.com/api/grunt.template",parentName:"p"},"template tags"),", split development and production configurations and more. Start by installing ",(0,n.kt)("inlineCode",{parentName:"p"},"grunt-webpack")," as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack")," itself if you haven't already:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev grunt-webpack webpack")),(0,n.kt)("p",null,"Then register a configuration and load the task:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gruntfile.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," webpackConfig ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./webpack.config.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"grunt"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  grunt",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"initConfig"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    webpack",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      options",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        stats",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"!"),"process",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"env",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token constant",parentName:"code"},"NODE_ENV")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"||")," process",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"env",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token constant",parentName:"code"},"NODE_ENV")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"===")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'development'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      prod",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," webpackConfig",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dev",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," Object",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"assign"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," watch",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"true")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," webpackConfig",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n  grunt",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"loadNpmTasks"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'grunt-webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"For more information, please visit the ",(0,n.kt)("a",{href:"https://github.com/webpack-contrib/grunt-webpack",parentName:"p"},"repository"),"."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"gulp",parentName:"h2"}),"Gulp",(0,n.kt)("a",{href:"#gulp","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Gulp is also a fairly straightforward integration with the help of the ",(0,n.kt)("a",{href:"https://github.com/shama/webpack-stream",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"webpack-stream"))," package (a.k.a. ",(0,n.kt)("inlineCode",{parentName:"p"},"gulp-webpack"),"). In this case, it is unnecessary to install ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack")," separately as it is a direct dependency of ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-stream"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev webpack-stream")),(0,n.kt)("p",null,"You can ",(0,n.kt)("inlineCode",{parentName:"p"},"require('webpack-stream')")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack")," and optionally pass it an configuration:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"gulpfile.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," gulp ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'gulp'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," webpack ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack-stream'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\ngulp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"task"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'default'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," gulp\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"src"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'src/entry.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"pipe"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n      ",(0,n.kt)("span",{className:"token function",parentName:"code"},"webpack"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// Any configuration options..."),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"pipe"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"gulp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"dest"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'dist/'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"For more information, please visit the ",(0,n.kt)("a",{href:"https://github.com/shama/webpack-stream",parentName:"p"},"repository"),"."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"mocha",parentName:"h2"}),"Mocha",(0,n.kt)("a",{href:"#mocha","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"https://github.com/zinserjan/mocha-webpack",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"mocha-webpack"))," utility can be used for a clean integration with Mocha. The repository offers more details on the pros and cons but essentially ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha-webpack")," is a simple wrapper that provides almost the same CLI as Mocha itself and provides various webpack functionality like an improved watch mode and improved path resolution. Here is a small example of how you would install it and use it to run a test suite (found within ",(0,n.kt)("inlineCode",{parentName:"p"},"./test"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev webpack mocha mocha-webpack\nmocha-webpack ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/**/*.js'"))),(0,n.kt)("p",null,"For more information, please visit the ",(0,n.kt)("a",{href:"https://github.com/zinserjan/mocha-webpack",parentName:"p"},"repository"),"."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"karma",parentName:"h2"}),"Karma",(0,n.kt)("a",{href:"#karma","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"https://github.com/webpack-contrib/karma-webpack",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"karma-webpack"))," package allows you to use webpack to pre-process files in ",(0,n.kt)("a",{href:"https://karma-runner.github.io/1.0/index.html",parentName:"p"},"Karma"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev webpack karma karma-webpack")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"karma.conf.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"config"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  config",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"set"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    frameworks",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    files",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," pattern",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/*_test.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," watched",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," pattern",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/**/*_test.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," watched",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    preprocessors",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/*_test.js'"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/**/*_test.js'"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    webpack",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// Any custom webpack configuration..."),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    plugins",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'karma-webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"For more information, please visit the ",(0,n.kt)("a",{href:"https://github.com/webpack-contrib/karma-webpack",parentName:"p"},"repository"),"."))}o.isMDXComponent=!0,e.default=o}}]);
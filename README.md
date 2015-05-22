### ★ ProjectKit ★

__모던 웹 디자인 워크플로우 개선__을 위한 __Front-End 개발 도구__입니다.<br>
[Node.js](http://nodejs.org)와 [Ruby](https://ruby-lang.org/ko) 환경이 요구되며, [Sass](http://sass-lang.com)를 프로젝트에서 사용합니다.<br>
사용법은 [야무](http://yamoo9.net/)의 저서 __['만들면서 배우는 모던 웹 사이트 제작'](http://www.hanbit.co.kr/book/look.html?isbn=978-89-6848-187-1)__을 통해 공부하실 수 있습니다.

=
####[Node.js](http://nodejs.org) & [NPM](http://npmjs.com), [Ruby](https://ruby-lang.org/ko) 환경에서 작동하는 ProjectKit
Node.js와 Ruby 환경에서 작동하는 ProjectKit은 컴퓨터에 Node.js, Ruby가 설치되어 있어야 사용할 수 있습니다. (컴퓨터 운영체제가 윈도우즈(Windows)라면 Ruby를 설치해야 합니다. 반면 맥(OSX)을 사용 중이라면 Ruby를 설치하지 않아도 됩니다) Node.js, Ruby 설치 파일은 아래 링크에서 제공됩니다.

* [Node.js](http://nodejs.org/download/)
* [Ruby](http://rubyinstaller.org/downloads/) ([Sass](http://sass-lang.com 'Ruby 환경에서 사용하는 Sass') or [Compass](http://compass-style.org 'Sass 프레임워크')를 사용할 경우 설치)

=
#### ProjectKit 시작하기

###### Node.js & Ruby 설치 확인
```sh
$ node --version # Node.js 설치 및 버전 확인
$ ruby -v        # Ruby 설치 및 버전 확인
$ npm -v         # NPM 버전 확인
$ gem -v         # Gem 버전 확인
```

###### [Gulp.js](http://gulpjs.com) 전역(Global) 설치
```sh
$ npm install --global gulp # npm i -g gulp
```

###### 프로젝트 의존 모듈 설치 (NPM, Bower)
```sh
$ npm install   # npm i
```

###### Sass 모듈 설치 (Ruby 환경 Sass를 사용할 경우)
```sh
$ gem install sass    # Ruby Sass 설치
$ gem install compass # Compass를 사용하고자 할 경우에만 설치
$ gem install Susy    # Susy를 사용하고자 할 경우에만 설치
```

###### Gulp 업무(Tasks) 실행
```sh
$ gulp
```
-
Copyright © 2015 yamoo9 <yamoo9@naver.com> / [@yamoo9](https://facebook.com/yamoo9) / [yamoo9.net](http://yamoo9.net/)
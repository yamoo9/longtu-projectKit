module.exports = function() {

	// 작업용 폴더 : develop
	// 배포용 폴더 : build
	var develop = 'develop/';
	var build   = 'build/';

	// 빌드 여부 설정
	var isBuild = false;


	return {

		develop : develop,
		build   : build,
		isBuild : isBuild,

		// HTML 설정
		html: {
			develop: develop+'html/**/*.html',
			build  : build,
			options: {
				empty        : false, // 값이 true이면 속성이 빈 경우를 제거하지 않음
				cdata        : false, // 값이 true이면 CDATA 주석을 지우지 않음
				comments     : false, // 값이 true이면 주석을 지우지 않음
				conditionals : true,  // 값이 true이면 IE 조건부 주석문을 지우지 않음
				spare        : false,
				quotes       : false,
				loose        : false
			}
		},

		// Sass 설정
		sass: {
			develop: develop+'sass/',
			build  : build+'css/',
			options: {
				defaultEncoding : 'UTF-8',
				noCache         : false,
				lineNumbers     : false,
				style           : isBuild ? 'compressed' : 'expanded',
				compass         : false,
				sourcemap       : false,
			}
		}

	} // return

};
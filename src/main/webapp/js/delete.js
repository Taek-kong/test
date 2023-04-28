/* password 입력 여부만 확인*/

window.onload=function(){
	document.getElementById('submit1').onclick= function(){
		if(document.dfrm.password.value.trim()==''){
			alert('비밀번호를 입력해주세요');
			return false;
		}
		document.dfrm.submit(); // dfrm 이라는 이름을 가진 폼을 제출하는 메서드
	}
}
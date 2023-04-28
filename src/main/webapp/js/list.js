/*
비워져 있는 부분이나 첨부파일 형식 체크
*/
window.onload= function(){
	document.getElementById('submit1').onclick = function(){
		//도큐먼트에서 id submit1을 찾아서 클릭할 때 
		//웹 페이지의 폼(form)에서 이름(name)이 "password"인 요소의 값을 가져와서, 앞뒤 공백을 제거한 후에 반환하는 코드
		if(document.wfrm.info.checked==false){     
		//도큐먼트 동의 부분에서 체크박스를 체크하지 않았을 때
		alert('동의를 해주세요'); //경고창 실행
		return false; //a태그가 click 이벤트를 받았을 때 false값을 반환시켜서 동작을 중지
		} 
		if(document.wfrm.writer.value.trim() ==''){
		//글쓴이가 비워져 있을 때
		alert('글쓴이를 입력해주세요');
		return false;
		}
		if(document.wfrm.subject.value.trim() ==''){
		alert('제목을 입력해주세요');
		return false;
		}
		if(document.wfrm.password.value.trim() ==''){
		alert('비밀번호를 입력해주세요');
		return false;
		}
		if(document.wfrm.upload.value.trim() ==''){
		alert('사진파일을 첨부해주세요');
		return false;
		}
		var fileValue= document.wfrm.upload.value.trim().split('\\');//첨부파일
		var filename= fileValue[fileValue.length-1]; //파일명
		var fileEname= filename.substring(filename.length-4, filename.length); //확장자 / str.substring(startIndex, endIndex): 문자열 일부분 추출
		if(fileEname=='.jpg'||fileEname=='.png'||fileEname=='.gif'){} 
		//사진 파일만 첨부하세요
		else{
			alert('사진 파일만 첨부해주세요.(jpg,png,gif');
			document.wfrm.upload.value='';
			return false;
		}
		document.wfrm.submit();
		
	}
	
	
}
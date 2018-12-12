
	function ajax(url,fnsucc,fnfail) {
		var xhr=new XMLHttpRequest();
		xhr.open('get',url,true);
		xhr.send();
		xhr.onreadystatechange=function() {
			if (xhr.readyState==4) {
				if (xhr.status==200) {
					fnsucc(xhr.responseText);
				}else{
					fnfail();
				}
			};
		};
	};




function loadjson(file,callback) {
	// body...
	var xhr= new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function (){
		if(xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("first.json",function(text){
	var d=JSON.parse(text);
	console.log(d.details)
	basic(d.details);

});
var main=document.querySelector(".root");

function basic(data) {
	// body...
	var r=document.createElement("div");
	r.classList.add('row');
	r.classList.add('pr');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-3');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-5');
	r.appendChild(c1);
	var c2=document.createElement('div');
	c2.classList.add("col-4");
	r.appendChild(c2);
var img=document.createElement('img')
img.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABX1BMVEX/////VyI/UbX/t02/Ngz/mADTLy83SrOIksx4Rxn/UBL/u0//uE3/SAC9Mgz/lgD/moT/UxqBi8n/Tx7/RQD/b0f/TAD/kgDQFBQ5TLMqQbAxRrL/7+v/r0nTKyv/Uhb/WydvPxXDNACts9vji4v/qzb/8uPe4fD29/vSIiIwU7v/0sj/qJT/u6z/eln/ci7qpkX/497/sqP/bEO6JgD/oSDENQDr7fb01NT/dVH/kXf/yr//29P/hDb/n0L/oUP/kTzQkTu6fzOBTx2UXyT/gmLOWiDojTnvmj/GRxb6qla+yez/3Lj/rE3/xIZHWLfO0ul0gMWbo9RlcsDqqanaXV25NlB3R5FnSpv/YjX/aCn/fTP/im+ocCzioEL/q5reeS+rQESJTnurRkqAT4WyQjy6PiWaS2VdVaVtVJfvlGPOAAXvwMDgfHzYSEjllZWUQHmvOV7IMjyHQ4SiPWsKyYMsAAALvUlEQVR4nO2d+VvbxhaGvQgIlgQxdkxs7OAADmAMgbAEQtIWQpq2NCWBpC0pWZoul3uzdvn/n6vRZi2jmZFmzsi0+n7I81Romddn5nxnRmM3l8uUKVOmTJkyZcqUKVOmTJkyZcqUKVOmgVJzaWm5dzmoW2k3S4jWlu/slKq6XquVQqo2024dr5Z6OwZaqZyPUOlO2i3k0u5ZTY+Gs3SBg7h0Vq1Nk+kudBBvtXUGPCT9Igax2dNrbHgXNIi9WomZ7yIGcbkUi+/CBXFtXY/Hh4J49wJF8ZVOMQc8ol6t6usrveW1tNtPU3OdPcGEVC6Xanrtzm7aECTt1pIE0K/pWu1sKW2QKPWq3HwWpN5eTpsFqxWOHhpQWT8dwM66HtMjaIw7A5Zfm23GGi0G40BNHZtl/hwTkr4yOGFstgEAjZRTvps2maNT0V3UVrk6IMaxDgRoqDoQOXVFaBYdQMRe/FL7YiEuCapkohFTTjdN2AgipTxDvgLiEz6V22kC9sQVo9EqPUgPcA16EFrS05trnML3UQsxraEopY8ildfTAZTUR5FSmmiswFVrYcQ0+im413tVOkuBUFaasZRCabMMX814Vb4inVAqnyFd9lxxWZZTOJLuGAIXLioVptMkB1HcKKzkv/icCVFyEIUl0sq9oqreY0KUmk6XBIWwcrOlasWiepMFcVqmJ64ICWGl/RniKxa1YpvlfImFjZCK1BiAFh9CbLEEsfRKGuFlActrlZ9aatGV+hlTP5VGyO+FleeP3ABaiCzZRpph7PISejuoi8iQbaZlrWc84MwzlXuaWgxK0xiyjaRc0+TLM8ghQnyM2aYmZ8WGqyR1HSIshmxTXpFCyLFGihuAsbKNlG7Kscxd+amI7aDs2UZKN03cSUMOkSDbSMmmCSu2Sj5yAHqzDe02ugTCZJkU6xCYfkrLNhJMP5HdRzkEBpGSbUqXwQnvxK9JK+3P6R3URSRnm/IpOCHTPMfHR3SIkGjZBtwv1uJ6Bc0hwojk2qYG/do7plfQHQLTT4nZZhp6S/FZnJcVTA6BQSRmmzYwYZwQMjoEBvEm4a7A30GJMQzZHSIkrUi4L7AjMrth5XkMhwiLcOdSD5SQcYUmpkPEIgR+R7POVJTGdog4hPk8JGCTpZNWnrf4AkghBE01DIkmoUPEIAT1fLrfV+6pnB2USgiaamhlN4dDsBOCvr/YISYaTodgJczXAAnJs19Oh2AmrMIBUhKNJgyQTKjDfQPsLplQGB+tl8Il01vkRCOLEPAtG6VmC7VTVRlGpqZi/IX4HMAlRXIqDRJq2t7+/irNPdTV/f290AgmPgewMqVUpYGmv7yO9IKMqL5AJ40GPwjicwArU0rN5o/g6vVRpOv7JEQD0Dqr6I8i+UFgdkF7rYZte6jxuI9hNBhq8oPA7IK2x8RPeH/Ubvwe4W3Tnk04ej8OIZhd0Cb4UYTR3XTQCHuUutvf+AOHcJWhl44exCEEW9qnzSz8jX9p55ADYqY5sM96GSfTgP0MA22tNND4fcMFRq/fJyQatKp2H50U6snkB4HNn2ivLILxWX1xcBA28wCitndw8CJUF1Ce1AYipE3wQ61XcQVZUCqutqM8CWqGGJeQQ+kQUrcoyCMEesVGXWiTSAhT1PzzCanvLCQSwmyIpi6WyiMEKtsoaxhSCWG2Rg0QYQnm23qv/vGEd2iv8C88IXVrsERCmPVE6pY9iYQwE8QBIgSaPtEIK8SZYBxpRcoORaA1YSrhazHvDo0J1WsKYRmGkLq/e6MlJohaa4PyJCBC6j6MsS/FBFH9coxGCLNnn/LUfF7ZeCgCUX24oVCeVIIhpO7ZU5QxAf1Ua40pFMIS0NdJqduhDEIB/dTooxTCEtS7J+p2KEVRNrjzqfp6QyETggHS9z8rCJFzKKJBSCaEA6R/u1kxEb/iQVS/MgEJhICA9N/vVLgRHcBoQkhAY/pEWYpSeBFdwEhCWEBjlk9+RapwIvYBowihAXO5JeL/CEBxER8m2B2l2UmGQAgPmMs1TwmuqPQRX8dG1CybIBHKADT0IHowKh7Er2NuUlRbX3sAsYSSAEm/+expoTI21omxzU3TOhtjCplQGmAutxv1w+uKD3FyqMOKqHWGJn2AGEKJgLncWh5fhPsJx4fGN4sMcTRO2TTOpRBKBTR0BWv+QcKh8fFN6mRDa22Oo1PJhLIBI8w/RGgydkg7hoodk49GKB8wl1vG5BsMIWK0IbUAm43nnEYihJoPknU3bP5YQgtyaLPTQUPOGHTmP8VOZ3PIxaMQphFBpLD5RxHalMaBTUvOf3r/Hk2YTgRNBc2fRNjnDLLRCNOKoKmA+dMJoxVJmGIEkfzmD0GYagSRfOYPQJg6oKGdGiDhIADmcpd1MMLBAPSYv2jClJOMR475+9o4MxmLcHImRDgoEUSyzb9PN7M18/M345OTk1jvC0TPPO+bn7e2Zma8hIMTQVNnxmBsu3i/vTnvNg5zN7797tEQCdOEG3r03bc3coeN7vmb31zI9kBF0NSrqklo4P3y61G3WyjUT6w/GJgtM0pBOnSsheBMndQLhW73/Fcbsj1gEUTa1fMKip6Jh9SY7/8RRdPttFa3fOTCIc03rIsMyDe/b80oKfxsMF3N063/nDt4hkYuBU6wojnkjZyrSyPudd3uf3/Z2pHV6liaLfTxkKYWMCfd+F8QDmlhyndl9/wxdGPja+F4xN9Kg3AWc97c2znM0dnQtQXcxWnquB5so6Gj8HlzV4evYhCPwhdPFQ7hm82s2SkMn5FrQn3NABzGID5uYC8/GpS++vgIy2cYxpPAmSYgBvFJHX994+S2LAiCFiYa+PahKPgbaAOGEG9jQ2gxHstkweqwPhLVPMMwfO1zAYOIx4RbTB3N59LUwpPoAJox8JzrAQwgkm+RahjnSQE0I9DPhz5AH+JhxDB21DjBGasUzUaOHzcAJ865c2+H/er74gkxhuguhZSS6gQV0FOcri1e8wFeW3S+FDLPcps0/H/hhNK5TPWL06YP8dqi+82lS5SebiEGi1wJgAVa37LUL069iB7ABZYPyrhP0FuhdZsR0Fuc9jtqv4tiStKoG53g2gEHWGcE9BWn267jb/cPYkpSvEZkIjJHsOArTt9hCPEladqIrGPQlKc4fbpoEy4+dY9FlKRYyRuLVAPzqV+czrmErhdGl6RYREkZ9QljbrDVL06fuZnmmXOIVJLiPi0pvngc62M3NOVcOewSDjuH4n1YuCmneMVIDQ6hXZwueOYW9s1oJWlYdfAadSHWGLQaZefAbQ+hnUzjjWjvzeAUv01ucfrOQ/jOPMJSkoZuBjwUDxO0qTAyYV77cdElXPxoHmEqSUOIoCsbCfqo2Shz8Lz3EL4375bk4wLupxNJPnSnOP3gqbw/oAOsJWlADcBlxnj+7JFZnPZDaAQRHWAuSYOCI4xTYvmEbKzpW6dpJvEdW9jFdCFK3CSzON32EW5zfF6FEShTTOIUtowE+NTXS58m7/JwQUziXo6M4vSjj/Bj3JLUjwhDOJE8hGjl9JlvneY9eZWURggSRI5ehdp0+MFH+CF+SepRHfNai18J3ctp04m3kxrdlGNQF/yv0IUpsXtZ6n7vi+H3XfolBIVeoQsQT54x9YMv0/zAebcR8YQ8qc9U1xvCYb4QgkyFOTupQfjJU3l/4iWsT4gG5MukljyE3J+X+OKUL5Oa6v7hrtP8wRtCgGyavIjs60d3RfhH/psJN33+JhlB/NMK4rU/+UMY3gbBKRHDsND9yxqJi38JIMTt1uERV43Vlx1DIfcSvF7D7Yamun+jIC7+LSKEoh1RRKIxdG7uiToXci/BqUaAfyGh4pS3JHUkuDQVkWiQjOKUuyS1JXZVUUgqReqKsQpTQpMp98TCUffTVe6S1FFDJOFjMWaB9FbYnRoiV9wEVKW2ukLc3pRQQxRHKFBCa28xhi9Y/wJCkUXNcWOEU/WweG8p9B3U4cQlTk2ExX3LQdnonilTpkyZMmVKX/8HYpq/ftbfsb0AAAAASUVORK5CYII=";
img.classList.add('img');
c.appendChild(img);


	var name=document.createElement("h1");
	name.textContent=data.name;
	name.classList.add("name");
	//name.setAttribute("id","name");
	c1.appendChild(name);
	var email=document.createElement('h3');
	email.textContent=data.email;
	email.classList.add("email");
	c2.appendChild(email);
	var phno=document.createElement("h3")
	phno.textContent=data.phno;
	phno.classList.add("phno");
	c2.appendChild(phno);

	var line=document.createElement('hr');

		main.appendChild(line);

	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	var o1=document.createElement("h2");
	o1.textContent="CAREER OBJECTIVE :";
	o1.classList.add("o1");
	c.appendChild(o1);
	var obj=document.createElement('h3');
	obj.textContent=data.object;
	obj.classList.add("obj");
	c1.appendChild(obj);

	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	/*var line=document.createElement('hr');
	main.appendChild(line);*/
	var e=document.createElement("h2");
	e.textContent="EDUCATIOONAL QUALIFICATIONS :";
	e.classList.add('e');
	c.appendChild(e);

	var table =document.createElement('table');
	var row="<tr><th>SCHOOL/COLLEGE</th><th>YEAR-OF-STUDY</th><th>PERCENTAGE</th></tr>"
	for (var i = 0; i < data.edu.length; i++) {
		row+="<tr><td>"+data.edu[i].name+"</td><td>"+data.edu[i].year+"</td><td>"+data.edu[i].per+"</td</tr>";
		
	}
	table.innerHTML=row;
	table.classList.add("table-striped")
	table.classList.add("table")
	c1.appendChild(table);
	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	var s=document.createElement('h2');
	s.textContent="TECHNICAL SKILLS :";
	c.appendChild(s);
	var ul=document.createElement('ul');
	for (var i = 0; i < data.skills.length; i++) {
		li=document.createElement('li');
		li.textContent=data.skills[i];
		ul.appendChild(li);
	}
	c1.appendChild(ul);
	var line=document.createElement('hr');
	main.appendChild(line);

	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	var s1=document.createElement('h2')
	s1.textContent="OTHER SKILLS :"
	c.appendChild(s1);
	var ul=document.createElement('ul');
	for (var i = 0; i < data.soft.length; i++) {
		li=document.createElement('li');
		li.textContent=data.soft[i];
		ul.appendChild(li);
	}
	c1.appendChild(ul);
	var line=document.createElement('hr');
	main.appendChild(line);
	
	
	console.log(data);
}
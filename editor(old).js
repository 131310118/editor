/* var kEMain = document.getElementById('kEMain');
var kETools = document.getElementById('kETools');
var kETool_b = document.getElementById('kETool_b');
var kETool_i = document.getElementById('kETool_i');
 */
 var KEObject = {
	 kETool_down:document.getElementById('kETool_LH').getElementsByClassName('kETool_down')[0],
	 kETool_LHDown:document.getElementById('kETool_LH').getElementsByClassName('kETool_LHDown')[0],
 }
 var KEStatus = {
    selection:undefined,
    range:undefined,
	LastPos:0,
    isKEMainDown:false,
	isImgDown:false,
	modifyTarget:undefined,
	modifyImg:undefined,
	initTools:function(){
		KEStatus.saveCusorPos();
        if(KEStatus.isBold(KEStatus.range)){
            kETool_b.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_b.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
        if(KEStatus.isItalic(KEStatus.range)){
            kETool_i.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_i.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
		if(KEStatus.isUnderline(KEStatus.range)){
            kETool_u.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_u.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
		//行高开始
		var s = KEStatus.range.startContainer;
		var lhMap = {
			'1':0,'1.5':1,'1.75':2,'2':3,'3':4,'4':5,'5':6
		}
		while(s.parentNode!==kEMain){
			s = s.parentNode;
		}
		if(s.style.lineHeight){
			var lh = s.style.lineHeight;
			var n = lh.substring(0,lh.length-2);
			KEObject.kETool_LHDown.getElementsByClassName('on')[0].className = 'option';
			KEObject.kETool_LHDown.children[lhMap[n]].className = 'option on';
		}else{
			if(KEObject.kETool_LHDown.getElementsByClassName('on')[0]){
				KEObject.kETool_LHDown.getElementsByClassName('on')[0].className = 'option';
			}
			KEObject.kETool_LHDown.children[0].className = 'option on';
		}
		//行高结束
		if(KEStatus.isJustifyLeft(KEStatus.range)){
            kETool_l.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_l.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
		if(KEStatus.isJustifyRight(KEStatus.range)){
            kETool_r.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_r.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
		if(KEStatus.isJustifyCenter(KEStatus.range)){
            kETool_c.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_c.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
		if(KEStatus.isJustifyFull(KEStatus.range)){
            kETool_j.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_j.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
		//边框
		if(KEStatus.isBorder(KEStatus.range)){
            kETool_border.className = 'kETool_btn kETool_bg checked';
            KEStatus['isKEMainDown'] = false;
        }else{
            kETool_border.className = 'kETool_btn kETool_bg';
            KEStatus['isKEMainDown'] = false;
        }
	},
    isBold:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
        var s = range.startContainer;
        var e = range.endContainer;
        var p = kEMainContent;
		if(KEStatus.range.startContainer===KEStatus.range.endContainer&&range.startOffset==range.endOffset){
			do{
				if(s.nodeName=='B'){
					return true;
				}else if(s===p){
					return false;
				}else{
					if(s!==p){
						s = s.parentNode;
					}
				}
			}while(true)
		}
        do{
            if(s.nodeName=='B'|| e.nodeName=='B'){
                return true;
            }else if(s===p&&e===p){
                return false;
            }else{
                if(s!==p){
                    s = s.parentNode;
                }
                if(e!==p){
                    e = e.parentNode;
                }
            }
        }while(true)
    },
    isItalic:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
        var s = range.startContainer;
        var e = range.endContainer;
        var p = kEMainContent;
		if(KEStatus.range.startContainer===KEStatus.range.endContainer&&range.startOffset==range.endOffset){
			do{
				if(s.nodeName=='I'){
					return true;
				}else if(s===p){
					return false;
				}else{
					if(s!==p){
						s = s.parentNode;
					}
				}
			}while(true)
		}
        do{
            if(s.nodeName=='I'|| e.nodeName=='I'){
                return true;
            }else if(s===p&&e===p){
                return false;
            }else{
                if(s!==p){
                    s = s.parentNode;
                }
                if(e!==p){
                    e = e.parentNode;
                }
            }
        }while(true)
    },
	isUnderline:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var s = range.startContainer;
        var e = range.endContainer;
        var p = kEMainContent;
		if(KEStatus.range.startContainer===KEStatus.range.endContainer&&range.startOffset==range.endOffset){
			do{
				if(s.nodeName=='U'){
					return true;
				}else if(s===p){
					return false;
				}else{
					if(s!==p){
						s = s.parentNode;
					}
				}
			}while(true)
		}
        do{
            if(s.nodeName=='U'|| e.nodeName=='U'){
                return true;
            }else if(s===p&&e===p){
                return false;
            }else{
                if(s!==p){
                    s = s.parentNode;
                }
                if(e!==p){
                    e = e.parentNode;
                }
            }
        }while(true)
	},
	isJustifyLeft:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var s = KEStatus.range.startContainer;
		while(s.parentNode!==kEMainContent){
			s = s.parentNode;
		}
		if(s.style.textAlign=='left'||!s.style.textAlign){
			return true;
		}else{
			return false;
		}
	},
	isJustifyRight:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var s = KEStatus.range.startContainer;
		while(s.parentNode!==kEMainContent){
			s = s.parentNode;
		}
		if(s.style.textAlign=='right'){
			return true;
		}else{
			return false;
		}
	},
	isJustifyCenter:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var s = KEStatus.range.startContainer;
		while(s.parentNode!==kEMainContent){
			s = s.parentNode;
		}
		if(s.style.textAlign=='center'){
			return true;
		}else{
			return false;
		}
	},
	isJustifyFull:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var s = KEStatus.range.startContainer;
		while(s.parentNode!==kEMainContent){
			s = s.parentNode;
		}
		if(s.style.textAlign=='justify'){
			return true;
		}else{
			return false;
		}
	},
	isBorder:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var s = range.startContainer;
        var e = range.endContainer;
        var p = kEMainContent;
		if(KEStatus.range.startContainer===KEStatus.range.endContainer&&range.startOffset==range.endOffset){
			do{
				if(s.style&&s.style.border=='1px solid rgb(0, 0, 0)'){
					return true;
				}else if(s===p){
					return false;
				}else{
					if(s!==p){
						s = s.parentNode;
					}
				}
			}while(true)
		}
        do{
            if(s.style&&s.style.border=='1px solid rgb(0, 0, 0)'){
                return true;
            }else if(s===p){
                return false;
            }else{
                if(s!==p){
                    s = s.parentNode;
                }
            }
        }while(true)
	},
	isBorderEnd:function(range){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
        var s = range.endContainer;
        var p = kEMainContent;
		if(KEStatus.range.startContainer===KEStatus.range.endContainer&&range.startOffset==range.endOffset){
			do{
				if(s.style&&s.style.border=='1px solid rgb(0, 0, 0)'){
					return true;
				}else if(s===p){
					return false;
				}else{
					if(s!==p){
						s = s.parentNode;
					}
				}
			}while(true)
		}
        do{
            if(s.style&&s.style.border=='1px solid rgb(0, 0, 0)'){
                return true;
            }else if(s===p){
                return false;
            }else{
                if(s!==p){
                    s = s.parentNode;
                }
            }
        }while(true)
	},
	setLineHeight:function(em){
		var s = KEStatus.range.startContainer;
		while(s.parentNode!==kEMainContent){
			s = s.parentNode;
		}
		var e = KEStatus.range.endContainer;
		while(e.parentNode!==kEMainContent){
			e = e.parentNode;
		}
		e.style.lineHeight = em+'em';
		while(s!==e){
			s.style.lineHeight = em+'em';
			s = s.nextSibling;
		}
		KEStatus.setFocus();
	},
	setTextAlign:function(type){
		/* if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var s = KEStatus.range.startContainer;
        var p = kEMain;
		while(s.parentNode!==kEMain){
			s = s.parentNode;
		}
		if(type){
			var e = KEStatus.range.endContainer;
			while(e.parentNode!==kEMain){
				e = e.parentNode;
			}
			switch(type){
				case 'kETool_l':
					kETool_l.className = 'kETool_btn kETool_bg checked';
					kETool_c.className = 'kETool_btn kETool_bg';
					kETool_r.className = 'kETool_btn kETool_bg';
					kETool_j.className = 'kETool_btn kETool_bg';
					e.style.textAlign = 'left';
					break;
				case 'kETool_c':
					kETool_c.className = 'kETool_btn kETool_bg checked';
					kETool_l.className = 'kETool_btn kETool_bg';
					kETool_r.className = 'kETool_btn kETool_bg';
					kETool_j.className = 'kETool_btn kETool_bg';
					e.style.textAlign = 'center';
					break;
				case 'kETool_r':
					kETool_r.className = 'kETool_btn kETool_bg checked';
					kETool_c.className = 'kETool_btn kETool_bg';
					kETool_l.className = 'kETool_btn kETool_bg';
					kETool_j.className = 'kETool_btn kETool_bg';
					e.style.textAlign = 'right';
					break;
				case 'kETool_j':
					kETool_j.className = 'kETool_btn kETool_bg checked';
					kETool_r.className = 'kETool_btn kETool_bg';
					kETool_c.className = 'kETool_btn kETool_bg';
					kETool_l.className = 'kETool_btn kETool_bg';
					e.style.textAlign = 'justify';
					break;
			}
			while(s!==e){
				switch(type){
					case 'kETool_l':
						s.style.textAlign = 'left';
						break;
					case 'kETool_c':
						s.style.textAlign = 'center';
						break;
					case 'kETool_r':
						s.style.textAlign = 'right';
						break;
					case 'kETool_j':
						s.style.textAlign = 'justify';
						break;
				}
				s = s.nextSibling;
			}
			document.execCommand('OverWrite',)
			KEStatus.setFocus();
			return true;
		}
		if(s.style.textAlign=='right'){
			kETool_r.className = 'kETool_btn kETool_bg checked';
			kETool_l.className = 'kETool_btn kETool_bg';
			kETool_c.className = 'kETool_btn kETool_bg';
			kETool_j.className = 'kETool_btn kETool_bg';
		}else if(s.style.textAlign=='center'){
			kETool_c.className = 'kETool_btn kETool_bg checked';
			kETool_l.className = 'kETool_btn kETool_bg';
			kETool_r.className = 'kETool_btn kETool_bg';
			kETool_j.className = 'kETool_btn kETool_bg';
		}else if(s.style.textAlign=='justify'){
			kETool_j.className = 'kETool_btn kETool_bg checked';
			kETool_c.className = 'kETool_btn kETool_bg';
			kETool_r.className = 'kETool_btn kETool_bg';
			kETool_l.className = 'kETool_btn kETool_bg';
		}else{
			kETool_l.className = 'kETool_btn kETool_bg checked';
			kETool_c.className = 'kETool_btn kETool_bg';
			kETool_r.className = 'kETool_btn kETool_bg';
			kETool_j.className = 'kETool_btn kETool_bg';
		}
		KEStatus.setFocus(); */
	},
	setBorder:function(){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var content = KEStatus.range.cloneContents();
		var border;
		border = document.createElement('span');
		border.className = 'select';
		border.appendChild(content);
		var nodes = border.getElementsByTagName('span');
		for(var i=0;i<nodes.length;i++){
			if(nodes[i].style.border == '1px solid rgb(0, 0, 0)'){
				var f = document.createDocumentFragment();
				for(var j=0;j<nodes[i].childNodes.length;j++){
					f.appendChild(nodes[i].childNodes[j].cloneNode());
				}
				border.replaceChild(f,nodes[i]);
				i = -1;
			}
		}
		if(border.innerHTML==''){
			border.innerHTML = '&#8203;'
		}
		var bor = document.createElement('span');
		if((!KEStatus.isBorder(KEStatus.range))&&(!KEStatus.isBorderEnd(KEStatus.range))){
			border.style.border = '1px solid rgb(0, 0, 0)';
			bor.appendChild(border);
			KEStatus.setFocus();
			document.execCommand("InsertHtml",false,bor.innerHTML);
		}else if(KEStatus.isBorder(KEStatus.range)&&KEStatus.isBorderEnd(KEStatus.range)){
			var f = document.createDocumentFragment();
			KEStatus.setFocus();
			f.appendChild(border);
			bor.appendChild(f);
			document.execCommand("InsertHtml",false,bor.innerHTML);
		}else{
			bor.innerHTML = border.innerHTML;
			KEStatus.setFocus();
			document.execCommand("InsertHtml",false,bor.innerHTML);
		}
		//document.execCommand('delete');
		//KEStatus.range.deleteContents();
		//KEStatus.range.insertNode(border);
		/* KEStatus.setFocus();
		document.execCommand("InsertHtml",false,bor.innerHTML);
		var range = KEStatus.range.cloneRange(); */
		var select = kEMain.getElementsByClassName('select')[0];
		if(select){
			KEStatus.range.insertNode(select);
			KEStatus.selection.removeAllRanges();
			KEStatus.selection.addRange(KEStatus.range);
			select.removeAttribute('class');
		}
	},
	saveCusorPos:function(){
		KEStatus.selection = window.getSelection?window.getSelection():document.selection;
		KEStatus.range = KEStatus.selection.createRange?KEStatus.selection.createRange():KEStatus.selection.getRangeAt(0);
	},
	createTool:function(tool,commond){
		var s;
		if(tool.className == 'kETool_btn kETool_bg checked'){
			s = 'kETool_btn kETool_bg';
		} else{
			s = 'kETool_btn kETool_bg checked';
		}
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
			KEStatus.initTools(KEStatus.range);
			if(!KEStatus['is'+commond](KEStatus.range)){
				document.execCommand(commond);
				KEStatus.saveCusorPos();
			}
		}else{
			var selection = KEStatus.selection;
			var range = KEStatus.range;
			var B = KEStatus['is'+commond](KEStatus.range);
			KEStatus.setFocus();
			document.execCommand(commond);
			KEStatus.saveCusorPos();
			if(KEStatus.range.startContainer===KEStatus.range.endContainer&&range.startOffset==range.endOffset){
			}else{
				if(B == KEStatus['is'+commond](KEStatus.range)){
					document.execCommand(commond);
					KEStatus.saveCusorPos();
				}
			}
		}
		if(s == 'kETool_btn kETool_bg checked'){
			tool.className = 'kETool_btn kETool_bg checked';
		} else{
			tool.className = 'kETool_btn kETool_bg';
		}
	},
	//还原光标
	setFocus:function(){
		kEMain.focus();
		KEStatus.range.setStart(KEStatus.range.startContainer,KEStatus.range.startOffset);
		KEStatus.range.setEnd(KEStatus.range.endContainer,KEStatus.range.endOffset);
		KEStatus.selection.removeAllRanges();
		KEStatus.selection.addRange(KEStatus.range);
	}
};
kEMain.onmousedown = function(e){
    KEStatus['isKEMainDown'] = true;
}
kEMain.onclick = function(e){
	var st,r;
	var s = function(e){
		event.stopPropagation();
	};
	var n = function(){
		focusImg.style.display = 'none';
		KEStatus.modifyImg = undefined;
		KEStatus.selection = st;
		KEStatus.range = r;
		KEStatus.setFocus();
	};
	if(e.target.nodeName=='IMG'){
		KEStatus.range.setStartAfter(e.target);
		KEStatus.range.setEndAfter(e.target);
		var st = KEStatus.selection;
		var r = KEStatus.range;
		var img = KEStatus.modifyImg = e.target;
		if(!KEStatus.modifyImg.onclick){
			KEStatus.modifyImg.onclick = function(){
				KEStatus.range.selectNode(img);
				KEStatus.modifyImg = img;
				KEStatus.setFocus();
				modifyImg.removeEventListener('click',s);
				focusImg.removeEventListener('click',n);
				modifyImg.style.left = img.offsetLeft+'px';
				modifyImg.style.top = img.offsetTop+'px';
				modifyImg.style.width = img.clientWidth+'px';
				modifyImg.style.height = img.clientHeight+'px';
				focusImg.style.display = 'block';
				modifyImg.addEventListener('click',s)
				focusImg.addEventListener('click',n)
			}
			KEStatus.modifyImg.click();
		}
	}
}
document.onmouseup = function(e){
    if(KEStatus['isKEMainDown']){
        KEStatus.initTools();
    }
	if(KEStatus.isImgDown){
		KEStatus.isImgDown = false;
	}
}
document.addEventListener('click',function(){
	if(KEObject.kETool_LHDown.className=='kETool_LHDown on'){
		KEObject.kETool_LHDown.className='kETool_LHDown';
	}
})
kEMain.addEventListener('keydown',function(e){
	if(e.keyCode==8){
		if(kEMainContent.childNodes[1].innerHTML=='<br>'){
			e.preventDefault();
			e.stopPropagation();
		}
	}
})
kEMain.onkeyup = function(){
	KEStatus.saveCusorPos();
    KEStatus.initTools();
}
kETools.onclick = function(e){
    switch(e.target.id){
        case 'kETool_b':
			KEStatus.createTool(kETool_b,'Bold');
            break;
        case 'kETool_i':
			KEStatus.createTool(kETool_i,'Italic');
            break;
		case 'kETool_u':
			KEStatus.createTool(kETool_u,'Underline');
			break;
		case 'kETool_p':
			if(!KEStatus.range){
				kEMain.focus();
				KEStatus.saveCusorPos();
				KEStatus.initTools(KEStatus.range);
			}
			KEStatus.setFocus();
			if(kETool_p.className == 'kETool_btn kETool_bg checked'){
				kETool_p.className = 'kETool_btn kETool_bg';
				kEMain.onpaste = null;
			} else{
				kETool_p.className = 'kETool_btn kETool_bg checked';
				kEMain.onpaste = function(e){
					e.preventDefault();
					var text = null;
					//var html = null;
					var textRange = KEStatus.range;
				
					if(window.clipboardData && clipboardData.setData) {
						// IE
						text = window.clipboardData.getData('text');
					} else {
						text =  e.clipboardData.getData("text/plain");
						//html = e.clipboardData.getData('text/html');
					}
					if (document.body.createTextRange) {  
						textRange.text = text;
						textRange.collapse(false);
						textRange.select();
					} else {
						// Chrome之类浏览器
						document.execCommand("insertText", false, text);
					}
				}
			}
			break;
		case 'kETool_l':
			KEStatus.createTool(kETool_l,'JustifyLeft');
			kETool_l.className = 'kETool_btn kETool_bg checked';
			kETool_c.className = 'kETool_btn kETool_bg';
			kETool_r.className = 'kETool_btn kETool_bg';
			kETool_j.className = 'kETool_btn kETool_bg';
			/* document.execCommand(kETool_l,'JustifyLeft');
			KEStatus.setTextAlign('kETool_l'); */
			break;
		case 'kETool_c':
			KEStatus.createTool(kETool_c,'JustifyCenter');
			kETool_c.className = 'kETool_btn kETool_bg checked';
			kETool_l.className = 'kETool_btn kETool_bg';
			kETool_r.className = 'kETool_btn kETool_bg';
			kETool_j.className = 'kETool_btn kETool_bg';
			/* KEStatus.setTextAlign('kETool_c'); */
			break;
		case 'kETool_r':
			KEStatus.createTool(kETool_r,'JustifyRight');
			kETool_r.className = 'kETool_btn kETool_bg checked';
			kETool_l.className = 'kETool_btn kETool_bg';
			kETool_c.className = 'kETool_btn kETool_bg';
			kETool_j.className = 'kETool_btn kETool_bg';
			/* KEStatus.setTextAlign('kETool_r'); */
			break;
		case 'kETool_j':
			KEStatus.createTool(kETool_j,'JustifyFull');
			kETool_j.className = 'kETool_btn kETool_bg checked';
			kETool_l.className = 'kETool_btn kETool_bg';
			kETool_c.className = 'kETool_btn kETool_bg';
			kETool_r.className = 'kETool_btn kETool_bg';
			/* KEStatus.setTextAlign('kETool_j'); */
			break;
		case 'kETool_LHL':
			if(!KEStatus.range){
				kEMain.focus();
				KEStatus.saveCusorPos();
			}
			var on = this.getElementsByClassName('on')[0];
			if(on){
				var em = on.innerText;
				KEStatus.setLineHeight(em);
			}
			break;
		case 'kETool_border':
			KEStatus.setBorder();
			break;
		default:
    }
}
document.getElementById('kETool_Img').addEventListener('change',function(){
	if(!KEStatus.range){
		kEMain.focus();
		KEStatus.saveCusorPos();
	}
	KEStatus.setFocus();
	var img = document.createElement('img');
	var st = KEStatus.selection;
	var r = KEStatus.range;
	var s = function(e){
		event.stopPropagation();
	};
	var n = function(){
		focusImg.style.display = 'none';
		KEStatus.modifyImg = undefined;
		KEStatus.selection = st;
		KEStatus.range = r;
		KEStatus.setFocus();
	};
	img.setAttribute('id','image');
	KEStatus.range.insertNode(img);
	KEStatus.range.setStartAfter(img);
	KEStatus.range.setEndAfter(img);
	var st = KEStatus.selection;
	var r = KEStatus.range;
	//document.execCommand("inserthtml",'<img src=\"\" id=\"load\"/>');
	//KEStatus.saveCusorPos();
	//me.execCommand('inserthtml', '<img class="loadingclass" id="' + loadingId + '" src="' + me.options.themePath + me.options.theme +'/images/spacer.gif" title="' + (me.getLang('simpleupload.loading') || '') + '" >');
    if(typeof FileReader != 'undefined'){
        var acceptedTypes = {
            'image/png':true,
            'image/jpeg':true,
            'image/gif':true
        };
        if(acceptedTypes[document.getElementById('kETool_Img').files[0].type] === true){
            var reader = new FileReader();
            reader.onload = function(event){
                /* var image = new Image();
                image.src = event.target.result;
				KEStatus.setFocus(); */
				img.setAttribute('src',event.target.result);
				img.onclick = function(){
					KEStatus.range.selectNode(img);
					KEStatus.modifyImg = img;
					KEStatus.setFocus();
					modifyImg.removeEventListener('click',s);
					focusImg.removeEventListener('click',n);
					modifyImg.style.left = img.offsetLeft+'px';
					modifyImg.style.top = img.offsetTop+'px';
					modifyImg.style.width = img.clientWidth+'px';
					modifyImg.style.height = img.clientHeight+'px';
					focusImg.style.display = 'block';
					modifyImg.addEventListener('click',s)
					focusImg.addEventListener('click',n)
				}
				img.removeAttribute('id');
				//document.execCommand("InsertImage", false, event.target.result);
				//load.src = event.target.result;
				/* KEStatus.setFocus();
				KEStatus.saveCusorPos(); */
				KEStatus.setFocus();
            }
            reader.readAsDataURL(document.getElementById('kETool_Img').files[0]);
        }
    }
})
modifyImg.addEventListener('mousedown',function(e){
	KEStatus.isImgDown = true;
	KEStatus.modifyTarget = e.target;
})
document.body.addEventListener('mousemove',function(e){
	if(!KEStatus.isImgDown){
		return;
	}
	var setPosition = function(){
		modifyImg.style.left = KEStatus.modifyImg.offsetLeft+'px';
		modifyImg.style.top = KEStatus.modifyImg.offsetTop+'px';
		modifyImg.style.width = KEStatus.modifyImg.clientWidth+'px';
		modifyImg.style.height = KEStatus.modifyImg.clientHeight+'px';
	}
	var x = modifyImg.style.width.substring(0,modifyImg.style.width.length-2);
	var y = modifyImg.style.height.substring(0,modifyImg.style.height.length-2);
	if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_lt'){
		KEStatus.modifyImg.style.width = x-e.movementX+'px';
		KEStatus.modifyImg.style.height = y-e.movementY+'px';
		setPosition();
	}
	else if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_mt'){
		KEStatus.modifyImg.style.width = x+'px';
		KEStatus.modifyImg.style.height = y-e.movementY+'px';
		setPosition();
	}
	else if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_rt'){
		KEStatus.modifyImg.style.width = x*1+e.movementX+'px';
		KEStatus.modifyImg.style.height = y-e.movementY+'px';
		setPosition();
	}
	else if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_lm'){
		KEStatus.modifyImg.style.width = x-e.movementX+'px';
		KEStatus.modifyImg.style.height = y+'px';
		setPosition();
	}
	else if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_rm'){
		KEStatus.modifyImg.style.width = x*1+e.movementX+'px';
		KEStatus.modifyImg.style.height = y+'px';
		setPosition();
	}
	else if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_lb'){
		KEStatus.modifyImg.style.width = x-e.movementX+'px';
		KEStatus.modifyImg.style.height = y*1+e.movementY+'px';
		setPosition();
	}
	else if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_mb'){
		KEStatus.modifyImg.style.width = x+'px';
		KEStatus.modifyImg.style.height = y*1+e.movementY+'px';
		setPosition();
	}
	else if(KEStatus.modifyTarget.getAttribute('id')=='modifyImg_rb'){
		KEStatus.modifyImg.style.width = x*1+e.movementX+'px';
		KEStatus.modifyImg.style.height = y*1+e.movementY+'px';
		setPosition();
	
	}
});
KEObject.kETool_down.onclick = function(){
	event.stopPropagation();
	event.preventDefault();
	var ele = KEObject.kETool_LHDown;
	if(ele.className=='kETool_LHDown'){
		ele.className = 'kETool_LHDown on';
	}else{
		ele.className = 'kETool_LHDown';
	}
};
KEObject.kETool_LHDown.addEventListener('click',function(e){
	e.stopPropagation();
	e.preventDefault();
	var tar = e.target;
	if(tar.className=='option'||tar.className=='option on'){
		if(!KEStatus.range){
			kEMain.focus();
			KEStatus.saveCusorPos();
		}
		var on = this.getElementsByClassName('on')[0];
		if(on){
			on.className = 'option';
		}
		tar.className = 'option on';
		this.className = 'kETool_LHDown';
		var em = tar.innerText;
		KEStatus.setLineHeight(em);
	}
});
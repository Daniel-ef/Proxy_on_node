$(document).ready(function()
{
	// устанавливаем ширину поля каментов для ИЕ6
	if($('#comments_tree').length>0 && $.browser.msie && $.browser.version == "6.0")
	{
		var nw = screen.width-330;
		$('#comments_tree').css('width','690px');
	}
});



// vote-for-comment
function vfc(cid,rate)
{
	if (rate == -1) {
		if (!confirm('Уверены, что хотите поставить минус?')) {
            return false;
        }
	}

    $.post("/ajax/cvote/", {commentid: cid, rate: rate}, function(data) {
        if(data=='disable') {
            alert('Вам отключена функция голосования');
            return;
        }

        if (data && data.length < 300 && data != 'error') {
            if (data = eval(data)) {
                $("#cvote" + cid).html(data.html);
            }
        }
    });

    return false;
}



var inwork_commentsPage=false;
function commentsPage(ajaxurl, page)
{
	if(inwork_commentsPage) return false;
	inwork_commentsPage = true;

	page = page-1;
	ajax_show('Загрузка комментариев...');
	$.get('/ajax/commentspage/'+ajaxurl, function(data){
				inwork_commentsPage = false;
				data = eval(data);
				newcomments = eval(data.nc);
				updateNewCommentsCount();
				current_comments_page = page;
				$('#comments_page').html(data.html);
				AON_setup();
				ajax_close();
				//$.scrollTo( ('#comments_page'), 1200, {axis:'y',offset:-35});
 	});
	return false;
}

var inwork_refreshCommentsPage=false;
function refreshCommentsPage()
{
	if(inwork_refreshCommentsPage) return false;
	inwork_refreshCommentsPage = true;

	var page =  current_comments_page;
	var ajaxurl = c_documentid+'/'+c_documenttype+'?page='+current_comments_page;

	ajax_show('Обновление комментариев...');
	$.get('/ajax/commentspage/'+ajaxurl, function(data){
				inwork_refreshCommentsPage = false;
				data = eval(data);
				newcomments = eval(data.nc);

				$('#comments_page').html(data.html);
				ajax_close();
				AON_setup();

				if(newcomments.length>0 && newcomments[0][0]==page)
				{
					nextNewComment();
				}
				else
				{
					//$.scrollTo( ('#comments_page'), 1200, {axis:'y',offset:-35});
					updateNewCommentsCount();
				}
 	});
	return false;
}


var inwork_goToCommentsPage=false;
function goToCommentsPage(page, cid)
{
	if(inwork_goToCommentsPage) return false;
	inwork_goToCommentsPage = true;

	ajax_show('Загрузка комментариев...');
	$.get('/ajax/commentspage/'+c_documentid+'/'+c_documenttype+'?page='+page, function(data){
				inwork_goToCommentsPage = false;
				data = eval(data);
				newcomments = eval(data.nc);
				current_comments_page = page;
				$('#comments_page').html(data.html);
				ajax_close();
				AON_setup();

				nextNewComment();
 	});
	return false;
}


function nextNewComment()
{
	if(inwork_goToCommentsPage) return false;
	if(inwork_refreshCommentsPage) return false;

	if (newcomments.length)
	{
			var next = newcomments[0];
			newcomments.shift();

			if(next[0]==current_comments_page)
			{
				goToComment(next[1]);
				updateNewCommentsCount();
			}
			else
			{
				goToCommentsPage(next[0],next[1]);
			}
	}
	else
	{
		updateNewCommentsCount();
	}
	return false;
}

function updateNewCommentsCount()
{
	if (newcomments.length>0)
	{
		$('#fx_down').hide();
		$('#nncom').show();
		$('#nncom').html(newcomments.length);
	}
	else
	{
		$('#nncom').hide();
		$('#fx_down').show();
	}
}


function comOnPage(cid)
{
	var author = $('#quote'+cid).html();
	var str = $('#cmcontent'+cid).html();
	str = str.replace(/<img[^>]+>/g,'');
	str = str.replace(/<a[^>]+>/g,'');
	str = str.replace(/<\/a>/g,'');
	str = str.replace(/<br>/g,"\r\n");
	str = str.replace(/<blockquote.+<\/blockquote>/g,'');
	str = str.replace(/<div.+<\/div><\/div>/g,'');
	str = str.replace(/<div.+<\/div>/g,'');
	str = str.replace(/[ ]+/g," ");
	str = str.replace(/[\r\n]+/g,"\r\n");
	str = $.trim(str);
	if(str=='') str = '[b]'+author+', [/b] ';
	else str = '[quote="'+author+'"]'+str+'[/quote]'+"\r\n";

	if($('#comment_tex_'+c_document_rootid).length==0)
	{
		alert('Дождитесь, когда страница полностью загрузится...');
		return false;
	}

	$('#comment_tex_'+c_document_rootid).val(str);
	$('#comment_tex_'+c_document_rootid).get(0).focus();

	return false;
}


/* comments */
var now_add_comment = false;
var current_comment_form=0;
function addComment(parentid,guestmode)
{
	text = document.getElementById('comment_tex_'+parentid).value;
	if(text.length==0) return;

	if(now_add_comment) return;
	now_add_comment=true;

	closeSmilesAt();

	var subscribe=0;
	if( $('#subcomments_'+parentid).length>0
			&& $('#subcomments_'+parentid).get(0).checked)
	{
		subscribe=1;
	}

	$("#comment_button_"+parentid).attr("disabled","disabled");
	//$("#comment_tex_"+parentid).attr("disabled","disabled");
	$("#comment_span_"+parentid).html("Идёт добавление комментария...");


	// отправляем коммент, получаем массив - статус (0 если неудача, или id добавленного коммента если удача) и ветку
	$.post("/ajax/newcomment/",
		{parentid: parentid, tex: text, subscribe:subscribe},
  		function(data){
				now_add_comment = false;
        if(data=='cspam')
  			{
  				document.location.href='/cspam/';
					return;
  			}
				if(data=='antiflood')
  			{
  				$("#comment_span_"+parentid).html("Вы не можете отправлять комментарии чаще чем раз в 10 секунд.");
  			}
				else if(data=='same')
  			{
  				$("#comment_span_"+parentid).html("Вы уже добавили этот комментарий.");
  			}
				else if(data=='silent')
  			{
  				$("#comment_span_"+parentid).html('Вам выставлена жёлтая карточка, вы не можете писать на сайте в течение суток.');
  			}
  			else if(data=='closed')
  			{
  				$("#comment_span_"+parentid).html("Обсуждение данной темы закрыто.");
  			}
  			else if(data=='captcha')
  			{
  				$("#comment_span_"+parentid).html("Вы неправильно указали код с картинки.");
  			}
  			else
  			{
					data = eval(data);

					if(data.id)
	  			{
						if(subscribe)
						{
							$('#link_sub').hide();
							$('#link_unsub').show();
							$('#cform_ss').hide();
						}

						var cont = $("#comment_node_"+parentid);
						cont.html(cont.html() + data.html);

						if(current_comment_form && current_comment_form!=top_level_parentid)
						{
							closeSmilesAt();
							$("#comments_form_"+current_comment_form).hide();
						}
						current_comment_form = 0;

						AON_setup();

		    		$('#comment_tex_'+parentid).val("");
		    		$("#comment_span_"+parentid).html("");
						//document.location.href='#com'+data.id;
						//$.scrollTo( $('#comment_node_'+data.id), 500 ,  {axis:'y'});
	  			}
	  			else
	  			{
  					$("#comment_span_"+parentid).html("При добавлении комментария произошла ошибка");
  				}
	  		}
			//$("#comment_tex_"+parentid).removeAttr("disabled");
			$("#comment_button_"+parentid).removeAttr("disabled");
 		});
}



function showCommentEdit(id)
{
  $('#cmcontent'+id).hide();
  $('#cmcontrols'+id).hide();

	var bbcode = $('#cedittext'+id).val();

	var str = $('#hidden_reply').html();

	str = str.replace('block', 'none');
	str = str.replace('subcomments_parentid', 'scmockup_'+id);

	for(var i=0;i<12;i++)
	{
		str = str.replace('parentid', id+'edit');
	}
	$("#cmtarea"+id).html(str);
	$("#comment_button_"+id+'edit').hide();
	$("#comment_span_"+id+'edit').hide();

	$("#cmtarea"+id).addClass('comment-form');
	$("#cmtarea"+id).show();
	$("#comment_tex_"+id+'edit').val(bbcode);
	$("#comment_tex_"+id+'edit').TextAreaResizer();

  $('#cmcontrols'+id+'_2').show();
}


function acceptCommentEdit(id)
{
  var str = $("#comment_tex_"+id+'edit').get(0).value;
	$('#cedittext'+id).val(str);

  $('#cmcontrols'+id+'_2').hide();
  $('#cmcontrols'+id+'_3').html('<small class="clear">Идёт сохранение комментария...</small>').show();

  $.post("/ajax/comments/edit15/",
        {"id":id, "text": str},
        function(data)
        {
          if(data=='error')
          {
            alert2('Ошибка сохранения','Во время сохранения комментария произошла ошибка.<br>Обновите страницу и попробуйте ещё раз.');
            declineCommentEdit(id);
          }
					if(data=='cspam')
	  			{
  					document.location.href='/cspam/';
						return;
  				}
          if(data=='expired')
          {
            alert2('Ошибка сохранения','Комментарии можно редактировать только в течение 15 минут после опубликования. <br>Время редактирования данного комментария окончилось.');
            declineCommentEdit(id);
          }

          $('#cmcontrols'+id+'_3').hide();
          $('#cmcontrols'+id).show();
          $('#cmtarea'+id).hide();
          $('#cmcontent'+id).html(data).show();
        });
}

function declineCommentEdit(id)
{
  $('#cmcontrols'+id+'_3').hide();
  $('#cmcontrols'+id+'_2').hide();
  $('#cmcontrols'+id).show();
  $('#cmtarea'+id).hide();
  $('#cmcontent'+id).show();
}



function showCommentFormNoHide(parentid)
{
	if(!$("#comments_form_"+parentid).hasClass('comment-form'))
	{
		var str = $('#hidden_reply').html();
		for(var i=0;i<12;i++)
		{
			str = str.replace('parentid', parentid);
		}
		$("#comments_form_"+parentid).html(str);
		$("#comments_form_"+parentid).addClass('comment-form');
		$("#comment_tex_"+parentid+":not(.processed)").TextAreaResizer();
	}
	$("#comments_form_"+parentid).show();
	current_comment_form=parentid;
}


function showCommentForm(parentid, quote)
{
    if (!allowed_to_post) {
        alert('К сожалению, это действие Вам пока недоступно. Наши администраторы в течение нескольких дней примут решение о Вашем доступе на проект.');
        return false;
    }

	if(current_comment_form && current_comment_form!=top_level_parentid) {closeSmilesAt();$("#comments_form_"+current_comment_form).hide();}
	if(current_comment_form == parentid)
	{
		current_comment_form = 0;
	}
	else
	{
		if(!$("#comments_form_"+parentid).hasClass('comment-form'))
		{
			var str = $('#hidden_reply').html();
			for(var i=0;i<15;i++)
			{
				str = str.replace('parentid', parentid);
			}
			$("#comments_form_"+parentid).html(str);
			$("#comments_form_"+parentid).addClass('comment-form');
			$("#comment_tex_"+parentid+":not(.processed)").TextAreaResizer();

		}
		$("#comments_form_"+parentid).show();
		current_comment_form=parentid;
	}
	if(quote) $("#comment_tex_"+parentid).val( '[quote]'+$('#cmcontent'+parentid).text().trim()+'[/quote]'+"\n" );
	else			$("#comment_tex_"+parentid).val( '' );
}

function simpleDeleteComment(id)
{
	$.post("/ajax/deletecomment2",
		{id: id},
  		function(data){
  			if(data=='error') return;
				$("#del_com_"+id).replaceWith('<small class="red">Комментарий был удалён</small>');
  		});
}

function deleteComment(id,parentid,childcount)
{
	var question = 'Вы уверены в том что хотите удалить этот комментарий?';
	if(childcount%10==1 && childcount%100!=11) question = 'Вместе с этим комментарием удалится и один ответ на него. Все равно удалить?';
	else if(childcount>0) question = 'Вместе с этим комментарием удалятся и '+childcount+' вложенных. Удалить всю ветку?';
	if(!confirm(question)) return;

	// отправляем запрос, получаем массив - статус (0 если неудача, или parentid если удалили) и ветку родителя
	$.post("/ajax/deletecomment",
		{id: id, parentid: parentid},
  		function(data){
  			if(data=='error') return;

			// все нормально - удалился, подгружаем ветку
			/*
			var cont = $("#comment_node_"+parentid);
 			if(cont.attr("rel")=='rootnode')
  				$("#comment_node_"+parentid).html(data);
  			else
  				$("#comment_node_"+parentid).replaceWith(data);
			*/
  });
}



function AON_show(e)
{
  var href = this.getAttribute("href");
  var cid = href.split("#com")[1];
	var txt = $('#cmcontent'+cid).html();
	var name = $('#quote'+cid).html();

	var preview = $('#previewid');
	preview.html('<div class="aon_div">Это ответ на комментарий <span>'+name+'</span>:</div>'+txt);
	preview.css({top:e.pageY+5, left:e.pageX+15, zIndex: 10000});
	preview.fadeIn(100);
}

function AON_out()
{
	setTimeout(AON_fade, 100);
}

function AON_fade()
{
	$('#previewid').fadeOut(100);
}

function AON_setup()
{
	$('a.aon').unbind();
	$('#previewid').unbind();
	$('a.aon').bind('mouseenter', AON_show);
	$('a.aon').bind('mouseleave', AON_out);
	$('#previewid').bind('mouseleave', AON_out);

}


function moreSmiles(id)
{
	if($('#bbextra'+id).css('display')=='none')
	{
		$('#bbmore').addClass('utri').removeClass('dtri');
		$('#bbextra'+id).slideDown();
	}
	else
	{
		$('#bbmore').addClass('dtri').removeClass('utri');
		$('#bbextra'+id).slideUp();
	}
	return false;
}

/* comments smiles window */

var sm_showed_at = null;
var sm_textarea_id = null;

function closeSmilesAt()
{
	if(!sm_showed_at) return;
	$('#smiles-popup').remove();
	sm_showed_at.src = '/i/csm.gif';
	sm_showed_at=null;
	sm_textarea_id=null;
}

function showSmilesAt(elem, area_id)
{
	if(elem==sm_showed_at) {closeSmilesAt();return;}
	elem.src = '/i/csmclose.gif';

	$(elem.parentNode).prepend( $('#smiles-popup2').clone().attr('id','smiles-popup').show() );
	sm_showed_at = elem;
	sm_textarea_id = area_id;
}

function em2(text) {
	insert_text(' '+text+' ', sm_textarea_id);
	closeSmilesAt();
}



for(const [selector,name] of Object.entries({'#new-chat':'plus','#list-menu':'more','#message-search-button':'search','#audio-call':'phone','#video-call':'video','#attach-button':'plus','#emoji-button':'smile','.send':'send','#chat-menu':'more'})){const icon=desktopIcon(name);if(icon)$(selector).innerHTML=icon;}
setRail('chats');

$('#composer').insertBefore($('#attach-button'),$('#emoji-button'));
$('#emoji-button').innerHTML=renderIcon('WDSIconWdsIcStickerSmiley.react',24);
$('.send').insertAdjacentHTML('afterend','<button type="button" class="icon-btn" id="voice-message" aria-label="Voice message" title="Voice message"></button>');
$('#voice-message').innerHTML=renderIcon('WDSIconIcMic.react',24);
$('#voice-message').onclick=()=>toast('Voice recording is not connected in this frontend.');
function updateComposerAction(){const hasContent=!!$('#draft').value.trim()||!!pending;$('.send').hidden=!hasContent;$('#voice-message').hidden=hasContent;}
$('#draft').addEventListener('input',updateComposerAction);
$('#composer').addEventListener('submit',updateComposerAction);
$('#chat-list').addEventListener('click',updateComposerAction);
$('#file-input').addEventListener('change',()=>queueMicrotask(updateComposerAction));
$('#attach-button').addEventListener('click',updateComposerAction);
updateComposerAction();

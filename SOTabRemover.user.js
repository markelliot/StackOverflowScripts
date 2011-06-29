// ==UserScript==
// @name           StackOverflow Edit Context Tab Remover
// @author         Mark Elliot
// @description    Adds a button in the SO edit context to replace tab literals (\t) with 4 spaces
// @include        http://stackoverflow.com/posts/*/edit*
// @include        http://meta.stackoverflow.com/posts/*/edit*
// @match          http://stackoverflow.com/posts/*/edit*
// @match          http://meta.stackoverflow.com/posts/*/edit*
// ==/UserScript==

// This work is licensed under the Creative Commons Attribution 3.0 Unported License. 
// To view a copy of this license, visit http://creativecommons.org/licenses/by/3.0/.

function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};
	
with_jquery(function($){

	$(window).load(function(){

		$('ul#wmd-button-row li:last')
			.before('<li class="wmd-button" id="fix-tabs" style="left: 400px; font-family: monospace; padding-top: 3px; font-size: 11px;">\\t</li>')
			.before('<li class="wmd-spacer" style="left: 375px;"></li>');
			
		$('li#fix-tabs').click(function(){
			$('textarea#wmd-input.processed').val($('textarea#wmd-input.processed').text().replace(/\t/g, '    '));
		});
		
	});
	
});
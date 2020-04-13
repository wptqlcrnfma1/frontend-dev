var TabBox = {
	init : function() {
		$(function() {
			$('.tab-box .textArea').text('메뉴를 클릭하세요');
			var divTabBox = $('.tab-box ul li*');
			$('.tab-box ul li*').click(TabBox._onTabClicked);
		});
	},

	_onTabClicked : function() {
		$( 'li' ).removeClass( 'selected' );
		$('.tab-box .textArea').text($(this).text());
		$(this).attr('class','selected');
	}
}
var imageViewer = {
	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	},{
		name: '사막',
		file: 'Desert.jpg'
	},{
		name: '수국',
		file: 'Hydrangeas.jpg'
	},{
		name: '젤리피쉬',
		file: 'Jellyfish.jpg'
	},{
		name: '코알라',
		file: 'Koala.jpg'
	},{
		name: '등대',
		file: 'Lighthouse.jpg'
	},{
		name: '펭권',
		file: 'Penguins.jpg'
	},{
		name: '튤립',
		file: 'Tulips.jpg'
	}],
	_changeImage: function(){
		var index = Math.floor(Math.random() * imageViewer._images.length);
		var info = imageViewer._images[index];
		
		$('.image-viewer img').attr({
			'src': 'images/' + info.file,
			'alt': info.name,
			'title': info.name
		});
	},
	_onImageDblClicked: function(){
		var name = $(this).attr('alt');
		console.log(name);
	},
	
	_intervalId: null,
	
	_slideShow: function(){
		if(imageViewer._intervalId){
			
			// 슬라이드 시작중
			clearInterval(imageViewer._intervalId);
			console.log(imageViewer._intervalId);
			imageViewer._intervalId =null;
			$(this).text('슬라이드 시작');
		}else{
			// 슬라이드 중지
		
			//imageViewer.으로 줘야 전역이 되지않는다.
			imageViewer._intervalId = setInterval(imageViewer._changeImage,1000); // 1초 간격
			$(this).text('슬라이드 중지');
		}
	},
	
	init: function(){
		$(function(){
			$('.image-viewer #btn-change').click(imageViewer._changeImage);
			$('.image-viewer #btn-slideshow').click(imageViewer._slideShow);
			$('.image-viewer img')
				.dblclick(imageViewer._onImageDblClicked)
				.mousedown(imageViewer._changeImage);
			
			// 첫번째 이미지 선택
			imageViewer._changeImage();
		});
	}	
}
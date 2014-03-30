$(function() {
	$('#dropzone').on('drop', function(event) {
		var file = event.originalEvent.dataTransfer.files[0];
		var formData = new FormData();
		formData.append('file', file);
		
		$.ajax('./upload.php', {
			method: 'POST',
			contentType: false,
			processData: false,
			data:formData,
			error: function(xhr, error) {
				console.log('アップデートに失敗しました');
				console.log(error);
			},
			success: function(response) {
				console.log('アップロードに成功しました');
				console.log(response);
				
				
			}
		});

		return false;
				
	}).on('dragover', function(event) {
		return false;
	});
});
$(function(){
  function buildHTML(message) {
    var html = `<div class="message">
                  <div class="upper_message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                    <div class="lower-message">
                      <p class="lower-message.content">
                      ${message.content}
                      </p>
                    </div>
                    <div class="message__image">
                      ${message.image}
                    </div>
                    </div>`
    return html;
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
    })
    .fail(function(){
      alert('メッセージが送信できませんでした');
    })
  })
});

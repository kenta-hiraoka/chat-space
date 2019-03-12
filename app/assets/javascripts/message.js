$(function(){
  function buildHTML(message) {

    var image = message.image ? `<img src=${ message.image }>` : ``;

    var html = `<div class="message" data-massage-id = "${ message.id }">
                  <div class="upper_message">
                    <div class="upper-message__user-name">
                      ${ message.user_name }
                    <div class="upper-message__date">
                      ${ message.date }
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message.content">
                    ${ message.content }
                    </p>
                  </div>
                  <div class="message__image">
                    ${ image }
                  </div>
                </div>`
    return html;
  }

  function scroll(){
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    console.log("a")

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      if (data.length !== 0) {
        var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__submit').prop('disabled', false);
      scroll();
      $('#new_message')[0].reset();
    }
      else {
      alert('メッセージを入力してください');
      $('.form_submit').prop('disabled', false);
    }
    })
    .fail(function(){
      alert('メッセージが送信できませんでした');
      $('.form_submit').prop('disabled', false);
    })
  });

    var autoupdate = setInterval(function() {
      if (location.pathname.match(/\/groups\/\d+\/messages/)) {
        var last_message_id = $(".message").last().data('message-id');
        $.ajax({
          url: location.pathname,
          type: "GET",
          dataType: 'json',
          data: {id: last_message_id }
        })
        .done(function(new_message) {
          new_message.forEach(function(message) {
            $('.messages').append(buildHTML(message));
            scroll();
          })
        })
        .fail(function(data) {
          alert('自動更新に失敗しました');
        })
      }
      else {
        clearInterval(interval);
      }
    }, 5000 )
});

// (API_KEYには、"取得したAPIキーを記述")
const API_KEY = "06d9dc741ee670076cd0fd6300c8eab8";
$(function(){
  $('#btn').on('click', function(){
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType: 'jsonp',
    }).done(function(data){
      // 通信成功
    }).fall(function(data){
      // 通信失敗
    })
  });
});
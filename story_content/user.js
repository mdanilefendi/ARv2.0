function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tzgls5UBCX":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="music.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}


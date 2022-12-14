
<!-- Chỉ các đường dẫn của trang khách hàng (JS, CSS, Fonts, Bootstrap, Thư viện JS, Hostinger, API) -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="{!!url('public/images/Images-Trangchu/N3-2.png')!!}" alt="logo" width="50" height="20">
    <title>N3STORE</title>

    <!-- Bootstrap core CSS -->
    <link href="{!!url('public/bootstrap/css/bootstrap.min.css')!!}" rel="stylesheet">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700">

    <!-- Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}

    <style>
        body {
            font-family: 'Lato';
        }

        .fa-btn {
            margin-right: 6px;
        }
     
    </style>

    {{-- <link href="{!!url('public/bootstrap/css/ie10-viewport-bug-workaround.css')!!}" rel="stylesheet"> --}}

    <link href="{!!url('public/front-end/front-end-style.css')!!}" rel="stylesheet">
    <link rel='stylesheet' id='camera-css'  href="{!!url('public/css/camera.css')!!}" type='text/css' media='all'>
    <link rel='stylesheet' id='camera-css' href="{!!url('public/css/cam-1.css')!!}" type='text/css' media='all'>
    <link href="{!!asset('css/blueimp-gallery.css')!!}" rel="stylesheet">
    <link rel='stylesheet' href="{!!url('resources/views/modules/N3Store_Trangchu.css')!!}" type='text/css' media='all'>
  
    {{-- <script type='text/javascript' src="{!!url('public/bootstrap/js/ie-emulation-modes-warning.js')!!}"></script> --}}
    <script type='text/javascript' src="{!!url('public/js/ads.js')!!}"></script> 
    <script type='text/javascript' src="{!!url('resources/views/modules/N3Store_Trangchu.js')!!}"></script> 

    <div id="divAdLeft" style="display: none; position: absolute;  margin-top: 50px;">       
      <a href="http://api.hostinger.vn/redir/1309904" target="_blank"><img src="http://www.hostinger.vn/banners/vn/hostinger-160x600-1.gif" alt="Hosting Miễn Phí" border="0" width="170" height="600" /></a>
    </div>
    <div id="divAdRight" style="display: none; position: absolute;margin-top: 50px">      
      <a href="http://api.hostinger.vn/redir/1309904" target="_blank"><img src="http://www.hostinger.vn/banners/vn/hostinger-160x600-2.gif" alt="Hosting Miễn Phí" border="0" width="170" height="600" /></a>
    </div> 
{{-- <script>       
        document.write("<script type='text/javascript' language='javascript'> MainContentW = 1150;LeftBannerW = 150;RightBannerW = 150;LeftAdjust = 35;RightAdjust = 0;TopAdjust = 5;ShowAdDiv();window.onresize=ShowAdDiv;;<\/script>");      
    </script> --}}
</head>


  
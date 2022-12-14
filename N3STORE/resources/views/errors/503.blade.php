
<!-- Xử lý lỗi -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="{!!url('public/images/Images-Trangchu/N3-2.png')!!}" alt="logo" width="50" height="20">
  <title>N3STORE</title>
</head>
<body>

@extends('layouts.master')
@section('content')

<div class="container-fluid">
       <div class="row">
        <div class="col-xs-12">
            <div class="error-container">
                <div class="well">
                    <h1 class="grey lighter smaller">
                        <span class="blue bigger-125">
                            <i class="ace-icon fa fa-sitemap"></i>
                            404
                        </span>
                        Mục này không tồn tại
                    </h1>

                    <hr />
                    <h3 class="lighter smaller">Chúng tôi tìm kiếm khắp nơi nhưng chúng tôi không thể tìm thấy nó !</h3>

                    <div >
                        <form class="form-search">
                            <span class="input-icon align-middle">
                                <i class="ace-icon fa fa-search"></i>

                                <input type="text" class="search-query" placeholder="Nhập thông tin cần tìm..." />
                            </span>
                            <button class="btn btn-sm" type="button">Tìm kiếm !</button>
                        </form>

                        <div class="space"></div>
                        <h4 class="smaller">Hãy thử một trong các cách sau : </h4>

                        <ul >
                            <li>
                                <i class="glyphicon glyphicon-hand-right"></i>
                                Kiểm tra lại địa chỉ của bạn
                            </li>

                            <li>
                                <i class="glyphicon glyphicon-hand-right"></i>
                                Đọc hướng dẫn
                            </li>

                            <li>
                                <i class="glyphicon glyphicon-hand-right"></i>
                                Cho chúng tôi biết
                            </li>
                        </ul>
                    </div>

                    <hr />
                    <div class="space"></div>

                    <div class="center">
                        <a href="{!!url('')!!}" class="btn btn-grey">
                            <i class="ace-icon fa fa-arrow-left"></i>
                            về trang chủ
                        </a>

                        <a href="#" class="btn btn-primary">
                            <i class="ace-icon fa fa-tachometer"></i>
                            Liên hệ quản trị viên
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
@endsection

</body>
</html>

<!-- Trang điện thoại -->

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

@extends('layouts.new-master')
@section('content')

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:5%">
        @foreach($data as $row)
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <div class="thumbnail mobile" style="background: #504f4f; color:#fff; font-size: 16px; border: 1px solid #535353; border-radius: 24px; padding: 30px; float: left; width: 365px; height: 400px; margin: 0 30px 30px 0; box-sizing: border-box;">              
              <div class="bt">
                <div class="image-m pull-left" style="margin-left:-8%">
                  <img class="img-responsive" src="{!!url('uploads/products/'.$row->images)!!}" alt="{!!$row->name!!}">
                </div>
                <div class="intro pull-right" style="margin-top: -15px;">
                    <h1><small class="title-mobile" style="color: #ff9f00;  font-weight: bold;">{!!$row->name!!}</small></h1>
                    <li>{!!$row->intro!!}</li><br>
                    <span class="label label-info" style="font-size:15px;">Khuyến mãi</span> 
                    @if ($row->promo1!='') 
                      <li><span class="glyphicon glyphicon-ok-sign" style="margin-top:20px;"></span> {!!$row->promo1!!}</li>
                    @elseif($row->promo2!='')
                      <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo2!!}</li>
                    @elseif ($row->promo3!='')
                      <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo3!!}</li>
                    @endif 
                      <li><span class="glyphicon glyphicon-ok-sign"></span> Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li> 
                </div>
              </div> 


              <div class="ct" style="margin-top: 15px; font-size: 16px; left: 5px">
                <a href="{!!url('mobile/'.$row->id.'-'.$row->slug)!!}" title="Chi tiết" style="color:#fff;">
                  <span class="label label-info" style="font-size:16px; padding:5px">Ưu đãi khi mua</span>   
                  @if ($row->promo1!='')
                    <li style="margin-top:10px"><span class="glyphicon glyphicon-ok-sign" style="margin-top: 10px"></span> {!!$row->promo1!!}</li>
                  @elseif($row->promo2!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo2!!}</li>
                  @elseif ($row->promo3!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo3!!}</li>
                  @endif 
                    <li><span class="glyphicon glyphicon-ok-sign"></span> Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li>  <br>

                  <span class="label label-warning" style="font-size:16px; padding:5px">Cấu Hình Nổi bật</span> 
                  <li style="margin-top:15px"><strong>CPU</strong> : <i>  {!!$row->cpu!!}</i></li>
                  <li><strong>Màn Hình</strong> : <i>{!!$row->screen!!} </i></li> 
                  <li><strong>Camera</strong> : Trước  <i>{!!$row->cam1!!}</i> Sau <i>{!!$row->cam2!!}</i></li> 
                  <li><strong>HĐH</strong> :<i> {!!$row->os!!} </i><strong> Bộ nhớ trong</strong> :<i> {!!$row->storage!!} </i></li> 
                  <li><strong>Pin</strong> :<i> {!!$row->pin!!}</i></li>
                </a>
              </div>
                <span class="btn label-warning" style="margin-top: 65px; color:black; font-size: 17px"><strong>{!!number_format($row->price)!!}</strong><u>đ</u></span>
                <a href="{!!url('gio-hang/addcart/'.$row->id)!!}" class="btn btn-success pull-right add" style="margin-top: 65px; border: 1px solid red; background-color: red; font-size: 17px;">Thêm vào giỏ </a>
            </div> 
          </div>  
        @endforeach
      <div class="clearfix">
      </div>
      {!!$data->render();!!}
@endsection

</body>
</html>

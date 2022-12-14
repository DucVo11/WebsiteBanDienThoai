
<!-- Trang tin tức của khách hàng -->

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

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:5%;">  
    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" style="width: 900px; margin-left:-14%; text-align: justify;">              
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-success">
            <div class="panel-body">
              <div class="row" >
                <div class="col-lg-12" >
                  <h3 class="title-h3"><a href="#" title="{!!$data->title!!}" style="font-size: 18px;font-weight: bold;text-decoration: none;">{!!$data->title!!}</a></h3>
                   <!-- <p class="time-views" style="font-size: 18px;font-weight: bold;text-decoration: none;"> <span> Đăng bởi : </span> <strong style="color:red">{!!$data->author!!}</strong> <strong> - 0 lượt xem</strong></p> -->
                   <br>
                      <img class="img-new" src="{!!url('uploads/news/'.$data->images)!!}" alt="{!!$data->images!!}" ><br>

                  <p class="summary-content">
                     <div class="panel-body" >
                  <p class="text-left" style=" padding-bottom: 0px;">
                      <strong style="font-size: 18px;font-weight: bold;">
                          {!!$data->intro!!}
                      </strong>                  
                  </p>       
                    <br>   
                      <div class="accordion-inner" style="font-size: 17px;">
                        {!!$data->full!!}
                      </div>
                      <br><br>
                    <p class="text-left"><strong> Nguồn : <a target="#" href="#"> {!!$data->source!!}</a> </strong>
                    <br>
                    <br>
                      <span style="font-size:14px; font-weight: bold; color: black;">Sửa lần cuối: {!!$data->updated_at!!} </span></p>

                      <p class="text-right"> <span class="glyphicon glyphicon-user" style="color: red;"></span> <strong style=" font-size: 16px;"> {!!$data->author!!} </strong></p>
                    </div>
                  </p>
                </div>                
              </div>

              <div class="row">

                <?php 
                    $data = DB::table('news')
                    ->orderBy('created_at', 'desc')
                    ->paginate(5); 
                  ?>

                <h1 style="padding-left: 20px; font-size:20px;font-weight: bold; color: red"> Tin khác</h1>
                <hr>
                @foreach($data as $row)
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="font-size:18px"> 
                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <a href="{!!url('/tin-tuc/'.$row->id.'-'.$row->slug)!!}" title="{!!$row->title!!}"><img src="{!!url('uploads/news/'.$row->images)!!}" alt="{!!$row->title!!}" width="90%" height="99%" style="margin-top:10%"> </a>
                    </div>
                    <br>
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <h4><a href="{!!url('/tin-tuc/'.$row->id.'-'.$row->slug)!!}" title="{!!$row->title!!}" style="font-size:18px;font-weight: bold;text-decoration: none; color:blueviolet;">{!!$row->title!!}</a></h4>
                   <br>
                      <p> 
                        {!!$row->intro!!}
                      </p> <br>
                      <p><strong>Lúc :</strong> {!!$row->created_at!!} Bởi : <strong>{!!$row->author!!} </strong></p>
                    </div>
                  </div> 
                @endforeach 
              </div>
             <br> {!!$data->render()!!}
            </div>
          </div>   
        </div>
      </div>     
    </div> 

<!-- Sản phẩm mới -->

    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">            
      <div class="panel panel-info" style="width:480px;border-radius: 10px; height:1350px;">
        <div class="panel-heading" style="background: black; color: #fff;">
          <h3 class="panel-title text-center" style="font-weight: bold; font-size: 20px;">Sản phẩm mới</h3>
        </div>
        <div class="panel-body ">

        <?php 
          $mobile = DB::table('products')
                ->join('category', 'products.cat_id', '=', 'category.id')
                ->join('pro_details', 'pro_details.pro_id', '=', 'products.id')
                ->where('category.parent_id','=','1')
                ->select('products.*','pro_details.cpu','pro_details.ram','pro_details.screen','pro_details.vga','pro_details.storage','pro_details.exten_memmory','pro_details.cam1','pro_details.cam2','pro_details.sim','pro_details.connect','pro_details.pin','pro_details.os','pro_details.note')
                ->orderBy('products.created_at', 'desc')
                ->paginate(3); 

        ?>

        @foreach($mobile as $row)
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <div class="thumbnail mobile" style="background: #504f4f; color:#fff; font-size: 16px; border: 1px solid #535353; border-radius: 24px; padding: 30px; float: left; width: 420px; height: 400px; margin: 0 30px 30px 0; box-sizing: border-box;">               
              <div class="bt">
                <div class="image-m pull-left" style="margin-left:-8%">
                       <img class="img-responsive" src="{!!url('uploads/products/'.$row->images)!!}" alt="{!!$row->name!!}">
                </div>

                <div class="intro pull-right" style="margin-top: -15px;">
                  <h1><small class="title-mobile" style="color: #ff9f00;  font-weight: bold;">{!!$row->name!!}</small></h1>
                  <li>{!!$row->intro!!}</li> <br>
                  <span class="label label-info" style="font-size:15px;">Khuyến mãi</span>   
                         @if ($row->promo1!='')
                    <li><span class="glyphicon glyphicon-ok-sign" style="margin-top:10px"></span> {!!$row->promo1!!}</li>
                         @elseif($row->promo2!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo2!!}</li>
                         @elseif ($row->promo3!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo3!!}</li>
                         @endif 
                    <li><span class="glyphicon glyphicon-ok-sign"></span> Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li> 
                </div>
              </div> 

              <div class="ct"  style="margin-top: 15px; font-size: 16px; left: 5px">
                <a href="{!!url('mobile/'.$row->id.'-'.$row->slug)!!}" title="Chi tiết" style="color:#fff;">
                  <span class="label label-info" style="font-size:16px; padding:5px">Ưu đãi khi mua</span>   
                           @if ($row->promo1!='')
                    <li style="margin-top:20px"><span class="glyphicon glyphicon-ok-sign" ></span> {!!$row->promo1!!}</li>
                           @elseif($row->promo2!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo2!!}</li>
                           @elseif ($row->promo3!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo3!!}</li>
                           @endif 
                    <li><span class="glyphicon glyphicon-ok-sign"></span> Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li> <br>
                  <span class="label label-warning" style="font-size:16px; padding:5px">Cấu Hình Nổi bật</span> 
                      <li style="margin-top:20px"><strong>CPU</strong> : <i>  {!!$row->cpu!!}</i></li>
                      <li><strong>Màn Hình</strong> : <i>{!!$row->screen!!} </i></li> 
                      <li><strong>Camera</strong> : Trước  <i>{!!$row->cam1!!}</i> Sau <i>{!!$row->cam2!!}</i></li> 
                      <li><strong>HĐH</strong> :<i> {!!$row->os!!} </i> <strong> Bộ nhớ trong</strong> :<i> {!!$row->storage!!} </i></li> 
                      <li><strong>Pin</strong> :<i> {!!$row->pin!!}</i></li>
                </a>
              </div>
                <span class="btn label-warning" style="margin-top: 65px; color:black; font-size: 17px"><strong>{!!number_format($row->price)!!}</strong><u>đ</u> </span>
                <a href="{!!url('gio-hang/addcart/'.$row->id)!!}" class="btn btn-success pull-right add" style="margin-top: 65px; border: 1px solid red; background-color: red; font-size: 17px;">Thêm vào giỏ </a>
            </div> 
          </div>  
        @endforeach        
        </div>
      </div>
  
    <div class="panel panel-info" style="width:480px">
      <div class="panel-heading" style="background-color: #337ab7;">
        <h3 class="panel-title text-center" style="font-size:18px; font-weight: bold; color:#fff">Sự kiện HOT</h3>
      </div>
      <div class="panel-body ">
      <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/tainghe-1.png')!!}" alt="" width="100%" height="100%" > </a> <br>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/2400-600-1920x480-8.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a> <br>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/oplung-2400-600-1920x480.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/2400-600-1920x480-3.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/Banner-3.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/Banner_Xiaome-1.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
      </div>
    </div>   
  </div> 
</div>
@endsection

</body>
</html>
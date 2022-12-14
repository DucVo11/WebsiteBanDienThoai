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

<!-- Trang khách hàng điện thoại -->

@extends('layouts.master')
@section('content')

<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">   
        @foreach($mobile as $row)        
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <div class="thumbnail mobile" style="background: #504f4f; color:#fff; font-size: 16px; border: 1px solid #535353; border-radius: 24px; padding: 30px; float: left; width: 365px; height: 400px; margin: 0 30px 30px 0; box-sizing: border-box;">              
              <div class="bt">
                <div class="image-m pull-left" style="margin-left:-8%">
                     <img class="img-responsive" src="{!!url('uploads/products/'.$row->images)!!}" alt="img responsive">
                </div>

<!-- Thông số kỹ thuật trang khách hàng -->

                <div class="intro pull-right" style="margin-top: -15px;">
                  <h1><small class="title-mobile" style="color: #ff9f00;  font-weight: bold;">{!!$row->name!!}</small></h1>
                  <li>{!!$row->intro!!}</li><br>
                  <span class="label label-info" style="font-size:15px;">Khuyến mãi</span>   
                      <li><span class="glyphicon glyphicon-hand-right" style="margin-top:10px"></span> {!!$row->promo1!!}</li> 
                      <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo2!!}</li> 
                      <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo3!!}</li> 
                </div>
              </div> 

              <div class="ct" style="margin-top: 15px; font-size: 16px; left: 5px">
                <a href="{!!url('mobile/'.$row->id.'-'.$row->slug)!!}" title="Xem chi tiết" style="color:#fff;">
                  <span class="label label-info" style="font-size:16px; padding:5px">Ưu đãi khi mua</span>   
                      <li style="margin-top:10px"><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo1!!}</li> 
                      <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo2!!}</li> 
                      <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo3!!}</li><br>

                  <span class="label label-warning" style="font-size:16px; padding:5px">Cấu Hình Nổi bật</span> 
                      <li style="margin-top:10px"><strong>CPU</strong> : <i> {!!$row->cpu!!}</i></li>
                      <li><strong>Màn Hình</strong> : <i>{!!$row->screen!!} </i></li> 
                      <li><strong>Camera</strong> : Trước  <i>{!!$row->cam1!!}</i> Sau <i>{!!$row->cam2!!} </i></li> 
                      <li><strong>HĐH</strong> :<i> {!!$row->os!!} </i> <br><strong> Bộ nhớ trong</strong> :<i> {!!$row->storage!!} </i></li> 
                      <li><strong>Pin</strong> :<i> {!!$row->pin!!}</i></li>
                </a>
              </div>

<!-- Chức năng thêm giỏ hàng trang khách hàng -->

                <span class="btn label-warning" style="margin-top: 95px; color:black; font-size: 17px"><strong>{!!$row->price!!}</strong><u>đ</u></span>
                <a href="{!!url('gio-hang/addcart/'.$row->id)!!}" class="btn btn-success pull-right add" style="margin-top: 95px; border: 1px solid red; background-color: red; font-size: 17px;">Thêm vào giỏ </a>
            </div> 
          </div>  
          @endforeach
          <div class="clearfix">            
          </div>

          
<!-- Trang khách hàng laptop -->

          <div id="laptop"></div>
          @foreach($laptop as $row)
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 no-padding" >
            <div class="thumbnail">        
              
<!-- Thông số kỹ thuật trang khách hàng -->

              <div class="hienthi">
                   <img class="img-responsive" src="{!!url('public/uploads/products/'.$row->images)!!}" alt="img responsive">
                <div class="caption">
                   <h1><small><strong class="title-pro">{!!$row->name!!}</strong></small></h1>
                  <p>    
                       <li><i>{!!$row->intro!!}</i></li>             
                      <span class="label label-info ">Ưu đãi khi mua</span>
                        <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo1!!}</li> 
                        <li> <span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo2!!}</li>
                        <li> <span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo3!!}</li>
                  </p>

                  <p>
                    <span class="btn label-warning">Giá : <strong>{!!$row->price!!}</strong><u>đ</u></span>
                  </p>
                </div>
              </div>

              <div class="tomtat">
                <div class="thongtin">
                  <a href="{!!url('laptop/'.$row->id.'-'.$row->slug)!!}" title="Xem chi tiết">
                    <span class="label label-info ">Ưu đãi khi mua</span>   
                        <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo1!!}</li> 
                        <li><span class="glyphicon glyphicon-hand-right"></span> T{!!$row->promo2!!}</li> 
                        <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo3!!}</li>
                        <span class="label label-warning">Cấu Hình Nổi bật</span> 
                        <li><strong>CPU</strong> : <i>{!!$row->cpu!!}</i></li>
                        <li><strong>RAM </strong> : <i>{!!$row->ram!!}</i></li>
                        <li><strong>Lưu Trữ</strong> : <i> {!!$row->storage!!}</i></li>
                        <li><strong>Màn Hình</strong> : <i> {!!$row->screen!!} </i></li> 
                        <li><strong>VGA</strong> : <i> {!!$row->vga!!}</i></li> 
                        <li><strong>HĐH</strong> :<i> {!!$row->os!!}</i></li> 
                        <li><strong>Pin</strong> :<i> {!!$row->pin!!}</i></li>
                  </a>
                </div>  

<!-- Chức năng thêm giỏ hàng trang khách hàng -->

                  <div class="price">  
                       <span class="btn btn-info btn-block ">Giá : <strong>{!!$row->price!!}</strong><u>đ</u></span>   
                    <a href="{!!url('gio-hang/addcart/'.$row->id)!!}" class="btn btn-success btn-block">Thêm vào giỏ</a> 
                  </div>                  
              </div> 
            </div>
          </div>
        @endforeach
        <div class="clearfix"></div>
    
        
<!-- Trang khách hàng phụ kiện -->

        <div id="pc"></div>
        @foreach($pc as $row)
           <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
            <div class="thumbnail pc">              
              <div class="bt">
                <div class="image-m pull-left">
                    <img class="img-responsive" src="{!!url('public/uploads/products/'.$row->images)!!}" alt="img responsive">
                </div>
<!-- Thông số kỹ thuật trang khách hàng -->

                <div class="intro pull-right">
                   <h1><small class="title-pc">{!!$row->name!!}</small></h1>
                      <li> CPU: {!!$row->cpu!!}</li>
                      <li> RAM :{!!$row->ram!!}</li>
                      <li> HDD : {!!$row->storage!!} </li>
                  <span class="label label-info">Khuyễn mãi</span>   
                      <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo1!!}</li> 
                      <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo2!!} </li> 
                      <li><span class="glyphicon glyphicon-hand-right"></span> {!!$row->promo3!!} </li> 
                </div>
              </div> 

              <div class="ct">
                <a href="{!!url('pc/'.$row->id.'-'.$row->slug)!!}" title="Xem chi tiết">                   
                  <span class="label label-warning">Cấu hình chi tiết</span> 
                      <li><strong>CPU</strong> : <i>  {!!$row->cpu!!}</i></li>
                      <li><strong>HDD</strong> : T<i> {!!$row->storage!!}</i></li> 
                      <li><strong>HĐH</strong> :<i{!!$row->os!!}  </i> - <strong>RAM </strong> :<i>{!!$row->ram!!}</i></li> 
                      <li><strong>VGA - DVD</strong> :<i> {!!$row->vga!!}</i></li>
                      <li><strong>Kết nối</strong> : <i> {!!$row->connect!!}</i></li> 
                </a>
              </div>

<!-- Chức năng thêm giỏ hàng trang khách hàng -->

                <span class="btn label-warning">Giá : <strong>{!!$row->price!!}</strong><u>đ</u></span>
                <a href="{!!url('gio-hang/addcart/'.$row->id)!!}" class="btn btn-success pull-right add">Thêm vào giỏ </a>
            </div> 
          </div>  
        @endforeach      
        </div>  
@endsection

</body>
</html>
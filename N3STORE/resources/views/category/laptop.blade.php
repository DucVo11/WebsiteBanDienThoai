
<!-- Trang laptop -->

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

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">     
          <div id="laptop"></div>
        @foreach($data as $row)
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 no-padding" >
            <div class="thumbnail">          
              <div class="hienthi">
                <img class="img-responsive" src="{!!url('uploads/products/'.$row->images)!!}" alt="{!!$row->name!!}">
                <div class="caption">
                  <h1><small><strong class="title-pro">{!!$row->name!!}</strong></small></h1>
                  <p>    
                      <li><i>{!!$row->intro!!}</i></li>     
                      {{-- <li><i>{!!$row->cpu!!}</i></li>          --}}
                      <span class="label label-info ">Ưu đãi khi mua</span>
                      @if ($row->promo1!='')
                        <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$row->promo1!!}</li>
                      @elseif($row->promo2!='')
                        <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$row->promo2!!}</li>
                      @elseif ($row->promo3!='')
                        <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$row->promo3!!}</li>
                      @endif 
                        <li><span class="glyphicon glyphicon-ok-sign"></span>Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li>                                                            
                  </p>
                  <p>
                    <span class="btn label-warning"><strong>{!!number_format($row->price)!!}<u>đ</u></strong> </span>
                  </p>
                </div>
              </div>

              <div class="tomtat">
                <div class="thongtin">
                  <a href="{!!url('laptop/'.$row->id.'-'.$row->slug)!!}" title="">
                  <span class="label label-info ">Ưu đãi khi mua</span>   
                  @if ($row->promo1!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$row->promo1!!}</li>
                  @elseif($row->promo2!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$row->promo2!!}</li>
                  @elseif ($row->promo3!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$row->promo3!!}</li>
                  @endif 
                    <li><span class="glyphicon glyphicon-ok-sign"></span>Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li>
                  <span class="label label-warning">Cấu Hình Nổi bật</span> 
                  <li><strong>CPU</strong> : <i>{!!$row->cpu!!}</i></li>
                  <li><strong>RAM </strong> : <i>{!!$row->ram!!}</i></li>
                  <li><strong>Lưu Trữ</strong> : <i>{!!$row->storage!!}</i></li>
                  <li><strong>Màn Hình</strong> : <i>{!!$row->screen!!} </i></li> 
                  <li><strong>VGA</strong> : <i>{!!$row->vga!!}</i></li> 
                  <li><strong>HĐH</strong> :<i> {!!$row->os!!}</i></li> 
                  <li><strong>Pin</strong> :<i> {!!$row->pin!!}</i></li>
                  </a>
                </div>           

                  <div class="price">  
                    <span class="btn btn-info btn-block "><strong>{!!number_format($row->price)!!}</strong><u>đ</u></span>   
                    <a href="{!!url('gio-hang/addcart/'.$row->id)!!}" class="btn btn-success btn-block">Thêm vào giỏ</a>                  
                  </div>                  
              </div> 
            </div>
          </div>
        @endforeach

        <div class="clearfix">
        </div>
        {!!$data->render()!!}
@endsection

</body>
</html>
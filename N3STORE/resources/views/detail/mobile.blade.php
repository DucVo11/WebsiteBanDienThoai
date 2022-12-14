
<!-- Trang mua hàng của khách hàng -->

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
        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" style="width:100%; " >              
        <div class="row" >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="panel panel-success" style="margin-top:50px; border-radius: 10px;">
        <div class="panel-body"  >
        <div class="row"  >
              <!-- hot new content -->
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                  <h3 class="pro-detail-title" style="margin-top: 20px"><a href="{!!url('/mobile/'.$data->id.'-'.$data->slug)!!}" title="" style="font-weight: bold; font-size: 30px;text-decoration: none;">{!!$data->name!!}</a></h3>
                  <hr style="border: 2px solid #323232;">

                  <div class="row">
                    <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5" >
                      <div class="img-box">
                        <img class="img-responsive img-mobile" src="{!!url('/uploads/products/'.$data->images)!!}" alt="img responsive" width="60px">
                      </div>
                      <div class="img-slide">
                        <div class="panel panel-default text-center" style="border: 3px solid #323232;">       
                           
                          <div id="links" style="margin-top:10%;">
                            @foreach($data->detail_img as $row)
                              <a href="{!!url('uploads/products/details/'.$row->images_url)!!}" title="{!!$data->name!!}" data-gallery>
                                  <img src="{!!url('/uploads/products/details/'.$row->images_url)!!}" alt="{!!$data->name!!}" width="60" height="70">
                              </a>
                            @endforeach                              
                          </div>

                            <div id="blueimp-gallery" class="blueimp-gallery" style="padding:10px 20px 10px 20px;">
                                <div class="slides"></div>
                                <h3 class="title"></h3>
                                <a class="prev" style="font-size:45px; text-align: center;text-decoration: none;">‹</a>
                                <a class="next" style="font-size:45px; text-align: center;text-decoration: none;">›</a>
                                <a class="play-pause"></a>
                                <ol class="indicator"></ol>
                                <div class="modal fade">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" aria-hidden="true">&times;</button>
                                                <h4 class="modal-title"></h4>
                                            </div>
  
                                            <div class="modal-body next"></div>
                                            <div class="modal-footer">
                                          <button type="button" class="btn btn-default pull-left prev">
                                                <i class="glyphicon glyphicon-chevron-left"></i>
                                               Previous
                                         </button>
                                          <button type="button" class="btn btn-primary next">
                                                  Next
                                              <i class="glyphicon glyphicon-chevron-right"></i>
                                         </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>  
                          </div>                       
                        </div>                     
                      <label class="btn btn-large btn-block btn-warning" style="color:white; border: 1px solid green; border-radius: 5px; background: green;font-size: 17px; font-weight: bold;">{!!number_format($data->price)!!}<u>đ</u></label>
                 </div>


                    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7" >
                      
                      <div class="">
                      <div style="background-color:#2f3033; color:#fff; border-radius: 10px; font-size:16px;">
                        <div class="" style="padding: 5px;  border-bottom: 1px solid white;">
                          <h3 class="panel-title" style="font-weight: bold; font-size: 17px">Khuyến mãi - Chính sách</h3> 
                        </div>
                        <div class="panel-body">
                          <div class="khuyenmai">
                              @if ($data->promo1!='')
                              <li style="padding-top:10px;"><span class="glyphicon glyphicon-ok-sign"></span> {!!$data->promo1!!}</li>
                              @elseif($data->promo2!='')
                              <li style="padding-top:10px;"><span class="glyphicon glyphicon-ok-sign"></span> {!!$data->promo2!!}</li>
                              @elseif ($data->promo3!='')
                              <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$data->promo3!!}</li>
                              @endif 
                              <li style="padding-top:10px"><span class="glyphicon glyphicon-ok-sign"></span> Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li>                                                       
                          </div>                         
                        </div>
                      </div>

                      <div class="panel" >
                      <div style="background-color:#2f3033; color:#fff; border-radius: 10px; font-size:16px;">
                        <div class="panel-body" >
                         <div class="chinhsach">
                            <li><span class="glyphicon glyphicon-hand-right"></span> Trong hộp có: {!!$data->packet!!} </li>
                            <li style="padding-top:10px"><span class="glyphicon glyphicon-hand-right"></span> Bảo hành chính hãng: thân máy 12 tháng, pin 12 tháng, sạc 12 tháng</li>
                            <li style="padding-top:10px"><span class="glyphicon glyphicon-hand-right"></span> Giao hàng tận nơi miễn phí trong 1 ngày</li>
                            <li style="padding-top:10px"><span class="glyphicon glyphicon-hand-right"></span> 1 đổi 1 trong 1 tháng với sản phẩm lỗi</li>
                            <li style="padding-top:10px"><span class="glyphicon glyphicon-hand-right"></span> Tặng Phiếu mua hàng giảm 10% khi mua Apple Watch SE và Series 7. (Thời hạn sử dụng 7 ngày - Không áp dụng mua Trả góp) </li>
                            <li style="padding-top:10px"><span class="glyphicon glyphicon-hand-right"></span>  Phụ kiện chính hãng Apple, iPad, MacBook, Apple Watch giảm 8 - 30% khi mua kèm iPhone</li>
                            <li style="padding-top:10px"><span class="glyphicon glyphicon-hand-right"></span> Nhập mã TETAPPLE giảm 3% tối đa 500.000đ khi thanh toán quét QRcode qua App của ngân hàng</li>
                         </div>
                        </div>
                      </div><br>

                      @if($data->status ==1)
                        <a href="{!!url('gio-hang/addcart/'.$data->id)!!}" title="" class="btn btn-large btn-block btn-primary" style="font-size: 20px; border-radius: 10px; height:60px; font-weight: bold; border: 1px solid red; background-color:red; padding:15px">Mua ngay</a>
                      @else
                        <a href="" title="" class="btn btn-large btn-block btn-primary disabled" style="font-size: 20px;">Tạm hết hàng</a>
                      @endif
                    </div>
                  </div>
                </div>
              </div>
              
              <hr style="border: 2px solid #323232;">
              <div class="row" >
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color:#2f3033; color:#fff; margin-left:5%; border: 2px solid #323232; border-radius: 10px; top:40px; width:90%; font-size:18px">
                  <div class="table-responsive">
                    <table class="table" style="text-align: center;" >
                      <thead>
                        <tr >
                          <th colspan="2" style="text-align: center;" >THÔNG SỐ KỸ THUẬT</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Màn hình :</td>
                          <td>{!!$data->pro_details->screen!!}</td>
                        </tr>
                        <tr>
                          <td>Hệ điều hành :</td>
                          <td>{!!$data->pro_details->os!!}</td>
                        </tr>
                        <tr>
                          <td>Cammera trước :</td>
                          <td>{!!$data->pro_details->cam1!!}</td>
                        </tr>
                        <tr>
                          <td>Cammera sau :</td>
                          <td>{!!$data->pro_details->cam2!!}</td>
                        </tr>
                        <tr>
                          <td>CPU :</td>
                          <td>{!!$data->pro_details->cpu!!}</td>
                        </tr>
                        <tr>
                          <td>RAM :</td>
                          <td>{!!$data->pro_details->ram!!}</td>
                        </tr>
                        <tr>
                          <td>Bộ nhớ trong :</td>
                          <td>{!!$data->pro_details->storage!!}</td>
                        </tr>
                        <tr>
                          <td>Hỗ trợ thẻ nhớ :</td>
                          <td>{!!$data->pro_details->exten_memmory!!}</td>
                        </tr>
                        <tr>
                          <td>Thẻ SIM :</td>
                          <td>{!!$data->pro_details->sim!!}</td>
                        </tr>
                        <tr>
                          <td>Dung lượng PIN :</td>
                          <td>{!!$data->pro_details->pin!!}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="row" style="margin-top:90px">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <hr style="border: 2px solid #323232;">
                  <h2 style="margin-top:50px"> <small style="font-size:25px; font-weight: bold;"> Đánh giá chi tiết sản phẩm</small></h2>
                  <br>
                  <div class="accordion-group" style="font-size:18px; text-align: justify;">
                    <div class="accordion-heading" > 
                      <p class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                        {!!$data->r_intro!!}
                      </p>
                    </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                      <div class="accordion-inner">                        
                          {!!$data->review!!}
                      </div>
                    </div>
                    <br>
                    <button class="SeeMore btn-primary" data-toggle="collapse" href="#collapseTwo" style="padding:10px; border: 1px solid #337ab7; font-size:18px; font-weight: bold;"> Xem chi tiết</button>
                  </div>
                </div>
              </div>

              <div class="row" style="margin-top:40px; text-align: justify; font-size: 18px;">
                <hr>
                <h2 style="padding-left: 20px; "><small style="font-size:25px; font-weight: bold;">Tin tức mới</small></h2>
                <hr>
                @include('modules.tin-tuc')  
                </div>
              </div>
            </div>   
          </div>
        </div>     
      </div> 
    </div>        
  </div> 
</div>
@endsection

</body>
</html>
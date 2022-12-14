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
    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 no-padding">              
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
          <div class="panel panel-success">
            <div class="panel-body">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                  <h3 class="pro-detail-title"><a href="#" title="">{!!$data->name!!}</a></h3>
                  <hr>
                  <div class="row">
                    <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                      <div class="img-box">
                        <img class="img-responsive" src="{!!url('public/uploads/products/'.$data->images)!!}" alt="img responsive">
                      </div>
                      <div class="img-slide">
                        <div class="panel panel-default text-center">        
                          <div id="links">
                            @foreach($data->detail_img as $row)
                              <a href="{!!url('uploads/products/details/'.$row->images_url)!!}" title="{!!$data->name!!}" data-gallery>
                                  <img src="{!!url('public/uploads/products/details/'.$row->images_url)!!}" alt="ả{!!$data->name!!}" width="30" height="40">
                              </a>
                            @endforeach                              
                          </div>
                            <div id="blueimp-gallery" class="blueimp-gallery">
                                <div class="slides"></div>
                                <h3 class="title"></h3>
                                <a class="prev">‹</a>
                                <a class="next">›</a>
                                <a class="close">×</a>
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
                      <label class="btn btn-large btn-block btn-warning">{!!number_format($data->price)!!}<u>đ</u></label>
                    </div>
                    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                      <div class="panel panel-info" style="margin: 0;">
                        <div class="panel-heading" style="padding:5px;">
                          <h3 class="panel-title">Khuyến mãi - Chính sách</h3>
                        </div>
                        <div class="panel-body">
                          <div class="khuyenmai">
                            @if ($data->promo1!='')
                              <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$data->promo1!!}</li>
                            @elseif($data->promo2!='')
                              <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$data->promo2!!}</li>
                            @elseif ($data->promo3!='')
                              <li><span class="glyphicon glyphicon-ok-sign"></span>{!!$data->promo3!!}</li>
                            @endif 
                              <li><span class="glyphicon glyphicon-ok-sign"></span>Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li>                                                       
                          </div>                       
                        </div>
                      </div>
                      <div class="panel panel-info">
                        <div class="panel-body">
                         <div class="chinhsach">
                            <li><span class="glyphicon glyphicon-hand-right"></span> Trong hộp có: {!!$data->packet!!}</li>
                            <li><span class="glyphicon glyphicon-hand-right"></span> Bảo hành chính hãng: thân máy 12 tháng, pin 12 tháng, sạc 12 tháng</li>
                            <li><span class="glyphicon glyphicon-hand-right"></span> Giao hàng tận nơi miễn phí trong 1 ngày</li>
                            <li><span class="glyphicon glyphicon-hand-right"></span> 1 đổi 1 trong 1 tháng với sản phẩm lỗi</li>
                         </div>
                        </div>
                      </div>
                      @if($data->status ==1)
                        <a href="{!!url('gio-hang/addcart/'.$data->id)!!}" title="" class="btn btn-large btn-block btn-primary" style="font-size: 20px;">Đặt hàng ngay</a>
                      @else
                        <a href="" title="" class="btn btn-large btn-block btn-primary disabled" style="font-size: 20px;">Tạm hết hàng</a>
                      @endif
                    </div>
                  </div>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th colspan="2">CẤU HÌNH CHI TIẾT SẢN PHẨM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CPU</td>
                          <td>{!!$data->pro_details->cpu!!}</td>
                        </tr>
                        <tr>
                          <td>RAM</td>
                          <td> {!!$data->pro_details->ram!!}</td>
                        </tr>
                        <tr>
                          <td>Lưu trữ</td>
                          <td>{!!$data->pro_details->storage!!}</td>
                        </tr>
                        <tr>
                          <td>Màn hình</td>
                          <td>{!!$data->pro_details->screen!!}</td>
                        </tr>
                        <tr>
                          <td>VGA</td>
                          <td>  {!!$data->pro_details->vga!!} </td>
                        </tr>
                        <tr>
                          <td>Kết nối</td>
                          <td>{!!$data->pro_details->connect!!}</td>
                        </tr>
                        <tr>
                          <td>Webcam</td>
                          <td>{!!$data->pro_details->cam1!!}</td>
                        </tr>
                        <tr>
                          <td>Dung lượng PIN</td>
                          <td>{!!$data->pro_details->pin!!} </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                  <div class="table-responsive">
                    <div class="panel panel-default">        
                      <div class="panel-heading"> 
                        <small> Hình ảnh thực tế (click để xem kích thước đầy đủ)</small>
                      </div>
                      <div id="links">
                           @foreach($data->detail_img as $row)
                              <a href="{!!url('uploads/products/details/'.$row->images_url)!!}" title="{!!$data->name!!}" data-gallery>
                                  <img src="{!!url('public/uploads/products/details/'.$row->images_url)!!}" alt="ả{!!$data->name!!}" width="23%" height="50%">
                              </a>
                            @endforeach
                      </div>

                        <div id="blueimp-gallery" class="blueimp-gallery">
                            <div class="slides"></div>
                            <h3 class="title"></h3>
                            <a class="prev">‹</a>
                            <a class="next">›</a>
                            <a class="close">×</a>
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
          </div></div></div></div></div></div></div></div></div>

              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                  <h2> <small> Đánh giá chi tiết sản phẩm</small></h2>
                  <div class="accordion-group">
                    <div class="accordion-heading">
                      <p class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                        <div class="accordion-inner">
                          {!!$data->r_intro!!}
                        </div>                        
                      </p>
                    </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                      <div class="accordion-inner">
                        {!!$data->review!!}
                      </div>
                    </div>
                    <button class="SeeMore btn-primary" data-toggle="collapse" href="#collapseTwo"><b class="caret"></b> Xem chi tiết</button>
                  </div>
                </div>
              </div>
              <div class="row">
              <hr>
              <h2 style="padding-left: 30px;"> Tin tức công nghệ </h2>
                 @include('modules.tin-tuc') 
              </div><!-- /row -->
            </div>
          </div>   
        </div>
      </div>     
    </div> 

    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 no-padding">            
      <!-- panel inffo 1 -->
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title text-center">Sản phẩm cùng loại</h3>
        </div>
        <div class="panel-body no-padding">

        <?php 
          $lap = DB::table('products')
                ->join('category', 'products.cat_id', '=', 'category.id')
                ->join('pro_details', 'pro_details.pro_id', '=', 'products.id')
                ->where('category.parent_id','=','2')
                ->select('products.*','pro_details.cpu','pro_details.ram','pro_details.screen','pro_details.vga','pro_details.storage','pro_details.exten_memmory','pro_details.cam1','pro_details.cam2','pro_details.sim','pro_details.connect','pro_details.pin','pro_details.os','pro_details.note')
                ->paginate(2); 

        ?>

        @foreach($lap as  $row)
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">           
            <div class="thumbnail">          
              <div class="hienthi">
                <img class="img-responsive" src="{!!url('public/uploads/products/'.$row->images)!!}" alt="{!!$row->name!!}">
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
        </div>
      </div>
  </div> 
</div>
@endsection

</body>
</html>
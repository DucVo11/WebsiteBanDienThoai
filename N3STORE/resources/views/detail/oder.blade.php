
<!-- Xác nhận đơn hàng trang khách hàng -->

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

<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="font-size:18px; margin-top:5%; margin-left:-15%;">           
    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">              
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="width:1060px">
          <div class="panel panel-success">
            <div class="panel-body" style="">   
              <h1 class="text-left" style="font-size:22px; font-weight: bold; margin-top:2%">Xác nhận thông tin đơn hàng</h1><br>
                <div class="table-responsive">
            <table class="table table-hover" style="border: black solid 3px;">
               <thead style="background: #f0ad4e; font-size:18px; font-weight: bold;">
                    <tr>
                      <!-- <th style="border: black solid 2px; text-align: center;">ID</th>  -->
                      <th style="border: black solid 2px; text-align: center;">Hình ảnh</th>
                      <th style="border: black solid 2px; text-align: center;">Tên sản phẩm</th>
                      <th style="border: black solid 2px; text-align: center;">SL</th>
                      <th style="border: black solid 2px; text-align: center;">Giá</th>
                      <th style="border: black solid 2px; text-align: center;">Thành tiền</th>
                    </tr>
               </thead>

<!-- Xử lý truy xuất giỏ hàng từ csdl -->

              <tbody>
                  @foreach(Cart::content() as $row)
                    <tr style="border: black solid 3px;">
                      <!-- <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold; ">{!!$row->id!!}</td>  -->
                      <td><img src="{!!url('uploads/products/'.$row->options->img)!!}" alt="dell" width="140" height="130" style="margin-top: 5%;"></td>
                      <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold; ">{!!$row->name!!}</td>
                      <td class="text-center" style="padding: 25px; text-align: center; font-size:18px; font-weight: bold;">                        
                      <span>{!!$row->qty!!}</span>
                      </td>
                      <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold;">{!!$row->price!!}<u>đ</u></td>
                      <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold;">{!!$row->qty * $row->price!!}<u>đ</u></td>
                    </tr>
                  @endforeach                    
                    <tr style="font-size:18px; font-weight: bold; ">
                      <td colspan="2" style="padding:15px;"><strong>Tổng cộng :</strong> </td>
                      <td style="padding:15px; text-align: center;">{!!Cart::count()!!}</td>
                      <td colspan="3" style="color:red; padding:15px; text-align: center;">{!!Cart::subtotal();!!}<u>đ</u></td>                      
                    </tr>                    
               </tbody>
           </table>                
         </div>

<!-- Thông tin khách hàng -->

              {{-- form thong tin khach hang dat hang --}}
              @if ($_GET['paymethod'] =='cod' )
                <form action="" method="POST" role="form">
                <h1 class="text-left" style="font-size:22px; font-weight: bold; margin-top:3%">Xác nhận thông tin khách hàng</h1> <br>
                {{ csrf_field() }}
                <div class="form-group">
                  <label for="" style="font-size:20px; font-weight: bold; ">
                    + Tên khách hàng : <strong style="color:blue">{{ Auth::user()->name }} </strong> &nbsp; <br><br>
                    + Điện thoại: <strong style="color:blue"> {{ Auth::user()->phone }}</strong> &nbsp; <br><br>
                    + Địa chỉ: <strong style="color:blue"> {{ Auth::user()->address }}</strong>
                  </label>
                </div>      
                
                <div class="form-group">
                  <label for="" style="font-size:22px; font-weight: bold; margin-top:3%">Các ghi chú khác: </label><br><br>
                  <textarea name="txtnote" id="inputtxtNote" class="form-control" rows="4" required="required">                    
                  </textarea>
                </div>              
                <button type="submit" class="btn btn-primary pull-right" style="font-size:17px;"> Đặt hàng (COD)</button> 
              </form>

              @else 
              <form action="{!!url('/payment')!!}" method="Post" accept-charset="utf-8">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group"> <br><br>
                  <label for="" style="font-size:20px; font-weight: bold; ">
                   + Tên khách hàng : <strong style="color:blue">{{ Auth::user()->name }} </strong> &nbsp;<br><br>
                   + Điện thoại: <strong style="color:blue"> {{ Auth::user()->phone }}</strong> &nbsp;<br><br>
                   + Địa chỉ: <strong style="color:blue"> {{ Auth::user()->address }}</strong>
                  </label>
                </div>

                  <br>                
                <button type="submit" class="btn btn-danger pull-left" style="font-size:17px;"> Thanh toán qua Paypal </button> &nbsp;
              </form>
              @endif
          </div>
       </div>   
     </div>
  </div>     
</div> 

<!-- Sản phẩm tương tự -->

    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" style="right:-25%">            
      <div class="panel panel-info" style="width:106%; height:910px; border-radius: 5px; ">
        <div class="panel-heading" style="background: black; color: #fff;">
          <h3 class="panel-title text-center" style="font-weight: bold; font-size: 20px;">Sản phẩm tương tự</h3>
        </div>
        <br>

        <div class="panel-body no-padding">

        <?php 
          $mobile = DB::table('products')
                ->join('category', 'products.cat_id', '=', 'category.id')
                ->join('pro_details', 'pro_details.pro_id', '=', 'products.id')
                ->where('category.parent_id','=','1')
                ->select('products.*','pro_details.cpu','pro_details.ram','pro_details.screen','pro_details.vga','pro_details.storage','pro_details.exten_memmory','pro_details.cam1','pro_details.cam2','pro_details.sim','pro_details.connect','pro_details.pin','pro_details.os','pro_details.note')
                ->orderBy('products.created_at', 'desc')
                ->paginate(2); 
        ?>

       @foreach($mobile as $row)
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
            <div class="thumbnail mobile" style="background: #504f4f; color:#fff; font-size: 16px; border: 1px solid #535353; border-radius: 24px; padding: 30px; float: left; width: 365px; height: 400px; margin: 0 30px 30px 0; box-sizing: border-box;">              
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

              <div class="ct" style="margin-top: 15px; font-size: 16px; left: 5px">
                <a href="{!!url('mobile/'.$row->id.'-'.$row->slug)!!}" title="Chi tiết" style="color:#fff;">
                  <span class="label label-info" style="font-size:16px;padding:8px">Ưu đãi khi mua</span>   
                         @if ($row->promo1!='')
                    <li style="margin-top:15px"><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo1!!}</li>
                         @elseif($row->promo2!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo2!!}</li>
                         @elseif ($row->promo3!='')
                    <li><span class="glyphicon glyphicon-ok-sign"></span> {!!$row->promo3!!}</li>
                         @endif 
                    <li><span class="glyphicon glyphicon-ok-sign" ></span> Cài đặt phần mềm, tải nhạc - ứng dụng miễn phí</li> <br>

                  <span class="label label-warning" style="padding:8px; font-size:16px;">Cấu Hình Nổi bật</span> 
                  <li style="margin-top:15px"><strong>CPU</strong> : <i>  {!!$row->cpu!!}</i></li>
                    <li><strong>Màn Hình</strong> : <i>{!!$row->screen!!} </i></li> 
                    <li><strong>Camera</strong> : Trước  <i>{!!$row->cam1!!}</i> Sau <i>{!!$row->cam2!!}</i></li> 
                    <li><strong>HĐH</strong> :<i> {!!$row->os!!} </i> <strong> Bộ nhớ trong</strong> :<i> {!!$row->storage!!} </i></li> 
                    <li><strong>Pin</strong> :<i> {!!$row->pin!!}</i></li>
                </a>
              </div>

                 <span class="btn label-warning" style="margin-top: 65px; color:black; font-size: 17px"><strong>{!!number_format($row->price)!!}</strong><u>đ</u></span>
                 <a href="{!!url('gio-hang/addcart/'.$row->id)!!}" class="btn btn-success pull-right add" style="margin-top: 65px; border: 1px solid red; background-color: red; font-size: 17px;">Thêm vào giỏ </a>
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
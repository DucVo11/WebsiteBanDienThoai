
<!-- Trang xử lý giỏ hàng -->

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
    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" style="margin-top: 5%">              
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
          <div class="panel panel-success" style="min-height: 910px; width:1000px; margin-left:-20%">
          @if (count($errors) > 0)
              <div class="alert alert-danger">
                  <ul>
                      @foreach ($errors->all() as $error)
                          <li>{{ $error }}</li>
                      @endforeach
                  </ul>
            </div>
            @elseif (Session()->has('flash_level'))
              <div class="alert alert-success">
                  <ul>
                      {!! Session::get('flash_massage') !!} 
                  </ul>
              </div>
          @endif
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-hover" style="margin-top:3%; border: black solid 3px; height:280px;">
                  <thead style="background: #f0ad4e; font-size:18px; font-weight: bold;">
                    <tr>
                      <!-- <th style="border: black solid 2px; text-align: center;">ID</th>  -->
                      <th style="border: black solid 2px; text-align: center;">Hình ảnh</th>
                      <th style="border: black solid 2px; text-align: center;">Tên sản phẩm</th>
                      <th style="border: black solid 2px; text-align: center;width:160px">Số Lượng</th>
                      <th style="border: black solid 2px; text-align: center;">Xóa</th>
                      <th style="border: black solid 2px; text-align: center;">Giá</th>
                      <th style="border: black solid 2px; text-align: center;">Thành tiền</th>
                    </tr>
                  </thead>

                  <tbody >
                  @foreach(Cart::content() as $row)
                    <tr style="border: black solid 3px;">
                      <!-- <td style="padding: 20px; text-align: center; font-size:18px;">{!!$row->id!!}</td>  -->
                      <td ><img src="{!!url('/uploads/products/'.$row->options->img)!!}" alt="dell" width="140" height="130" style="margin-top: 5%"></td>
                      <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold; ">{!!$row->name!!}</td>

                      <td class="text-center" style="padding: 25px; text-align: center; font-size:18px; font-weight: bold;">                        
                          @if (($row->qty) >1)
                          <a href="{!!url('gio-hang/update/'.$row->rowId.'/'.$row->qty.'-down')!!}" ><span class="glyphicon glyphicon-minus"></span></a> 
                          @else
                            <a href="#" ><span class="glyphicon glyphicon-minus" ></span></a> 
                          @endif
                          <input type="text" class="qty text-center" value=" {!!$row->qty!!}" style="border-radius: 5px; height:2.3rem; text-align:center; font-size:17px; font-weight: bold; vertical-align:top; width: 60px; border:2px solid black;" readonly="readonly"> 
                      
                          <a href="{!!url('gio-hang/update/'.$row->rowId.'/'.$row->qty.'-up')!!}"><span class="glyphicon glyphicon-plus-sign"></span></a>
                      </td>

                      <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold;"><a href="{!!url('gio-hang/delete/'.$row->rowId)!!}" onclick="return xacnhan('Xóa sản phẩm này ?')" ><span class="glyphicon glyphicon-remove" style="padding:5px; font-size:18px; color:red;"></span></a></td>
                      <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold;">{!! number_format($row->price) !!}<u>đ</u></td>
                      <td style="padding: 25px; text-align: center; font-size:18px; font-weight: bold;">{!! number_format($row->qty * $row->price) !!}<u>đ</u></td>
                    </tr>
                  @endforeach     

                    <tr style="font-size:18px; font-weight: bold; ">
                      <td colspan="2" style="padding:15px;"><strong>Tổng cộng :</strong> </td>
                      <td style="padding:15px; text-align: center;">{!!Cart::count()!!}</td>
                      <td  colspan="3" style="color:red; padding:15px; text-align: center;">{!!Cart::subtotal()!!}<u>đ</u></td>                      
                    </tr>                    
                  </tbody>
                </table>                
              </div><br><br>
              
              <div class="col-xs-12 col-sm-12 col-md-12">
              @if(Cart::count() !=0)
                @if (Auth::guest())
                  <div class="input-group" >
                      <select name="paymethod" id="inputPaymethod" class="form-control" required="required" style=" font-weight: bold; border: 2px solid black; border-radius:5px;">
                        <option value="cod" style="font-weight: bold;">COD (thanh toán khi nhận hàng)</option>
                        <option value="paypal" style="font-weight: bold;">Paypal (Thanh toán qua Paypal)</option>                      
                      </select>
                    </div>
                  <a class="btn btn-large btn-warning pull-right" href="{!!url('/login')!!}" style="margin-top: -30px; background: red; color:#fff; font-weight: bold; font-size:16px">Tiến hành thanh toán</a>
                @else
                  <form action="{!!url('/dat-hang')!!}" method="get" accept-charset="utf-8">                    
                    <div class="input-group"  >
                    <label for="paymethod" style="font-size:18px;">Chọn phương thức thanh toán</label>
                      <select name="paymethod" id="inputPaymethod" class="form-control" required="required">
                        <option value="" style="font-size:17px;">Hãy chọn phương thức thanh toán</option> 
                        <option value="paypal" style="font-size:17px;">Thanh toán trực tuyến ( Paypal )</option> 
                        <option value="cod" style="font-size:17px;"> Thanh toán khi nhận hàng ( COD )</option>
                      </select>
                    </div> <br><br><br>
                    <hr>
                      <button type="submit" class="btn btn-danger pull-right" style="font-size:17px;">Tiến hành thanh toán</button>
                      <a href="{!!url('/')!!}" type="button" class="btn btn-large btn-primary pull-left" style="font-size:17px;">Tiếp tục mua hàng</a>
                  </form>
                @endif
              @endif
              </div>
              <hr>
            </div>
          </div>   
        </div>
      </div>     
    </div> 


    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" style="margin-top: 5%; right:-10%;">            
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
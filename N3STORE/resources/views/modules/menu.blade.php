<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="{!!url('public/images/Images-Trangchu/N3-2.png')!!}" alt="logo" width="50" height="20">
  <title>N3STORE</title>
</head>
<body class="">

<!-- Header trang khách hàng -->

<header>
 <nav role="navigation" id="main-Nav" >
      <div class="">  
        <div class="">
          <div class="navbar-header">
             <span  class="visible-xs pull-left" style="font-size:30px; cursor:pointer; padding-left: 10px; color: #ecf0f1;" onclick="openNav()">&#9776; </span> 
             <span  class="visible-xs pull-right" style="font-size:20px; cursor:pointer; padding-right: 10px; padding-top: 8px; color: #FFFFFF;" >      

<!-- Xử lý đăng nhập -->

                @if (Auth::guest())
                    <a class="top-a" href="{{ url('/') }}" > Home </a>  &nbsp;
                    <a href="#" data-toggle="modal" data-target="#login-modal"> Đăng nhập </a>
                    {{-- <a class="top-a" href="{{ url('/login') }}">Login</a> --}}
                @else  
                    <a class="top-a" href="{{ url('/user') }}" style="color:#c0392b;"><strong>{!!Auth::user()->name!!}</strong></a>
                    <a class="top-a" href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i><small>Thoát</small></a>
                @endif 

            </span>
          </div>
   
          <div class="head" id="main-mav-top">
          <div class="logo-topzone">
                <a href="{!!url('')!!}">
                    <i class="topzone-logo"></i>
                </a>
                <a href="{!!url('')!!}">
                    <i class="topzone-autho"></i>
                </a>
            </div>      

<!-- Menu trang khách hàng -->

          <ul class="menu">
              <li class="menu-ip"> <a href="{!!url('')!!}" style="text-decoration: none" ><span>Home</span> </a>
             </li>
              <li class="menu-mac ">
                <a href="{!!url('mobile')!!}" style="text-decoration: none" ><span>Điện thoại</span> </a>                          
              </li>                                                  
              <li class="menu-ipad ">
                <a href="{!!url('mobile')!!}" style="text-decoration: none" ><span>Phụ kiện</span> </a>                
              </li>    
              <li class="menu-watch ">
                <a href="{!!url('mobile')!!}" style="text-decoration: none" ><span>Sim & Thẻ</span> </a>                
              </li>                                          
              <li class="menu-sound ">
                <a href="{!!url('mobile')!!}" style="text-decoration: none" ><span>Âm thanh</span> </a>                    
              </li>      
              
              <li class="menu-access ">
                <a href="{!!url('tin-tuc')!!}" style="text-decoration: none" ><span>Khuyến mãi</span></a>                    
              </li>  

<!-- Xử lý đăng nhập, đăng xuất, thông tin cá nhân khi khách hàng chọn chức năng -->

                  @if (Auth::guest())
                    <li class="menu-news "><a href="#" data-toggle="modal" data-target="#login-modal" style="text-decoration: none" ><span>Đăng nhập</span></a></li>
                @else
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" style="width:200px; text-decoration: none;height:60px" >
                            <span> {{ Auth::user()->name }} </span> <span class="caret" style="margin-left:22px; margin-top:-11.5px"></span>
                        </a>

                        <ul class="dropdown-menu " role="menu" style="margin-top:5%;">
                            <li><a href="{{ url('/user') }}" style="width:200px;text-decoration: none;background: #fff;"> <span style="color:black; font-size:17px; margin-top:-10px; font-weight: bold;">Thông tin cá nhân</span></a></li> <br><br>
                            <li><a href="{{ url('/logout') }}" style="width:150px;text-decoration: none;background: #fff; margin-top:-5px; font-size:17px; margin-left:-80%; font-weight: bold;"><i class="fa fa-btn fa-sign-out" style="color: black; "></i>Đăng xuất</a></li>
                        </ul>
                    </li>
                @endif

            </ul>

             <ul class="nav navbar-nav pull-right">
              {{-- <li><a href="{{ url('/admin/home') }}">Vào trang quản trị</a></li> --}}

              <div class="search-cart" style="margin-left:60px">
              <div class="search-sp">
                 <i class="topzone-search"></i>
              </div>

<!-- Xử lý giỏ hàng trang khách hàng -->

                <a  class="cart" data-toggle="dropdown"> <i class="topzone-cart"></i><span class="badge" style="margin-top: -80%; margin-left: 70%;">{!!Cart::count();!!}</span><b class="caret"></b></a>
        
                <ul class="dropdown-menu" style="right:0; left: auto; min-width: 450px; margin-top: 13%;">

<!-- Xử lý giỏ hàng khác rỗng -->

                @if(Cart::count() !=0)

                  <div class="table-responsive">
                     <table class="table" >

                       <thead  style="background: #2f3033; color:#fff; text-align: center;">
                      <tr>
                          <th style="border-right: white solid 1px;text-align: center;">Ảnh</th>
                          <th style="border-right: white solid 1px;text-align: center; width:100px">Số Lượng</th>
                          <th style="border-right: white solid 1px;text-align: center;">Tên Sản Phẩm <SPAN></SPAN></th>
                          <th style="border-right: white solid 1px;text-align: center;">Giá</th>
                      </tr>
                    </thead>

                       <tbody style="text-align: center; font-weight: bold; font-size: 17px;">      

                      @foreach(Cart::content() as $row)
                         <tr>
                           <td> {!!$row->images!!} <img class="card-img img-circle" src="{!!url('uploads/products/'.$row->options->img)!!}" alt="dell"></td>
                           <td>{!!$row->qty!!}</td>
                           <td>{!!$row->name!!}</td>                           
                           <td>{!!$row->price!!}<u>đ</u></td>
                         </tr>                         
                        @endforeach    
                                         
                       </tbody>                       
                     </table> 

<!-- Xử lý xóa giỏ hàng và xem chi tiết giỏ hàng trang khách hàng -->

                     <a href="{!!url('/gio-hang/')!!}" type="button" class="btn btn-success pull-right" style="margin-right: 3%; font-weight: bold; font-size: 15px; border: 1px solid rgb(78, 78, 170); background: rgb(78, 78, 170);"> Chi Tiết Giỏ Hàng </a>
                     <a href="{!!url('/gio-hang/xoa')!!}" type="button" class="btn btn-danger" style="margin-left: 3%; font-weight: bold; font-size: 15px; "> Xóa </a>
                  </div>
  
<!-- Xử lý giỏ hàng rỗng -->

                  @else
                    <div class="table-responsive">
                     <table class="table" >
                      <thead style="background: #2f3033; color:#fff;" >
                      <tr>
                        <th style="border-right: white solid 1px;text-align: center;">Ảnh</th>
                        <th style="border-right: white solid 1px;text-align: center;">Số Lượng</th>
                        <th style="border-right: white solid 1px;text-align: center;">Tên Sản Phẩm <SPAN></SPAN></th>
                        <th style="border-right: white solid 1px;text-align: center;">Giá</th>
                      </tr>
                    </thead>
                       <tbody>                       
                          <td colspan="3" style="font-weight: bold; font-size: 18px;">Hiện đang trống</td>                        
                       </tbody>                       
                     </table> 
                  </div>
                  @endif
                </ul>
              </div> 
            </ul>
        
<!-- Xử lý nút tìm kiếm trang khách hàng -->

          <form class="form-search">
                <div class="click-search">
                    <i class="topzone-search"></i>
                    <input type="text" placeholder="Tìm kiếm sản phẩm">
                    <i class="topzone-delSearch"></i>
                </div>
                <button type="submit" class="submit-search" style="display:none">
            </button>
                <div class="sg-search">
                </div>
            </form>
          </div>
        </div> 
      </div>
    </nav>   

<!-- Xử lý phần header trang khách hàng -->

  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times; Đóng</a>
    <a href="{!!url('mobile')!!}">Điện Thoại</a>
    <a href="{!!url('laptop')!!}">Phụ kiện</a>
    <a href="{!!url('pc')!!}">Sim & Thẻ</a>
    <a href="{!!url('tin-tuc')!!}">Khuyến mãi</a>
    <a href="{!!url('gio-hang')!!}"> <span class="glyphicon glyphicon-shopping-cart"><span class="badge">{!!Cart::count()!!}</span></span> Giỏ Hàng </a>     
  </div>

<!-- Xử lý đăng nhập  -->

  {{-- loginform --}}
    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; margin-top: 8%;">
      <div class="modal-dialog">
        <div class="loginmodal-container" style="border-top: 10px solid white; background-color: #343a40; border-bottom: 10px solid white;  border-radius: 9px;">
            <h1 style=" font-weight: bold; font-size:28px;color:#fff">Đăng nhập</h1><br>

        <form class="form-horizontal" role="form" method="POST" id="login-form" action="{{ url('/login') }}" style="">
          {{ csrf_field() }}
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
              <input id="email" type="email" class="form-control" name="email" placeholder="Nhập địa chỉ Email" value="{{ old('email') }}" style="height:40px; margin-top:5%; font-size:17px">
            @if ($errors->has('email'))
                 <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                 </span>
            @endif
          </div>

          <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            <input id="password" type="password" name="password" class="form-control" placeholder="Nhập mật khẩu" style="height:40px; font-size:17px"> 
             @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif        
          </div>
          <div class="form-group">
            <div>
                <div class="checkbox">
                    <label  style="color: white; font-size:16px">
                        <input type="checkbox" name="remember"> Ghi nhớ
                    </label>
                </div>
            </div>
        </div>       
          <input type="submit" name="login" class="btn btn-primary" value="Đăng nhập" style="height:40px; margin-top:5%; font-size:17px">
        </form>     
        
        <div class="login-help">
          <a class="btn btn-link" href="{!!url('/register')!!}" style="text-decoration: none;"> <strong style="color: white; font-size:18px;"> Đăng ký </strong> </a><a class="btn btn-link" href="{{ url('/password/reset') }}" style="font-size: 17px; text-decoration: none; color: #fff;">Bạn đã quên mật khẩu ?</a>
        </div>
      </div>
    </div>
  </div>
</header>  

</body>
</html>
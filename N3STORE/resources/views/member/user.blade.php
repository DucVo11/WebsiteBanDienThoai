
<!-- Xử lý thông tin khách hàng -->

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

<!-- Xử lý lịch sử mua hàng của khách hàng  -->

@extends('layouts.master')
@section('content')

<div class="container" style="background: #fff; font-size: 18px; height:500px;border-radius: 10px;  text-align: center;"><br><br>
	<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" >
				<table class="table table-bordered table-hover text-center" >
					<thead>
						<tr><h1 style="font-weight: bold;font-size:22px;color:red">Lịch sử mua hàng </h1></tr><br>
						<tr>
							<th style="text-align: center; border: 2.5px solid black;"> ID</th>										
							<th style="text-align: center; border: 2.3px solid black;" > Mã đơn hàng</th>										
							<th style="text-align: center; border: 2.4px solid black;"> Ngày đặt hàng</th>										
							<th style="text-align: center; border: 2.3px solid black;"> Tổng tiền</th>										
						</tr>
					</thead>

					<tbody>
			        		<?php  $stt=0;?>
				       @foreach($data as $row)
							<?php $stt++;?>
							<tr>
								<td style="border: 2.4px solid black;">{!!$stt!!}</td>
								<td style="border: 2.4px solid black;">{!!$row->id!!}</td>
								<td style="border: 2.4px solid black;">{!!$row->created_at!!}</td>
								<td style="border: 2.4px solid black;">{!! number_format($row->total) !!}<u>đ</u></td>
							</tr>
						@endforeach							
					</tbody>
				</table>
			</div>

<!-- Xử lý thông tin cá nhân khách hàng  -->

<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	<div class="table-responsive">
	 	<table class="table table-bordered table-hover text-center">
				<thead>
					<tr>
				    	<th colspan="2" style="color:blue; font-size:20px; text-align: center; border: 2.2px solid black;"> Thông tin khách hàng : {!!Auth::user()->name !!}</th>										
					</tr>
				</thead>
						<tbody>
							<tr>
								<td style="border: 2.2px solid black;">Họ tên</td>
								<td style="border: 2.2px solid black;">{!!Auth::user()->name!!}</td>
							</tr>
							<tr>
								<td style="border: 2.2px solid black;">Địa chỉ E-mail</td>
								<td style="border: 2.2px solid black;">{!!Auth::user()->email!!}</td>
							</tr>
							<tr>
								<td style="border: 2.2px solid black;">Điện thoại</td>
								<td style="border: 2.2px solid black;">{!!Auth::user()->phone !!}</td>
							</tr>
							<tr>
								<td style="border: 2.2px solid black;">Địa chỉ Khách hàng</td>
								<td style="border: 2.2px solid black;">{!!Auth::user()->address!!}</td>
							</tr>
							<tr>
								<td style="border: 2.2px solid black;">Ngày đăng ký</td>
								<td style="border: 2.5px solid black;">{!!Auth::user()->created_at !!}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div><br><br>
@endsection

</body>
</html>
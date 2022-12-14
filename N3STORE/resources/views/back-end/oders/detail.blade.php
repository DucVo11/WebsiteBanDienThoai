
<!-- Phần xác nhận đơn hàng của admin -->

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
	
@extends('back-end.layouts.master')
@section('content')

	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="font-size:18px;">			
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="#"><svg class="glyph stroked home"><use xlink:href="#stroked-home"></use></svg></a></li>
				<li class="active">Chi tiết đơn hàng </li>
			</ol>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<form action="" method="POST" role="form">	
					<input type="hidden" name="_token" value="{{ csrf_token() }}">				
					<div class="panel panel-default">
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
							<div class="table-responsive">
								<table class="table table-hover">
									<thead>
										<tr>
											<th>STT</th>
											<th>Họ tên khách hàng</th>
											<th>Địa chỉ</th>
											<th>Điện thoại</th>
											<th>Ngày đặt</th>
											<th>Tổng tiền</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{!!$oder->id!!}</td>
											<td>{!!$oder->user->name!!}</td>
											<td>{!!$oder->user->address!!}</td>
											<td>{!!$oder->user->phone!!}</td>
											<td>{!!$oder->created_at!!}</td>
											<td>{!! number_format($oder->total) !!}<u>đ</u></td>
										</tr>
									</tbody>
								</table>
							</div>
						<div class="panel-heading" style="font-size:22px;font-weight: bold;">						 
							Chi tiết sản phẩm trong đơn đặt hàng
						</div>
						<div class="panel-body" >
							<div class="table-responsive">
								<table class="table table-hover">
									<thead>
										<tr>										
											<th style="text-align: center;">STT</th>										
											<th>Image</th>
											<th>Tên sản phẩm</th>
											<th style="width:350px">Tóm tắt chức năng</th>
											<th style="text-align: center;"> Số lượng </th>
											<th style="text-align: center;">Giá bán</th>
											<th style="text-align: center;">Trạng thái</th>
											<th style="text-align: center;">Action</th>
										</tr>
									</thead>
									<tbody>
										@foreach($data as $row)
											<tr>
												<td style="text-align: center;">{!!$row->id!!}</td>
												<td> <img src="{!!url('uploads/products/'.$row->images)!!}" alt="iphone" width="50" height="40"></td>
												<td>{!!$row->name!!}</td>
												<td>{!!$row->intro!!}</td>
												<td style="text-align: center;">{!!$row->qty!!} </td>
												<td style="text-align: center;">{!! number_format($row->price) !!}<u>đ</u></td>
												<td style="text-align: center;">
													@if($row->status ==1)
														<span style="color:red;font-weight: bold;">Còn hàng</span>
													@else
														<span style="color:#27ae60;"> Tạm hết</span>
													@endif
												</td>
												<td style="width: 125px; text-align: center;">
												    <a href="{!!url('')!!}"  title="Xóa" onclick="return xacnhan('Xóa danh mục này ?')">Hủy bỏ</a>
												</td>
											</tr>
										@endforeach								
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<button type="submit" onclick="return xacnhan('Xác nhận đơn hàng này ?')"  class="btn btn-danger" style="font-size:17px;"> Xác nhận đơn hàng </button>
				</form>
			</div>
		</div>	
	</div>
@endsection

</body>
</html>
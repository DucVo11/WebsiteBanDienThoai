
<!-- Danh sách thông tin sản phẩm -->

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

	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="font-size:17px;">			
		<div class="row" >
			<ol class="breadcrumb">
				<li><a href="#"><svg class="glyph stroked home"><use xlink:href="#stroked-home"></use></svg></a></li>
				<li class="active">Sản phẩm</li>
			</ol>
		</div>
		
		<div class="row" >
			<div class="col-lg-12" >
				<div class="panel panel-default">
					<div class="panel-heading">
						<div class="row">
							<div class="col-md-10"><div class="form-group">
								<label for="inputLoai" class="col-sm-3 control-label"><strong> Chọn sản phẩm </strong></label>
								<div class="col-md-6">
									<select name="sltCate" id="inputLoai" class="form-control">
						      			<option value="0"> CHỌN MỘT THƯƠNG HIỆU </option>
						      			<?php MenuMulti($cat,0,$str='--| ',$loai); ?>   		
						      		</select>
									<script>
									    document.getElementById("inputLoai").onchange = function() {
									        if (this.selectedIndex!==0) {
									            window.location.href = this.value;
									        }        
									    };
									</script>
								</div>
								<div class="col-md-3">
									<input type="search" name="txttk" id="inputTxttk" class="form-control" value="" placeholder="Tìm sản phẩm..." required="required" title="">
								</div>
							</div>
								
								
							</div>
							<div class="col-md-2">
								@if ($loai !='all')
									<a href="{!!url('admin/sanpham/'.$loai.'/add')!!}" title=""><button type="button" class="btn btn-primary pull-right">Thêm Mới Sản Phẩm</button></a>
								@endif
							</div>
						</div> 
						
					</div>
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
							<table class="table table-hover">
								<thead>
									<tr>										
										<th style="text-align: center;">STT</th>										
										<th style="text-align: center;">Image</th>
										<th style="text-align: center; width: 160px">Tên sản phẩm</th>
										<th style="text-align: center;">Tóm tắt chức năng</th>
										<th style="text-align: center; width:160px">Thương hiệu</th>
										<th style="text-align: center;">Giá bán</th>
										<th style="text-align: center;">Trạng thái</th>
										<th style="text-align: center;">Action</th>
									</tr>
								</thead>
								<tbody>
									@foreach($data as $row)
										<tr>
											<td style="text-align: center;">{!!$row->id!!}</td>
											<td style="text-align: center;"><img src="{!!url('uploads/products/'.$row->images)!!}" alt="iphone" width="40" height="40"></td>
											<td style="text-align: center;">{!!$row->name!!}</td>
											<td style="text-align: center;">{!!$row->intro!!}</td>
											<td style="text-align: center;">{!!$row->category->name!!}</td>
											<td style="text-align: center; width:160px">{!!$row->price!!}đ</td>
											<td  style="width: 120px; text-align: center;">
												@if($row->status ==1)
													<span style="color:red;font-weight: bold;">Còn hàng</span>
												@else
													Tạm hết hàng
												@endif
											</td>
											<td style="width: 125px; text-align: center;font-size:18px">
											    <a href="{!!url('admin/sanpham/mobile/edit/'.$row->id)!!}" title="Sửa"><span class="glyphicon glyphicon-edit"> Sửa</span> </a>
											    <a href="{!!url('admin/sanpham/del/'.$row->id)!!}"  title="Xóa" onclick="return xacnhan('Xóa danh mục này ?')"><span class="glyphicon glyphicon-remove"> Xóa</span> </a>
											</td>
										</tr>
									@endforeach								
								</tbody>
							</table>
						</div>
						{!! $data->render() !!}
					</div>
				</div>
			</div>
		</div>	
	</div>	
@endsection

</body>
</html>
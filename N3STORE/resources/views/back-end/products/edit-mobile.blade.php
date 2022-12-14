
<!-- Sửa thông tin phần điện thoại -->

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

	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="font-size: 18px;">			
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="#"><svg class="glyph stroked home"><use xlink:href="#stroked-home"></use></svg></a></li>
				<li class="active">Sản phẩm</li>
			</ol>
		</div>
		
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header"><small style="font-weight: bold;">Sửa sản phẩm </small></h1>
			</div>
		</div>	

		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">					
					<div class="panel-body" style="background-color: #ecf0f1; color:#27ae60;">
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
						<form action="" method="POST" role="form" enctype="multipart/form-data" >
				      		{{ csrf_field() }}
				      		<div class="form-group">
					      		<label for="input-id">Chọn danh mục</label>
					      		<select name="sltCate" id="inputSltCate" required class="form-control" style="font-size:17px; margin-top:1%">
					      			<option value="">Chọn thương hiệu</option>
					      			@foreach($cat as $dt)
					      				<option value="{!!$dt->id!!}" >{!!'--|--|'.$dt->name!!}</option> 	
					      			@endforeach	
					      		</select>
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Tên sản phẩm</label>
				      			<input type="text" name="txtname" id="inputTxtname" class="form-control" value="{!! old('txtname',isset($pro["name"]) ? $pro["name"] : null) !!}"  required="required" style="margin-top:1%">
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Điểm nổi bật</label>
				      			<input type="text" name="txtintro" id="inputTxtintro" class="form-control" value="{!! old('txtintro',isset($pro["intro"]) ? $pro["intro"] : null) !!}" required="required" style="margin-top:1%">
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Gồm có : </label>
				      			<input type="text" name="txtpacket" id="inputtxtpacket" value="{!! old('txtpacket',isset($pro["packet"]) ? $pro["packet"] : null) !!}" class="form-control" style="margin-top:1%">
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Khuyến mãi (tối đa 3 mục vào 3 ô)</label>

				      			<div class="row" style="color:#367fa9; font-weight: bold;"><br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
					      				Khuyến mãi 1 : <input type="text" name="txtpromo1" id="inputtxtpromo1" value="{!! old('txtpromo1',isset($pro["promo1"]) ? $pro["promo1"] : null) !!}" class="form-control"  style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Khuyến mãi 2 : <input type="text" name="txtpromo2" id="inputtxtpromo2" value="{!! old('txtpromo2',isset($pro["promo2"]) ? $pro["promo2"] : null) !!}" class="form-control"  style="margin-top:5%" >
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Khuyến mãi 3 : <input type="text" name="txtpromo3" id="inputtxtpromo3" value="{!! old('txtpromo3',isset($pro["promo3"]) ? $pro["promo3"] : null) !!}" class="form-control"  style="margin-top:5%" >
					      			</div>
					      		</div>				      			
				      		</div>
				      		<div class="form-group">				      			
				      			<div class="row"  style="color:#367fa9; font-weight: bold;"><br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Hình ảnh : <input type="file" name="txtimg" accept="image/png" id="inputtxtimg"  class="form-control" style="margin-top:5%;padding:5px" > <br>
					      				Ảnh cũ: <img src="{!!url('uploads/products/'.$pro->images)!!}" alt="{!!$pro->images!!}" width="80" height="60" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				Giá bán : <input type="number" name="txtprice" id="inputtxtprice" class="form-control" value="{!! old('txtproname',isset($pro["price"]) ? $pro["price"] : null) !!}" required="required" style="margin-top:11%">
					      			</div>
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				Tag : <input type="text" name="txttag" id="inputtag" value="{!! old('txtproname',isset($pro["tag"]) ? $pro["tag"] : null) !!}" class="form-control" style="margin-top:3.2%">
					      			</div>
					      		</div>				      			
				      		</div>
				      	@if($loai!=19)
				      		<div class="form-group"><br>
				      			<label for="input-id" style="font-size:22px"> Chi tiết cấu hình sản phẩm</label>
				      			<div class="row" style="color:#367fa9; font-weight: bold;"> <br>
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				CPU : <input type="text" name="txtCpu" id="inputtxtCpu" value="{!! old('txtCpu',isset($pro->pro_details->cpu) ? $pro->pro_details->cpu : null) !!}" class="form-control" style="margin-top:3%; ">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				RAM : <input type="text" name="txtRam" id="inputtxtRam" value="{!! old('txtRam',isset($pro->pro_details->ram) ? $pro->pro_details->ram : null) !!}" class="form-control"  style="margin-top:10%; ">
					      			</div>
					      			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
					      				Bộ nhớ trong : <input type="text" name="txtStorage" id="inputtxtStorage" value="{!! old('txtStorage',isset($pro->pro_details->storage) ? $pro->pro_details->storage : null) !!}" class="form-control" style="margin-top:10%; " >
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2" style="padding-left: 0;">
					      				Thẻ nhớ <input type="text" name="txtExtend" id="inputtxtExtend" value="{!! old('txtExtend',isset($pro->pro_details->exten_memmory) ? $pro->pro_details->exten_memmory : null) !!}" class="form-control" style="margin-top:9.5%;">
					      			</div>
					      		</div>
					      		<div class="row" style="color:#367fa9; font-weight: bold;"><br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Màn hình : <input type="text" name="txtScreen" id="inputtxtscreen" value="{!! old('txtScreen',isset($pro->pro_details->screen) ? $pro->pro_details->screen : null) !!}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				VGA : <input type="text" name="txtVga" id="inputtxtVga" value="{!! old('txtVga',isset($pro->pro_details->vga) ? $pro->pro_details->vga : null) !!}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				Cammera Trước : <input type="text" name="txtCam1" id="inputtxtCam1" value="{!! old('txtCam1',isset($pro->pro_details->cam1) ? $pro->pro_details->cam1 : null) !!}" class="form-control" style="margin-top:10.5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				Cammera Sau: <input type="text" name="txtCam2" id="inputtxtCam2" value="{!! old('txtCam2',isset($pro->pro_details->cam2) ? $pro->pro_details->cam2 : null) !!}" class="form-control" style="margin-top:10.5%">
					      			</div>
					      		</div>
					      		<div class="row" style="color:#367fa9; font-weight: bold;"><br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				SIM hỗ trợ : <input type="text" name="txtSIM" id="inputtxtSIM" value="{!! old('txtSIM',isset($pro->pro_details->sim) ? $pro->pro_details->sim : null) !!}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Kết nối : <input type="text" name="txtConnect" id="inputtxtConnect" value="{!! old('txtConnect',isset($pro->pro_details->connect) ? $pro->pro_details->connect : null) !!}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				PIN : <input type="text" name="txtPin" id="inputtxtPin" value="{!! old('txtPin',isset($pro->pro_details->pin) ? $pro->pro_details->pin : null) !!}" class="form-control" style="margin-top:11%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				Hệ điều hành : <input type="text" name="txtOs" id="inputtxtOs" value="{!! old('txtOs',isset($pro->pro_details->os) ? $pro->pro_details->os : null) !!}" class="form-control" style="margin-top:11%">
					      			</div>
					      		</div>				      			
				      		</div>
				      	@else
				      	<div class="form-group">
				      			<label for="input-id" style="font-size:22px"> Chi tiết cấu hình sản phẩm</label>
				      			<div class="row">
				      				<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="color:#367fa9; font-weight: bold;">
					      				Mainboard : <input type="text" name="txtScreen" id="inputtxtscreen" value="{!! old('txtScreen',isset($pro->pro_details->screen) ? $pro->pro_details->screen : null) !!}"  class="form-control" >
					      			</div>
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				Cpu : <input type="text" name="txtCpu" id="inputtxtCpu" value="{!! old('txtCpu',isset($pro->pro_details->cpu) ? $pro->pro_details->cpu : null) !!}" class="form-control" >
					      			</div>					      			
					      								      			
					      		</div>
					      		<div class="row">
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				RAM : <input type="text" name="txtRam" id="inputtxtRam" value="{!! old('txtRam',isset($pro->pro_details->ram) ? $pro->pro_details->ram : null) !!}" class="form-control" >
					      			</div>
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				VGA : <input type="text" name="txtVga" id="inputtxtVga" value="{!! old('txtVga',isset($pro->pro_details->vga) ? $pro->pro_details->vga : null) !!}" class="form-control">
					      			</div>
					      		</div>
					      		<div class="row">					      			
					      			<div class="col-xs-12 col-sm-3 col-md-4 col-lg-4">
					      				Lưu trữ(HDD) : <input type="text" name="txtStorage" id="inputtxtStorage" value="{!! old('txtStorage',isset($pro->pro_details->storage) ? $pro->pro_details->storage : null) !!}" class="form-control" >
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				FAN - Tản nhiệt <input type="text" name="txtCam1" id="inputtxtCam1" value="{!! old('txtCam1',isset($pro->pro_details->cam1) ? $pro->pro_details->cam1 : null) !!}" class="form-control" >
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Nguồn (PSU) <input type="text" name="txtCam2" id="inputtxtCam2" value="{!! old('txtCam2',isset($pro->pro_details->cam2) ? $pro->pro_details->cam2 : null) !!}"" class="form-control" >
					      			</div>
					      		</div>
					      		<div class="row">
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				Kết nối : <input type="text" name="txtConnect" id="inputtxtConnect" value="{!! old('txtConnect',isset($pro->pro_details->connect) ? $pro->pro_details->connect : null) !!}" class="form-control">
					      			</div>
					      			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3" style="padding-left: 0;">
					      				Thùng CASE <input type="text" name="txtExtend" id="inputtxtExtend" value="{!! old('txtExtend',isset($pro->pro_details->exten_memmory) ? $pro->pro_details->exten_memmory : null) !!}" class="form-control">
					      			</div>
					      			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					      				Hệ điều hành : <input type="text" name="txtOs" id="inputtxtOs" value="{!! old('txtOs',isset($pro->pro_details->os) ? $pro->pro_details->os : null) !!}" class="form-control" >
					      			</div>
					      		</div>				      			
				      		</div>
				      	@endif
				      		<div class="form-group"><br><br>
				      			<label for="input-id" style="font-size:22px">Hình ảnh chi tiết sản phẩm</label>
				      			<?php $stt=0; ?>
				      			<div class="row" style="font-weight: bold;">
					      			@foreach($pro->detail_img as $row)
					      				<?php $stt++; ?>
					      				<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2" ><br>				 
						      				Ảnh cũ: {!!$stt!!}<img src="{!!url('uploads/products/details/'.$row->images_url)!!}" alt="{!!$row->images_url!!}" width="80" height="60" style="font-size:9px">
						      			</div>
					      			@endforeach
					      		</div>
					      		<div class="row"><br>
					      			@for( $i=1; $i<=12; $i++)
					      			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3" style="color:#367fa9; font-weight: bold;"><br>
					      				Hình ảnh mới {!!$i!!} : <input type="file" name="txtdetail_img[]" value="{{ old('txtdetail_img[]') }}" accept="image" id="inputtxtdetail_img" class="form-control" style="margin-top:10%; padding:5px">
					      			</div>
					      			@endfor
					      		</div>				      			
				      		</div>
				      		<div class="form-group"><br><br>
				      			<label for="input-id" style="font-size:22px">Đánh giá chi tiết sản phẩm</label>
				      			<div class="row"><br>					      			
					      			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					      				<label for="input-id" style="font-size:22px">Tóm tắt đánh giá</label>
					      				<textarea name="txtre_Intro" id="inputTxtre_Intro" class="form-control"  rows="2">{!! old('txtReview',isset($pro->r_intro) ? $pro->r_intro : null) !!}</textarea>
					      				<script type="text/javascript">
											var editor = CKEDITOR.replace('txtre_Intro',{
												language:'vi',
												filebrowserImageBrowseUrl : '../../../../plugin/ckfinder/ckfinder.html?Type=Images',
												filebrowserFlashBrowseUrl : '../../../../plugin/ckfinder/ckfinder.html?Type=Flash',
												filebrowserImageUploadUrl : '../../../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
												filebrowserFlashUploadUrl : '../../../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
											});
										</script>
					      			</div>
					      			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br><br>
					      				<label for="input-id" style="font-size:22px">Bài đánh giá chi tiết</label>
					      				<textarea name="txtReview" id="inputtxtReview" class="form-control" rows="4" ">{!! old('txtReview',isset($pro->review) ? $pro->review : null) !!}</textarea>
					      				<script type="text/javascript">
											var editor = CKEDITOR.replace('txtReview',{
												language:'vi',
												filebrowserImageBrowseUrl : '../../../../plugin/ckfinder/ckfinder.html?Type=Images',
												filebrowserFlashBrowseUrl : '../../../../plugin/ckfinder/ckfinder.html?Type=Flash',
												filebrowserImageUploadUrl : '../../../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
												filebrowserFlashUploadUrl : '../../../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
											});
										</script>
					      			</div>
					      		</div>				      			
				      		</div><br>
				      		<input type="submit" name="btnCateAdd" class="btn btn-primary" value="Lưu lại" class="button" style="font-size:17px" />
				      	</form>			      	
					</div>
				</div>
			</div>
		</div>	
	</div>	
@endsection

</body>
</html>
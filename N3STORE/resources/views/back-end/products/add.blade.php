
<!-- Thêm sản phẩm của admin -->

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
				<h1 class="page-header"><small style="font-weight: bold;">Thêm mới sản phẩm: {!!$loai!!}</small></h1>
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
						<form action="" method="POST" role="form" enctype="multipart/form-data">
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
				      			<input type="text" name="txtname" id="inputTxtname" class="form-control" value="{{ old('txtname') }}" style="margin-top:1%" >
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Điểm nổi bật</label>
				      			<input type="text" name="txtintro" id="inputTxtintro" class="form-control" value="{{ old('txtintro') }}" required="required" style="margin-top:1%">
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Gồm có : </label>
				      			<input type="text" name="txtpacket" id="inputtxtpacket" value="{{ old('txtpacket') }}" class="form-control" style="margin-top:1%">
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Khuyến mãi (tối đa 3 mục)</label>
								  
				      			<div class="row" style="color:#367fa9; font-weight: bold;"><br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Khuyến mãi 1 : <input type="text" name="txtpromo1" id="inputtxtpromo1" value="{{ old('txtpromo1') }}" class="form-control" style="margin-top:5%" >
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Khuyến mãi 2 : <input type="text" name="txtpromo2" id="inputtxtpromo2" value="{{ old('txtpromo2') }}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Khuyến mãi 3 : <input type="text" name="txtpromo3" id="inputtxtpromo3" value="{{ old('txtpromo3') }}" class="form-control" style="margin-top:5%">
					      			</div>
					      		</div>				      			
				      		</div>
							  
				      		<div class="form-group">				      			
				      			<div class="row" style="color:#367fa9; font-weight: bold;"><br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
					      				Hình ảnh : <input type="file" name="txtimg" accept="image/png" id="inputtxtimg" value="{{ old('txtimg') }}" class="form-control" required="required" style="margin-top:5%;padding:5px">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				Giá bán : <input type="number" name="txtprice" id="inputtxtprice" class="form-control" value="{{ old('txtprice') }}" required="required" style="margin-top:11%">
					      			</div>
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				Tag : <input type="text" name="txttag" id="inputtag" value="{{ old('txttag') }}" class="form-control" style="margin-top:3.2%">
					      			</div>
					      		</div>				      			
				      		</div>
				      		<div class="form-group"> <br>
				      			<label for="input-id" style="font-size:22px"> Chi tiết cấu hình sản phẩm</label>
				      			<div class="row" style="color:#367fa9; font-weight: bold;"> <br>
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				CPU : <input type="text" name="txtCpu" id="inputtxtCpu" value="{{ old('txtCpu') }}" class="form-control" style="margin-top:5%; width:370px">
					      			</div>
					      			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3" style="margin-left:-16%">
					      				RAM : <input type="text" name="txtRam" id="inputtxtRam" value="{{ old('txtRam') }}" class="form-control" style="margin-top:10.5%; ">
					      			</div>
					      			<div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
					      				Bộ nhớ trong : <input type="text" name="txtStorage" id="inputtxtStorage" value="{{ old('txtStorage') }}" class="form-control" style="margin-top:16%; width:200px">
					      			</div>
					      			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1" style="padding-left: 0; margin-left:5%">	
					      				Thẻ nhớ	:<input type="text" name="txtExtend" id="inputtxtExtend" value="{{ old('txtExtend') }}" class="form-control" style="margin-top:30.5%; width:200px">
					      			</div>
					      		</div>
					      		<div class="row" style="color:#367fa9; font-weight: bold;"> <br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Màn hình : <input type="text" name="txtScreen" id="inputtxtscreen" value="{{ old('txtScreen') }}" class="form-control" style="margin-top:5%" >
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				VGA : <input type="text" name="txtVga" id="inputtxtVga" value="{{ old('txtVga') }}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      			    Cammera sau : <input type="text" name="txtCam1" id="inputtxtCam1" value="{{ old('txtCam1') }}" class="form-control" style="margin-top:10.5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				Cammera trước :<input type="text" name="txtCam2" id="inputtxtCam2" value="{{ old('txtCam2') }}" class="form-control" style="margin-top:10.5%">
					      			</div>
					      		</div>
					      		<div class="row" style="color:#367fa9; font-weight: bold;"> <br>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				SIM hỗ trợ : <input type="text" name="txtSIM" id="inputtxtSIM" value="{{ old('txtSIM') }}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					      				Kết nối : <input type="text" name="txtConnect" id="inputtxtConnect" value="{{ old('txtConnect') }}" class="form-control" style="margin-top:5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				PIN : <input type="text" name="txtPin" id="inputtxtPin" value="{{ old('txtPin') }}" class="form-control" style="margin-top:10.5%">
					      			</div>
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					      				Hệ điều hành : <input type="text" name="txtOs" id="inputtxtOs" value="{{ old('txtOs') }}" class="form-control" style="margin-top:10.5%">
					      			</div>
					      		</div>				      			
				      		</div> <br>
				      		<div class="form-group">
				      			<label for="input-id" style="font-size:22px">Đánh giá chi tiết sản phẩm</label>
				      			<div class="row"> 
					      			@for( $i=1; $i<=12; $i++)
					      			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3" style="color:#367fa9; font-weight: bold;">
					      			<br>	Hình ảnh {!!$i!!} : <input type="file" name="txtdetail_img[]" value="{{ old('txtdetail_img[]') }}" accept="image/png" id="inputtxtdetail_img" class="form-control" style="margin-top:10%; padding:5px">
					      			</div>
					      			@endfor
					      		</div>				      			
				      		</div> <br>
				      		<div class="form-group">
				      			<label for="input-id" style="font-size:22px">Đánh giá chi tiết sản phẩm</label>
				      			<div class="row"> <br>  			
					      			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					      				<label for="input-id" style="font-size:22px">Tóm tắt đánh giá</label> <br> <br>
					      				<textarea name="txtre_Intro" id="inputTxtre_Intro" class="form-control" value="{{ old('txtre_Intro') }}" rows="2" required="required" ></textarea>
					      				<script type="text/javascript" >
											var editor = CKEDITOR.replace('txtre_Intro',{
												language:'vi',
												filebrowserImageBrowseUrl : '../../plugin/ckfinder/ckfinder.html?Type=Images',
												filebrowserFlashBrowseUrl : '../../plugin/ckfinder/ckfinder.html?Type=Flash',
												filebrowserImageUploadUrl : '../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
												filebrowserFlashUploadUrl : '../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
											});
										</script>
					      			</div>
					      			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:5%"> 
					      				<label for="input-id" style="font-size:22px">Bài đánh giá chi tiết</label> <br><br>
					      				<textarea name="txtReview" id="inputtxtReview" class="form-control" rows="4" value="{{ old('txtReview') }}" required="required"></textarea>
					      				<script type="text/javascript">
											var editor = CKEDITOR.replace('txtReview',{
												language:'vi',
												filebrowserImageBrowseUrl : '../../plugin/ckfinder/ckfinder.html?Type=Images',
												filebrowserFlashBrowseUrl : '../../plugin/ckfinder/ckfinder.html?Type=Flash',
												filebrowserImageUploadUrl : '../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
												filebrowserFlashUploadUrl : '../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
											});
										</script>
					      			</div>
					      		</div>				      			
				      		</div><br>
				      		<input type="submit" name="btnCateAdd" class="btn btn-primary" value="Thêm sản phẩm" class="button" style="font-size:17px;"/>
				      	</form>			      	
					</div>
				</div>
			</div>
		</div>	
	</div>
@endsection

</body>
</html>
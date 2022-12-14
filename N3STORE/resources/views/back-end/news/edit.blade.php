
<!-- Sửa tin -->

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
				<li class="active">Tin tức</li>
			</ol>
		</div>
		
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header"><small style="font-weight: bold;"> Sửa bản tin </small></h1>
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
					      			<option value="">Chọn danh mục</option>
					      			@foreach($cat as $dt)
					      				@if($dt->id == $data->cat_id)
					      					<option value="{!!$dt->id!!}" selected >{!!'--|--|'.$dt->name!!}</option> 	
					      				@else
					      					<option value="{!!$dt->id!!} " >{!!'--|--|'.$dt->name!!}</option> 	
					      				@endif
					      			@endforeach	
					      		</select>
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id" style="margin-top:1%">Tiêu đề bản tin</label>
				      			<input type="text" name="txtTitle" id="inputTxtTitle" class="form-control" value="{!! old('txtTitle',isset($data->title) ? $data->title : null) !!}"  style="margin-top:1%">
				      		</div>
				      		<div class="form-group">
				      			<div class="row" style="margin-top:2%;font-weight: bold;color:#367fa9; ">
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				Tác giả : <input type="text" name="txtAuth" id="inputTxtAuth" class="form-control" value="{!! old('txtAuth',isset($data["author"]) ? $data["author"] : null) !!}" required="required" style="margin-top:2%">
					      			</div>
					      			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					      				Tag : <input type="text" name="txttag" id="inputtag" value="{!! old('txttag',isset($data["tag"]) ? $data["tag"] : null) !!}" class="form-control" style="margin-top:2%">
					      			</div>
				      			</div>
				      		</div>
				      		<div class="form-group">				      			
				      			<div class="row"> <br>
									<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2" style="font-weight: bold;color:#367fa9; ">
										Ảnh hiện tại: <br><img src="{!!url('uploads/news/'.$data->images)!!}" alt="" height="40" width="80" style="margin-top:5%;">
									</div>
					      			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3" style="font-weight: bold;color:#367fa9; " >					      				
					      				Hình ảnh mới : <input type="file" name="txtimg" accept="image" id="inputtxtimg" value="{!! old('txtimg',isset($data["images"]) ? $data["images"] : null) !!}" class="form-control" style="margin-top:3%;padding:5px">
					      			</div>					      		
					      			<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2" style="color:#367fa9; font-weight: bold;">
					      				Trạng thái : <select name="slstatus" id="inputSlstatus" class="form-control" required="required" style="margin-top:5%;">
					      					<option value="1" selected>Hiển thị</option>
					      					<option value="0">Tạm ẩn</option>
					      				</select>
					      			</div>
					      			<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5" style="font-weight: bold;color:#367fa9; ">
					      				Nguồn tin : <input type="text" name="txtSource" id="inputtxtSource" value="{!! old('txtSource',isset($data["source"]) ? $data["source"] : null) !!}" class="form-control" style="margin-top:1.5%">
					      			</div>
					      		</div>				      			
				      		</div>
				      		<div class="form-group"><br>
				      			<label for="input-id" style="font-size:22px">Chi tiết bản tin</label>
				      			<div class="row">					      			
					      			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br>
					      				<label for="input-id"  style="font-size:22px">Tóm tắt </label>
					      				<textarea name="txtIntro" id="inputTxttxtIntro" class="form-control" rows="2" required="required">{!! old('txtIntro',isset($data["intro"]) ? $data["intro"] : null) !!}</textarea>
					      				<script type="text/javascript">
											var editor = CKEDITOR.replace('txtIntro',{
												language:'vi',
												filebrowserImageBrowseUrl : '../../plugin/ckfinder/ckfinder.html?Type=Images',
												filebrowserFlashBrowseUrl : '../../plugin/ckfinder/ckfinder.html?Type=Flash',
												filebrowserImageUploadUrl : '../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
												filebrowserFlashUploadUrl : '../../plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
											});
										</script>
					      			</div>
					      			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br><br>
					      				<label for="input-id" style="font-size:22px">Bài viết chi tiết</label>
					      				<textarea name="txtFull" id="inputtxtFull" class="form-control" rows="4" required="required">{!! old('txtFull',isset($data["full"]) ? $data["full"] : null) !!}</textarea>
					      				<script type="text/javascript">
											var editor = CKEDITOR.replace('txtFull',{
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
				      		<input type="submit" name="btnCateAdd" class="btn btn-primary" value="Lưu lại" class="button" style="font-size:17px;"/>
				      	</form>			      	
					</div>
				</div>
			</div>
		</div>	
	</div>	
@endsection

</body>
</html>
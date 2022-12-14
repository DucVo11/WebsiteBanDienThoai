
<!-- Sửa thông tin khách hàng -->

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>N3STORE</title>
</head>
<body>
	
@extends('back-end.layouts.master')
@section('content')

	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="#"><svg class="glyph stroked home"><use xlink:href="#stroked-home"></use></svg></a></li>
				<li class="active">Khách hàng</li>
			</ol>
		</div>
		
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header"><small>Sửa thông tin khách hàng</small></h1>
			</div>
		</div>
		
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">					
					<div class="panel-body">
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
						<form action="" method="POST" role="form">
				      		{{ csrf_field() }}
				      		<div class="form-group">
					      		<label for="input-id"> Chọn Quyền </label>
					      		<select name="sltCate" id="inputSltCate" class="form-control">
					      			<option value="1"> Quản trị </option> 	
					      			<option value="2"> Nhân viên </option> 		
					      		</select>
				      		</div>
				      		<div class="form-group">
				      			<label for="input-id">Tên Khách hàng</label>
				      			<input type="text" name="txtName" id="inputTxtName" class="form-control" value="{!! old('txtCateName', isset($data['name']) ? $data['name'] : null)!!}" required="required">
				      		</div>
				      		<input type="submit" name="btnCateAdd" class="btn btn-primary" value="Thêm danh mục" class="button" />
				      	</form>					      	
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
	
</body>
</html>
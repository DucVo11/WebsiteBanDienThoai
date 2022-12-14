
<!-- Phần thông tin danh mục -->

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

	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="font-size:19px;">			
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="#"><svg class="glyph stroked home"><use xlink:href="#stroked-home"></use></svg></a></li>
				<li class="active">Danh mục</li>
			</ol>
		</div>
	
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
					<div class="panel-heading" style="font-weight: bold;">
						Danh sách loại sản phẩm 
						<a href="{!!url('admin/danhmuc/add')!!}" title=""><button type="button" class="btn btn-primary pull-right" style="font-size:17px;">Thêm mới danh mục</button></a>
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
										<th>ID</th>										
										<th>Tên danh mục</th>										
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<?php listcate ($data, $id_cha=0, $str= ""); ?>  
									</tr>									
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>	
@endsection

</body>
</html>
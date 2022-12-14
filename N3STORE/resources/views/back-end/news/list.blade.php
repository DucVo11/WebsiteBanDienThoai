
<!-- Danh sách phần tin tức -->

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

	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="font-size:18px; ">			
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="{!!(url('/admin/home'))!!}"><svg class="glyph stroked home"><use xlink:href="#stroked-home"></use></svg></a></li>
				<li class="active">Tin tức khuyến mãi</li>
			</ol>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
					<div class="panel-heading" style="font-weight: bold;">
						Danh sách tin tức khuyến mãi
						<a href="{!!url('admin/news/add')!!}" title=""><button type="button" class="btn btn-primary pull-right" style="font-size:17px">Thêm tin mới</button></a>
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
								<thead >
									<tr>										
										<th style="text-align: center;">STT</th>										
										<th style="text-align: center;">Image</th>										
										<th style="text-align: center;">Tiêu đề bản tin</th>										
										<th style="text-align: center;">Tóm tắt</th>										
										<th style="text-align: center;">Trạng thái</th>										
										<th style="text-align: center;">Action</th>
									</tr>
								</thead>
								<tbody>
								@foreach($data as $row)
									<tr style="font-size:17px;">
										<td style="text-align: center;">{!!$row->id!!}</td>
										<td style="text-align: center;"> <img src="{!!url('uploads/news/'.$row->images)!!}" alt="" width="40" height="40"> </td>
										<td>{!!$row->title!!}</td>
										<td><small style="font-size:17px">{!!$row->intro!!}</small></td>
										<td style="width: 120px; text-align: center; color:blue;font-weight: bold;">
											@if($row->status==1)
											Hiển thị
											@else
											Tạm ẩn
											@endif
										</td>
										<td style="width: 125px; text-align: center;font-size:18px">
										    <a href="{!!url('admin/news/edit/'.$row->id)!!}" title="Sửa" ><span class="glyphicon glyphicon-edit" > Sửa</span> </a>
										    <a href="{!!url('admin/news/del/'.$row->id)!!}"  title="Xóa" onclick="return xacnhan('Xóa danh mục này ?')"><span class="glyphicon glyphicon-remove"> Xóa</span> </a>
										</td>
									</tr>	
								@endforeach								
								</tbody>
							</table>
						</div>
						{!!$data->render()!!}
					</div>
				</div>
			</div>
		</div>	
	</div>	
@endsection

</body>
</html>
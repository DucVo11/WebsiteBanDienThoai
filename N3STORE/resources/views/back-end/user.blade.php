
<!-- Thông tin nhân viên -->

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

	<div class="table-responsive">
		<table class="table table-bordered table-hover text-center">
			<thead>
				<tr>
					<th colspan="2">Thông tin nhân viên</th>										
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Họ tên</td>
					<td>{!!Auth::guard('admin')->user()->name !!}</td>
				</tr>
				<tr>
					<td>Địa chỉ E-mail</td>
					<td>{!!Auth::guard('admin')->user()->email !!}</td>
				</tr>
				<tr>
					<td>Quyền hạn</td>
					<td>{!!Auth::guard('admin')->user()->level !!}</td>
				</tr>
				<tr>
					<td>Ngày đăng ký</td>
					<td>{!!Auth::guard('admin')->user()->created_at !!}</td>
				</tr>
			</tbody>
		</table>
	</div>
@endsection
	
</body>
</html>
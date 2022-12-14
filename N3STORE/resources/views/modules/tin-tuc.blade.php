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

<!-- Sắp xếp thứ tự tin khuyến mãi -->

<?php 
    $data = DB::table('news')
    ->limit(3)
    ->orderBy('created_at', 'desc')
    ->get(); 
  ?>

@foreach($data as $row)
<div class="col-lg-12 no-padding">
  <div class="col-lg-4" style="margin-top:3%">
    <a href="#" title=""><img src="{!!url('uploads/news/'.$row->images)!!}" alt="" width="95%" height="99%"> </a>
  </div>

  <div class="col-lg-8">
    <h4 style=" margin-top: 5%;"><a href="{!!url('/tin-tuc/'.$row->id.'-'.$row->slug)!!}" title="{!!$row->title!!}" style="text-decoration: none; font-size:18px; font-weight: bold;">{!!$row->title!!}</a> </h4>
    <br>
    <p> 
      {!!$row->intro!!}
    </p>
    <br>
    <p><strong>Lúc : </strong>{!!$row->created_at!!} Bởi : <strong> {!!$row->author!!}</strong></p>
  </div>
</div>
@endforeach

</body>
</html>
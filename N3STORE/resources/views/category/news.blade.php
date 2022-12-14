
<!-- Trang tin tức -->

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

@extends('layouts.new-master')
@section('content')

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="font-size: 17px;text-align: justify; margin-top:5%">  
    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 "> 
      <div class="row" style="width:900px; margin-left:-20%">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-success">
            <div class="panel-body">
              <div class="row">          
                <div class="col-lg-6">
                  <img src="{!!url('uploads/news/'.$hot1->images)!!}" alt="" height="200" width="100%">
                  <h3 class="title-h3"><a href="{!!url('tin-tuc/'.$hot1->id.'-'.$hot1->slug)!!}" title="" style="font-size:16px; font-weight: bold; text-decoration: none;">{!!$hot1->title!!} </a></h3>
                  <p class="summary-content">
                    {!!$hot1->intro!!}
                  </p>
                </div>

                
              </div>

              <div class="row">
                @foreach($all as $row)
                  <div class="col-lg-12 ">
                    <hr>
                    <div class="col-lg-3">
                      <a href="{!!url('/tin-tuc/'.$row->id.'-'.$row->slug)!!}" title="{!!$row->slug!!}" style="font-size:16px; font-weight: bold;text-decoration: none;"><img src="{!!url('/uploads/news/'.$row->images)!!}" alt="" width="90%" height="99%"> </a>
                    </div>
                    <div class="col-lg-9">
                      <h4><a href="{!!url('/tin-tuc/'.$row->id.'-'.$row->slug)!!}" title="" style="font-size:16px; font-weight: bold;text-decoration: none;">{!!$row->title!!}</a></h4>
                      <p> 
                        {!!$row->intro!!}
                      </p> <br>
                      <p><strong>Lúc :</strong> {!!$row->created_at!!} </p>
                    </div>
                  </div> 
                @endforeach 
              </div>
              {!!$all->render()!!}
            </div>
          </div>   
        </div>
      </div>     
    </div> 


    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">            
      <div class="panel panel-info" style="width:480px"> 
        <ul class="nav nav-tabs" >
          <li class="active"><a href="#1" data-toggle="tab" style="font-size:18px; font-weight: bold; background-color: #337ab7; color:#fff"> Khuyến mãi mới </a></li>
        </ul>    
        <div class="panel-body"> 
          <div class="tab-content ">
            <div class="tab-pane active" id="1">
              <ul class="li-menu-tab">
                <div class="row">
                @foreach($all as $row)
                  <div class="col-lg-12 ">
                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
                      <a href="{!!url('/tin-tuc/'.$row->id.'-'.$row->slug)!!}" title="{!!$row->title!!}"><img src="{!!url('uploads/news/'.$row->images)!!}" alt="{!!$row->images!!}" width="99%" height="99%"> </a><br><br>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 ">
                     <a href="{!!url('/tin-tuc/'.$row->id.'-'.$row->slug)!!}" title="" style="text-decoration: none;">{!!$row->title!!}</a>
                    </div>
                  </div>
                @endforeach                  
                </div>
              </ul>
            </div>
          </div> 
        </div>  
    </div>

    
    <div class="panel panel-info" style="width:480px">
      <div class="panel-heading" style="background-color: #337ab7;">
        <h3 class="panel-title text-center" style="font-size:18px; font-weight: bold; color:#fff">Sự kiện HOT</h3>
      </div>

      <div class="panel-body " >
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/tainghe-1.png')!!}" alt="" width="100%" height="100%" > </a> <br>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/2400-600-1920x480-8.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a> <br>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/oplung-2400-600-1920x480.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/2400-600-1920x480-3.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/Banner-3.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
        <a href="#" title=""><img src="{!!url('public/images/slides/thumbs/Banner_Xiaome-1.png')!!}" alt="" width="100%" height="100%" style="margin-top:31.5px"> </a>
      </div>
    </div> 

  </div> 
</div>
@endsection

</body>
</html>
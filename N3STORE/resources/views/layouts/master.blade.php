<!-- Chỉ các đường dẫn -->

@include('layouts.header')
@include('modules.menu')
	@include('modules.slide')
    <div class="container">     
      	<div class="row">   
			@yield('content')
      	</div>     
    </div> 
@include('layouts.footer')
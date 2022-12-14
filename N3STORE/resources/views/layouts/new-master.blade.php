<!-- Chỉ các đường dẫn -->

@include('layouts.header')
@include('modules.menu')
	<div class="container">     
	  	<div class="row">   
			@yield('content')
	  	</div>     
	</div> 
@include('layouts.footer')
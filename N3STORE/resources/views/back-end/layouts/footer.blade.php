
<!-- Chỉ các đường dẫn của trang admin footer (JS, CSS, Fonts, Bootstrap, Thư viện JS, Hostinger, API) -->

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
	
<script src="{!!url('public/back-end/js/jquery-1.11.1.min.js')!!}"></script>
	<script src="{!!url('public/back-end/js/bootstrap.min.js')!!}"></script>
	<script src="{!!url('public/back-end/js/chart.min.js')!!}"></script>
	<script src="{!!url('public/back-end/js/chart-data.js')!!}"></script>
	<script src="{!!url('public/back-end/js/easypiechart.js')!!}"></script>
	<script src="{!!url('public/back-end/js/easypiechart-data.js')!!}"></script>
	<script src="{!!url('public/back-end/js/bootstrap-datepicker.js')!!}"></script>
	<script type='text/javascript' src='{!!url('public/js/script.js')!!}'></script> 
	<script>
		$('#calendar').datepicker({
		});

		!function ($) {
		    $(document).on("click","ul.nav li.parent > a > span.icon", function(){          
		        $(this).find('em:first').toggleClass("glyphicon-minus");      
		    }); 
		    $(".sidebar span.icon").find('em:first').addClass("glyphicon-plus");
		}(window.jQuery);

		$(window).on('resize', function () {
		  if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
		})
		$(window).on('resize', function () {
		  if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
		})
	</script>	

</body>
</html>

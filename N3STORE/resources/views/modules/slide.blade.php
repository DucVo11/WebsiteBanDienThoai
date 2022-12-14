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

<!-- Danh mục trang khách hàng -->

<div class="bg-sg"></div>
    <section>
        <a href="javascript:;" class="catename" style="text-decoration: none" >
            <p class="logo-category">
                <!-- <img src="./Images-TrangChu/Samsung-120x35.png" width="152" height="32" alt="iPhone" /> -->
                <span>All</span> Products

            </p>
        </a>

        <div class="slide-cate owl-carousel owl-theme">
            <div class="item" data-showpopup="False">
                <a aria-label="slide" data-cate="42" data-place="1735" href="#" onclick="jQuery.ajax({ url: '/bannertracking?bid=50425&r='+ (new Date).getTime(), async: true, cache: false });"></a>
            </div>
        </div>


        <div class="filter-cate">
            <aside class="ft-cate">
                <a href="#" data-id="0" class="active" style="text-decoration: none" >
                                    Tất cả
                                </a>
                <a href="{!!url('')!!}" data-id="199759" class="" style="text-decoration: none" >
                                iPhone 
                            </a>
                <a href="{!!url('')!!}" data-id="199758" class="" style="text-decoration: none" >
                                Sam sung
                            </a>
                <a href="{!!url('')!!}" data-id="199757" class="" style="text-decoration: none" >
                               Oppo
                            </a>
                <a href="{!!url('')!!}" data-id="199756" class="" style="text-decoration: none" >
                            Vivo
                            </a>
                <a href="{!!url('')!!}" data-id="199755" class="" style="text-decoration: none" >
                                Xiaome
                            </a>

                <a href="{!!url('')!!}" data-id="199755" class="" style="text-decoration: none" >
                               Realme
                            </a>
            </aside>
            <aside class="ft-sort">
                <a href="" style="text-decoration: none" >Xếp theo: M&#x1EDB;i ra m&#x1EAF;t</a>
                <ul>
                    <li>
                        <a href="{!!url('mobile')!!}" class="check" data-id="8" style="text-decoration: none">
                            <i class="topzone-stick"></i>
                            <span>Mới ra mắt</span>
                        </a>
                    </li>

                    <li>
                        <a href="{!!url('mobile')!!}" data-id="7" style="text-decoration: none">
                            <i class="topzone-stick"></i>
                            <span>Bán chạy</span>
                        </a>
                    </li>
                    <li>
                        <a href="{!!url('mobile')!!}" data-id="2" style="text-decoration: none">
                            <i class="topzone-stick"></i>
                            <span>Giá thấp đến cao</span>
                        </a>
                    </li>
                    <li>
                        <a href="{!!url('mobile')!!}" data-id="3" style="text-decoration: none">
                            <i class="topzone-stick"></i>
                            <span>Giá cao đến thấp</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
        <div class="container-productbox">
            <div id="preloader">
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

</body>
</html>            
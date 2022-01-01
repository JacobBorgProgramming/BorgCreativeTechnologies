function menu(){
    
    document.getElementById("menubar").innerHTML = '<nav class="uk-navbar-container" uk-navbar="mode: click"><div class="uk-navbar-left"><ul class="uk-navbar-nav">  <li class="uk-active"><a id="logo" href="#"></a></li></ul></div>    <div class="uk-navbar-right">   <ul class="uk-navbar-nav"> <li><a id="login" target="" href=""></a></li> <li><a href="#"> <img src="./icons/menu.svg" alt=""> </a><div class="uk-navbar-dropdown"><ul class="uk-nav uk-navbar-dropdown-nav"><li><a id="link1" target="" href=""></a></li>   <li><a id="link2" target="" href=""></a></li>   <li><a id="link3" target="" href=""></a></li>   <li><a id="link4" target="" href=""></a></li>   <li><a id="link5" target="" href=""></a></li>   <!--<li><a id="link6" target="" href=""></a></li>-->    </ul></div></li>   </ul></div></nav>'

    document.getElementById("logo").innerHTML = '<img src="./img/borg.png" width="100px">'
    document.getElementById("logo").href = './index.html'

    document.getElementById("link1").innerHTML = 'web'
    document.getElementById("link1").href = 'web.html'
    document.getElementById("link1").target = ''

    document.getElementById("link2").innerHTML = 'software'
    document.getElementById("link2").href = 'software.html'
    document.getElementById("link2").target = ''

    document.getElementById("link3").innerHTML = 'business'
    document.getElementById("link3").href = 'business.html'
    document.getElementById("link3").target = ''

    document.getElementById("link4").innerHTML = 'contact us'
    document.getElementById("link4").href = 'https://cloud.borgcreative.com/my/index.php/apps/forms/abSoZqLpcP37kjdo'
    document.getElementById("link4").target = '_blank'

    document.getElementById("link5").innerHTML = 'merch'
    document.getElementById("link5").href = 'http://shop.borgcreative.com/'
    document.getElementById("link5").target = '_blank'
    /*
    document.getElementById("link6").innerHTML = ''
    document.getElementById("link6").href = ''
    document.getElementById("link6").target = ''
    */
    document.getElementById("login").innerHTML = 'login'
    document.getElementById("login").href = 'https://cloud.borgcreative.com/'
    document.getElementById("login").target = '_blank'
}
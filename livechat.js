<style type='text/css'>
.hisella-messages { position: fixed; bottom: 0; right: 0; z-index: 999999; }
.hisella-messages-outer { position: relative; }
#hisella-minimize { background: #3b5998; font-size: 14px; color: #fff; padding: 3px 10px; position: absolute; top: -34px; left: -1px; border: 1px solid #E9EAED; cursor: pointer; }
@media screen and (max-width:768px){ #hisella-facebook { opacity:0; } .hisella-messages { bottom: -300px; right: -135px; } }
</style>
<div id='fb-root'/>
<script>
(function($) { $(document).ready(function(){ $( &#39;#hisella-minimize&#39; ).click( function() { if( $( &#39;#hisella-facebook&#39; ).css( &#39;opacity&#39; ) == 0 ) { $( &#39;#hisella-facebook&#39; ).css( &#39;opacity&#39;, 1 ); $( &#39;.hisella-messages&#39; ).animate( { right: &#39;0&#39; } ).animate( { bottom: &#39;0&#39; } ); } else { $( &#39;.hisella-messages&#39; ).animate( { bottom: &#39;-300px&#39; } ).animate( { right: &#39;-135px&#39; }, 400, function(){ $( &#39;#hisella-facebook&#39; ).css( &#39;opacity&#39;, 0 ) } ); } } ) }); })(jQuery);
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = &quot;//connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.5&quot;;
fjs.parentNode.insertBefore(js, fjs);
}(document, &#39;script&#39;, &#39;facebook-jssdk&#39;));
</script>
<div class='hisella-messages'><div class='hisella-messages-outer'><div id='hisella-minimize'>Facebook chat</div><div class='fb-page' data-adapt-container-width='true' data-height='300' data-hide-cover='false' data-href='https://www.facebook.com/YuriShopHCM' data-show-facepile='true' data-show-posts='false' data-small-header='false' data-tabs='messages' data-width='250' id='hisella-facebook'/></div></div>
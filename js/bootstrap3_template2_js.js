/* --------------------------------------- navbar section --------------------------------------- */
var navbarEl = document.getElementById("navbarId");
window.onscroll=function()
{
    if( window.scrollY >= 120 )
    {
        navbarEl.style.backgroundColor = "rgba(0,0,0,0.7)" ;
    }
    /* navbar لما المسافة الراسية اللي  البكرةاتحركتها لاسفل اقل من 120 بيكسل مش هحط خلفية  لل */
    else
    {
        navbarEl.style.backgroundColor="transparent";
    }
}
/* --------------------------------------- when click on any link , go to section --------------------------------------- */
$(".navbar  li  a").click(function(){
    $("html,body").animate({
        scrollTop: $( "#" + $(this).data("value") ).offset().top
    });
});
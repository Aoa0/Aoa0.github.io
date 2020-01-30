$(function(){
    show_cfps("cfp-2020");
    create_cfp_links();
})

function show_cfps(s){
    var tables = document.getElementsByClassName("cfp");
    for(var i = 0; i < tables.length; i++){
        if(tables[i].classList.contains(s)){
            mode = "table";
        } else{
            mode = "none";
        }
        tables[i].style.display = mode;
    }
}

function create_cfp_links(){
    $('.cfp-link').click(function(){
        var year = this.id.substring(4);
        console.log(year);
        $(".cfp").hide();
        $(".cfp-20" + year).show();
        window.scroll(0, $("#cfp").offset().top);
    });
}
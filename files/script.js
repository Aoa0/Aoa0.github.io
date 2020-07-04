$(function(){
    show_cfps("cfp-2020");
    create_cfp_links();
    create_table()
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

var table_head = ['Name', 'Deadline', 'Notification', 'Page', 'Location', 'Format']

var security_2021 = [
    ['https://www.usenix.org/conference/usenixsecurity21', 'Security 2021', '2021-02-04', '2021-04-19', '13 + ', 'Vancouver', 'USENIX']
]

var others_2021 = [
]

var security_2020 = [
    ['https://www.sigsac.org/ccs/CCS2020/call-for-papers.html', 'CCS 2020', '2020-01-15', '2020-03-30', '12 +', 'Orlando', 'ACM'],
    ['https://www.usenix.org/conference/usenixsecurity20/call-for-papers', 'Security 2020', '2020-02-15', '2020-05-01', '13 + ', 'Boston', 'USENIX'],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-03-05', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://raid2020.org/call-for-papers/', 'RAID 2020', '2020-04-07', '2020-05-27', '11 + 5', 'Donostia', 'USENIX'],
    ['http://esorics2020.sccs.surrey.ac.uk/cfp.html', 'ESORICS 2020', '2020-04-10', '2020-06-15', '16 +', 'Guildford', 'Springer'],
    ['https://www.ndss-symposium.org/ndss-2021/call-for-papers/', 'NDSS 2021', '2020-05-22', '2020-08-07', '13 + ', 'San Diego', 'IEEE'],
    ['https://www.sigsac.org/ccs/CCS2020/call-for-papers.html', 'CCS 2020', '2020-05-04', '2020-07-21', '12 +', 'Orlando', 'ACM'],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-06-04', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.usenix.org/conference/usenixsecurity21', 'Security 2021', '2020-06-11', '2020-08-24', '13 + ', 'Vancouver', 'USENIX'],
    ['https://www.acsac.org/2020/submissions/papers/', 'ACSAC 2020', '2020-06-12', '2020-08-17', '10 + 5', 'Austin', 'ACM'],
    ['https://www.ndss-symposium.org/ndss-2021/call-for-papers/', 'NDSS 2021', '2020-07-31', '2020-10-23', '13 + ', 'San Diego', 'IEEE'],
    ['https://asiaccs2021.comp.polyu.edu.hk/datescalls/call-for-papers/', 'AsiaCCS 2021', '2020-08-21', '2020-10-24', '12 +', 'Hong Kong', 'ACM'],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-09-03', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.usenix.org/conference/usenixsecurity21', 'Security 2021', '2020-10-15', '2021-01-11', '13 + ', 'Vancouver', 'USENIX'],
    ['', 'DSN 2021', '', '', '', '', ''],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-12-03', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://asiaccs2021.comp.polyu.edu.hk/datescalls/call-for-papers/', 'AsiaCCS 2021', '2020-12-11', '2021-02-15', '12 +', 'Hong Kong', 'ACM'],
]

var others_2020 = [
    ['https://www.usenix.org/conference/atc20', 'ATC 2020', '2020-01-15', '2020-04-24', '12 +', 'Boston', 'USENIX'],
    ['https://www.sigmetrics.org/sigmetrics2020', 'SIGMETRICS 2020', '2020-02-03', '2020-03-31', '12 +', 'Boston', 'ACM'],
    ['https://sigmobile.org/mobicom/2020/', 'MobiCom 2020', '2020-03-25', '2020-06-05', '12 +', 'London', 'ACM'],
    ['https://a2i2.github.io/ase2020/', 'ASE 2020', '2020-04-17', '2020-07-03', '10 + 2', 'Melbourne', 'IEEE'],
    ['', 'INFOCOM 2021', '2020-07-31', '2020-11-27', '10', 'Vancouver', 'IEEE'],
    ['https://conf.researchr.org/home/icse-2021', 'ICSE 2021', '2020-08-28', '2020-12-17', '10 + 2', 'Madrid', 'ACM'],
    ['https://www.sigmobile.org/mobihoc/2021/', 'MobiHoc 2021', '', '', '', '', ''],
    ['https://www.sigmobile.org/mobisys/2021/', 'MobiSys 2021', '', '', '', '', ''],
    ['', 'WWW 2021', '', '', '', '', ''],
    ['', 'SANER 2021', '', '', '', '', ''],
    
]


function create_table(){
    var table = document.getElementById('security-2021')
    create_thead(table)
    create_tbody(table, security_2021)

    var table = document.getElementById('others-2021')
    create_thead(table)
    create_tbody(table, others_2021)

    var table = document.getElementById('security-2020')
    create_thead(table)
    create_tbody(table, security_2020)

    var table = document.getElementById('others-2020')
    create_thead(table)
    create_tbody(table, others_2020)

}

function create_thead(table){
    var thead = document.createElement('thead')
    var tr = document.createElement('tr')
    table.appendChild(thead)
    thead.appendChild(tr)
    for(var i = 0; i < table_head.length; i++){
        var th = document.createElement('th')
        tr.appendChild(th)
        th.innerText = table_head[i]
    }
}

function create_tbody(table, body_data){
    if(body_data.length == 0)
        return 
    var tbody = document.createElement('tbody')
    table.appendChild(tbody)
    for(var i = 0; i < body_data.length; i++){
        var tr = document.createElement('tr')
        tbody.appendChild(tr)

        var td = document.createElement('td')
        var link = document.createElement('a')
        link.setAttribute('href', body_data[i][0])
        link.setAttribute('target', "_blank")
        var linkText = document.createTextNode(body_data[i][1])
        link.appendChild(linkText)
        td.appendChild(link)
        tr.appendChild(td)
        
        for(var j = 2; j < body_data[0].length; j++){
            var td = document.createElement('td')
            tr.appendChild(td)
            td.innerText = body_data[i][j]
        }
    }
}


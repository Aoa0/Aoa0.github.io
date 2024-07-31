$(function(){
    show_cfps("cfp-2024");
    create_cfp_links();
    create_table();
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
        // console.log(year);
        $(".cfp").hide();
        $(".cfp-20" + year).show();
        window.scroll(0, $("#cfp").offset().top);
    });
}

var table_head = ['Name', 'Deadline', 'Notification', 'Page', 'Location', 'Format']


var security_2024 = [
    ['https://www.sigsac.org/ccs/CCS2024/call-for/call-for-papers.html', 'CCS 2024', '2024-01-28', '2024-04-03', '12 +', 'Salt Lake City', 'ACM'],
    ['https://www.sigsac.org/ccs/CCS2024/call-for/call-for-papers.html', 'CCS 2024', '2024-04-29', 'N.A.', '12 +', 'Salt Lake City', 'ACM'],
    ['https://www.usenix.org/conference/usenixsecurity24', 'Security 2024', '2024-02-08', '2024-03-18', '13 +', 'Philadelphia', 'USENIX'],
    ['https://sp2025.ieee-security.org/cfpapers.html', 'Oakland 2025', '2024-06-06', '2024-07-22', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://sp2025.ieee-security.org/cfpapers.html', 'Oakland 2025', '2024-11-14', '2025-01-20', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.ndss-symposium.org/ndss2025/submisions/call-for-papers/', 'NDSS 2025', '2024-04-17', '2024-05-21', '13 +', 'San Diego', 'IEEE'],
    ['https://www.ndss-symposium.org/ndss2025/submisions/call-for-papers/', 'NDSS 2025', '2024-07-10', '2024-08-20', '13 +', 'San Diego', 'IEEE'],
    ['https://www.usenix.org/conference/usenixsecurity25', 'Security 2025', '2024-09-04', '2024-10-15', '13 + ', 'Seattle', 'USENIX'],
    ['https://www.usenix.org/conference/usenixsecurity25', 'Security 2025', '2025-01-22', '2025-03-04', '13 + ', 'Seattle', 'USENIX'],
]

var others_2024 = [
    ['https://conf.researchr.org/track/icse-2025/icse-2025-research-track', 'ICSE 2025', '2024-03-15', '2024-06-11', '10 + 2', 'Ottawa', 'ACM'],
    ['https://conf.researchr.org/track/icse-2025/icse-2025-research-track', 'ICSE 2025', '2024-07-26', '2024-10-08', '10 + 2', 'Ottawa', 'ACM'],
    ['https://conf.researchr.org/track/ase-2024/ase-2024-research', 'ASE 2024', '2024-05-31', '2024-07-22', '10 + 2', 'Sacramento', 'ACM'],
    ['https://2024.issta.org/track/issta-2024-papers#Call-for-Papers', 'ISSTA 2024', '2024-04-12', '2024-06-11', '10 + 2', 'Vienna', 'ACM'],
    ['https://conf.researchr.org/track/fse-2025/fse-2025-research-papers', 'FSE 2025', '2024-09-05', '2024-11-22', '18 + 4', 'Norway', 'ACM'],
    ['https://conf.researchr.org/track/issta-2025/issta-2025-papers#Call-for-Papers', 'ISSTA 2025', '2024-10-31', '2024-12-19', '18 + 4', 'Norway', 'ACM'],
    ['https://conferences.sigcomm.org/sigcomm/2024/cfp/', 'SIGCOMM 2024', '2024-01-26', '2024-05-07', '12 +', 'Sydney', 'ACM'],
    ['https://www.usenix.org/conference/nsdi25/call-for-papers', 'NSDI 2025', '2024-04-30', '2024-07-24', '12 +', 'Philadelphia', 'USENIX'],
    ['https://www.usenix.org/conference/nsdi25/call-for-papers', 'NSDI 2025', '2024-09-12', '2024-12-10', '12 +', 'Philadelphia', 'USENIX'],
    ['https://www.sigmobile.org/mobicom/2025/cfp.html', 'MobiCom 2025', '2024-08-29', '2024-10-25', '12 +', 'Hong Kong', 'ACM'],
    ['https://www.sigmobile.org/mobicom/2025/cfp.html', 'MobiCom 2025', '2025-03-11', '2024-05-10', '12 +', 'Hong Kong', 'ACM'],

]

var security_2023 = [
    ['https://www.usenix.org/conference/usenixsecurity23/call-for-papers', 'Security 2023', '2023-02-07', '2023-05-08', '13 + ', 'Anaheim', 'USENIX'],
    ['https://www.esorics2023.org/call/papers/', 'ESORICS 2023', '2023-01-22', '2023-03-26', '16 +', 'Hague', 'Springer'],
    ['https://www.esorics2023.org/call/papers/', 'ESORICS 2023', '2023-05-28', '2023-07-23', '16 +', 'Hague', 'Springer'],
    ['https://www.sigsac.org/ccs/CCS2023/call-for-paper.html', 'CCS 2023', '2023-01-19', 'N.A.', '12 +', 'Copenhagen', 'ACM'],
    ['https://www.sigsac.org/ccs/CCS2023/call-for-paper.html', 'CCS 2023', '2023-05-04', 'N.A.', '12 +', 'Copenhagen', 'ACM'],
    ['https://www.usenix.org/conference/usenixsecurity24', 'Security 2024', '2023-06-06', '2023-07-13', '13 +', 'Philadelphia', 'USENIX'],
    ['https://www.usenix.org/conference/usenixsecurity24', 'Security 2024', '2023-10-17', '2023-11-27', '13 +', 'Philadelphia', 'USENIX'],
    ['https://www.ndss-symposium.org/ndss2024/submissions/call-for-papers/', 'NDSS 2024', '2023-04-19', '2023-05-19', '13 +', 'San Diego', 'IEEE'],
    ['https://www.ndss-symposium.org/ndss2024/submissions/call-for-papers/', 'NDSS 2024', '2023-06-28', '2023-08-04', '13 +', 'San Diego', 'IEEE'],
    ['https://sp2024.ieee-security.org/cfpapers.html', 'Oakland 2024', '2023-04-13', '2023-05-22', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://sp2024.ieee-security.org/cfpapers.html', 'Oakland 2024', '2023-08-03', '2023-09-11', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://sp2024.ieee-security.org/cfpapers.html', 'Oakland 2024', '2023-12-06', '2024-01-22', '13 + 5', 'San Francisco', 'IEEE'],


]

var others_2023 = [
    ['https://conf.researchr.org/track/issta-2023/issta-2023-technical-papers#Call-for-Papers', 'ISSTA 2023', '2023-02-16', '2023-04-11', '10 + 2', 'Seattle', 'ACM'],
    ['https://2023.esec-fse.org/track/fse-2023-research-papers', 'ESEC/FSE 2023', '2023-02-02', '2023-05-04', '10 + 2', 'San Francisco', 'ACM'],
    ['https://2023.splashcon.org/track/splash-2023-oopsla', 'OOPSLA 2023', '2023-04-14', '2023-06-14', '23 +', 'Lisbon', 'ACM'],
    ['https://conf.researchr.org/track/ase-2023/ase-2023-papers', 'ASE 2023', '2023-04-28', '2023-07-17', '10 + 2', 'Luxembourg', 'ACM'],
    ['https://conf.researchr.org/track/icse-2024/icse-2024-research-track#Call-for-papers', 'ICSE 2024', '2023-03-29', '2023-06-02', '10 + 2', 'Lisbon', 'ACM'],
    ['https://conf.researchr.org/track/icse-2024/icse-2024-research-track#Call-for-papers', 'ICSE 2024', '2023-08-01', '2023-10-10', '10 + 2', 'Lisbon', 'ACM'],
    

]

var security_2022 = [
    ['https://www.usenix.org/conference/usenixsecurity22/call-for-papers', 'Security 2022', '2022-02-01', '2022-05-02', '13 +', 'Boston', 'USENIX'],
    ['https://www.sigsac.org/ccs/CCS2022/call-for-papers.html', 'CCS 2022', '2022-01-14', '2022-02-18', '12 +', 'Los Angeles', 'ACM'],
    ['https://www.sigsac.org/ccs/CCS2022/call-for-papers.html', 'CCS 2022', '2022-05-02', '2022-06-19', '12 +', 'Los Angeles', 'ACM'],
    ['https://esorics2022.compute.dtu.dk/cfp.html', 'ESORICS 2022', '2022-01-25', '2022-03-15', '16 +', 'Copenhagen', 'Springer'],
    ['https://esorics2022.compute.dtu.dk/cfp.html', 'ESORICS 2022', '2022-05-15', '2022-06-22', '16 +', 'Copenhagen', 'Springer'],
    ['https://www.ieee-security.org/TC/SP2023/cfpapers.html', 'Oakland 2023', '2022-04-01', '2022-06-07', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.ieee-security.org/TC/SP2023/cfpapers.html', 'Oakland 2023', '2022-08-19', '2022-10-24', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.ieee-security.org/TC/SP2023/cfpapers.html', 'Oakland 2023', '2022-12-02', '2023-02-21', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.ndss-symposium.org/ndss2023-call-for-papers/', 'NDSS 2023', '2022-05-13', '2022-07-22', '13 +', 'San Diego', 'IEEE'],
    ['https://www.ndss-symposium.org/ndss2023-call-for-papers/', 'NDSS 2023', '2022-07-29', '2022-10-21', '13 +', 'San Diego', 'IEEE'],
    ['https://www.usenix.org/conference/usenixsecurity23/call-for-papers', 'Security 2023', '2022-06-07', '2022-09-02', '13 + ', 'Anaheim', 'USENIX'],
    ['https://www.usenix.org/conference/usenixsecurity23/call-for-papers', 'Security 2023', '2022-10-11', '2023-01-27', '13 + ', 'Anaheim', 'USENIX'],
    ['https://www.acsac.org/2022/submissions/papers/', 'ACSAC 2022', '2022-06-29', '2022-09-02', '10 + 5', 'Texas', 'ACM'],
    ['https://raid2022.cs.ucy.ac.cy/call.html', 'RAID 2022', '2022-04-07', '2022-06-09', '12 +', 'Limassol', 'ACM'],
    ['https://dsn2023.dei.uc.pt/important-dates.html', 'DSN 2023', '2022-12-07', '2023-01-28', '11 +', 'Porto', 'IEEE'],
]

var others_2022 = [
    ['https://conf.researchr.org/track/issta-2022/issta-2022-technical-papers#Call-for-Papers', 'ISSTA 2022', '2022-01-28', '2022-03-23', '10 + 2', 'Daejeon', 'ACM'],
    ['https://2022.esec-fse.org/track/fse-2022-research-papers', 'ESEC/FSE 2022', '2022-03-10', '2022-05-09', '10 + 2', 'Singapore', 'ACM'],
    ['https://www.sigmobile.org/mobicom/2022/', 'MobiCom 2022', '2022-03-18', '2022-06-10', '12 +', 'Sydney', 'ACM'],
    ['https://2022.splashcon.org/track/splash-2022-oopsla', 'OOPSLA 2022', '2022-04-15', '2022-06-12', '23 +', 'Auckland', 'ACM'],
    ['https://conf.researchr.org/track/ase-2022/ase-2022-research-papers', 'ASE 2022', '2022-04-29', '2022-07-20', '10 + 2', 'Michigan', 'ACM'],
    ['https://conf.researchr.org/track/icse-2023/icse-2023-technical-track', 'ICSE 2023', '2022-09-01', '2022-11-14', '10 + 2', 'Melbourne', 'ACM'],
]

var security_2021 = [
    ['https://www.usenix.org/conference/usenixsecurity21', 'Security 2021', '2021-02-04', '2021-04-19', '13 + ', 'Vancouver', 'USENIX'],
    ['https://www.ieee-security.org/TC/SP2022/', 'Oakland 2022', '2021-04-15', '2021-07-02', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.ieee-security.org/TC/SP2022/', 'Oakland 2022', '2021-08-19', '2021-11-05', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.ieee-security.org/TC/SP2022/', 'Oakland 2022', '2021-12-02', '2022-03-04', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.sigsac.org/ccs/CCS2021/call-for-papers.html', 'CCS 2021', '2021-01-20', '2021-03-20', '12 +', 'Seoul', 'ACM'],
    ['https://www.sigsac.org/ccs/CCS2021/call-for-papers.html', 'CCS 2021', '2021-05-06', '2021-07-20', '12 +', 'Seoul', 'ACM'],
    ['https://www.usenix.org/conference/usenixsecurity22/call-for-papers', 'Security 2022', '2021-06-08', '2021-09-03', '13 +', 'Boston', 'USENIX'],
    ['https://www.usenix.org/conference/usenixsecurity22/call-for-papers', 'Security 2022', '2021-10-12', '2022-01-20', '13 +', 'Boston', 'USENIX'],
    ['https://esorics2021.athene-center.de/call-for-papers.php', 'ESORICS 2021', '2021-01-12', '2021-03-12', '16 +', 'Darmstadt', 'Springer'],
    ['https://esorics2021.athene-center.de/call-for-papers.php', 'ESORICS 2021', '2021-05-12', '2021-07-12', '16 +', 'Darmstadt', 'Springer'],
    ['https://raid2021.org/call-for-papers/', 'RAID 2021', '2021-04-01', '2021-06-06', '12 +', 'Donostia', 'ACM'],
    ['https://www.ndss-symposium.org/ndss2022/call-for-papers/', 'NDSS 2022', '2021-05-21', '2021-08-06', '13 +', 'San Diego', 'IEEE'],
    ['https://www.ndss-symposium.org/ndss2022/call-for-papers/', 'NDSS 2022', '2021-07-23', '2021-10-15', '13 +', 'San Diego', 'IEEE'],
    ['https://www.acsac.org/2021/submissions/papers/', 'ACSAC 2021', '2021-06-23', '2021-08-19', '10 + 5', 'Texas', 'ACM'],
    ['https://dsn2022.github.io/', 'DSN 2022', '2021-12-03', '2022-03-14', '11 +', 'Maryland', 'IEEE'],
]

var others_2021 = [
    ['https://conf.researchr.org/track/issta-2021/issta-2021-technical-papers', 'ISSTA 2021', '2021-01-29', '2021-03-28', '10 + 2', 'Virtual', 'ACM'],
    ['https://2021.esec-fse.org/track/fse-2021-papers', 'ESEC/FSE 2021', '2021-02-25', '2021-04-30', '10 + 2', 'Athens', 'ACM'],
    ['https://conf.researchr.org/home/icse-2022', 'ICSE 2022', '2021-08-27', '2021-12-03', '10 + 2', 'Pittsburgh', 'ACM'],
    ['https://conf.researchr.org/home/ase-2021', 'ASE 2021', '2021-04-23', '2021-07-07', '10 + 2', 'Melbourne', 'ACM'],
    ['https://www.sigmobile.org/mobicom/2021/', 'MobiCom 2021', '2021-03-19', '2021-06-11', '12 + ', 'Virtual',  'ACM'],
    ['https://conferences.sigcomm.org/sigcomm/2021/', 'SIGCOMM 2021', '2021-01-20', '2021-05-03', '12 + ', 'Virtual', 'ACM'],
    ['https://www.sigmobile.org/mobisys/2021/', 'MobiSys 2021', '2021-01-08', '2021-03-25', '12 + ', 'Virtual', 'ACM'],
]

var security_2020 = [
    ['https://www.sigsac.org/ccs/CCS2020/call-for-papers.html', 'CCS 2020', '2020-01-15', '2020-03-30', '12 +', 'Orlando', 'ACM'],
    ['https://www.usenix.org/conference/usenixsecurity20/call-for-papers', 'Security 2020', '2020-02-15', '2020-05-01', '13 + ', 'Boston', 'USENIX'],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-03-05', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://raid2020.org/call-for-papers/', 'RAID 2020', '2020-04-07', '2020-05-27', '11 + 5', 'Donostia', 'USENIX'],
    ['http://esorics2020.sccs.surrey.ac.uk/cfp.html', 'ESORICS 2020', '2020-04-10', '2020-06-15', '16 +', 'Guildford', 'Springer'],
    ['https://www.ndss-symposium.org/ndss-2021/call-for-papers/', 'NDSS 2021', '2020-05-22', '2020-08-07', '13 +', 'San Diego', 'IEEE'],
    ['https://www.sigsac.org/ccs/CCS2020/call-for-papers.html', 'CCS 2020', '2020-05-04', '2020-07-21', '12 +', 'Orlando', 'ACM'],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-06-04', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.usenix.org/conference/usenixsecurity21', 'Security 2021', '2020-06-11', '2020-08-24', '13 +', 'Vancouver', 'USENIX'],
    ['https://www.acsac.org/2020/submissions/papers/', 'ACSAC 2020', '2020-06-12', '2020-08-17', '10 + 5', 'Austin', 'ACM'],
    ['https://www.ndss-symposium.org/ndss-2021/call-for-papers/', 'NDSS 2021', '2020-07-31', '2020-10-23', '13 +', 'San Diego', 'IEEE'],
    ['https://asiaccs2021.comp.polyu.edu.hk/datescalls/call-for-papers/', 'AsiaCCS 2021', '2020-08-21', '2020-10-24', '12 +', 'Hong Kong', 'ACM'],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-09-03', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://www.usenix.org/conference/usenixsecurity21', 'Security 2021', '2020-10-15', '2021-01-11', '13 +', 'Vancouver', 'USENIX'],
    ['http://dsn2021.ntu.edu.tw/resource/page/id/66.html', 'DSN 2021', '2020-12-11', '2021-02-17', '11 +', 'Taiwan', 'IEEE'],
    ['https://www.ieee-security.org/TC/SP2021/cfpapers.html', 'Oakland 2021', '2020-12-03', 'In 2 months', '13 + 5', 'San Francisco', 'IEEE'],
    ['https://asiaccs2021.comp.polyu.edu.hk/datescalls/call-for-papers/', 'AsiaCCS 2021', '2020-12-11', '2021-02-15', '12 +', 'Hong Kong', 'ACM'],
]

var others_2020 = [
    ['https://www.usenix.org/conference/atc20', 'ATC 2020', '2020-01-15', '2020-04-24', '12 +', 'Boston', 'USENIX'],
    ['https://www.sigmetrics.org/sigmetrics2020', 'SIGMETRICS 2020', '2020-02-03', '2020-03-31', '12 +', 'Boston', 'ACM'],
    ['https://sigmobile.org/mobicom/2020/', 'MobiCom 2020', '2020-03-25', '2020-06-05', '12 +', 'London', 'ACM'],
    ['https://a2i2.github.io/ase2020/', 'ASE 2020', '2020-04-17', '2020-07-03', '10 + 2', 'Melbourne', 'IEEE'],
    ['https://infocom2021.ieee-infocom.org/authors/call-papers-main-conference', 'INFOCOM 2021', '2020-08-15', '2020-12-04', '10 +', 'Vancouver', 'IEEE'],
    ['https://conf.researchr.org/home/icse-2021', 'ICSE 2021', '2020-08-28', '2020-12-17', '10 + 2', 'Madrid', 'ACM'],
    ['http://www2021.thewebconf.org/authors/call-for-papers/', 'WWW 2021', '2020-10-19', '2020-11-25', '12 +', 'Ljubljana', 'ACM'],
    ['http://saner2021.site/', 'SANER 2021', '2020-10-22', '2020-12-14', '12 +', 'Virtual', 'IEEE'],
]

// sort by CFP deadline
function ascend(x, y){
    return x[2].localeCompare(y[2])
}

security_2020.sort(ascend)
others_2020.sort(ascend)
security_2021.sort(ascend)
others_2021.sort(ascend)
security_2022.sort(ascend)
others_2022.sort(ascend)
security_2023.sort(ascend)
others_2023.sort(ascend)
security_2024.sort(ascend)
others_2024.sort(ascend)




function create_table(){
    var table = document.getElementById('security-2024')
    create_thead(table)
    create_tbody(table, security_2024)

    var table = document.getElementById('others-2024')
    create_thead(table)
    create_tbody(table, others_2024)

    var table = document.getElementById('security-2023')
    create_thead(table)
    create_tbody(table, security_2023)

    var table = document.getElementById('others-2023')
    create_thead(table)
    create_tbody(table, others_2023)

    var table = document.getElementById('security-2022')
    create_thead(table)
    create_tbody(table, security_2022)

    var table = document.getElementById('others-2022')
    create_thead(table)
    create_tbody(table, others_2022)

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


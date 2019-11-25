
interface Config{
    url:string;
    type:string;
    dataType:string
    data?:string;
}

function Ajax(config:Config):void{
    let xhr=new XMLHttpRequest();

    xhr.open(config.type,config.url,true)

    xhr.onreadystatechange=function () {
        if(xhr.readyState==4&&xhr.status==200){
            alert(xhr.responseText)
        }
    }

    xhr.send()
}

Ajax({
    url:'http://localhost:8565/HoTai/LoadProductType',
    type:'get',
    dataType:'json',
})

//'http://localhost:8565/HoTai/LoadProductType'

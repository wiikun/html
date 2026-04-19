$(() => {const handler = () => {
    const flag = window.confirm("隠しのブログテンプレートページに行きますか？");
    if(flag){
        window.location = "blog/template.html";
    }
}

$("#ivst").click(handler)}
)
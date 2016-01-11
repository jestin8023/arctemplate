$(function(){
    var bookTpl = '{{each list}}'+
        '<div class="book fl">'+
        '<a href="{{$value.bookUrl}}" target="_blank" class="fl bookimg"><img src="http://mat1.gtimg.com/book/2015images/qcl/img_book{{$index+1}}.png" alt="" /></a>'+
        '<div class="book-detail fr">'+
        '<h3>{{$value.name}}</h3>'+
        '<dl>'+
        '<dt><strong>作者：</strong>{{$value.anthor}}</dt>'+
        '<dd><strong>简介：</strong>{{#$value.intro}}</dd>'+
        '</dl>'+
        '</div>'+
        '<a href="{{#$value.bookUrl}}" target="_blank" class="read"></a>'+
        '</div>'+
        '{{/each}}';

    $.getJSON("js/d.json", function(data){
     //获取传递过来的json数据
      //json类型是对象
        console.log(data);
        var listTpl = template.compile(bookTpl);
        $('#bookList').html(listTpl(data));
    });

	});
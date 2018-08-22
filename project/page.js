function ProjectPage() {

  function exports(selection) {
      
    var datum = selection.datum() || [];
    console.log(datum)
    console.log(datum[0].paras.length)
    
    var len = datum[0].paras.length;

    var parasBox = selection.select('#paras-box')

    // for(i = 0; i < len; i++){
    //     parasBox.append('div')
    //             .attr('class','page-para')
    // }

    datum[0].paras.forEach(function(d){

      console.log(d)
      parasBox.append('div')
              .attr('class','page-para');
            
      pagePara =  parasBox.selectAll('.page-para')
      
      pagePara.append('div')
              .attr('class','page-para-text')
              .append('sub-title')
              .attr('class','sub-title')

      d.subParas.imgs.forEach(function(e){
        console.log(e);
      })
    })






  }

  // exports.importData = function(_) {
  //           if(!arguments.length) return _data;
  //           _data = _;
  //           return this;
  // };

  return exports;
}


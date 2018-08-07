function Projects() {

    var _data;

	function exports(selection) {

        selection.size()===0?d3.select('#projects'):selection
		
		d3.selectAll('.project').remove();
		
		//Create projects
		// console.log(_data);

        projectUpdate = selection
		  .selectAll('.project')
		  .data(_data);

		projectEnter = projectUpdate
		  .enter()
		  .append('div')
		  .attr('class','project')
		  .attr('id', d => d.path);

		projectEnter
		  .append('img')
		  .attr('src', d => d.img)
		  .attr('class','img-project');

		projectEnter
		  .append('h3')
		  .attr('class','projectTitle')
		  .html(d => d.title)

		// project
		//   .append('h3')
		//   .attr('class','mobile-projectTitle')
		//   .html(d => d.title)

		projectEnter
		  .append('div')
		  .attr('id','tags')
		    .selectAll('.tag')
		    .data(d => d.tags)
		    .enter()
		    .append('div')
		    .attr('class','tag')
		    .html(d => d)

		projectEnter
		  .append('div')
		  .attr('id','tools')
		    .selectAll('.tag')
		    .data(d => d.tools)
		    .enter()
		    .append('div')
		    .attr('class','tool')
		    .html(d => d)

	}

	exports.importData = function(_) {
            if(!arguments.length) return _data;
            _data = _;
            return this;
	};


	return exports;
}
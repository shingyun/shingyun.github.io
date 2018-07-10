const projectData = [
  { 
  	title: 'Poverty Levels and Floods',
  	img: 'media/project-images/poverty-levels-floods.png',
    tags: ['Physical','Mapping'],
    tools: ['QGIS','Illustrator','Laser cut']
  },{
  	title: 'Network of Politicians and Banks',
  	img: 'media/project-images/pep-network.png',
    tags: ['Static'],
    tools: ['Python','Gephi','Illustrator'] 	
  },{
  	title: 'World Cup Watchers',
  	img: 'media/project-images/wc-watchers.png',
  	tags: ['Static'],
    tools: ['D3','Illustrator']
  },{
  	title: 'Income Disparity',
  	img: 'media/project-images/income-disparity.png',
    tags: ['Interactive'],
    tools: ['D3']
  },{ 
  	title: 'Exonerations of Murder',
  	img: 'media/project-images/exoneration-murder.png',
    tags: ['Interactive'],
    tools: ['D3']
  },{
  	title: 'After The Floods',
  	img: 'media/project-images/afterthefloods.png',
  	tags: ['Interactive'],
    tools: ['D3','OpenRefine','Tableau']
  },{
  	title: 'Exonerations in The US',
  	img: 'media/project-images/exoneration.png',
  	tags: ['Static','Statistics'],
    tools: ['D3','R','Illustrator']
  },{
  	title: 'Journalist Deaths',
  	img: 'media/project-images/journalist-deaths.png',
  	tags: ['Interactive'],
    tools: ['D3','R']
  },{
  	title: 'Fake News Sentiment',
  	img: 'media/project-images/fake-news.png',
  	tags: ['Interactive'],
    tools: ['D3']
  },{
  	title: 'Crimes in Washington, DC',
  	img: 'media/project-images/crime-dc.png',
  	tags: ['Inveractive','Mapping'],
    tools: ['D3','Leaflet','R']
  },{
  	title: 'Evictions in East Boston',
  	img: 'media/project-images/east-boston-eviction.png',
   	tags: ['Inveractive','Mapping'],
    tools: ['D3','R','ScrollMagic'] 	
  }

]

// Creat a list of projects for the front page
const vm_project = new Vue ({
	el: '#app-project',
	data: {
	    projects: projectData
	}
})

//Routs



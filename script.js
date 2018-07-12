const filterData = 
  ['All', 'Physical', 'Interactive', 'Mapping','Static', 'Story']

const projectData = [
  { 
  	title: 'Poverty Levels and Floods',
  	img: 'media/project-images/poverty-levels-floods.png',
    tags: ['Physical','Mapping'],
    tools: ['QGIS','Illustrator','Laser cut'],
    date: 'May 2018',
    links: [''],
    path: 'PovertyLevelsAndFloods',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'Network of Politicians and Banks',
  	img: 'media/project-images/pep-network.png',
    tags: ['Static','Thomson Reuters'],
    tools: ['Python','Gephi','Illustrator'],
    date: 'Jul. 2018',
    links: [''],
    path: 'NetworkOfPep',
    projectImg: [''],
    intro: '' 	
  },{
  	title: 'World Cup Watchers',
  	img: 'media/project-images/wc-watchers.png',
  	tags: ['Static','Thomson Reuters'],
    tools: ['D3','Illustrator'],
    date: 'Jun. 2018',
    links: [''],
    path: 'WCWatchers',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'Income Disparity',
  	img: 'media/project-images/income-disparity.png',
    tags: ['Interactive'],
    tools: ['D3'],
    date: 'Jul. 2018',
    links: [''],
    path: 'IncomeDisparity',
    projectImg: [''],
    intro: '' 
  },{ 
  	title: 'Exonerations of Murder',
  	img: 'media/project-images/exoneration-murder.png',
    tags: ['Interactive'],
    tools: ['D3'],
    date: 'Nov. 2017',
    links: [''],
    path: 'ExonerationsOfMurder',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'After The Floods',
  	img: 'media/project-images/afterthefloods.png',
  	tags: ['Interactive','Graphicacy'],
    tools: ['D3','OpenRefine','Tableau'],
    date: 'Dec. 2017',
    links: [''],
    path: 'AfterTheFloods',
    projectImg: [''],
    intro: '' 
  },{
  	title: '3D Poverty Map of Houston',
  	img: 'media/project-images/poverty-levels.png',
  	tags: ['Physical','Mapping'],
  	tools: ['QGIS','Illustrator','Laser cut'],
    date: 'Mar. 2018',
    links: [''],
    path: '3DPovertyMapOfHouston',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'Exonerations in The US',
  	img: 'media/project-images/exoneration.png',
  	tags: ['Static','Statistics'],
    tools: ['D3','R','Illustrator'],
    date: 'Apr. 2017',
    links: [''],
    path: 'ExonerationsInTheUS',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'Journalist Deaths',
  	img: 'media/project-images/journalist-deaths.png',
  	tags: ['Interactive'],
    tools: ['D3','R'],
    date: 'Apr. 2017',
    links: [''],
    path: 'JournalistDeaths',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'Fake News Sentiment',
  	img: 'media/project-images/fake-news.png',
  	tags: ['Interactive'],
    tools: ['D3'],
    date: 'Apr. 2017',
    links: [''],
    path: 'FakeNewsSentiment',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'Evictions in East Boston',
  	img: 'media/project-images/east-boston-eviction.png',
   	tags: ['Interactive','Mapping','Story'],
    tools: ['D3','R','ScrollMagic'],
    date: 'Feb. 2018',
    links: [''],
    path: 'EvictionsInEastBoston',
    projectImg: [''],
    intro: '' 
  },{
  	title: 'Crimes in Washington, DC',
  	img: 'media/project-images/crime-dc.png',
  	tags: ['Interactive','Mapping','Story'],
    tools: ['D3','Leaflet','R'],
    date: 'Aug. 2017',
    links: [''],
    path: 'CrimesInDC',
    projectImg: [''],
    intro: '' 
  }
]


// Creat a list of projects for the front page
const vm_project = new Vue ({
	el: '#section-work',
	data: {
	    projects: projectData,
	    filters: filterData
	}
})

// Filters
$('#All').addClass('filter-selected')
         .click(function(){
         	$('.filter-selected').removeClass('filter-selected')
	        $('#All').addClass('filter-selected')
	        vm_project.projects = projectData 
         });

$('#Physical').click(function(){
	$('.filter-selected').removeClass('filter-selected')
	$('#Physical').addClass('filter-selected')
	vm_project.projects = projectData 
    filtered = vm_project.projects.filter(d => d.tags.includes('Physical'))
    vm_project.projects = filtered;
})

$('#Interactive').click(function(){
	$('.filter-selected').removeClass('filter-selected')
	$('#Interactive').addClass('filter-selected')
	vm_project.projects = projectData 
    filtered = vm_project.projects.filter(d => d.tags.includes('Interactive'))
    vm_project.projects = filtered;
})

$('#Mapping').click(function(){
	$('.filter-selected').removeClass('filter-selected')
	$('#Mapping').addClass('filter-selected')
	vm_project.projects = projectData 
    filtered = vm_project.projects.filter(d => d.tags.includes('Mapping'))
    vm_project.projects = filtered;
})

$('#Static').click(function(){
	$('.filter-selected').removeClass('filter-selected')
	$('#Static').addClass('filter-selected')
	vm_project.projects = projectData 
    filtered = vm_project.projects.filter(d => d.tags.includes('Static'))
    vm_project.projects = filtered;
})

$('#Story').click(function(){
	$('.filter-selected').removeClass('filter-selected')
	$('#Story').addClass('filter-selected')
	vm_project.projects = projectData 
    filtered = vm_project.projects.filter(d => d.tags.includes('Story'))
    vm_project.projects = filtered;
})



//Routs
Vue.use(VueRouter);

const projectView = {
	template: '<div>this is {{$route.title}}</div>'
}

// projectRoutes = [
//   {path: '/', name: 'PovertyLevelsAndFloods', component: projectView},
//   {path: '/', name: 'NetworkOfPep', component: projectView},
//   {path: '/', name: 'WCWatchers', component: projectView},
//   {path: '/', name: 'IncomeDisparity', component: projectView},
//   {path: '/', name: 'ExonerationsOfMurder', component: projectView},
//   {path: '/', name: 'AfterTheFloods', component: projectView},
//   {path: '/', name: '3DPovertyMapOfHouston', component: projectView},
//   {path: '/', name: 'ExonerationsInTheUS', component: projectView},
//   {path: '/', name: 'JournalistDeaths', component: projectView},
//   {path: '/', name: 'FakeNewsSentiment', component: projectView},
//   {path: '/', name: 'EvictionsInEastBoston', component: projectView},
//   {path: '/', name: 'CrimesInDC', component: projectView}
// ]

// projectRoutes = [
//   {path: '/PovertyLevelsAndFloods', component: projectView},
//   {path: '/NetworkOfPep', component: projectView},
//   {path: '/WCWatchers', component: projectView},
//   {path: '/IncomeDisparity', component: projectView},
//   {path: '/ExonerationsOfMurder', component: projectView},
//   {path: '/AfterTheFloods', component: projectView},
//   {path: '/3DPovertyMapOfHouston', component: projectView},
//   {path: '/ExonerationsInTheUS', component: projectView},
//   {path: '/JournalistDeaths', component: projectView},
//   {path: '/FakeNewsSentiment', component: projectView},
//   {path: '/EvictionsInEastBoston', component: projectView},
//   {path: '/CrimesInDC', component: projectView}
// ]


// const router = new VueRouter ({
// 	mode: 'history',
// 	routes: projectRoutes
// })

// const route_project = new Vue({
// 	router,
// 	base: '',
// 	el: '#app'
// })


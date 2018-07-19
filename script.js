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


//Template
const PortfolioView = Vue.component('portfolioView', {    
  template: '#portfolio',
  data: function(){
    return {
      projects: projectData,
      filters: filterData    
    }
  },
  methods: {
    filtering: function(f){
        if(f == 'All'){
          this.projects = projectData 
        } else {
          this.projects = projectData 
          filtered = this.projects.filter(d => d.tags.includes(f))
          this.projects = filtered;          
        }
    }
  }
})

const projectView = Vue.component('projectView', {
  template: '#project',
  data: function(){
    return {
      projects: projectData,
      filters: filterData   
    }
  }
})

projectRoutes = [
  {path: '/', component: PortfolioView},
  {path: '/:filter', component: PortfolioView},
  {path: '/:path', component: projectView}
]


//Routs
Vue.use(VueRouter);

const router = new VueRouter ({
	// mode: 'history',
	routes: projectRoutes
})

const vm_project = new Vue({
	router,
	el: '#app'
})







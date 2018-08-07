const filterData = 
  ['All', 'Physical', 'Interactive', 'Mapping','Static', 'Story']

const projectData = [
  { 
  	title: 'Poverty Levels and Floods',
  	img: 'media/project-images/poverty-levels-floods.png',
    tags: ['Physical','Mapping'],
    tools: ['QGIS','Illustrator','Laser cut'],
    date: 'May 2018',
    link: '',
    path: 'PovertyLevelsAndFloods',
    mainImg: 'media/main-images/main-poverty-and-flood.jpg',
    intro: '', 
    paras: [
      { img: '',
        des: ''
      }
    ] 
  },{
  	title: 'Network of Politicians and Banks',
  	img: 'media/project-images/pep-network.png',
    tags: ['Static','Thomson Reuters'],
    tools: ['Python','Gephi','Illustrator'],
    date: 'Jul. 2018',
    link: '',
    path: 'NetworkOfPep',
    mainImg: '',
    intro: '',
    paras: [''] 	
  },{
  	title: 'World Cup Watchers',
  	img: 'media/project-images/wc-watchers.png',
  	tags: ['Static','Thomson Reuters'],
    tools: ['D3','Illustrator'],
    date: 'Jun. 2018',
    link: 'https://blogs.thomsonreuters.com/answerson/where-are-people-watching-the-world-cup/',
    path: 'WCWatchers',
    mainImg: 'media/main-images/main-wc-watcher.jpg',
    intro: '',
    paras: ['']  
  },{
  	title: 'Income Disparity',
  	img: 'media/project-images/income-disparity.png',
    tags: ['Interactive'],
    tools: ['D3'],
    date: 'Jul. 2018',
    link: 'https://shingyun.github.io/income-disparity/',
    path: 'IncomeDisparity',
    mainImg: 'media/main-images/main-income-disparity.png',
    intro: '',
    paras: ['']  
  },{ 
  	title: 'Exonerations of Murder',
  	img: 'media/project-images/exoneration-murder.png',
    tags: ['Interactive'],
    tools: ['D3'],
    date: 'Nov. 2017',
    link: 'https://shingyun.github.io/exoneration-timeline/',
    path: 'ExonerationsOfMurder',
    mainImg: 'media/main-images/main-exoneration-murder.png',
    intro: "This project focuses on the exonerations of murder, which is the main accused crime in the exoneration data, and visualizes how the wrongful convictions impacted these exonerees' lives. The impact of the wrongful conviction is demonstrated via the animating timeline, pointing out what year and age the exoneree was at.",
    paras: ['']  
  },{
  	title: 'After The Floods',
  	img: 'media/project-images/afterthefloods.png',
  	tags: ['Interactive','Graphicacy'],
    tools: ['D3','OpenRefine','Tableau'],
    date: 'Dec. 2017',
    link: 'https://shingyun.github.io/afterthefloods/',
    path: 'AfterTheFloods',
    mainImg: 'media/main-images/main-after-the-floods.png',
    intro: 'While I was interning at Graphicacy in Fall 2017, I analyzes 4,500 floods from 1984 to Sep. 2017 around the world, and showed relation between causes and impacts (e.g. deaths, people displaced) of floods historically and greographically.',
    paras: ['']  
  },{
  	title: '3D Poverty Map of Houston',
  	img: 'media/project-images/poverty-levels.png',
  	tags: ['Physical','Mapping'],
  	tools: ['QGIS','Illustrator','Laser cut'],
    date: 'Mar. 2018',
    link: '',
    path: '3DPovertyMapOfHouston',
    mainImg: 'media/main-images/main-3D-poverty-houston.JPG',
    intro: 'This 3D portraits the elevation map of poverty in central part of Houston. The lower the area, the more poor people live there. The highest areas have a percentage of 0-10% population live under poverty line, the lowest areas have over 40% of population in poverty. The "holes" and the "hills" act as a metaphor of social hierarchy. Poor people — who are at a lower level in the society — are struggling in the holes, while the rich enjoy their life on the hills.',
    paras: [''] 
  },{
  	title: 'Exonerations in The US',
  	img: 'media/project-images/exoneration.png',
  	tags: ['Static','Statistics'],
    tools: ['D3','R','Illustrator'],
    date: 'Apr. 2017',
    link: '',
    path: 'ExonerationsInTheUS',
    mainImg: 'media/main-images/main-exonerations.png',
    intro: 'This project explored the data set on exonerations in the US. The data set is provided by The National Registry of Exonerations. This project has examined the data from different aspects through descriptive statistic methods and finally focused on the time that exonerees have experienced from the accused crimes occurred to wrongful convictions and to exonerations. This project also explored the answers of the following questions by visualizations: Who are these exonerees? Where were they exonerated? How long have them been waiting for exonerations? Does DNA as the new evidence help? How the types of accused crimes influence exonerations?',
    paras: ['']  
  },{
  	title: 'Journalist Deaths',
  	img: 'media/project-images/journalist-deaths.png',
  	tags: ['Interactive'],
    tools: ['D3','R'],
    date: 'Apr. 2017',
    link: 'https://shingyun.github.io/JournalistsKilled/',
    path: 'JournalistDeaths',
    mainImg: 'media/main-images/main-journalist-deaths.png',
    intro: 'This project visualized each journalist death through years, countries they were killed and causes, with the connection to historical events. The data set is from Committee to Protect Journalists(CPJ). There were more than 1700 journalists and media workers killed over the world from 1992 to present, this project analyzed 1232 deaths which are motive confirmed.',
    paras: ['']  
  },{
  	title: 'Fake News Sentiment',
  	img: 'media/project-images/fake-news.png',
  	tags: ['Interactive'],
    tools: ['D3'],
    date: 'Apr. 2017',
    link: 'https://shingyun.github.io/SentimentViz/',
    path: 'FakeNewsSentiment',
    mainImg: 'media/main-images/main-fake-news.png',
    intro: 'Americannews.com is identified as a fake news or satire website with over 5 millions followers on Facebook. The project analyzes sentiment of articles mentioned "Trump" and "Clinton" from the website using Python. The sentiment scores range from 1 (positive) to -1 (negative). The results of the site show most of the articles are scored between 0.5 ~ -0.5, which is not as dramatic as previous assumption of the project.',
    paras: ['']  
  },{
  	title: 'Evictions in East Boston',
  	img: 'media/project-images/east-boston-eviction.png',
   	tags: ['Interactive','Mapping','Story'],
    tools: ['D3','R','ScrollMagic'],
    date: 'Feb. 2018',
    link: 'https://web.northeastern.edu/visualizingeastie/court-documents-suggest-who-gets-evicted-and-why/',
    path: 'EvictionsInEastBoston',
    mainImg: 'media/main-images/main-east-boston-evictions.png',
    intro: 'This project explores who are evicted and reasons in East Boston. Since there is no data on the background of people who face eviction, this project plots every eviction on a map and compare with income and race data. The visual outcome shows that low-income areas and Latino communities have more evictions.',
    paras: ['']  
  },{
  	title: 'Crimes in Washington, DC',
  	img: 'media/project-images/crime-dc.png',
  	tags: ['Interactive','Mapping','Story'],
    tools: ['D3','Leaflet','R'],
    date: 'Aug. 2017',
    link: 'https://shingyun.github.io/dc_crime_2016/',
    path: 'CrimesInDC',
    mainImg: 'media/main-images/main-crime-dc.png',
    intro: 'This personal project explored the data set on crime in Washington DC of 2016, mapping out the crime-prone areas and time. The data set is from Washington DC government.',
    paras: ['']  
  }
]


//Create a list of project 
const vm_project = new Vue({
  el: '#app',
  data: {
    projects: projectData,
    filters: filterData   
  },
  methods: {
    filtering: function(f){
        if(f == 'All'){
          $('.filter-selected').removeClass('filter-selected')
          $('#All').addClass('filter-selected')
          this.projects = projectData     

        } else {
          
          $('.filter-selected').removeClass('filter-selected')
          $('#'+f).addClass('filter-selected')
          this.projects = projectData 
          filtered = this.projects.filter(d => d.tags.includes(f))
          this.projects = filtered;        
        
        }
        
        $('#project-box').css('transform','translateX(0)')

    },
    showing: function(pro, pros){
        $('#project-focus').show(); 
        console.log(pros)
        index = pros.findIndex(d => d.path == pro.path)
        console.log('index',index)
        x = (index)*100
        console.log('x',x)
        $('#project-box').css('transform','translateX(-'+ x +'%)')
        $('#project-focus').css('visibility','visible');
        $('#section-info').css('opacity',0.3);
        $('#section-work').css('opacity',0.3);

    },
    closeProject: function(){
        $('#project-focus').hide(); 
        $('#project-focus').css('visibility','hidden');
        $('#section-info').css('opacity',1);
        $('#section-work').css('opacity',1);
    },
    nextProject: function(pro, pros){
        $('#project-box').css('transform','translate(100%,0)');
    }
  }
})




$('body').click(function(){
   $('#project-focus').hide(); 
   $('#section-info').css('opacity',1);
   $('#section-work').css('opacity',1);
})
$('#projects').click(e => e.stopPropagation())
$('#project-focus').click(e => e.stopPropagation())
$('#section-filter').click(e => e.stopPropagation())

// Fixed the menu on scroll
var menu = $('#section-filter');
var menu_top = menu.position().top;
$(window).scroll(function(e){
  if($(window).scrollTop() > menu_top){
    menu.addClass('filter-sticky')
  } else {
    menu.removeClass('filter-sticky')
  }
})

// Change the position of project-focus as screen size changes

$(window).ready(function(){
  $('#All').addClass('filter-selected')
  var menu_h = menu.outerHeight(true);
  $('#project-focus').css('top',menu_h+0.1);
  console.log('ready screen width', $(window).width())
})

$(window).resize(function(){
  var menu_resize = menu.outerHeight(true);
  $('#project-focus').css('top',menu_resize+0.1);
  console.log('screen width', $(window).width())
})










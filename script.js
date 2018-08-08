const filterData = 
  ['All', 'Physical', 'Interactive', 'Mapping','Static', 'Story']

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
        $('#project-focus-box').show(); 
        console.log(pros)
        index = pros.findIndex(d => d.path == pro.path)
        console.log('index',index)
        x = (index)*100
        console.log('x',x)
        $('#project-box').css('transform','translateX(-'+ x +'%)')
        $('#project-focus-box')
        .css('visibility','visible')
        .scrollTop(0);
        $('#section-info').css('opacity',0.3);
        $('#section-work').css('opacity',0.3);

    },
    closeProject: function(){
        $('#project-focus-box').hide(); 
        $('#project-focus-box').css('visibility','hidden');
        $('#section-info').css('opacity',1);
        $('#section-work').css('opacity',1);
    },
    nextProject: function(pro, pros){
        $('#project-box').css('transform','translate(100%,0)');
    }
  }
})




$('body').click(function(){
   $('#project-focus-box').hide(); 
   $('#section-info').css('opacity',1);
   $('#section-work').css('opacity',1);
})
$('#projects').click(e => e.stopPropagation())
$('#project-focus-box').click(e => e.stopPropagation())
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
  $('#project-focus-box').css('top',menu_h+0.1);
  console.log('ready screen width', $(window).width())
})

$(window).resize(function(){
  var menu_resize = menu.outerHeight(true);
  $('#project-focus-box').css('top',menu_resize+0.1);
  console.log('screen width', $(window).width())
})










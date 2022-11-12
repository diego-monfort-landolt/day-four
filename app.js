
const menu = document.querySelectorAll('.link')
let pagina_actual = '#page_home'
let link_actual = '#home'
for(const link of menu){
    link.addEventListener('click',function(e){
        //salida
        document.querySelector(pagina_actual).style.animation=`page_salida 0.5s ease forwards 0s`
        document.querySelector(link_actual).style.color=`white`
        //enter
    document.querySelector('#page_'+e.target.id).style.animation=`page_entrada 0.5s ease forwards 0s`
    document.querySelector('#'+e.target.id).style.color=`red`
    pagina_actual='#page_'+e.target.id
    link_actual = '#'+e.target.id
       
    })

    
}
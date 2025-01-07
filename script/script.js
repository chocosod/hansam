 document.addEventListener('DOMContentLoaded',function(event){
    
     
     
    
window.addEventListener('scroll', function(){
    console.log(window.scrollY);

    //main
    let main_1 = document.getElementById('main_1');
    let win_main_y = this.window.scrollY;
    if(200 <= win_main_y)
    {
        main_1.classList.add('active');
    }else{
        main_1.classList.remove('active');
    }

    //horizon
    // let horizon_wrap = document.querySelector('horizon_wrap');
    // let win_horizon_y = this.window.scrollY;
    // if(1100<=win_horizon_y)
    // {
    //     horizon.classList.add('active');
    // }else{
    //     horizon.classList.remove('active');
    // }
});

//hansam 섹션
const hansams = document.querySelectorAll('#hansam .txt_wrap p')
gsap.utils.toArray(hansams).forEach((hansam, i)=>{
    hansam.style.opacity = 0;
    ScrollTrigger.create({
        trigger:hansams,
        start:'top 75%',
        markers: true,
        once: true,
        onEnter:() =>{
            const delay =[0.2, 1.2, 0.4, 1.4, 0.6, 0.8, 1.6, 1.0]
            gsap.fromTo(hansam, 
                {
                    autoAlpha: 0,
                    duration: 1,   // 애니메이션 지속 시간
                    delay:delay[i],
                    ease: "power2.out",  // 이징 함수
                    
                },
                {
                    autoAlpha: 1,
                    duration: 1,   // 애니메이션 지속 시간
                    delay:delay[i],
                    ease: "power2.out",  // 이징 함수                    
                }
            );
                       
        }


    });
});


// #purpose 섹션
const items = document.querySelectorAll('#purpose .pannel');
gsap.utils.toArray(items).forEach((item, i) => {
    ScrollTrigger.create({
        trigger: item,
        start : "top top",
        pin: true,
        pinSpacing: false,
        
        // onEnter: () => {
        //     gsap.to(item, {
        //         scale: 0.95,   // 크기 0.95배로 확대
        //         duration: 1,   // 애니메이션 지속 시간
        //         ease: "power2.out",  // 이징 함수
               
                
        //     });
        // },
        // onLeave: () => {
        //     gsap.to(item, {
        //         scale: 1,     // 원래 크기로 돌아감
        //         duration: 1,   // 애니메이션 지속 시간
        //         ease: "power2.in", // 이징 함수
                
        //     });
        // }
    })
});

//#borm 섹션
const borm = document.getElementById('borm');
ScrollTrigger.create({
    trigger: borm,
    //markers:true,
    start: "top 50%",
    onEnter: () => borm.classList.add('active'),
    onLeave: () => borm.classList.remove('active'),
    onEnterBack: () => borm.classList.add('active'),
    onLeaveBack: () => borm.classList.remove('active'),
});

//#pride 섹션
const prides = document.querySelectorAll('#pride .box');
gsap.utils.toArray(prides).forEach((pride, i)=>{
    pride.style.opacity = '0'
    ScrollTrigger.create({
        trigger:pride,
       // markers:true,
        start:'top 65%',
        once: true,
        onEnter:() =>{
            const move = [300, 200, 100];
            const delay =[0.1,0.2,0.3]
            gsap.fromTo(pride, 
                {
                    autoAlpha: 0,
                    x: move[i]+'%',   // 이동 거리                 
                },
                {
                    autoAlpha: 1,
                    x: 0,   //  이동 거리
                    duration: 1.5,   // 애니메이션 지속 시간
                    delay:delay[i],
                    ease: "bounce.out(0.1,5)" // 튕김의 강도(amplitude: 2), 빠르게 튕기는 정도(period: 0.5)              
                }
            );
                       
        }
    });
});

//@inquery섹션
const inquerys = document.querySelectorAll('#inquery .item');

gsap.utils.toArray(inquerys).forEach((inquery, i) =>{
    const move =[-500, 500]
    gsap.set(inquery,{x:move[i]});
    ScrollTrigger.create({
        trigger:inquery,
        start:'top 75%',
        //onece: true,
        markers: true,
        onEnter:()=>{
            gsap.to(inquery,
                {
                    x: 0,
                    duration:0.8,
                }
        );
        }

    });
});


// const animationWrap = document.querySelector('.animation-wrap');

// gsap.to(animationWrap, {
//     x: -((animationWrap.scrollWidth - window.innerWidth)  ), // 스크롤 시 이동할 거리
//     scrollTrigger: {
//         trigger: ".scroll-horizontal",
//         start: "top top", // 시작 위치
//         end: () => "+=" + animationWrap.scrollWidth, // 끝 위치
//         pin: true, // 스크롤 시 고정
//         scrub: 1 // 부드러운 스크롤
//     }
// });
    // gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.matchMedia({
    //     '(min-width: 1024px)' :function(){
    //         let list = gsap.utils.toArray('#horizon ul li');
    //         let scrollTween = gsap.to(list,{
    //             xPercent : -100 * (list.length - 2), // 원리 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
    //             ease:'none',
    //             scrollTrigger:{
    //                 trigger:'#horizon',
    //                 pin: true,
    //                 scrub: 1,
    //                 start: 'center center',
    //                 end: '300%',    //뷰포트 높이의 300%이며 숫자가 높아질수록 느려진다.
    //                 markers:true
    //             }
    //         })
    //     }
    // });//end:ScrollTween

    // let sections = gsap.utils.toArray(".horizon_system");

    // gsap.to(sections, {
    //     xPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: "#horizon",
    //         pin: true,
    //         scrub: 1,
    //         snap: 1 / (sections.length - 1),
    //         end: "+=7000",
    //         // end: document.querySelector("#parallax__cont").offsetWidth,
    //     }
    // });

   

    // let wrap = gsap.utils.toArray('.horizon_wrap');
    // console.log(wrap.length)
    // let scrollTween = gsap.to(wrap,{
    //     xPercent: -100 * (wrap.length - 0.5),
    //     ease:'none',
    //     scrollTrigger:{
    //         trigger: '.horizon_wrap',
    //         pin:true,
    //         scrub:1,
    //         start:'center center',
    //         end: 'bottom top',
    //         markers:true
    //     }
    // });


    const horizontal = document.querySelector("#horizon");
    const sections = gsap.utils.toArray("#horizon ul li");
    
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: horizontal,
            start: "top top",
            end: () =>  "+=" + (horizontal.offsetWidth - innerWidth)*'800%',
            pin: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (sections.length - 1),
                inertia: false,
                duration: {min: 0.1, max: 0.1}
            },
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });







   
    const swiper = new Swiper('.swiper', {
    
        effect:'fade',
        spaceBetween: 140,
        autoplay:{
            delay:5000,
        },
       loop:true
       
      });


});









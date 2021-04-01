import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from "@angular/animations";


export const movAni =animation([
    animate('.5s ease-in' , keyframes([
        style({offset:0 , borderTop:'1px solid #d7bb4a'  , borderBottom : 'none' , borderRight: 'none' , borderLeft:'none'   }) ,
        style({offset:.3 , borderTop:'none'  , borderBottom : 'none' , borderRight: '1px solid #d7bb4a' , borderLeft:'none'   }),
        style({offset:.6 , borderTop:'none'  , borderBottom : '1px solid #d7bb4a' , borderRight: 'none' , borderLeft:'none'   }),
        style({offset:.9 , borderTop:'none'  , borderBottom : 'none' , borderRight: 'none' , borderLeft:'1px solid #d7bb4a'   })
    ])) 
]) ; 



export const BorderMove=trigger('BordMove' ,
 [ 

    state('hovered' , style({})) , 
    state('unhovered' , style({})),

    transition('unhovered=>hovered' , [ useAnimation(movAni)]) 

]
)  ; 
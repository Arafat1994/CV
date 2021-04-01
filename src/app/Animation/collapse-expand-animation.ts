import { animate, animation, state, style, transition, trigger, useAnimation } from "@angular/animations";



const ExpAnimation=animation([animate('.1s ease-in' , style({  padding:'50px' ,transform:'translateX(-50%)'   }))]) ;
const COLLAnimation=animation([ animate('.3s ease-in' , style({opacity:.5 , padding:'50px' ,transform:'translateX(50%)'}))])
export const CollExp = trigger('EXPCOLL' , 
[
    state("CoLL" ,style({ })),
    state("EXP", style({ height:'100%' , display:'flex', opacity:1 , transform:'translateX(0)'  })) , 
    transition('CoLL=>EXP' , [ useAnimation(ExpAnimation) ] ),
    transition('EXP=>CoLL' , [useAnimation(COLLAnimation) ] ) 

]);


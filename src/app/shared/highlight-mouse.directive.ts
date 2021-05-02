import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    //   )
    this.backgroundColor = 'white';
  }

  // permite fazer a associacao entre uma propriedade da diretiva com a de um elemento html.
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  //Permite faser alguma logica mais aprofundada antes de aplicar a diretiva
  @HostBinding('style.backgroundColor') get setColor() {
    // Aplicativa aqui.
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }

}

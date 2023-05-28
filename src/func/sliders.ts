export function slideLeft(classe: string) {
  var slider: any = document.getElementById(classe);
  slider.scrollLeft -= 250;
}
export function slideRight(classe: string) {
  var slider: any = document.getElementById(classe);
  slider.scrollLeft += 250;
}

import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Pipe({
  name: "SanitizePipe"
})
export class SanitizePipe implements PipeTransform {
 
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeUrl {
    const newURL = 'https://www.youtube.com/embed/'+url;
    console.log(newURL);
    if(!newURL) return null;
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(newURL);

}
}

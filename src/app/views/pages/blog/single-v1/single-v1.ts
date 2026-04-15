import { Component } from '@angular/core';
import { Detail } from "./components/detail/detail";
import { RelatedBlog } from "./components/related-blog/related-blog";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-single-v1',
  imports: [Detail, RelatedBlog, Footer],
  templateUrl: './single-v1.html',
  styles: ``,
})
export class SingleV1 {

}

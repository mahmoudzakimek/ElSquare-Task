import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';
import { IUser } from 'src/app/utils/IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnChanges {
  @Input() categoryName: any;
  allPosts: IUser[] = [];
  clonedPosts: IUser[] = [];
  errorMessage: string = '';
  loader = false
  
  constructor(
    private postsService: PostsService,
    
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (res) => {
        this.loader = true
        this.allPosts = res;
        this.clonedPosts = res;
        console.log(this.allPosts);
        this.loader = false
      },
      error: (err) => (this.errorMessage = err),
    });
     

  }

  getPosts(){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    let catName = changes['categoryName'].currentValue;
    this.allPosts = this.clonedPosts.filter((elem: any) =>
      elem.category.includes(catName)
    );

    console.log(catName);
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';
import { IRate, IUser } from 'src/app/utils/IPosts';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  data!: IUser;
  errorMessage: string = '';
  rating: number = 0;
  loader: boolean = false

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router :Router
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params['id']);
    if (id) {
      this.getPostById(id);
    }

    console.log(this.rating);
  }
  getPostById(id: number): void {
    this.loader=true
    this.postsService.getPostById(id).subscribe({
      next: (res) => {
        this.data = res as IUser;
        this.rating = Number(res?.rating.rate);
        console.log(res?.rating.rate);
        this.loader=false
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  onBack(){
    this.loader=true
    this.router.navigate([''])
    this.loader=false

  }
}



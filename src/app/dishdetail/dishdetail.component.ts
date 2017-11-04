import { Component, OnInit, Input, Inject } from '@angular/core';
import {Dish} from '../shared/dish';
// import {DISHES} from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  errMess: string;
  dishIds: number[];
  prev: number;
  next: number;

  commentForm: FormGroup;
  comment: Comment;
  formErrors = {
    'author': '',
    'comment': ''
  };
  validationMessages = {
    'author': {
      'required':      'Author is required.',
      'minlength':     'Author must be at least 2 characters long.',
      'maxlength':     'Author cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 2 characters long.'
    },
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {
      this.createForm();
    }

     ngOnInit() {
       this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds,
       errmess => this.errMess = <any>errmess);
       this.route.params
         .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
         .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
     }

     setPrevNext(dishId: number) {
       let index = this.dishIds.indexOf(dishId);
       this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
       this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
     }

     goBack(): void {
       this.location.back();
     }

    createForm(): void {
      this.commentForm = this.fb.group({
        rating: [5, [Validators.required]],
        comment: ['', [Validators.required, Validators.minLength(2)] ],
        author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        date:[''],
      });

      this.commentForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

      this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
      if (!this.commentForm) { return; }


      const form = this.commentForm;

      for (const field in this.formErrors) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }else if (control.valid){
          this.comment = this.commentForm.value;
        }
      }

    }

    onSubmit() {
      var d = new Date();
      var current = d.toISOString();
      this.comment.date = current;
      this.comment = this.commentForm.value;
      this.dish.comments.push(this.comment);
      console.log(this.comment);
      this.commentForm.reset({
        rating: '',
        comment: '',
        author: '',
        date: '',
      });




    }




}

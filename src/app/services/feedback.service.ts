import { Injectable } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { Feedback } from '../shared/feedback';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

              submitFeedback(feedback: Feedback): Observable<Feedback> {
              return  this.restangular.all('feedback').post(feedback);
              }

}

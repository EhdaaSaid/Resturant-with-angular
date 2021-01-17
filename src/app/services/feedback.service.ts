import { Injectable } from '@angular/core';

import { Feedback} from '../shared/feedback';
import { from, Observable ,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map , catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {



  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getfeedback(): Observable<Feedback[]> {
      return this.http.get<Feedback[]>(baseURL + 'feedback')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getFeedback(id: string): Observable<Feedback> {
      return this.http.get<Feedback>(baseURL + 'feedback/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getFeaturedFeedback(): Observable<Feedback> {
      return this.http.get<Feedback[]>(baseURL + 'feedback?featured=true').pipe(map(Feedback => Feedback[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
   



    addFeedback(feedback: Feedback): Observable<Feedback> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<Feedback>(baseURL + 'feedback' , feedback , httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
  
    }

   
    }


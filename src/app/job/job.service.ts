import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface JobExecutionStatusDto {
  jobId: string;
  jobName: string;
  startDateTime: any;
  status: string;
  result: string;
}

@Injectable()
export class JobService {
  getAllJobsUrl = 'https://springboothanademo-chipper-possum-fi.cfapps.us10-001.hana.ondemand.com/job/all';
  getJobUrl = 'https://springboothanademo-chipper-possum-fi.cfapps.us10-001.hana.ondemand.com/job/752bf957-f306-4ac0-8bbe-108fdffcba3c';

  constructor(private http: HttpClient) { }

  getJobs() {
    let jobs = this.http.get<JobExecutionStatusDto>(this.getAllJobsUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
      console.log(jobs);
      return jobs;
  }

  getJob() {
    let jobs = this.http.get<JobExecutionStatusDto>(this.getJobUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
      console.log(jobs);
      return jobs;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
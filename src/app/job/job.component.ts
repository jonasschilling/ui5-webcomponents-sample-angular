import { Component, OnInit } from '@angular/core';
import { JobExecutionStatusDto, JobService } from './job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers: [ JobService ],
  styles: ['.error { color: #b30000; }']
})
export class JobComponent implements OnInit {
  displayedColumns: string[] = ['jobId', 'jobName', 'startDateTime', 'status', 'result'];
  error: any;
  headers: string[] = [];
  jobs: any;
  jobSuccessful: any;
  loading: any;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.showJobs()
  }

  clear() {
    this.jobs = undefined;
    this.error = undefined;
    this.headers = [];
	  this.loading = true;
  }

  async showJobs() {
    this.loading = true;
	await this.delay(3000);
    this.jobService.getJobs()
    	.subscribe(data => {
			console.warn(data)
			this.jobs = data
		});
	  this.loading = false;
  }

  showJob() {
    this.jobService.getJob()
      .subscribe({
        next: (data: JobExecutionStatusDto) => this.jobs = { ...data }, // success path
        error: error => this.error = error, // error path
      });
  }

  delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
  }
}
import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _enrollment:EnrollmentService) {

  }

  submitted = false;
  title = 'tdf';
  topics=['angular','react','vue']
  topicHasError = true;
  errorMsg='';

  userModel = new User('yuvi','pratap@gmail.com',9455928600,'default','morning',true)


  validateTopic(value) {

    if(value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }

  }

  onSubmit() {
    this.submitted = true;
    this._enrollment.enroll(this.userModel)
    .subscribe( data => console.log('Success',data),
                error => this.errorMsg = error.statusText
    )
  }


}
